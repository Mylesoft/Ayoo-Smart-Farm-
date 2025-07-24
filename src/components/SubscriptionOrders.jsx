import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { 
  Calendar,
  Clock,
  Package,
  CreditCard,
  Settings,
  Play,
  Pause,
  Edit,
  Trash2,
  Plus,
  CheckCircle,
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import { motion } from 'framer-motion';

const SubscriptionOrders = () => {
  const [activeSubscriptions, setActiveSubscriptions] = useState([
    {
      id: 1,
      productName: "Organic Vegetable Box",
      products: ["Kale", "Spinach", "Tomatoes", "Carrots"],
      frequency: "weekly",
      nextDelivery: "2025-01-30",
      price: 1500,
      status: "active",
      startDate: "2025-01-01",
      deliveryDay: "Wednesday",
      deliveryTime: "10:00 AM",
      customizations: {
        excludeItems: ["Onions"],
        extraItems: ["Herbs"],
        specialInstructions: "Leave at gate if not home"
      }
    },
    {
      id: 2,
      productName: "Fresh Dairy Package",
      products: ["Fresh Milk (2L)", "Yogurt", "Cheese"],
      frequency: "bi-weekly",
      nextDelivery: "2025-02-05",
      price: 800,
      status: "active",
      startDate: "2024-12-15",
      deliveryDay: "Monday",
      deliveryTime: "8:00 AM",
      customizations: {
        excludeItems: [],
        extraItems: ["Butter"],
        specialInstructions: "Deliver to back door"
      }
    },
    {
      id: 3,
      productName: "Honey & Bee Products",
      products: ["Pure Honey (500g)", "Beeswax", "Propolis"],
      frequency: "monthly",
      nextDelivery: "2025-02-15",
      price: 2200,
      status: "paused",
      startDate: "2024-11-01",
      deliveryDay: "Saturday",
      deliveryTime: "2:00 PM",
      customizations: {
        excludeItems: [],
        extraItems: [],
        specialInstructions: "Call before delivery"
      }
    }
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newSubscription, setNewSubscription] = useState({
    productType: '',
    frequency: 'weekly',
    deliveryDay: 'Monday',
    deliveryTime: '10:00 AM',
    startDate: '',
    customizations: {
      excludeItems: [],
      extraItems: [],
      specialInstructions: ''
    }
  });

  const availableProducts = [
    {
      id: 'veg-box',
      name: 'Organic Vegetable Box',
      description: 'Fresh seasonal vegetables',
      basePrice: 1500,
      items: ['Kale', 'Spinach', 'Tomatoes', 'Carrots', 'Onions', 'Peppers']
    },
    {
      id: 'fruit-box',
      name: 'Fresh Fruit Selection',
      description: 'Seasonal fruits from our orchard',
      basePrice: 1200,
      items: ['Passion Fruit', 'Avocados', 'Mangoes', 'Bananas']
    },
    {
      id: 'dairy-package',
      name: 'Fresh Dairy Package',
      description: 'Daily fresh dairy products',
      basePrice: 800,
      items: ['Fresh Milk (2L)', 'Yogurt', 'Cheese']
    },
    {
      id: 'honey-package',
      name: 'Honey & Bee Products',
      description: 'Pure honey and bee products',
      basePrice: 2200,
      items: ['Pure Honey (500g)', 'Beeswax', 'Propolis']
    },
    {
      id: 'herb-package',
      name: 'Herbs & Spices Collection',
      description: 'Fresh and dried herbs',
      basePrice: 600,
      items: ['Moringa Leaves', 'Basil', 'Rosemary', 'Thyme']
    }
  ];

  const frequencyOptions = [
    { value: 'weekly', label: 'Weekly', discount: 0 },
    { value: 'bi-weekly', label: 'Bi-weekly', discount: 5 },
    { value: 'monthly', label: 'Monthly', discount: 10 }
  ];

  const deliveryDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const deliveryTimes = ['8:00 AM', '10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getFrequencyDiscount = (frequency) => {
    const option = frequencyOptions.find(opt => opt.value === frequency);
    return option ? option.discount : 0;
  };

  const calculateDiscountedPrice = (basePrice, frequency) => {
    const discount = getFrequencyDiscount(frequency);
    return basePrice - (basePrice * discount / 100);
  };

  const formatNextDelivery = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = date - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays < 7) return `In ${diffDays} days`;
    return date.toLocaleDateString();
  };

  const toggleSubscriptionStatus = (id) => {
    setActiveSubscriptions(prev => 
      prev.map(sub => 
        sub.id === id 
          ? { ...sub, status: sub.status === 'active' ? 'paused' : 'active' }
          : sub
      )
    );
  };

  const deleteSubscription = (id) => {
    setActiveSubscriptions(prev => prev.filter(sub => sub.id !== id));
  };

  const handleCreateSubscription = () => {
    const selectedProduct = availableProducts.find(p => p.id === newSubscription.productType);
    if (!selectedProduct) return;

    const newSub = {
      id: Date.now(),
      productName: selectedProduct.name,
      products: selectedProduct.items,
      frequency: newSubscription.frequency,
      nextDelivery: newSubscription.startDate,
      price: calculateDiscountedPrice(selectedProduct.basePrice, newSubscription.frequency),
      status: 'active',
      startDate: newSubscription.startDate,
      deliveryDay: newSubscription.deliveryDay,
      deliveryTime: newSubscription.deliveryTime,
      customizations: newSubscription.customizations
    };

    setActiveSubscriptions(prev => [...prev, newSub]);
    setShowCreateForm(false);
    setNewSubscription({
      productType: '',
      frequency: 'weekly',
      deliveryDay: 'Monday',
      deliveryTime: '10:00 AM',
      startDate: '',
      customizations: {
        excludeItems: [],
        extraItems: [],
        specialInstructions: ''
      }
    });
  };

  const totalMonthlyValue = activeSubscriptions
    .filter(sub => sub.status === 'active')
    .reduce((total, sub) => {
      const multiplier = sub.frequency === 'weekly' ? 4 : sub.frequency === 'bi-weekly' ? 2 : 1;
      return total + (sub.price * multiplier);
    }, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Subscription Orders</h2>
          <p className="text-gray-600">Manage your recurring farm product deliveries</p>
        </div>
        <Button onClick={() => setShowCreateForm(true)} className="bg-green-600 hover:bg-green-700">
          <Plus className="h-4 w-4 mr-2" />
          New Subscription
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Subscriptions</p>
                <p className="text-2xl font-bold">
                  {activeSubscriptions.filter(sub => sub.status === 'active').length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Monthly Value</p>
                <p className="text-2xl font-bold">KSh {totalMonthlyValue.toLocaleString()}</p>
              </div>
              <CreditCard className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Next Delivery</p>
                <p className="text-2xl font-bold">
                  {activeSubscriptions.filter(sub => sub.status === 'active').length > 0
                    ? formatNextDelivery(
                        Math.min(...activeSubscriptions
                          .filter(sub => sub.status === 'active')
                          .map(sub => new Date(sub.nextDelivery))
                        )
                      )
                    : 'None'
                  }
                </p>
              </div>
              <Calendar className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Create New Subscription Form */}
      {showCreateForm && (
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-700">Create New Subscription</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Package
                </label>
                <select
                  value={newSubscription.productType}
                  onChange={(e) => setNewSubscription(prev => ({ ...prev, productType: e.target.value }))}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select a package</option>
                  {availableProducts.map(product => (
                    <option key={product.id} value={product.id}>
                      {product.name} - KSh {product.basePrice}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Frequency
                </label>
                <select
                  value={newSubscription.frequency}
                  onChange={(e) => setNewSubscription(prev => ({ ...prev, frequency: e.target.value }))}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {frequencyOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label} {option.discount > 0 && `(${option.discount}% discount)`}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Day
                </label>
                <select
                  value={newSubscription.deliveryDay}
                  onChange={(e) => setNewSubscription(prev => ({ ...prev, deliveryDay: e.target.value }))}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {deliveryDays.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Time
                </label>
                <select
                  value={newSubscription.deliveryTime}
                  onChange={(e) => setNewSubscription(prev => ({ ...prev, deliveryTime: e.target.value }))}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {deliveryTimes.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>
                <Input
                  type="date"
                  value={newSubscription.startDate}
                  onChange={(e) => setNewSubscription(prev => ({ ...prev, startDate: e.target.value }))}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Instructions
                </label>
                <Input
                  type="text"
                  placeholder="e.g., Leave at gate, Call before delivery"
                  value={newSubscription.customizations.specialInstructions}
                  onChange={(e) => setNewSubscription(prev => ({
                    ...prev,
                    customizations: {
                      ...prev.customizations,
                      specialInstructions: e.target.value
                    }
                  }))}
                />
              </div>
            </div>

            {newSubscription.productType && (
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Subscription Summary</h4>
                <div className="text-sm text-green-700">
                  <p>Package: {availableProducts.find(p => p.id === newSubscription.productType)?.name}</p>
                  <p>Frequency: {frequencyOptions.find(f => f.value === newSubscription.frequency)?.label}</p>
                  <p>
                    Price: KSh {calculateDiscountedPrice(
                      availableProducts.find(p => p.id === newSubscription.productType)?.basePrice || 0,
                      newSubscription.frequency
                    ).toLocaleString()} per delivery
                    {getFrequencyDiscount(newSubscription.frequency) > 0 && (
                      <span className="text-green-600 font-medium">
                        {' '}({getFrequencyDiscount(newSubscription.frequency)}% discount applied)
                      </span>
                    )}
                  </p>
                  <p>Delivery: {newSubscription.deliveryDay}s at {newSubscription.deliveryTime}</p>
                </div>
              </div>
            )}

            <div className="flex space-x-3">
              <Button onClick={handleCreateSubscription} className="bg-green-600 hover:bg-green-700">
                Create Subscription
              </Button>
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Active Subscriptions */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Your Subscriptions</h3>
        {activeSubscriptions.map((subscription, index) => (
          <motion.div
            key={subscription.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className={subscription.status === 'paused' ? 'opacity-75' : ''}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold">{subscription.productName}</h4>
                    <p className="text-gray-600">
                      {subscription.products.join(', ')}
                    </p>
                  </div>
                  <Badge className={getStatusColor(subscription.status)}>
                    {subscription.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <RefreshCw className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-600">Frequency</p>
                      <p className="font-medium capitalize">{subscription.frequency}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-600">Next Delivery</p>
                      <p className="font-medium">{formatNextDelivery(subscription.nextDelivery)}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-600">Delivery Schedule</p>
                      <p className="font-medium">{subscription.deliveryDay}s at {subscription.deliveryTime}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-600">Price per Delivery</p>
                      <p className="font-medium">KSh {subscription.price.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                {subscription.customizations.specialInstructions && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Special Instructions:</p>
                    <p className="text-sm">{subscription.customizations.specialInstructions}</p>
                  </div>
                )}

                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleSubscriptionStatus(subscription.id)}
                  >
                    {subscription.status === 'active' ? (
                      <>
                        <Pause className="h-4 w-4 mr-1" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-1" />
                        Resume
                      </>
                    )}
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline">
                    <Settings className="h-4 w-4 mr-1" />
                    Customize
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => deleteSubscription(subscription.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {activeSubscriptions.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Subscriptions Yet</h3>
            <p className="text-gray-600 mb-4">
              Start a subscription to get regular deliveries of fresh farm products.
            </p>
            <Button onClick={() => setShowCreateForm(true)} className="bg-green-600 hover:bg-green-700">
              Create Your First Subscription
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SubscriptionOrders;


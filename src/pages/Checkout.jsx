import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  ShoppingCart, 
  CreditCard,
  MapPin,
  Phone,
  Mail,
  User,
  Calendar,
  CheckCircle,
  ArrowLeft,
  Truck,
  Shield,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    county: '',
    deliveryDate: '',
    deliveryTime: '',
    paymentMethod: 'mpesa',
    specialInstructions: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Get cart data from location state or localStorage
    const cartData = location.state?.cart || JSON.parse(localStorage.getItem('ayoo-cart') || '[]');
    setCart(cartData);
    
    if (cartData.length === 0) {
      navigate('/shop');
    }
  }, [location.state, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!customerInfo.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!customerInfo.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!customerInfo.email.trim()) newErrors.email = 'Email is required';
    if (!customerInfo.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!customerInfo.address.trim()) newErrors.address = 'Address is required';
    if (!customerInfo.city.trim()) newErrors.city = 'City is required';
    if (!customerInfo.county.trim()) newErrors.county = 'County is required';
    if (!customerInfo.deliveryDate) newErrors.deliveryDate = 'Delivery date is required';
    if (!customerInfo.deliveryTime) newErrors.deliveryTime = 'Delivery time is required';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (customerInfo.email && !emailRegex.test(customerInfo.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation (Kenyan format)
    const phoneRegex = /^(\+254|0)[17]\d{8}$/;
    if (customerInfo.phone && !phoneRegex.test(customerInfo.phone)) {
      newErrors.phone = 'Please enter a valid Kenyan phone number';
    }
    
    // Date validation (must be future date)
    const selectedDate = new Date(customerInfo.deliveryDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (customerInfo.deliveryDate && selectedDate < today) {
      newErrors.deliveryDate = 'Delivery date must be in the future';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Generate order number
    const orderNum = 'AYO' + Date.now().toString().slice(-6);
    setOrderNumber(orderNum);
    
    // Save order to localStorage (in real app, this would be sent to backend)
    const order = {
      orderNumber: orderNum,
      items: cart,
      customerInfo,
      total: cartTotal,
      orderDate: new Date().toISOString(),
      status: 'pending'
    };
    
    const existingOrders = JSON.parse(localStorage.getItem('ayoo-orders') || '[]');
    existingOrders.push(order);
    localStorage.setItem('ayoo-orders', JSON.stringify(existingOrders));
    
    // Clear cart
    localStorage.removeItem('ayoo-cart');
    
    setOrderPlaced(true);
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = cartTotal >= 2000 ? 0 : 200; // Free delivery for orders above KSh 2000
  const finalTotal = cartTotal + deliveryFee;

  const paymentMethods = [
    { id: 'mpesa', name: 'M-Pesa', description: 'Pay via M-Pesa mobile money' },
    { id: 'card', name: 'Credit/Debit Card', description: 'Visa, Mastercard accepted' },
    { id: 'cash', name: 'Cash on Delivery', description: 'Pay when you receive your order' }
  ];

  const deliveryTimes = [
    '8:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM'
  ];

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Order Placed Successfully!
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                Thank you for your order. We've received your request and will contact you shortly to confirm delivery details.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Order Details</h3>
                <p className="text-green-700">
                  <strong>Order Number:</strong> {orderNumber}
                </p>
                <p className="text-green-700">
                  <strong>Total Amount:</strong> KSh {finalTotal.toLocaleString()}
                </p>
                <p className="text-green-700">
                  <strong>Delivery Date:</strong> {new Date(customerInfo.deliveryDate).toLocaleDateString()}
                </p>
                <p className="text-green-700">
                  <strong>Delivery Time:</strong> {customerInfo.deliveryTime}
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  We will contact you at <strong>{customerInfo.phone}</strong> within 2 hours to confirm your order and delivery details.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => navigate('/shop')} variant="outline">
                    Continue Shopping
                  </Button>
                  <Button onClick={() => navigate('/')}>
                    Back to Home
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/shop')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Shop</span>
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handlePlaceOrder} className="space-y-6">
              {/* Customer Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Customer Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={customerInfo.firstName}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={customerInfo.lastName}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={customerInfo.email}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={customerInfo.phone}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+254 7XX XXX XXX"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Delivery Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={customerInfo.address}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.address ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full address"
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City/Town *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={customerInfo.city}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.city ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="e.g., Siaya"
                      />
                      {errors.city && (
                        <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        County *
                      </label>
                      <input
                        type="text"
                        name="county"
                        value={customerInfo.county}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.county ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="e.g., Siaya County"
                      />
                      {errors.county && (
                        <p className="text-red-500 text-sm mt-1">{errors.county}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Delivery Date *
                      </label>
                      <input
                        type="date"
                        name="deliveryDate"
                        value={customerInfo.deliveryDate}
                        onChange={handleInputChange}
                        min={new Date(Date.now() + 86400000).toISOString().split('T')[0]} // Tomorrow
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.deliveryDate ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.deliveryDate && (
                        <p className="text-red-500 text-sm mt-1">{errors.deliveryDate}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        name="deliveryTime"
                        value={customerInfo.deliveryTime}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.deliveryTime ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select time slot</option>
                        {deliveryTimes.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                      {errors.deliveryTime && (
                        <p className="text-red-500 text-sm mt-1">{errors.deliveryTime}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Instructions (Optional)
                    </label>
                    <textarea
                      name="specialInstructions"
                      value={customerInfo.specialInstructions}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Any special delivery instructions..."
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>Payment Method</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {paymentMethods.map(method => (
                      <label key={method.id} className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.id}
                          checked={customerInfo.paymentMethod === method.id}
                          onChange={handleInputChange}
                          className="text-primary focus:ring-primary"
                        />
                        <div>
                          <div className="font-medium">{method.name}</div>
                          <div className="text-sm text-gray-500">{method.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Order Summary</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center justify-between py-2 border-b">
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-500">
                            KSh {item.price.toLocaleString()} × {item.quantity}
                          </p>
                        </div>
                        <div className="font-medium">
                          KSh {(item.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    ))}
                    
                    <div className="space-y-2 pt-4">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>KSh {cartTotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery Fee:</span>
                        <span>
                          {deliveryFee === 0 ? (
                            <span className="text-green-600">Free</span>
                          ) : (
                            `KSh ${deliveryFee.toLocaleString()}`
                          )}
                        </span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-semibold text-lg">
                          <span>Total:</span>
                          <span className="text-primary">KSh {finalTotal.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    {deliveryFee === 0 && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <div className="flex items-center space-x-2 text-green-700">
                          <Truck className="h-4 w-4" />
                          <span className="text-sm font-medium">Free delivery on orders above KSh 2,000!</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-3 pt-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Shield className="h-4 w-4" />
                        <span>Secure payment processing</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>Same-day delivery available</span>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handlePlaceOrder}
                      className="w-full"
                      size="lg"
                    >
                      Place Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;


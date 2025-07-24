import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { 
  Package,
  Calculator,
  TrendingDown,
  Users,
  Building,
  ShoppingCart,
  FileText,
  Download,
  Mail,
  Phone,
  CheckCircle,
  AlertCircle,
  Percent
} from 'lucide-react';
import { motion } from 'framer-motion';

const BulkOrdering = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    businessType: '',
    taxId: ''
  });
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [activeQuotes, setActiveQuotes] = useState([
    {
      id: 'Q001',
      businessName: 'Green Valley Restaurant',
      products: [
        { name: 'Organic Kale', quantity: 50, unit: 'bunches', unitPrice: 120, total: 6000 },
        { name: 'Cherry Tomatoes', quantity: 30, unit: 'kg', unitPrice: 250, total: 7500 }
      ],
      subtotal: 13500,
      discount: 15,
      total: 11475,
      status: 'pending',
      validUntil: '2025-02-15',
      createdDate: '2025-01-20'
    },
    {
      id: 'Q002',
      businessName: 'Siaya County School',
      products: [
        { name: 'Fresh Milk', quantity: 100, unit: 'liters', unitPrice: 70, total: 7000 },
        { name: 'Organic Vegetables Mix', quantity: 25, unit: 'kg', unitPrice: 180, total: 4500 }
      ],
      subtotal: 11500,
      discount: 20,
      total: 9200,
      status: 'approved',
      validUntil: '2025-02-10',
      createdDate: '2025-01-18'
    }
  ]);

  const bulkProducts = [
    {
      id: 1,
      name: "Organic Kale",
      category: "vegetables",
      unitPrice: 150,
      bulkPrice: 120,
      unit: "bunches",
      minQuantity: 20,
      maxQuantity: 500,
      description: "Fresh, pesticide-free kale grown using smart farming techniques",
      availability: "In Stock",
      harvestSeason: "Year-round"
    },
    {
      id: 2,
      name: "Cherry Tomatoes",
      category: "vegetables",
      unitPrice: 300,
      bulkPrice: 250,
      unit: "kg",
      minQuantity: 10,
      maxQuantity: 200,
      description: "Sweet, juicy cherry tomatoes from our greenhouse",
      availability: "In Stock",
      harvestSeason: "Year-round"
    },
    {
      id: 3,
      name: "Fresh Milk",
      category: "dairy",
      unitPrice: 80,
      bulkPrice: 70,
      unit: "liters",
      minQuantity: 50,
      maxQuantity: 1000,
      description: "Fresh cow milk from our dairy farm",
      availability: "Daily Fresh",
      harvestSeason: "Daily"
    },
    {
      id: 4,
      name: "Pure Honey",
      category: "honey",
      unitPrice: 1200,
      bulkPrice: 1000,
      unit: "500g jars",
      minQuantity: 10,
      maxQuantity: 100,
      description: "Raw, unprocessed honey from our beehives",
      availability: "In Stock",
      harvestSeason: "Seasonal"
    },
    {
      id: 5,
      name: "Passion Fruit",
      category: "fruits",
      unitPrice: 500,
      bulkPrice: 400,
      unit: "kg",
      minQuantity: 15,
      maxQuantity: 300,
      description: "Aromatic passion fruits with intense flavor",
      availability: "Seasonal",
      harvestSeason: "March-August"
    },
    {
      id: 6,
      name: "Moringa Leaves",
      category: "herbs",
      unitPrice: 250,
      bulkPrice: 200,
      unit: "100g packs",
      minQuantity: 20,
      maxQuantity: 200,
      description: "Dried moringa leaves - superfood powder",
      availability: "In Stock",
      harvestSeason: "Year-round"
    }
  ];

  const businessTypes = [
    'Restaurant/Hotel',
    'School/Institution',
    'Retail Store',
    'Food Processor',
    'Distributor',
    'Cooperative',
    'Export Company',
    'Other'
  ];

  const discountTiers = [
    { minAmount: 0, maxAmount: 9999, discount: 0, label: 'Standard' },
    { minAmount: 10000, maxAmount: 24999, discount: 10, label: 'Bronze' },
    { minAmount: 25000, maxAmount: 49999, discount: 15, label: 'Silver' },
    { minAmount: 50000, maxAmount: 99999, discount: 20, label: 'Gold' },
    { minAmount: 100000, maxAmount: Infinity, discount: 25, label: 'Platinum' }
  ];

  const addProductToQuote = (product) => {
    const existingProduct = selectedProducts.find(p => p.id === product.id);
    if (existingProduct) {
      setSelectedProducts(prev => 
        prev.map(p => 
          p.id === product.id 
            ? { ...p, quantity: p.quantity + product.minQuantity }
            : p
        )
      );
    } else {
      setSelectedProducts(prev => [...prev, {
        ...product,
        quantity: product.minQuantity
      }]);
    }
  };

  const updateProductQuantity = (productId, quantity) => {
    const product = bulkProducts.find(p => p.id === productId);
    if (quantity < product.minQuantity || quantity > product.maxQuantity) return;

    setSelectedProducts(prev => 
      prev.map(p => 
        p.id === productId 
          ? { ...p, quantity: parseInt(quantity) || 0 }
          : p
      )
    );
  };

  const removeProductFromQuote = (productId) => {
    setSelectedProducts(prev => prev.filter(p => p.id !== productId));
  };

  const calculateSubtotal = () => {
    return selectedProducts.reduce((total, product) => {
      return total + (product.bulkPrice * product.quantity);
    }, 0);
  };

  const getDiscountTier = (amount) => {
    return discountTiers.find(tier => amount >= tier.minAmount && amount <= tier.maxAmount);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discountTier = getDiscountTier(subtotal);
    const discountAmount = subtotal * (discountTier.discount / 100);
    return subtotal - discountAmount;
  };

  const generateQuote = () => {
    if (selectedProducts.length === 0 || !customerInfo.businessName || !customerInfo.email) {
      alert('Please fill in required information and select products');
      return;
    }

    const subtotal = calculateSubtotal();
    const discountTier = getDiscountTier(subtotal);
    const total = calculateTotal();

    const newQuote = {
      id: `Q${String(activeQuotes.length + 1).padStart(3, '0')}`,
      businessName: customerInfo.businessName,
      products: selectedProducts.map(product => ({
        name: product.name,
        quantity: product.quantity,
        unit: product.unit,
        unitPrice: product.bulkPrice,
        total: product.bulkPrice * product.quantity
      })),
      subtotal,
      discount: discountTier.discount,
      total,
      status: 'pending',
      validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
      createdDate: new Date().toISOString().split('T')[0]
    };

    setActiveQuotes(prev => [...prev, newQuote]);
    setSelectedProducts([]);
    setCustomerInfo({
      businessName: '',
      contactPerson: '',
      email: '',
      phone: '',
      address: '',
      businessType: '',
      taxId: ''
    });
    setShowQuoteForm(false);
    alert('Quote generated successfully!');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'expired':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const subtotal = calculateSubtotal();
  const discountTier = getDiscountTier(subtotal);
  const total = calculateTotal();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Bulk Ordering</h2>
          <p className="text-gray-600">Special pricing for large quantity orders</p>
        </div>
        <Button 
          onClick={() => setShowQuoteForm(true)} 
          className="bg-green-600 hover:bg-green-700"
        >
          <FileText className="h-4 w-4 mr-2" />
          Request Quote
        </Button>
      </div>

      {/* Discount Tiers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Percent className="h-5 w-5 mr-2" />
            Volume Discount Tiers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {discountTiers.map((tier, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  subtotal >= tier.minAmount && subtotal <= tier.maxAmount
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200'
                }`}
              >
                <div className="text-center">
                  <h4 className="font-semibold text-lg">{tier.label}</h4>
                  <p className="text-2xl font-bold text-green-600">{tier.discount}%</p>
                  <p className="text-sm text-gray-600">
                    {tier.minAmount === 0 ? 'Up to' : `KSh ${tier.minAmount.toLocaleString()}`}
                    {tier.maxAmount === Infinity ? '+' : ` - KSh ${tier.maxAmount.toLocaleString()}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Product Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Available Products for Bulk Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bulkProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">{product.name}</h4>
                  <Badge variant="outline" className="capitalize">
                    {product.category}
                  </Badge>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-sm">
                    <span>Regular Price:</span>
                    <span className="line-through text-gray-500">
                      KSh {product.unitPrice}/{product.unit}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold">
                    <span>Bulk Price:</span>
                    <span className="text-green-600">
                      KSh {product.bulkPrice}/{product.unit}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Min Order:</span>
                    <span>{product.minQuantity} {product.unit}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Availability:</span>
                    <span className={product.availability === 'In Stock' ? 'text-green-600' : 'text-yellow-600'}>
                      {product.availability}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <span className="text-green-600 font-medium">
                      Save KSh {product.unitPrice - product.bulkPrice}
                    </span>
                    <span className="text-gray-500"> per {product.unit}</span>
                  </div>
                  <Button 
                    size="sm" 
                    onClick={() => addProductToQuote(product)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Add to Quote
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quote Builder */}
      {selectedProducts.length > 0 && (
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-700 flex items-center">
              <Calculator className="h-5 w-5 mr-2" />
              Quote Builder
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {selectedProducts.map(product => (
                <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h5 className="font-medium">{product.name}</h5>
                    <p className="text-sm text-gray-600">
                      KSh {product.bulkPrice} per {product.unit}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <label className="text-sm">Quantity:</label>
                      <Input
                        type="number"
                        value={product.quantity}
                        onChange={(e) => updateProductQuantity(product.id, e.target.value)}
                        min={product.minQuantity}
                        max={product.maxQuantity}
                        className="w-20"
                      />
                      <span className="text-sm text-gray-500">{product.unit}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">
                        KSh {(product.bulkPrice * product.quantity).toLocaleString()}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => removeProductFromQuote(product.id)}
                      className="text-red-600"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}

              <div className="border-t pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>KSh {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({discountTier.label} - {discountTier.discount}%):</span>
                    <span>-KSh {(subtotal * discountTier.discount / 100).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>KSh {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => setShowQuoteForm(true)} 
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Generate Quote
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <Input
                    value={customerInfo.businessName}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, businessName: e.target.value }))}
                    placeholder="Enter business name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <Input
                    value={customerInfo.contactPerson}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, contactPerson: e.target.value }))}
                    placeholder="Enter contact person name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type
                  </label>
                  <select
                    value={customerInfo.businessType}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, businessType: e.target.value }))}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select business type</option>
                    {businessTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tax ID (Optional)
                  </label>
                  <Input
                    value={customerInfo.taxId}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, taxId: e.target.value }))}
                    placeholder="Enter tax ID"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Address
                </label>
                <Input
                  value={customerInfo.address}
                  onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                  placeholder="Enter complete business address"
                />
              </div>

              <div className="flex space-x-3">
                <Button onClick={generateQuote} className="bg-green-600 hover:bg-green-700">
                  Generate Quote
                </Button>
                <Button variant="outline" onClick={() => setShowQuoteForm(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Active Quotes */}
      <Card>
        <CardHeader>
          <CardTitle>Your Quotes</CardTitle>
        </CardHeader>
        <CardContent>
          {activeQuotes.length > 0 ? (
            <div className="space-y-4">
              {activeQuotes.map(quote => (
                <div key={quote.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold">Quote #{quote.id}</h4>
                      <p className="text-gray-600">{quote.businessName}</p>
                      <p className="text-sm text-gray-500">Created: {quote.createdDate}</p>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(quote.status)}>
                        {quote.status}
                      </Badge>
                      <p className="text-sm text-gray-500 mt-1">
                        Valid until: {quote.validUntil}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-3">
                    {quote.products.map((product, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{product.name} ({product.quantity} {product.unit})</span>
                        <span>KSh {product.total.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-600">
                          Subtotal: KSh {quote.subtotal.toLocaleString()}
                        </p>
                        <p className="text-sm text-green-600">
                          Discount ({quote.discount}%): -KSh {(quote.subtotal * quote.discount / 100).toLocaleString()}
                        </p>
                        <p className="font-semibold">
                          Total: KSh {quote.total.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                        {quote.status === 'approved' && (
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Order Now
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Quotes Yet</h3>
              <p className="text-gray-600 mb-4">
                Request a quote for bulk orders to get special pricing.
              </p>
              <Button onClick={() => setShowQuoteForm(true)} className="bg-green-600 hover:bg-green-700">
                Request Your First Quote
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BulkOrdering;


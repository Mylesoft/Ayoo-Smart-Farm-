import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  ShoppingCart, 
  Star, 
  Filter,
  Search,
  Leaf,
  Truck,
  Shield,
  Heart,
  Plus,
  Minus,
  Scale
} from 'lucide-react';
import { motion } from 'framer-motion';

const Shop = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [compareItems, setCompareItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 2000]); // [min, max]
  const [showOrganicOnly, setShowOrganicOnly] = useState(false);
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'vegetables', name: 'Fresh Vegetables', count: 8 },
    { id: 'fruits', name: 'Fruits', count: 6 },
    { id: 'herbs', name: 'Herbs & Spices', count: 4 },
    { id: 'dairy', name: 'Dairy Products', count: 3 },
    { id: 'honey', name: 'Honey & Bee Products', count: 3 }
  ];

  const products = [
    {
      id: 1,
      name: "Organic Kale",
      category: "vegetables",
      price: 150,
      originalPrice: 200,
      unit: "per bunch",
      image: "/api/placeholder/300/200",
      rating: 4.8,
      reviews: 24,
      inStock: true,
      organic: true,
      description: "Fresh, pesticide-free kale grown using smart farming techniques",
      features: ["Organic Certified", "Locally Grown", "Rich in Vitamins"]
    },
    {
      id: 2,
      name: "Cherry Tomatoes",
      category: "vegetables",
      price: 300,
      originalPrice: 350,
      unit: "per kg",
      image: "/api/placeholder/300/200",
      rating: 4.9,
      reviews: 18,
      inStock: true,
      organic: true,
      description: "Sweet, juicy cherry tomatoes from our greenhouse",
      features: ["Greenhouse Grown", "High Yield", "Perfect for Salads"]
    },
    {
      id: 3,
      name: "Passion Fruit",
      category: "fruits",
      price: 500,
      originalPrice: 600,
      unit: "per kg",
      image: "/api/placeholder/300/200",
      rating: 4.7,
      reviews: 32,
      inStock: true,
      organic: false,
      description: "Aromatic passion fruits with intense flavor",
      features: ["High Vitamin C", "Natural Antioxidants", "Fresh Picked"]
    },
    {
      id: 4,
      name: "Fresh Spinach",
      category: "vegetables",
      price: 120,
      originalPrice: 150,
      unit: "per bunch",
      image: "/api/placeholder/300/200",
      rating: 4.6,
      reviews: 15,
      inStock: true,
      organic: true,
      description: "Tender, nutrient-rich spinach leaves",
      features: ["Iron Rich", "Organic", "Baby Spinach"]
    },
    {
      id: 5,
      name: "Pure Honey",
      category: "honey",
      price: 1200,
      originalPrice: 1400,
      unit: "per 500g",
      image: "/api/placeholder/300/200",
      rating: 5.0,
      reviews: 45,
      inStock: true,
      organic: true,
      description: "Raw, unprocessed honey from our beehives",
      features: ["Raw & Unfiltered", "Local Bees", "No Additives"]
    },
    {
      id: 6,
      name: "Fresh Milk",
      category: "dairy",
      price: 80,
      originalPrice: 100,
      unit: "per liter",
      image: "/api/placeholder/300/200",
      rating: 4.8,
      reviews: 28,
      inStock: true,
      organic: false,
      description: "Fresh cow milk from our dairy farm",
      features: ["Daily Fresh", "High Protein", "Pasteurized"]
    },
    {
      id: 7,
      name: "Moringa Leaves",
      category: "herbs",
      price: 250,
      originalPrice: 300,
      unit: "per 100g",
      image: "/api/placeholder/300/200",
      rating: 4.9,
      reviews: 21,
      inStock: true,
      organic: true,
      description: "Dried moringa leaves - superfood powder",
      features: ["Superfood", "High Nutrients", "Medicinal Properties"]
    },
    {
      id: 8,
      name: "Avocados",
      category: "fruits",
      price: 400,
      originalPrice: 500,
      unit: "per kg",
      image: "/api/placeholder/300/200",
      rating: 4.7,
      reviews: 19,
      inStock: false,
      organic: false,
      description: "Creamy, ripe avocados perfect for healthy meals",
      features: ["Healthy Fats", "Creamy Texture", "Nutrient Dense"]
    }
  ];

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => 
      prev.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const addToWishlist = (product) => {
    setWishlist(prev => {
      if (prev.find(item => item.id === product.id)) {
        return prev; // Already in wishlist
      }
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist(prev => prev.filter(item => item.id !== productId));
  };

  const isWishlisted = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  const addToCompare = (product) => {
    setCompareItems(prev => {
      if (prev.length >= 3) {
        alert("You can compare a maximum of 3 products.");
        return prev;
      }
      if (prev.find(item => item.id === product.id)) {
        return prev; // Already in compare list
      }
      return [...prev, product];
    });
  };

  const removeFromCompare = (productId) => {
    setCompareItems(prev => prev.filter(item => item.id !== productId));
  };

  const isCompared = (productId) => {
    return compareItems.some(item => item.id === productId);
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesOrganic = !showOrganicOnly || product.organic;
    const matchesInStock = !showInStockOnly || product.inStock;
    return matchesCategory && matchesSearch && matchesPrice && matchesOrganic && matchesInStock;
  });

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleCheckout = () => {
    // Save cart to localStorage and navigate to checkout
    localStorage.setItem('ayoo-cart', JSON.stringify(cart));
    navigate('/checkout', { state: { cart } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Farm Fresh <span className="text-primary">Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover our premium selection of fresh, organic produce grown with smart farming techniques. 
              From farm to table, we deliver quality you can trust.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Leaf className="h-4 w-4 text-green-500" />
                <span>100% Organic</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Truck className="h-4 w-4 text-blue-500" />
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Shield className="h-4 w-4 text-purple-500" />
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-4 space-y-6">
              {/* Search */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Search Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Filter className="h-5 w-5 mr-2" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-primary text-white'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{category.name}</span>
                          <Badge variant="secondary">{category.count}</Badge>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Price Range Filter */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Price Range</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>KSh {priceRange[0]}</span>
                      <span>KSh {priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Other Filters */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Other Filters</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showOrganicOnly}
                        onChange={(e) => setShowOrganicOnly(e.target.checked)}
                        className="form-checkbox h-5 w-5 text-primary rounded"
                      />
                      <span>Show Organic Only</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showInStockOnly}
                        onChange={(e) => setShowInStockOnly(e.target.checked)}
                        className="form-checkbox h-5 w-5 text-primary rounded"
                      />
                      <span>Show In Stock Only</span>
                    </label>
                  </div>
                </CardContent>
              </Card>

              {/* Cart Summary */}
              {cart.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Cart ({cartItemCount})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {cart.map(item => (
                        <div key={item.id} className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="text-sm font-medium">{item.name}</p>
                            <p className="text-xs text-gray-500">KSh {item.price} {item.unit}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                      <div className="border-t pt-3">
                        <div className="flex justify-between items-center font-semibold">
                          <span>Total:</span>
                          <span>KSh {cartTotal.toLocaleString()}</span>
                        </div>
                        <Button className="w-full mt-3" onClick={handleCheckout}>
                          Proceed to Checkout
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600">{filteredProducts.length} products found</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <Leaf className="h-16 w-16 text-green-500 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      {product.organic && (
                        <Badge className="absolute top-2 left-2 bg-green-500">
                          Organic
                        </Badge>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <Badge variant="destructive">Out of Stock</Badge>
                        </div>
                      )}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isWishlisted(product.id)) {
                            removeFromWishlist(product.id);
                          } else {
                            addToWishlist(product);
                          }
                        }}
                        className="absolute top-2 right-12 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart className={`h-4 w-4 ${isWishlisted(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCompare(product);
                        }}
                        disabled={isCompared(product.id)}
                        className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Scale className={`h-4 w-4 ${isCompared(product.id) ? 'text-blue-500' : 'text-gray-600'}`} />
                      </button>
                    </div>
                    
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {product.features.slice(0, 2).map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xl font-bold text-primary">
                              KSh {product.price.toLocaleString()}
                            </span>
                            {product.originalPrice > product.price && (
                              <span className="text-sm text-gray-500 line-through">
                                KSh {product.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">{product.unit}</span>
                        </div>
                      </div>
                      
                      <Button
                        onClick={() => addToCart(product)}
                        disabled={!product.inStock}
                        className="w-full transition-all duration-300 hover:scale-105 active:scale-95"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Comparison Bar */}
        {compareItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 border-t border-gray-200 z-50"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <h3 className="text-lg font-bold">Compare Products ({compareItems.length}/3)</h3>
              <div className="flex space-x-4">
                {compareItems.map(item => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                    <p className="text-sm font-medium">{item.name}</p>
                    <button onClick={() => removeFromCompare(item.id)} className="text-red-500 text-xs">Remove</button>
                  </div>
                ))}
              </div>
              <Button onClick={() => alert("Implement actual comparison view here!")}>Compare Now</Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Shop;


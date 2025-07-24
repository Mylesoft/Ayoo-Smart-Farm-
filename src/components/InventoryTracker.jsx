import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Package, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  RefreshCw
} from 'lucide-react';
import { motion } from 'framer-motion';

const InventoryTracker = () => {
  const [inventory, setInventory] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  // Mock inventory data - in real app, this would come from API
  const mockInventoryData = [
    {
      id: 1,
      name: "Organic Kale",
      category: "vegetables",
      currentStock: 45,
      minThreshold: 20,
      maxCapacity: 100,
      unit: "bunches",
      pricePerUnit: 150,
      lastRestocked: "2025-01-20",
      trend: "stable",
      demandLevel: "high",
      expiryDate: "2025-01-25",
      supplier: "Farm Section A",
      location: "Greenhouse 1"
    },
    {
      id: 2,
      name: "Cherry Tomatoes",
      category: "vegetables",
      currentStock: 12,
      minThreshold: 15,
      maxCapacity: 80,
      unit: "kg",
      pricePerUnit: 300,
      lastRestocked: "2025-01-18",
      trend: "decreasing",
      demandLevel: "high",
      expiryDate: "2025-01-24",
      supplier: "Farm Section B",
      location: "Greenhouse 2"
    },
    {
      id: 3,
      name: "Pure Honey",
      category: "honey",
      currentStock: 28,
      minThreshold: 10,
      maxCapacity: 50,
      unit: "500g jars",
      pricePerUnit: 1200,
      lastRestocked: "2025-01-15",
      trend: "increasing",
      demandLevel: "medium",
      expiryDate: "2026-01-15",
      supplier: "Beehive Section",
      location: "Storage Room A"
    },
    {
      id: 4,
      name: "Fresh Milk",
      category: "dairy",
      currentStock: 85,
      minThreshold: 30,
      maxCapacity: 120,
      unit: "liters",
      pricePerUnit: 80,
      lastRestocked: "2025-01-23",
      trend: "stable",
      demandLevel: "high",
      expiryDate: "2025-01-25",
      supplier: "Dairy Section",
      location: "Cold Storage"
    },
    {
      id: 5,
      name: "Passion Fruit",
      category: "fruits",
      currentStock: 8,
      minThreshold: 25,
      maxCapacity: 60,
      unit: "kg",
      pricePerUnit: 500,
      lastRestocked: "2025-01-19",
      trend: "decreasing",
      demandLevel: "medium",
      expiryDate: "2025-01-26",
      supplier: "Orchard Section",
      location: "Fruit Storage"
    },
    {
      id: 6,
      name: "Moringa Leaves",
      category: "herbs",
      currentStock: 35,
      minThreshold: 15,
      maxCapacity: 40,
      unit: "100g packs",
      pricePerUnit: 250,
      lastRestocked: "2025-01-21",
      trend: "stable",
      demandLevel: "low",
      expiryDate: "2025-03-21",
      supplier: "Herb Garden",
      location: "Drying Room"
    }
  ];

  useEffect(() => {
    // Simulate real-time data loading
    setInventory(mockInventoryData);
    
    // Set up interval for real-time updates (every 30 seconds)
    const interval = setInterval(() => {
      updateInventoryData();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const updateInventoryData = () => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setInventory(prev => prev.map(item => ({
        ...item,
        // Simulate small random changes in stock levels
        currentStock: Math.max(0, item.currentStock + Math.floor(Math.random() * 6) - 3),
        lastUpdated: new Date().toISOString()
      })));
      setLastUpdated(new Date());
      setIsLoading(false);
    }, 1000);
  };

  const getStockStatus = (item) => {
    const stockPercentage = (item.currentStock / item.maxCapacity) * 100;
    
    if (item.currentStock <= item.minThreshold) {
      return { status: 'critical', color: 'bg-red-500', textColor: 'text-red-700' };
    } else if (stockPercentage <= 30) {
      return { status: 'low', color: 'bg-yellow-500', textColor: 'text-yellow-700' };
    } else if (stockPercentage >= 80) {
      return { status: 'high', color: 'bg-blue-500', textColor: 'text-blue-700' };
    } else {
      return { status: 'normal', color: 'bg-green-500', textColor: 'text-green-700' };
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'increasing':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'decreasing':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <BarChart3 className="h-4 w-4 text-gray-500" />;
    }
  };

  const getDaysUntilExpiry = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const criticalItems = inventory.filter(item => item.currentStock <= item.minThreshold);
  const lowStockItems = inventory.filter(item => {
    const stockPercentage = (item.currentStock / item.maxCapacity) * 100;
    return stockPercentage <= 30 && item.currentStock > item.minThreshold;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Inventory Tracker</h2>
          <p className="text-gray-600">Real-time stock monitoring and management</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-500">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </div>
          <Button 
            onClick={updateInventoryData} 
            disabled={isLoading}
            variant="outline"
            size="sm"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Items</p>
                <p className="text-2xl font-bold">{inventory.length}</p>
              </div>
              <Package className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Critical Stock</p>
                <p className="text-2xl font-bold text-red-600">{criticalItems.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Low Stock</p>
                <p className="text-2xl font-bold text-yellow-600">{lowStockItems.length}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Well Stocked</p>
                <p className="text-2xl font-bold text-green-600">
                  {inventory.length - criticalItems.length - lowStockItems.length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Critical Alerts */}
      {criticalItems.length > 0 && (
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-700 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Critical Stock Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {criticalItems.map(item => (
                <div key={item.id} className="flex items-center justify-between p-2 bg-white rounded border">
                  <span className="font-medium">{item.name}</span>
                  <div className="flex items-center space-x-2">
                    <Badge variant="destructive">
                      {item.currentStock} {item.unit} remaining
                    </Badge>
                    <Button size="sm" variant="outline">
                      Restock Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Inventory Table */}
      <Card>
        <CardHeader>
          <CardTitle>Current Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Product</th>
                  <th className="text-left p-2">Category</th>
                  <th className="text-left p-2">Current Stock</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">Trend</th>
                  <th className="text-left p-2">Location</th>
                  <th className="text-left p-2">Expiry</th>
                  <th className="text-left p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item, index) => {
                  const stockStatus = getStockStatus(item);
                  const daysUntilExpiry = getDaysUntilExpiry(item.expiryDate);
                  
                  return (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-2">
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-gray-500">KSh {item.pricePerUnit}/{item.unit}</div>
                        </div>
                      </td>
                      <td className="p-2">
                        <Badge variant="outline" className="capitalize">
                          {item.category}
                        </Badge>
                      </td>
                      <td className="p-2">
                        <div>
                          <div className="font-medium">
                            {item.currentStock} {item.unit}
                          </div>
                          <div className="text-sm text-gray-500">
                            of {item.maxCapacity} max
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div
                              className={`h-2 rounded-full ${stockStatus.color}`}
                              style={{
                                width: `${Math.min((item.currentStock / item.maxCapacity) * 100, 100)}%`
                              }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="p-2">
                        <Badge 
                          variant="outline" 
                          className={`${stockStatus.textColor} border-current`}
                        >
                          {stockStatus.status}
                        </Badge>
                      </td>
                      <td className="p-2">
                        <div className="flex items-center space-x-1">
                          {getTrendIcon(item.trend)}
                          <span className="text-sm capitalize">{item.trend}</span>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-sm">
                          <div>{item.location}</div>
                          <div className="text-gray-500">{item.supplier}</div>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-sm">
                          <div className={daysUntilExpiry <= 3 ? 'text-red-600 font-medium' : ''}>
                            {daysUntilExpiry} days
                          </div>
                          <div className="text-gray-500">{item.expiryDate}</div>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            Restock
                          </Button>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InventoryTracker;


import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Package,
  RefreshCw,
  ShoppingCart,
  BarChart3,
  Users,
  TrendingUp,
  Calendar,
  Settings
} from 'lucide-react';
import { motion } from 'framer-motion';
import InventoryTracker from '../components/InventoryTracker';
import SubscriptionOrders from '../components/SubscriptionOrders';
import BulkOrdering from '../components/BulkOrdering';

const AdvancedFeatures = () => {
  const [activeTab, setActiveTab] = useState('inventory');

  const tabs = [
    {
      id: 'inventory',
      name: 'Inventory Tracker',
      icon: Package,
      description: 'Real-time stock monitoring and management'
    },
    {
      id: 'subscriptions',
      name: 'Subscription Orders',
      icon: RefreshCw,
      description: 'Manage recurring deliveries'
    },
    {
      id: 'bulk',
      name: 'Bulk Ordering',
      icon: ShoppingCart,
      description: 'Special pricing for large orders'
    }
  ];

  const stats = [
    {
      title: 'Total Products',
      value: '24',
      change: '+2',
      changeType: 'positive',
      icon: Package
    },
    {
      title: 'Active Subscriptions',
      value: '12',
      change: '+3',
      changeType: 'positive',
      icon: RefreshCw
    },
    {
      title: 'Bulk Orders',
      value: '8',
      change: '+1',
      changeType: 'positive',
      icon: ShoppingCart
    },
    {
      title: 'Monthly Revenue',
      value: 'KSh 245K',
      change: '+15%',
      changeType: 'positive',
      icon: TrendingUp
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'inventory':
        return <InventoryTracker />;
      case 'subscriptions':
        return <SubscriptionOrders />;
      case 'bulk':
        return <BulkOrdering />;
      default:
        return <InventoryTracker />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Farm <span className="text-primary">Management</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive tools for inventory tracking, subscription management, and bulk ordering. 
              Take your farm business to the next level with our advanced features.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <BarChart3 className="h-4 w-4 text-blue-500" />
                <span>Real-time Analytics</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Users className="h-4 w-4 text-green-500" />
                <span>Customer Management</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Settings className="h-4 w-4 text-purple-500" />
                <span>Automated Processes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <div className="flex items-center mt-1">
                        <span className={`text-sm font-medium ${
                          stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.change}
                        </span>
                        <span className="text-sm text-gray-500 ml-1">from last month</span>
                      </div>
                    </div>
                    <div className="p-3 bg-gray-100 rounded-full">
                      <stat.icon className="h-6 w-6 text-gray-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <Card className="mb-8">
          <CardContent className="p-0">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-green-500 text-green-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <tab.icon className="h-5 w-5" />
                      <span>{tab.name}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {tabs.find(tab => tab.id === activeTab)?.name}
                </h3>
                <p className="text-gray-600">
                  {tabs.find(tab => tab.id === activeTab)?.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderTabContent()}
        </motion.div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                variant="outline" 
                className="h-20 flex flex-col items-center justify-center space-y-2"
                onClick={() => setActiveTab('inventory')}
              >
                <Package className="h-6 w-6" />
                <span>Check Inventory</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-20 flex flex-col items-center justify-center space-y-2"
                onClick={() => setActiveTab('subscriptions')}
              >
                <Calendar className="h-6 w-6" />
                <span>Manage Subscriptions</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-20 flex flex-col items-center justify-center space-y-2"
                onClick={() => setActiveTab('bulk')}
              >
                <Users className="h-6 w-6" />
                <span>Process Bulk Orders</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Feature Benefits */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Insights</h3>
            <p className="text-gray-600">
              Monitor your inventory levels, track demand patterns, and make data-driven decisions 
              with real-time analytics and reporting.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Automated Operations</h3>
            <p className="text-gray-600">
              Set up recurring deliveries, automate reorder points, and streamline your 
              operations with intelligent automation features.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Increased Revenue</h3>
            <p className="text-gray-600">
              Maximize your profits with volume discounts, subscription models, and 
              efficient inventory management that reduces waste and increases sales.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFeatures;


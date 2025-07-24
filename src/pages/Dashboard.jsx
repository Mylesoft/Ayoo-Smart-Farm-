import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Calendar, 
  Heart, 
  User, 
  Package, 
  TrendingUp,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const Dashboard = () => {
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+254 700 000 000',
    farmLocation: 'Siaya County',
    joinDate: 'January 2025'
  });

  const [orders] = useState([
    { id: 'ORD-001', date: '2025-01-20', status: 'Delivered', total: 'KSh 2,500', items: 3 },
    { id: 'ORD-002', date: '2025-01-15', status: 'Processing', total: 'KSh 1,800', items: 2 },
    { id: 'ORD-003', date: '2025-01-10', status: 'Shipped', total: 'KSh 3,200', items: 5 }
  ]);

  const [bookings] = useState([
    { id: 'BOOK-001', date: '2025-01-25', package: 'Premium Experience', status: 'Confirmed', guests: 8 },
    { id: 'BOOK-002', date: '2025-02-05', package: 'Educational Program', status: 'Pending', guests: 15 }
  ]);

  const [wishlist] = useState([
    { id: 1, name: 'Organic Tomatoes', price: 'KSh 150/kg', image: '/api/placeholder/100/100' },
    { id: 2, name: 'Fresh Milk', price: 'KSh 80/liter', image: '/api/placeholder/100/100' },
    { id: 3, name: 'Free Range Eggs', price: 'KSh 300/dozen', image: '/api/placeholder/100/100' }
  ]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Welcome back, {user.name}!
          </h1>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <ShoppingCart className="h-8 w-8 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Orders</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{orders.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Calendar className="h-8 w-8 text-green-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Bookings</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{bookings.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Heart className="h-8 w-8 text-red-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Wishlist Items</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{wishlist.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Spent</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">KSh 7,500</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-gray-500 mr-3" />
                  <span className="text-sm">{user.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-gray-500 mr-3" />
                  <span className="text-sm">{user.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-gray-500 mr-3" />
                  <span className="text-sm">{user.farmLocation}</span>
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="w-full">Edit Profile</Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="h-5 w-5 mr-2" />
                  Recent Orders
                </CardTitle>
                <CardDescription>Your latest product orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{order.date}</p>
                        <p className="text-sm">{order.items} items • {order.total}</p>
                      </div>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">View All Orders</Button>
              </CardContent>
            </Card>

            {/* Farm Visit Bookings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Farm Visit Bookings
                </CardTitle>
                <CardDescription>Your scheduled farm visits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{booking.package}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{booking.date}</p>
                        <p className="text-sm">{booking.guests} guests</p>
                      </div>
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">Book New Visit</Button>
              </CardContent>
            </Card>
          </div>

          {/* Wishlist */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                Your Wishlist
              </CardTitle>
              <CardDescription>Items you've saved for later</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {wishlist.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="aspect-square bg-gray-200 rounded-lg mb-3"></div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.price}</p>
                    <Button size="sm" className="w-full">Add to Cart</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;


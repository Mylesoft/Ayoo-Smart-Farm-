import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Leaf, 
  Zap, 
  BarChart3, 
  Users, 
  ShoppingCart, 
  Calendar,
  Phone,
  BookOpen,
  Award,
  Truck,
  Settings
} from 'lucide-react';

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    {
      id: 'solutions',
      title: 'Solutions',
      icon: <Zap className="h-4 w-4" />,
      sections: [
        {
          title: 'Smart Farming',
          items: [
            { name: 'IoT Sensors', href: '/technology', description: 'Real-time monitoring systems' },
            { name: 'Automated Irrigation', href: '/services', description: 'Water management solutions' },
            { name: 'Crop Monitoring', href: '/services', description: 'AI-powered crop analysis' },
            { name: 'Weather Stations', href: '/technology', description: 'Precision weather data' }
          ]
        },
        {
          title: 'Services',
          items: [
            { name: 'Farm Setup', href: '/services', description: 'Complete installation service' },
            { name: 'Training Programs', href: '/services', description: 'Farmer education & support' },
            { name: 'Maintenance', href: '/services', description: 'Ongoing technical support' },
            { name: 'Consulting', href: '/contact', description: 'Expert agricultural advice' }
          ]
        },
        {
          title: 'Technology',
          items: [
            { name: 'Mobile App', href: '/technology', description: 'Farm management on-the-go' },
            { name: 'Dashboard', href: '/technology', description: 'Comprehensive analytics' },
            { name: 'API Integration', href: '/technology', description: 'Connect with existing systems' },
            { name: 'Data Analytics', href: '/technology', description: 'Insights and predictions' }
          ]
        }
      ]
    },
    {
      id: 'products',
      title: 'Products',
      icon: <ShoppingCart className="h-4 w-4" />,
      sections: [
        {
          title: 'Fresh Produce',
          items: [
            { name: 'Vegetables', href: '/shop', description: 'Organic, locally grown vegetables' },
            { name: 'Fruits', href: '/shop', description: 'Fresh seasonal fruits' },
            { name: 'Herbs & Spices', href: '/shop', description: 'Aromatic herbs and spices' },
            { name: 'Grains', href: '/shop', description: 'High-quality grains and cereals' }
          ]
        },
        {
          title: 'Dairy & More',
          items: [
            { name: 'Dairy Products', href: '/shop', description: 'Fresh milk and dairy items' },
            { name: 'Honey Products', href: '/shop', description: 'Pure, natural honey' },
            { name: 'Processed Foods', href: '/shop', description: 'Value-added products' },
            { name: 'Gift Baskets', href: '/shop', description: 'Curated farm product collections' }
          ]
        },
        {
          title: 'Equipment',
          items: [
            { name: 'Sensors', href: '/shop', description: 'IoT monitoring devices' },
            { name: 'Irrigation Kits', href: '/shop', description: 'Smart watering systems' },
            { name: 'Tools', href: '/shop', description: 'Modern farming tools' },
            { name: 'Accessories', href: '/shop', description: 'Supporting equipment' }
          ]
        }
      ]
    },
    {
      id: 'learn',
      title: 'Learn',
      icon: <BookOpen className="h-4 w-4" />,
      sections: [
        {
          title: 'Education',
          items: [
            { name: 'Smart Farming Guide', href: '/about', description: 'Complete beginner\'s guide' },
            { name: 'Video Tutorials', href: '/about', description: 'Step-by-step instructions' },
            { name: 'Webinars', href: '/about', description: 'Live learning sessions' },
            { name: 'Case Studies', href: '/benefits', description: 'Real farmer success stories' }
          ]
        },
        {
          title: 'Resources',
          items: [
            { name: 'Blog', href: '/about', description: 'Latest farming insights' },
            { name: 'Downloads', href: '/about', description: 'Guides and resources' },
            { name: 'FAQ', href: '/contact', description: 'Common questions answered' },
            { name: 'Glossary', href: '/about', description: 'Smart farming terminology' }
          ]
        },
        {
          title: 'Community',
          items: [
            { name: 'Farmer Network', href: '/about', description: 'Connect with other farmers' },
            { name: 'Events', href: '/book-visit', description: 'Workshops and field days' },
            { name: 'Success Stories', href: '/benefits', description: 'Inspiring farmer journeys' },
            { name: 'Forum', href: '/contact', description: 'Ask questions and share tips' }
          ]
        }
      ]
    }
  ];

  return (
    <div className="relative">
      <nav className="flex items-center space-x-8">
        {menuItems.map((menu) => (
          <div
            key={menu.id}
            className="relative"
            onMouseEnter={() => setActiveMenu(menu.id)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors py-2">
              {menu.icon}
              <span>{menu.title}</span>
              <ChevronDown className="h-3 w-3" />
            </button>

            <AnimatePresence>
              {activeMenu === menu.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-screen max-w-4xl bg-white dark:bg-gray-900 shadow-xl rounded-lg border border-gray-200 dark:border-gray-700 z-50"
                  style={{ left: '-50vw', transform: 'translateX(50%)' }}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-8">
                      {menu.sections.map((section, index) => (
                        <div key={index}>
                          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                            {section.title}
                          </h3>
                          <ul className="space-y-3">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  to={item.href}
                                  className="block p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  <div className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary">
                                    {item.name}
                                  </div>
                                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {item.description}
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Call-to-action section */}
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                            Ready to get started?
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Contact us for a free consultation and see how we can help transform your farm.
                          </p>
                        </div>
                        <div className="flex space-x-3">
                          <Link
                            to="/contact"
                            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                            onClick={() => setActiveMenu(null)}
                          >
                            <Phone className="h-4 w-4 mr-2" />
                            Contact Us
                          </Link>
                          <Link
                            to="/book-visit"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            onClick={() => setActiveMenu(null)}
                          >
                            <Calendar className="h-4 w-4 mr-2" />
                            Book Visit
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>

      {/* Overlay */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setActiveMenu(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MegaMenu;


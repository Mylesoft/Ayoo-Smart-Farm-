import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  Search, 
  Filter,
  ArrowRight,
  Leaf,
  Droplets,
  Sun,
  TrendingUp,
  BookOpen,
  Users
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24, icon: <BookOpen className="h-4 w-4" /> },
    { id: 'smart-farming', name: 'Smart Farming', count: 8, icon: <Leaf className="h-4 w-4" /> },
    { id: 'technology', name: 'Technology', count: 6, icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'sustainability', name: 'Sustainability', count: 5, icon: <Sun className="h-4 w-4" /> },
    { id: 'water-management', name: 'Water Management', count: 3, icon: <Droplets className="h-4 w-4" /> },
    { id: 'success-stories', name: 'Success Stories', count: 2, icon: <Users className="h-4 w-4" /> }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "How IoT Sensors Transformed Maize Farming in Siaya County",
      excerpt: "Discover how local farmers increased their maize yields by 45% using smart IoT sensors and automated irrigation systems.",
      content: "In the heart of Siaya County, a revolution is taking place in the maize fields. Local farmers are embracing IoT technology to transform their traditional farming practices...",
      author: "Jonathan Myles",
      authorRole: "CEO & Founder",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "smart-farming",
      tags: ["IoT", "Maize", "Siaya", "Yield Increase"],
      featured: true,
      image: "/api/placeholder/600/300",
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      title: "The Complete Guide to Smart Irrigation Systems",
      excerpt: "Learn everything you need to know about implementing smart irrigation systems that can reduce water usage by up to 50%.",
      content: "Water scarcity is becoming an increasingly critical issue for farmers across Kenya. Smart irrigation systems offer a solution that not only conserves water but also improves crop yields...",
      author: "Dr. Sarah Kimani",
      authorRole: "Agricultural Engineer",
      date: "2025-01-12",
      readTime: "12 min read",
      category: "water-management",
      tags: ["Irrigation", "Water Conservation", "Smart Systems"],
      featured: false,
      image: "/api/placeholder/600/300",
      views: 980,
      likes: 67
    },
    {
      id: 3,
      title: "From Traditional to Smart: A Farmer's Journey",
      excerpt: "Follow Peter Mutua's inspiring transformation from traditional farming methods to becoming a smart farming pioneer in Western Kenya.",
      content: "Peter Mutua never imagined that technology would revolutionize his 10-acre farm in Bondo. Today, his farm serves as a model for smart farming practices across the region...",
      author: "Grace Wanjiku",
      authorRole: "Content Specialist",
      date: "2025-01-10",
      readTime: "6 min read",
      category: "success-stories",
      tags: ["Success Story", "Transformation", "Bondo"],
      featured: true,
      image: "/api/placeholder/600/300",
      views: 1450,
      likes: 112
    },
    {
      id: 4,
      title: "AI-Powered Crop Disease Detection: Early Warning Systems",
      excerpt: "Explore how artificial intelligence is helping farmers detect crop diseases before they spread, saving both time and money.",
      content: "Early detection of crop diseases can mean the difference between a successful harvest and devastating losses. AI-powered systems are now making this possible for smallholder farmers...",
      author: "David Ochieng",
      authorRole: "Technology Specialist",
      date: "2025-01-08",
      readTime: "10 min read",
      category: "technology",
      tags: ["AI", "Disease Detection", "Early Warning"],
      featured: false,
      image: "/api/placeholder/600/300",
      views: 875,
      likes: 54
    },
    {
      id: 5,
      title: "Sustainable Farming Practices for Climate Resilience",
      excerpt: "Learn about sustainable farming techniques that help build resilience against climate change while maintaining productivity.",
      content: "Climate change poses significant challenges to agriculture in Kenya. Sustainable farming practices offer a path forward that protects both the environment and farmer livelihoods...",
      author: "Dr. Sarah Kimani",
      authorRole: "Agricultural Engineer",
      date: "2025-01-05",
      readTime: "9 min read",
      category: "sustainability",
      tags: ["Climate Change", "Sustainability", "Resilience"],
      featured: false,
      image: "/api/placeholder/600/300",
      views: 720,
      likes: 43
    },
    {
      id: 6,
      title: "Drone Technology in Modern Agriculture",
      excerpt: "Discover how drones are revolutionizing crop monitoring, pest control, and precision agriculture across Kenya.",
      content: "Drones are no longer just for photography and entertainment. In agriculture, they're becoming essential tools for monitoring crops, applying treatments, and gathering data...",
      author: "Jonathan Myles",
      authorRole: "CEO & Founder",
      date: "2025-01-03",
      readTime: "7 min read",
      category: "technology",
      tags: ["Drones", "Precision Agriculture", "Monitoring"],
      featured: false,
      image: "/api/placeholder/600/300",
      views: 1100,
      likes: 78
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Smart Farming <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Stay updated with the latest trends, technologies, and success stories in smart farming. 
              Learn from experts and fellow farmers transforming agriculture across Kenya.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                <BookOpen className="h-4 w-4 text-blue-500" />
                <span>Expert Articles</span>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                <Users className="h-4 w-4 text-green-500" />
                <span>Success Stories</span>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                <TrendingUp className="h-4 w-4 text-purple-500" />
                <span>Latest Trends</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Posts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-64 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-900 flex items-center justify-center">
                      <Leaf className="h-16 w-16 text-green-500" />
                    </div>
                    <Badge className="absolute top-4 left-4 bg-primary">
                      Featured
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="outline" className="text-xs">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{post.author}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{post.authorRole}</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Search */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Search Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
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
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            {category.icon}
                            <span>{category.name}</span>
                          </div>
                          <Badge variant="secondary">{category.count}</Badge>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Stay Updated</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Get the latest smart farming insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                    <Button className="w-full">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                All Articles
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {filteredPosts.length} articles found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <div className="relative overflow-hidden">
                      <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-900 flex items-center justify-center">
                        <Leaf className="h-12 w-12 text-green-500" />
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge variant="outline" className="text-xs">
                          {categories.find(cat => cat.id === post.category)?.name}
                        </Badge>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                            <User className="h-3 w-3 text-white" />
                          </div>
                          <div>
                            <div className="text-xs font-medium">{post.author}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;


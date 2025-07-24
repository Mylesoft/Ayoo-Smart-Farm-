import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, Zap, TrendingUp, Leaf, Shield, BarChart3, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import InteractiveFarmMap from '../components/InteractiveFarmMap';
import WeatherWidget from '../components/WeatherWidget';
import heroImage from '../assets/63N94YNc8Icr.jpg';
import smartFarmingGraphic from '../assets/oWf0IAQhJYgH.jpg';
import droneImage from '../assets/liaGtozVplbj.jpg';

const Home = () => {
  // Animated counter hook
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (!isVisible) return;
      
      let startTime;
      const startValue = 0;
      const endValue = parseInt(end);
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const currentCount = Math.floor(progress * (endValue - startValue) + startValue);
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return { count, setIsVisible };
  };

  const AnimatedCounter = ({ end, suffix = "", prefix = "" }) => {
    const { count, setIsVisible } = useCounter(end);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6 }
        }}
        onViewportEnter={() => setIsVisible(true)}
        className="text-3xl md:text-4xl font-bold mb-2"
      >
        {prefix}{count}{suffix}
      </motion.div>
    );
  };

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-ayoo-green" />,
      title: "Smart Automation",
      description: "Automated irrigation, monitoring, and control systems that work 24/7 to optimize your farm operations."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-sky-blue" />,
      title: "Data Analytics",
      description: "Real-time insights and predictive analytics to make informed decisions and maximize crop yields."
    },
    {
      icon: <Droplets className="h-8 w-8 text-sky-blue" />,
      title: "Water Management",
      description: "Precision irrigation systems that reduce water usage by up to 50% while improving crop quality."
    },
    {
      icon: <Leaf className="h-8 w-8 text-ayoo-green" />,
      title: "Sustainable Farming",
      description: "Eco-friendly solutions that reduce environmental impact while increasing productivity and profitability."
    }
  ];

  const stats = [
    { number: 40, suffix: "%", label: "Increase in Crop Yields" },
    { number: 50, suffix: "%", label: "Reduction in Water Usage" },
    { number: 30, suffix: "%", label: "Lower Operating Costs" },
    { number: 24, suffix: "/7", label: "Continuous Monitoring" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-gradient py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 brand-heading">
                Revolutionizing Agriculture in Kenya with{' '}
                <span className="text-sunshine-yellow">Smart Technology</span>
              </h1>
              <p className="text-xl text-white/90 mb-4 brand-tagline">
                "Cultivating Tomorrow's Agriculture, Today."
              </p>
              <p className="text-lg text-white/80 mb-8 brand-body">
                Transform your farming operations in Siaya and across Kenya with IoT sensors, AI-powered analytics, and automated systems. 
                Increase yields, reduce costs, and build a sustainable future for Kenyan agriculture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-sunshine-yellow text-earth-brown hover:bg-sunshine-yellow/90 font-semibold btn-interactive" asChild>
                  <Link to="/services">
                    Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-earth-brown btn-interactive" asChild>
                  <Link to="/contact">Get Free Consultation</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={heroImage}
                alt="Smart farming technology with solar panels and sensors"
                className="rounded-lg shadow-2xl w-full h-auto"
                loading="lazy"
                srcSet={`${heroImage}?w=480 480w, ${heroImage}?w=800 800w`}
                sizes="(max-width: 600px) 480px, 800px"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-6 w-6 text-ayoo-green" />
                  <div>
                    <p className="text-sm font-semibold text-earth-brown">Yield Increase</p>
                    <p className="text-2xl font-bold text-ayoo-green">+40%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-earth-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <AnimatedCounter 
                  end={stat.number} 
                  suffix={stat.suffix || ""} 
                />
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-earth-brown mb-4 brand-heading">
              Why Choose Ayoo Smart Farm?
            </h2>
            <p className="text-xl text-earth-brown/80 max-w-3xl mx-auto brand-body">
              Our comprehensive smart farming solutions combine cutting-edge technology with practical farming expertise 
              to deliver measurable results for your agricultural operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 card-hover border-leafy-green/20">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-earth-brown brand-subheading">{feature.title}</h3>
                    <p className="text-earth-brown/70 brand-body">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 bg-leafy-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-earth-brown mb-6 brand-heading">
                Advanced Technology for Modern Farming
              </h2>
              <p className="text-lg text-earth-brown/80 mb-6 brand-body">
                Our integrated platform combines IoT sensors, drone technology, AI analytics, and automated systems 
                to provide comprehensive farm management solutions.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-ayoo-green" />
                  <span className="text-earth-brown brand-body">Real-time crop and soil monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-ayoo-green" />
                  <span className="text-earth-brown brand-body">Automated irrigation and fertilization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-ayoo-green" />
                  <span className="text-earth-brown brand-body">Predictive analytics and alerts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-ayoo-green" />
                  <span className="text-earth-brown brand-body">Mobile app for remote management</span>
                </li>
              </ul>
              <Button className="bg-ayoo-green hover:bg-ayoo-green/90 btn-interactive" asChild>
                <Link to="/technology">
                  Learn More About Our Technology <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src={smartFarmingGraphic}
                alt="Smart farming technology overview"
                className="rounded-lg shadow-lg"
                loading="lazy"
                srcSet={`${smartFarmingGraphic}?w=480 480w, ${smartFarmingGraphic}?w=800 800w`}
                sizes="(max-width: 600px) 480px, 800px"
              />
              <img
                src={droneImage}
                alt="Drone technology in farming"
                className="rounded-lg shadow-lg"
                loading="lazy"
                srcSet={`${droneImage}?w=480 480w, ${droneImage}?w=800 800w`}
                sizes="(max-width: 600px) 480px, 800px"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Farm Map Section */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-earth-brown mb-4 brand-heading">
              Our Smart Farm Network in Siaya County
            </h2>
            <p className="text-xl text-earth-brown/80 max-w-3xl mx-auto brand-body">
              Explore our network of smart farms across Siaya County with real-time monitoring, 
              sensor data, and live updates from our agricultural operations.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <InteractiveFarmMap />
          </motion.div>
        </div>
      </section>

      {/* Weather Widget Section */}
      <section className="py-20 bg-leafy-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-earth-brown mb-6 brand-heading">
                Real-time Weather Monitoring
              </h2>
              <p className="text-lg text-earth-brown/80 mb-6 brand-body">
                Stay informed with live weather data, forecasts, and farm-specific alerts 
                to make informed decisions about your agricultural operations.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-ayoo-green" />
                  <span className="text-earth-brown brand-body">4-day weather forecast</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-ayoo-green" />
                  <span className="text-earth-brown brand-body">UV index monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-ayoo-green" />
                  <span className="text-earth-brown brand-body">Farm-specific weather alerts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-ayoo-green" />
                  <span className="text-earth-brown brand-body">Real-time data updates</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <WeatherWidget location="Siaya, Kenya" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-gradient-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 brand-heading">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-xl mb-8 opacity-90 brand-body">
              Join hundreds of farmers across Kenya who have already revolutionized their operations with Ayoo Smart Farm. 
              Get started today with a free consultation and see how we can help you increase yields and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sunshine-yellow text-earth-brown hover:bg-sunshine-yellow/90 font-semibold btn-interactive" asChild>
                <Link to="/contact">
                  Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-earth-brown btn-interactive" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;


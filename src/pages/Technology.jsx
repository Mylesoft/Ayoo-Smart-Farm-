import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Wifi, 
  Cloud, 
  Smartphone, 
  Camera,
  Zap,
  BarChart3,
  Shield,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import techOverviewImage from '../assets/d7hM7Aaxr7am.jpg';

const Technology = () => {
  const technologies = [
    {
      icon: <Wifi className="h-12 w-12 text-primary" />,
      title: "IoT Sensor Networks",
      description: "Advanced Internet of Things sensors that monitor soil conditions, weather patterns, and crop health in real-time.",
      features: [
        "Soil moisture and pH sensors",
        "Temperature and humidity monitoring",
        "Light intensity measurement",
        "Nutrient level detection",
        "Wireless connectivity"
      ]
    },
    {
      icon: <Cpu className="h-12 w-12 text-primary" />,
      title: "Artificial Intelligence",
      description: "Machine learning algorithms that analyze farm data to provide predictive insights and automated decision-making.",
      features: [
        "Crop yield prediction",
        "Disease detection algorithms",
        "Weather pattern analysis",
        "Optimal planting recommendations",
        "Resource optimization"
      ]
    },
    {
      icon: <Cloud className="h-12 w-12 text-primary" />,
      title: "Cloud Computing",
      description: "Secure cloud infrastructure for data storage, processing, and real-time analytics accessible from anywhere.",
      features: [
        "Real-time data processing",
        "Secure data storage",
        "Multi-device synchronization",
        "Backup and recovery",
        "Scalable infrastructure"
      ]
    },
    {
      icon: <Camera className="h-12 w-12 text-primary" />,
      title: "Drone Technology",
      description: "Unmanned aerial vehicles equipped with high-resolution cameras and sensors for comprehensive farm monitoring.",
      features: [
        "Aerial crop mapping",
        "Multispectral imaging",
        "Automated flight patterns",
        "Real-time video streaming",
        "GPS-guided navigation"
      ]
    },
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: "Mobile Applications",
      description: "User-friendly mobile apps that provide farmers with instant access to farm data and control systems.",
      features: [
        "Real-time notifications",
        "Remote system control",
        "Data visualization",
        "Report generation",
        "Offline functionality"
      ]
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Automation Systems",
      description: "Intelligent automation solutions that reduce manual labor and optimize farm operations.",
      features: [
        "Automated irrigation",
        "Smart fertilizer application",
        "Climate control systems",
        "Equipment scheduling",
        "Energy management"
      ]
    }
  ];

  const techSpecs = [
    { label: "Sensor Range", value: "Up to 10km" },
    { label: "Battery Life", value: "2-5 years" },
    { label: "Data Accuracy", value: "±2%" },
    { label: "Response Time", value: "<1 second" },
    { label: "Weather Resistance", value: "IP67 rated" },
    { label: "Connectivity", value: "LoRaWAN, WiFi, 4G" }
  ];

  return (
    <div className="min-h-screen">
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
              Cutting-Edge <span className="text-primary">Technology</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advanced technologies powering our smart farming solutions. 
              From IoT sensors to AI analytics, we use the latest innovations to transform agriculture in Kenya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Integrated Technology Platform
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive technology platform combines multiple cutting-edge solutions to create 
                a seamless smart farming experience. Every component works together to provide you with 
                actionable insights and automated solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {techSpecs.map((spec, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">{spec.label}</div>
                    <div className="text-lg font-semibold text-primary">{spec.value}</div>
                  </div>
                ))}
              </div>
              <Button asChild>
                <Link to="/services">
                  Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={techOverviewImage}
                alt="IoT technology transforming agriculture"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each technology component is carefully selected and integrated to provide maximum value for your farming operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mb-4">{tech.icon}</div>
                    <CardTitle className="text-xl">{tech.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{tech.description}</p>
                    <ul className="space-y-2">
                      {tech.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <Shield className="h-4 w-4 text-primary" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Flow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={techOverviewImage}
                alt="IoT benefits in agriculture"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How Our Technology Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Data Collection</h3>
                    <p className="text-gray-600">Sensors continuously collect data on soil, weather, and crop conditions across your farm.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
                    <p className="text-gray-600">Advanced algorithms analyze the data to identify patterns, predict outcomes, and generate insights.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Automated Actions</h3>
                    <p className="text-gray-600">Systems automatically respond to conditions or send alerts for manual intervention when needed.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Continuous Optimization</h3>
                    <p className="text-gray-600">The system learns from results and continuously improves recommendations and automation.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security & Reliability */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Security & Reliability
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your farm data is protected with enterprise-grade security, and our systems are designed for maximum reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-primary" />,
                title: "Data Security",
                description: "End-to-end encryption and secure cloud storage protect your sensitive farm data."
              },
              {
                icon: <BarChart3 className="h-12 w-12 text-primary" />,
                title: "99.9% Uptime",
                description: "Reliable systems with redundancy and backup ensure continuous monitoring and operation."
              },
              {
                icon: <Zap className="h-12 w-12 text-primary" />,
                title: "Real-time Processing",
                description: "Instant data processing and alerts ensure you never miss critical farm conditions."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience Our Technology
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to see how our advanced technology can transform your farm? 
              Contact us for a demonstration and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/benefits">See the Benefits</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Technology;


import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  DollarSign, 
  Droplets, 
  Leaf, 
  Clock, 
  Shield,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Target
} from 'lucide-react';
import { motion } from 'framer-motion';

const Benefits = () => {
  const mainBenefits = [
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Increased Crop Yields",
      percentage: "40%",
      description: "Smart farming techniques optimize growing conditions, leading to significantly higher crop yields compared to traditional farming methods.",
      details: [
        "Precision nutrient management",
        "Optimal irrigation timing",
        "Early disease detection",
        "Climate-controlled environments"
      ]
    },
    {
      icon: <Droplets className="h-12 w-12 text-primary" />,
      title: "Water Conservation",
      percentage: "50%",
      description: "Advanced irrigation systems and soil moisture monitoring reduce water waste while maintaining optimal crop hydration.",
      details: [
        "Smart irrigation scheduling",
        "Soil moisture sensors",
        "Weather-based adjustments",
        "Drip irrigation systems"
      ]
    },
    {
      icon: <DollarSign className="h-12 w-12 text-primary" />,
      title: "Cost Reduction",
      percentage: "30%",
      description: "Automation and precision application of resources significantly reduce operational costs and labor requirements.",
      details: [
        "Reduced labor costs",
        "Optimized resource usage",
        "Lower equipment maintenance",
        "Energy efficiency"
      ]
    },
    {
      icon: <Leaf className="h-12 w-12 text-primary" />,
      title: "Environmental Impact",
      percentage: "60%",
      description: "Sustainable farming practices reduce environmental footprint while maintaining high productivity levels.",
      details: [
        "Reduced chemical usage",
        "Lower carbon emissions",
        "Soil health improvement",
        "Biodiversity protection"
      ]
    }
  ];

  const additionalBenefits = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "24/7 Monitoring",
      description: "Continuous monitoring ensures optimal conditions and immediate alerts for any issues."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Risk Mitigation",
      description: "Early warning systems help prevent crop losses from diseases, pests, and weather."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Data-Driven Decisions",
      description: "Comprehensive analytics provide insights for better farming decisions."
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Precision Application",
      description: "Exact application of fertilizers and pesticides reduces waste and costs."
    }
  ];

  const caseStudies = [
    {
      farmer: "John Kiprotich",
      location: "Nakuru County",
      crop: "Maize",
      results: {
        yieldIncrease: "45%",
        waterSavings: "55%",
        costReduction: "35%"
      },
      testimonial: "Ayoo Smart Farm transformed my 10-acre maize farm. The automated irrigation and soil monitoring helped me achieve the best harvest in 15 years."
    },
    {
      farmer: "Mary Wanjiru",
      location: "Kiambu County",
      crop: "Tomatoes",
      results: {
        yieldIncrease: "60%",
        waterSavings: "40%",
        costReduction: "25%"
      },
      testimonial: "The precision farming techniques increased my tomato yield dramatically while reducing my water bills significantly."
    },
    {
      farmer: "Samuel Otieno",
      location: "Kisumu County",
      crop: "Rice",
      results: {
        yieldIncrease: "35%",
        waterSavings: "50%",
        costReduction: "30%"
      },
      testimonial: "Smart irrigation and monitoring systems helped me optimize my rice production while conserving water resources."
    }
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
              Proven <span className="text-primary">Benefits</span> for Your Farm
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the measurable advantages of smart farming technology. Our solutions deliver real results 
              that transform agricultural operations across Kenya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {mainBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      {benefit.icon}
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">{benefit.percentage}</div>
                        <div className="text-sm text-gray-500">Average Improvement</div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{benefit.description}</p>
                    <ul className="space-y-2">
                      {benefit.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm text-gray-600">{detail}</span>
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

      {/* Additional Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Additional Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond the primary benefits, smart farming provides numerous additional advantages that enhance your overall farming experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Real Results from Kenyan Farmers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our smart farming solutions have transformed the operations of farmers across Kenya.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold">{study.farmer}</h3>
                      <p className="text-gray-600">{study.location} • {study.crop}</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{study.results.yieldIncrease}</div>
                        <div className="text-xs text-gray-500">Yield Increase</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{study.results.waterSavings}</div>
                        <div className="text-xs text-gray-500">Water Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{study.results.costReduction}</div>
                        <div className="text-xs text-gray-500">Cost Reduction</div>
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-600 italic">
                      "{study.testimonial}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Calculate Your Potential Savings
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Based on average results from our clients, here's what you could expect from implementing our smart farming solutions:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">KES 150,000</div>
                <div className="text-lg opacity-90">Average Annual Savings</div>
                <div className="text-sm opacity-75">Per 5-acre farm</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">6 Months</div>
                <div className="text-lg opacity-90">Payback Period</div>
                <div className="text-sm opacity-75">Return on investment</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">300%</div>
                <div className="text-lg opacity-90">ROI in 3 Years</div>
                <div className="text-sm opacity-75">Cumulative returns</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Start Experiencing These Benefits Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of successful farmers across Kenya who have transformed their operations with Ayoo Smart Farm. 
              Contact us for a free consultation and see how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;


import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Droplets, 
  DollarSign, 
  Users, 
  MapPin, 
  Calendar,
  Award,
  ArrowRight,
  Leaf,
  BarChart3,
  Target,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const CaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: "Peter Mutua's Maize Revolution",
      subtitle: "From 2 to 4.5 tons per hectare in one season",
      location: "Bondo, Siaya County",
      farmSize: "10 acres",
      cropType: "Maize & Beans",
      duration: "18 months",
      featured: true,
      farmer: {
        name: "Peter Mutua",
        age: 45,
        experience: "20 years farming",
        education: "Secondary School",
        family: "Married, 4 children"
      },
      challenge: {
        title: "Low Yields and Water Scarcity",
        description: "Peter was struggling with inconsistent maize yields averaging only 2 tons per hectare, well below the potential. Irregular rainfall and poor water management were major challenges.",
        issues: [
          "Inconsistent irrigation timing",
          "Lack of soil moisture data",
          "Manual monitoring limitations",
          "High labor costs",
          "Weather unpredictability"
        ]
      },
      solution: {
        title: "Smart Farming Technology Implementation",
        description: "Ayoo Smart Farm installed a comprehensive IoT system including soil moisture sensors, automated irrigation, and weather monitoring.",
        technologies: [
          "12 soil moisture sensors",
          "Automated drip irrigation system",
          "Weather monitoring station",
          "Mobile app for remote monitoring",
          "AI-powered irrigation scheduling"
        ]
      },
      results: {
        yieldIncrease: 125,
        waterSavings: 40,
        costReduction: 30,
        timesSaved: 15,
        roiMonths: 8
      },
      metrics: [
        {
          label: "Yield Increase",
          value: "125%",
          description: "From 2 to 4.5 tons per hectare",
          icon: <TrendingUp className="h-5 w-5 text-green-500" />
        },
        {
          label: "Water Savings",
          value: "40%",
          description: "Reduced water consumption",
          icon: <Droplets className="h-5 w-5 text-blue-500" />
        },
        {
          label: "Cost Reduction",
          value: "30%",
          description: "Lower operational costs",
          icon: <DollarSign className="h-5 w-5 text-yellow-500" />
        },
        {
          label: "ROI Timeline",
          value: "8 months",
          description: "Return on investment",
          icon: <Target className="h-5 w-5 text-purple-500" />
        }
      ],
      timeline: [
        {
          phase: "Assessment",
          duration: "2 weeks",
          description: "Farm analysis and system design"
        },
        {
          phase: "Installation",
          duration: "1 week",
          description: "IoT sensors and irrigation setup"
        },
        {
          phase: "Training",
          duration: "3 days",
          description: "Farmer training on system usage"
        },
        {
          phase: "Monitoring",
          duration: "Ongoing",
          description: "Continuous support and optimization"
        }
      ],
      testimonial: "The smart farming system has completely transformed my farm. I never imagined I could achieve such high yields while using less water. My family's income has doubled, and I can now afford to send all my children to school.",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Grace Wanjiku's Vegetable Success",
      subtitle: "Tripled income with smart greenhouse technology",
      location: "Ugunja, Siaya County",
      farmSize: "2 acres",
      cropType: "Tomatoes & Vegetables",
      duration: "12 months",
      featured: true,
      farmer: {
        name: "Grace Wanjiku",
        age: 38,
        experience: "12 years farming",
        education: "College Graduate",
        family: "Single mother, 3 children"
      },
      challenge: {
        title: "Seasonal Income Fluctuations",
        description: "Grace struggled with seasonal farming limitations and pest management issues that significantly reduced her vegetable yields and income stability.",
        issues: [
          "Seasonal production limitations",
          "Pest and disease management",
          "Market price fluctuations",
          "Limited growing space",
          "Weather dependency"
        ]
      },
      solution: {
        title: "Smart Greenhouse Implementation",
        description: "Installation of a climate-controlled smart greenhouse with automated systems for optimal year-round production.",
        technologies: [
          "Climate-controlled greenhouse",
          "Automated ventilation system",
          "Precision nutrient delivery",
          "Pest monitoring sensors",
          "Market price tracking app"
        ]
      },
      results: {
        yieldIncrease: 200,
        waterSavings: 50,
        costReduction: 25,
        timesSaved: 20,
        roiMonths: 6
      },
      metrics: [
        {
          label: "Income Increase",
          value: "300%",
          description: "Tripled monthly income",
          icon: <DollarSign className="h-5 w-5 text-green-500" />
        },
        {
          label: "Year-round Production",
          value: "12 months",
          description: "Continuous harvesting",
          icon: <Calendar className="h-5 w-5 text-blue-500" />
        },
        {
          label: "Pest Reduction",
          value: "80%",
          description: "Controlled environment",
          icon: <Award className="h-5 w-5 text-yellow-500" />
        },
        {
          label: "Market Access",
          value: "5 outlets",
          description: "Reliable buyers secured",
          icon: <Users className="h-5 w-5 text-purple-500" />
        }
      ],
      timeline: [
        {
          phase: "Planning",
          duration: "3 weeks",
          description: "Greenhouse design and permits"
        },
        {
          phase: "Construction",
          duration: "2 weeks",
          description: "Greenhouse and system installation"
        },
        {
          phase: "Setup",
          duration: "1 week",
          description: "Equipment calibration and testing"
        },
        {
          phase: "Production",
          duration: "Ongoing",
          description: "Continuous monitoring and support"
        }
      ],
      testimonial: "The smart greenhouse has given me financial independence. I can now grow vegetables year-round and have secured contracts with local hotels and supermarkets. My children's future is secure.",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "David Ochieng's Dairy Innovation",
      subtitle: "Automated feeding system increases milk production",
      location: "Yala, Siaya County",
      farmSize: "5 acres",
      cropType: "Dairy Farming",
      duration: "15 months",
      featured: false,
      farmer: {
        name: "David Ochieng",
        age: 52,
        experience: "25 years farming",
        education: "Primary School",
        family: "Married, 6 children"
      },
      challenge: {
        title: "Inconsistent Milk Production",
        description: "David's dairy cows were producing below potential due to irregular feeding schedules and poor nutrition monitoring.",
        issues: [
          "Irregular feeding schedules",
          "Poor nutrition tracking",
          "Manual labor intensive",
          "Inconsistent milk quality",
          "High feed wastage"
        ]
      },
      solution: {
        title: "Automated Dairy Management",
        description: "Implementation of automated feeding systems and health monitoring for optimal dairy production.",
        technologies: [
          "Automated feeding system",
          "Cow health monitoring tags",
          "Milk quality sensors",
          "Feed optimization software",
          "Production tracking dashboard"
        ]
      },
      results: {
        yieldIncrease: 60,
        waterSavings: 25,
        costReduction: 35,
        timesSaved: 40,
        roiMonths: 10
      },
      metrics: [
        {
          label: "Milk Increase",
          value: "60%",
          description: "Higher daily production",
          icon: <TrendingUp className="h-5 w-5 text-green-500" />
        },
        {
          label: "Feed Efficiency",
          value: "35%",
          description: "Reduced feed wastage",
          icon: <BarChart3 className="h-5 w-5 text-blue-500" />
        },
        {
          label: "Labor Savings",
          value: "40%",
          description: "Automated processes",
          icon: <Users className="h-5 w-5 text-yellow-500" />
        },
        {
          label: "Quality Score",
          value: "95%",
          description: "Consistent milk quality",
          icon: <Award className="h-5 w-5 text-purple-500" />
        }
      ],
      timeline: [
        {
          phase: "Assessment",
          duration: "1 week",
          description: "Dairy operation analysis"
        },
        {
          phase: "Installation",
          duration: "2 weeks",
          description: "Automated system setup"
        },
        {
          phase: "Training",
          duration: "1 week",
          description: "System operation training"
        },
        {
          phase: "Optimization",
          duration: "Ongoing",
          description: "Continuous improvement"
        }
      ],
      testimonial: "The automated feeding system has revolutionized my dairy farm. My cows are healthier, milk production has increased significantly, and I have more time for other activities. It's the best investment I've ever made.",
      image: "/api/placeholder/600/400"
    }
  ];

  const featuredStudies = caseStudies.filter(study => study.featured);

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
              Farmer <span className="text-primary">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how smart farming technology has transformed the lives and livelihoods of farmers 
              across Siaya County and beyond. Real stories, real results, real impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">125%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Average Yield Increase</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Water Savings</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">8 months</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Average ROI Timeline</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Case Studies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedStudy(study)}
                className="cursor-pointer"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-64 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-900 flex items-center justify-center">
                      <Leaf className="h-16 w-16 text-green-500" />
                    </div>
                    <Badge className="absolute top-4 left-4 bg-primary">
                      Featured
                    </Badge>
                    <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {study.duration}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{study.location}</span>
                      <Badge variant="outline" className="text-xs">
                        {study.farmSize}
                      </Badge>
                    </div>
                    
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {study.subtitle}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.metrics.slice(0, 2).map((metric, idx) => (
                        <div key={idx} className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center justify-center mb-2">
                            {metric.icon}
                          </div>
                          <div className="font-bold text-lg text-primary">{metric.value}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <Users className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{study.farmer.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{study.cropType}</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                        Read Full Story
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* All Case Studies */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">All Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedStudy(study)}
                className="cursor-pointer"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-900 flex items-center justify-center">
                      <Leaf className="h-12 w-12 text-green-500" />
                    </div>
                    {study.featured && (
                      <Badge className="absolute top-2 left-2 bg-primary text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <MapPin className="h-3 w-3 text-gray-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">{study.location}</span>
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                      {study.subtitle}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {study.farmer.name}
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
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of farmers who have transformed their operations with smart farming technology. 
                Your success story could be next.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Get Free Consultation
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Book Farm Visit
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Detailed Case Study Modal would go here */}
      {selectedStudy && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">{selectedStudy.title}</h2>
                <Button variant="ghost" onClick={() => setSelectedStudy(null)}>
                  ×
                </Button>
              </div>
              {/* Detailed content would go here */}
              <p className="text-gray-600 dark:text-gray-300">
                Detailed case study content would be displayed here...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudies;


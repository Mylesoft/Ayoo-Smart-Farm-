import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  Beef, 
  Droplets, 
  ShoppingCart,
  BarChart3, 
  GraduationCap,
  Briefcase,
  ChefHat,
  Tractor,
  MapPin,
  School,
  Truck,
  ArrowRight,
  CheckCircle,
  Leaf,
  Users,
  Smartphone,
  Camera
} from 'lucide-react';
import { motion } from 'framer-motion';
import iotImage from '../assets/jFzypjVATL83.jpg';
import smartIrrigationImage from '../assets/a4XtBoT0vrSn.jpg';

const Services = () => {
  const services = [
    {
      icon: <Sprout className="h-12 w-12 text-primary" />,
      title: "Crop Production Services",
      description: "High-value, climate-smart, and commercial-scale crop farming solutions.",
      features: [
        "Open-field crop production (kale, spinach, onions, tomatoes, bananas, maize, beans)",
        "Greenhouse farming (tomatoes, capsicum, herbs, strawberries)",
        "Horticulture & fruits (watermelon, pawpaw, passion fruit, avocado)",
        "Herbal and medicinal plants cultivation (aloe vera, moringa)",
        "Seedling nursery services with certified vegetable and fruit seedlings"
      ],
      image: smartIrrigationImage
    },
    {
      icon: <Beef className="h-12 w-12 text-primary" />,
      title: "Livestock & Animal Husbandry",
      description: "Integrated livestock rearing for food security, income, and manure production.",
      features: [
        "Poultry farming (broilers, layers, kienyeji chicken)",
        "Goat & sheep rearing for meat, milk, and breeding stock",
        "Dairy farming with cross-breed cows for milk production",
        "Beekeeping (apiculture) for honey production and pollination services",
        "Rabbit farming for meat, skin, and breeding",
        "Pig farming for commercial pork production"
      ]
    },
    {
      icon: <Droplets className="h-12 w-12 text-primary" />,
      title: "Irrigation & Water Management",
      description: "Sustainable water solutions for enhanced productivity and efficiency.",
      features: [
        "Installation of drip & sprinkler irrigation systems",
        "Rainwater harvesting systems & water tanks",
        "Borehole drilling support & solar pump installation",
        "Soil moisture monitoring and smart irrigation advisory"
      ],
      image: iotImage
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-primary" />,
      title: "Farm Inputs Supply & Agrovet Shop",
      description: "One-stop shop for quality agricultural inputs and supplies.",
      features: [
        "Certified seeds & seedlings",
        "Fertilizers (organic & inorganic)",
        "Agrochemicals (pesticides, herbicides, fungicides)",
        "Veterinary drugs & animal feeds",
        "Tools & equipment (hoes, sprayers, boots, etc.)"
      ]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "Smart Farming & Agritech Services",
      description: "Digital tools for data-driven agriculture and precision farming.",
      features: [
        "Farm management software (AyooFarm SaaS)",
        "IoT-enabled sensors for soil, weather, and crop monitoring",
        "Mobile-based farm advisory services",
        "AI tools for pest & disease detection",
        "Satellite imagery for farm mapping & productivity monitoring"
      ]
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      title: "Training, Consultancy & Extension",
      description: "Empowering farmers, youth & schools with knowledge and skills.",
      features: [
        "Practical training programs in crop, animal, and agribusiness skills",
        "On-farm demonstrations & farmer field schools",
        "Agripreneur incubation programs for youth",
        "Workshops and webinars on regenerative agriculture",
        "School outreach programs & agricultural clubs support",
        "Certification programs in modern agriculture"
      ]
    },
    {
      icon: <Briefcase className="h-12 w-12 text-primary" />,
      title: "Agribusiness Services",
      description: "Linking production with profit and markets for sustainable growth.",
      features: [
        "Produce aggregation & bulking",
        "Market linkage to buyers, cooperatives, and supermarkets",
        "Contract farming arrangements",
        "Agri-finance linkage & microloan facilitation",
        "Agri-insurance advisory services"
      ]
    },
    {
      icon: <ChefHat className="h-12 w-12 text-primary" />,
      title: "Value Addition & Processing",
      description: "Increase shelf life, value, and marketability of farm products.",
      features: [
        "Vegetable drying & packaging (solar dryers)",
        "Tomato paste, fruit juice, and jam processing",
        "Poultry slaughter & packaging",
        "Milk pasteurization and yogurt making",
        "Beehive product processing (wax, propolis)"
      ]
    },
    {
      icon: <Tractor className="h-12 w-12 text-primary" />,
      title: "Farm Mechanization & Custom Hiring",
      description: "Modern tools and equipment for enhanced efficiency.",
      features: [
        "Tractor ploughing, harrowing, ridging services",
        "Bailing, threshing & shelling",
        "Greenhouse construction & shade nets installation",
        "Spraying services (manual and motorized)"
      ]
    },
    {
      icon: <MapPin className="h-12 w-12 text-primary" />,
      title: "Agri-Tourism & Community Engagement",
      description: "Showcasing farming as a lifestyle and learning opportunity.",
      features: [
        "Farm tours for schools, tourists & researchers",
        "Eco-farm accommodation for visiting groups",
        "Family-friendly weekend farm visits",
        "CSR projects with schools & churches",
        "Cultural showcase of African indigenous farming practices"
      ]
    },
    {
      icon: <School className="h-12 w-12 text-primary" />,
      title: "Ayoo Agricultural Training Institute",
      description: "Professional center for agricultural learning and development.",
      features: [
        "Short & long-term courses in modern farming",
        "Certified programs in agribusiness, horticulture, and livestock management",
        "Youth empowerment and school-to-farm transition programs",
        "Mentorship and leadership development in agriculture"
      ]
    },
    {
      icon: <Truck className="h-12 w-12 text-primary" />,
      title: "Logistics, Storage & Distribution",
      description: "Bridging farm to fork with efficient supply chain solutions.",
      features: [
        "Cold room storage for perishables",
        "Pack house & grading services",
        "Delivery logistics for fresh produce",
        "Mobile farm produce delivery (Ayoo Basket)"
      ]
    }
  ];

  const additionalServices = [
    "Agri-fintech: Savings, loans, and payment systems for farmers",
    "Carbon farming & sustainability consulting",
    "Farm certification services (GlobalGAP, Organic, etc.)",
    "Export facilitation for fresh produce and honey"
  ];

  const benefits = [
    "Increase crop yields by up to 40%",
    "Reduce water usage by 50%",
    "Lower labor costs by 30%",
    "Improve crop quality and consistency",
    "Reduce environmental impact",
    "24/7 monitoring and alerts",
    "Market linkage and value addition",
    "Youth empowerment and training"
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
              Ayoo Smart Farm <span className="text-primary">Service Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive agricultural solutions designed to revolutionize farming in Kenya and beyond. 
              From crop production to agri-tourism, we provide end-to-end services for modern agriculture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cultivating Tomorrow's Agriculture, Today. Explore our full range of services designed to empower farmers and communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {service.image && (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    )}
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
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

      {/* Additional Future Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Future Expansion Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're continuously expanding our service portfolio to meet evolving agricultural needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow-sm"
              >
                <Leaf className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Ayoo Smart Farm?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive services deliver measurable results that transform agricultural operations across Kenya.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg"
              >
                <Users className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure successful implementation of our agricultural solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Farm Assessment", description: "Comprehensive evaluation of your farm's current state, needs, and potential" },
              { step: "2", title: "Solution Design", description: "Custom solution design tailored to your specific requirements and goals" },
              { step: "3", title: "Implementation", description: "Professional installation, setup, and deployment of all systems and services" },
              { step: "4", title: "Training & Support", description: "Complete training and ongoing support for optimal results and sustainability" }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
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
              Ready to Transform Your Agricultural Operations?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today for a free consultation and discover how our comprehensive services 
              can revolutionize your farming operations in Kenya and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/about">Learn About Our Mission</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;


import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Award, Lightbulb, GraduationCap, Crown, Leaf, HandHeart } from 'lucide-react';
import { motion } from 'framer-motion';
import precisionAgImage from '../assets/gkeyB5AEL7N4.jpg';
import jonathanMylesImage from '../assets/jonathan-myles.png';
import sarahKimaniImage from '../assets/sarah-kimani.jpg';
import davidOchiengImage from '../assets/david-ochieng.jpg';
import graceWanjikuImage from '../assets/grace-wanjiku.jpg';
import peterMutuaImage from '../assets/peter-mutua.jpg';

const About = () => {
  const values = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Mastery",
      letter: "M",
      description: "We pursue continuous learning, excellence, and professionalism in all aspects of smart agriculture.",
      details: [
        "Committed to training, skill-building, and agronomic best practices",
        "Delivering high-quality farm produce and services",
        "Creating expert-led programs for youth, women, and farmers"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Youth Empowerment",
      letter: "Y",
      description: "We place youth at the center of modern agriculture, equipping them with tools for success.",
      details: [
        "Hands-on agribusiness incubation for young farmers",
        "Promoting youth-led innovation, leadership, and ownership",
        "Building resilient livelihoods through employment and mentorship"
      ]
    },
    {
      icon: <Crown className="h-8 w-8 text-primary" />,
      title: "Leadership",
      letter: "L",
      description: "We lead by example in adopting smart, sustainable, and ethical farming practices.",
      details: [
        "Pioneering AgriTech and climate-smart solutions",
        "Advocating for responsible agribusiness models",
        "Empowering farmers and communities through influence and impact"
      ]
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Environmental Stewardship",
      letter: "E",
      description: "We are guardians of the land, committed to farming in harmony with nature.",
      details: [
        "Promoting sustainable soil, water, and biodiversity management",
        "Practicing regenerative and organic farming",
        "Advocating for climate change adaptation and resilience in agriculture"
      ]
    },
    {
      icon: <HandHeart className="h-8 w-8 text-primary" />,
      title: "Service to Community",
      letter: "S",
      description: "We exist to serve and uplift rural communities through inclusive agribusiness transformation.",
      details: [
        "Farmer outreach programs and education",
        "Supporting cooperatives, groups, and schools",
        "Reinforcing food security, nutrition, and economic development"
      ]
    }
  ];

  const milestones = [
    { year: "2020", event: "Jonathan Myles founded Ayoo Smart Farm in Siaya County with a vision to revolutionize Kenyan agriculture" },
    { year: "2021", event: "Launched our first IoT sensor network for precision farming in Western Kenya" },
    { year: "2022", event: "Expanded to serve over 100 farms across Siaya and neighboring counties" },
    { year: "2023", event: "Introduced AI-powered predictive analytics platform tailored for Kenyan crops" },
    { year: "2024", event: "Achieved 40% average yield increase for our clients across Kenya" },
    { year: "2025", event: "Leading the smart farming revolution in East Africa with 300+ satisfied customers" }
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
              About <span className="text-primary">Ayoo Smart Farm</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are pioneers in smart farming technology in Kenya, dedicated to helping farmers achieve greater productivity, 
              sustainability, and profitability through innovative agricultural solutions tailored for the Kenyan market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={precisionAgImage}
                alt="Precision agriculture technology"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                  </div>
                  <p className="text-lg text-gray-600">
                    To revolutionize agriculture in Kenya and beyond by empowering youth and communities through smart farming technologies, sustainable practices, and agribusiness training that ensure food security, profitability, and environmental stewardship.
                  </p>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                  </div>
                  <p className="text-lg text-gray-600">
                    To become Africa's leading model of sustainable agribusiness innovation, inspiring a new generation of tech-driven farmers while transforming rural livelihoods and promoting climate-smart agriculture.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded by CEO and Founder Jonathan Myles, Ayoo Smart Farm was born from 
              the vision of transforming traditional farming practices in Kenya through the power of modern technology. 
              Based in Siaya County, we understand the unique challenges facing Kenyan farmers.
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-md ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Core Values - M.Y.L.E.S. Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our M.Y.L.E.S. framework represents the five core values that guide everything we do and shape our commitment to revolutionizing agriculture in Kenya and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center items-center space-x-2">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                        {value.letter}
                      </div>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600 mb-4">{value.description}</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      {value.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-left">• {detail}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* M.Y.L.E.S. Summary Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">M.Y.L.E.S. Values Summary</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Letter</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Value</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {values.map((value, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-3 px-4">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {value.letter}
                        </div>
                      </td>
                      <td className="py-3 px-4 font-medium text-gray-900">{value.title}</td>
                      <td className="py-3 px-4 text-gray-600">{value.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of experts combines agricultural knowledge with cutting-edge technology to deliver exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Jonathan Myles",
                position: "CEO & Founder",
                image: jonathanMylesImage,
                bio: "Visionary leader with 10+ years in agricultural technology. Founded Ayoo Smart Farm to revolutionize farming in Kenya.",
                education: "MSc Agricultural Engineering, University of Nairobi"
              },
              {
                name: "Sarah Kimani",
                position: "Chief Technology Officer",
                image: sarahKimaniImage,
                bio: "Expert in IoT and AI systems with 8 years of experience in developing smart farming solutions.",
                education: "PhD Computer Science, Kenyatta University"
              },
              {
                name: "David Ochieng",
                position: "Head of Operations",
                image: davidOchiengImage,
                bio: "Experienced operations manager ensuring seamless implementation of smart farming systems across Kenya.",
                education: "MBA Operations Management, Strathmore University"
              },
              {
                name: "Grace Wanjiku",
                position: "Agricultural Specialist",
                image: graceWanjikuImage,
                bio: "Agronomist specializing in precision farming techniques and sustainable agricultural practices.",
                education: "BSc Agriculture, Egerton University"
              },
              {
                name: "Peter Mutua",
                position: "Field Engineer",
                image: peterMutuaImage,
                bio: "Hands-on engineer responsible for installation and maintenance of smart farming equipment.",
                education: "BSc Electrical Engineering, JKUAT"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={index === 0 ? "md:col-span-2 lg:col-span-4 flex justify-center" : ""}
              >
                <Card className={`hover:shadow-lg transition-shadow duration-300 ${index === 0 ? "max-w-md" : "h-full"}`}>
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                    <p className="text-gray-500 text-xs">{member.education}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Expert Team</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Our diverse team combines decades of agricultural expertise with cutting-edge technology knowledge. 
              We're passionate about helping Kenyan farmers succeed and building a sustainable future for agriculture in East Africa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-lg opacity-90">Expert Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">300+</div>
                <div className="text-lg opacity-90">Successful Projects</div>
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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the smart farming revolution and discover how Ayoo Smart Farm can transform your agricultural operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Get Started Today</Link>
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

export default About;


import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  User,
  Building,
  Facebook,
  Instagram,
  MessageCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import jonathanMylesImage from '../assets/jonathan-myles.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    farmLocation: '',
    farmSize: '',
    servicesInterestedIn: [],
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        servicesInterestedIn: checked
          ? [...prev.servicesInterestedIn, value]
          : prev.servicesInterestedIn.filter(service => service !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.farmSize && isNaN(formData.farmSize)) newErrors.farmSize = 'Farm Size must be a number';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        farmLocation: '',
        farmSize: '',
        servicesInterestedIn: [],
        message: ''
      });
      setErrors({});
    } else {
      setIsSubmitted(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Ayoo Smart Farm",
          "image": "https://www.ayoosmartfarm.com/ayoo-logo.jpg",
          "url": "https://www.ayoosmartfarm.com/",
          "telephone": "+254743993715",
          "email": "info@ayoosmartfarm.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Siaya County",
            "addressRegion": "Nyanza",
            "postalCode": "40600",
            "addressCountry": "KE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "0.0861",
            "longitude": "34.2989"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "16:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/ayoosmartfarm",
            "https://www.instagram.com/ayoosmartfarm",
            "https://wa.me/254743993715"
          ]
        }
      `}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your farm with smart technology? Contact us today for a consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <MessageSquare className="mr-3 text-green-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Details */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-green-600 w-5 h-5" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+254 743 993 715</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="text-green-600 w-5 h-5" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@ayoosmartfarm.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-green-600 w-5 h-5" />
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">Siaya County, Kenya</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="text-green-600 w-5 h-5" />
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sat: 9:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Founder Information */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Meet Our Founder</h3>
                  <div className="flex items-center space-x-4">
                    <img
                      src={jonathanMylesImage}
                      alt="Jonathan Myles"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">Jonathan Myles</p>
                      <p className="text-gray-600">Founder & CEO</p>
                      <p className="text-sm text-gray-500">Agricultural Technology Expert</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="https://wa.me/254743993715" className="text-green-600 hover:text-green-800 transition-colors">
                      <MessageCircle className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Send className="mr-3 text-green-600" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={errors.firstName ? 'border-red-500' : ''}
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={errors.lastName ? 'border-red-500' : ''}
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? 'border-red-500' : ''}
                          placeholder="Enter your email"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    {/* Farm Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Farm Location
                        </label>
                        <Input
                          type="text"
                          name="farmLocation"
                          value={formData.farmLocation}
                          onChange={handleChange}
                          placeholder="Enter your farm location"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Farm Size (acres)
                        </label>
                        <Input
                          type="number"
                          name="farmSize"
                          value={formData.farmSize}
                          onChange={handleChange}
                          className={errors.farmSize ? 'border-red-500' : ''}
                          placeholder="Enter farm size"
                        />
                        {errors.farmSize && (
                          <p className="text-red-500 text-sm mt-1">{errors.farmSize}</p>
                        )}
                      </div>
                    </div>

                    {/* Services Interested In */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Services Interested In
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          'IoT Sensors',
                          'Smart Irrigation',
                          'Crop Monitoring',
                          'Weather Stations',
                          'Farm Management Software',
                          'Consultation Services'
                        ].map((service) => (
                          <label key={service} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              value={service}
                              checked={formData.servicesInterestedIn.includes(service)}
                              onChange={handleChange}
                              className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                            />
                            <span className="text-sm text-gray-700">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'border-red-500' : ''}
                        rows={4}
                        placeholder="Tell us about your farming needs and how we can help..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


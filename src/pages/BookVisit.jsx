import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Calendar,
  Clock,
  Users,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Star,
  Camera,
  Leaf,
  Tractor,
  GraduationCap
} from 'lucide-react';
import { motion } from 'framer-motion';

const BookVisit = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [groupSize, setGroupSize] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    specialRequests: ''
  });

  const visitPackages = [
    {
      id: 'basic',
      name: 'Basic Farm Tour',
      duration: '2 hours',
      price: 1500,
      maxGroup: 15,
      description: 'Perfect introduction to smart farming techniques and sustainable agriculture',
      includes: [
        'Guided tour of crop fields',
        'Smart irrigation system demonstration',
        'IoT sensors explanation',
        'Q&A session with farm experts',
        'Welcome refreshments'
      ],
      highlights: ['Beginner Friendly', 'Educational', 'Interactive'],
      icon: <Leaf className="h-8 w-8 text-green-500" />
    },
    {
      id: 'premium',
      name: 'Premium Experience',
      duration: '4 hours',
      price: 3500,
      maxGroup: 12,
      description: 'Comprehensive farm experience with hands-on activities and farm-to-table lunch',
      includes: [
        'Everything in Basic Tour',
        'Hands-on planting/harvesting',
        'Livestock interaction',
        'Farm-to-table lunch',
        'Product tasting session',
        'Take-home organic produce'
      ],
      highlights: ['Hands-on Experience', 'Farm Lunch', 'Take-home Gifts'],
      icon: <Star className="h-8 w-8 text-yellow-500" />
    },
    {
      id: 'educational',
      name: 'Educational Program',
      duration: '6 hours',
      price: 2500,
      maxGroup: 30,
      description: 'Designed for schools, universities, and educational institutions',
      includes: [
        'Curriculum-aligned content',
        'Student worksheets',
        'Group activities',
        'Science experiments',
        'Certificate of participation',
        'Educational materials'
      ],
      highlights: ['School Groups', 'Curriculum Aligned', 'Certificates'],
      icon: <GraduationCap className="h-8 w-8 text-blue-500" />
    },
    {
      id: 'technical',
      name: 'Technical Workshop',
      duration: '8 hours',
      price: 5000,
      maxGroup: 8,
      description: 'In-depth technical training for farmers and agricultural professionals',
      includes: [
        'Advanced farming techniques',
        'Technology implementation',
        'Business planning session',
        'One-on-one consultations',
        'Technical documentation',
        'Follow-up support'
      ],
      highlights: ['Professional Training', 'Certification', 'Follow-up Support'],
      icon: <Tractor className="h-8 w-8 text-orange-500" />
    }
  ];

  const availableTimes = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Wanjiku",
      role: "Agricultural Researcher",
      rating: 5,
      comment: "Incredible experience! The smart farming techniques demonstrated here are truly revolutionary. Our students learned so much."
    },
    {
      name: "James Ochieng",
      role: "Local Farmer",
      comment: "The technical workshop changed how I approach farming. The IoT systems have increased my yields by 40%."
    },
    {
      name: "Mary Kimani",
      role: "School Principal",
      comment: "Perfect educational experience for our students. They're now passionate about modern agriculture!"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Booking request submitted! We will contact you within 24 hours to confirm your visit.');
  };

  const handlePackageSelect = (pkg) => {
    // Navigate to booking confirmation page with selected package
    navigate('/booking-confirmation', { state: { selectedPackage: pkg } });
  };

  const totalPrice = selectedPackage ? selectedPackage.price * groupSize : 0;

  return (
    <div className="min-h-screen bg-gray-50">
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
              Visit Our <span className="text-primary">Smart Farm</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience the future of agriculture firsthand. Book a visit to Ayoo Smart Farm 
              and discover how technology is revolutionizing farming in Kenya.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <MapPin className="h-4 w-4 text-red-500" />
                <span>Siaya County, Kenya</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Calendar className="h-4 w-4 text-blue-500" />
                <span>Open Daily 8AM - 6PM</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Users className="h-4 w-4 text-purple-500" />
                <span>Groups Welcome</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Visit Packages */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Choose Your Experience</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {visitPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card 
                    className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-primary/50`}
                    onClick={() => handlePackageSelect(pkg)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        {pkg.icon}
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            KSh {pkg.price.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500">per person</div>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{pkg.name}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {pkg.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          Max {pkg.maxGroup}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{pkg.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pkg.highlights.map((highlight, idx) => (
                          <Badge key={idx} variant="secondary">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">What's Included:</h4>
                        <ul className="space-y-1">
                          {pkg.includes.map((item, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Our Visitors Say</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < (testimonial.rating || 5) 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Book Your Visit</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedPackage ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Selected Package Summary */}
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800">{selectedPackage.name}</h4>
                        <p className="text-sm text-green-600">{selectedPackage.duration}</p>
                        <p className="text-lg font-bold text-green-800">
                          KSh {selectedPackage.price.toLocaleString()} per person
                        </p>
                      </div>

                      {/* Group Size */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Group Size (Max {selectedPackage.maxGroup})
                        </label>
                        <select
                          value={groupSize}
                          onChange={(e) => setGroupSize(parseInt(e.target.value))}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          {[...Array(selectedPackage.maxGroup)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1} {i === 0 ? 'person' : 'people'}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Date Selection */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>

                      {/* Time Selection */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time
                        </label>
                        <select
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        >
                          <option value="">Select time</option>
                          {availableTimes.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>

                      {/* Contact Information */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+254..."
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Organization (Optional)
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Special Requests
                        </label>
                        <textarea
                          name="specialRequests"
                          value={formData.specialRequests}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Any special requirements or questions..."
                        />
                      </div>

                      {/* Total */}
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center text-lg font-semibold">
                          <span>Total Cost:</span>
                          <span className="text-primary">KSh {totalPrice.toLocaleString()}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          For {groupSize} {groupSize === 1 ? 'person' : 'people'}
                        </p>
                      </div>

                      <Button type="submit" className="w-full">
                        Submit Booking Request
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        We'll contact you within 24 hours to confirm availability and payment details.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">
                        Please select a visit package to continue with booking.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Call Us</p>
                        <p className="text-sm text-gray-600">+254 743 993 715</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Email Us</p>
                        <p className="text-sm text-gray-600">visits@ayoosmartfarm.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-gray-600">Siaya County, Kenya</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookVisit;


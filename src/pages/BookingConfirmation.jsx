import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  User,
  CheckCircle,
  ArrowLeft,
  CreditCard,
  Star,
  Info
} from 'lucide-react';
import { motion } from 'framer-motion';

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingNumber, setBookingNumber] = useState('');
  
  const [bookingInfo, setBookingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    groupSize: 1,
    visitDate: '',
    visitTime: '',
    paymentMethod: 'mpesa',
    specialRequests: '',
    emergencyContact: '',
    emergencyPhone: '',
    dietaryRequirements: '',
    accessibilityNeeds: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Get package data from location state
    const packageData = location.state?.selectedPackage;
    if (packageData) {
      setSelectedPackage(packageData);
      setBookingInfo(prev => ({
        ...prev,
        groupSize: 1
      }));
    } else {
      navigate('/book-visit');
    }
  }, [location.state, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!bookingInfo.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!bookingInfo.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!bookingInfo.email.trim()) newErrors.email = 'Email is required';
    if (!bookingInfo.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!bookingInfo.visitDate) newErrors.visitDate = 'Visit date is required';
    if (!bookingInfo.visitTime) newErrors.visitTime = 'Visit time is required';
    if (!bookingInfo.emergencyContact.trim()) newErrors.emergencyContact = 'Emergency contact is required';
    if (!bookingInfo.emergencyPhone.trim()) newErrors.emergencyPhone = 'Emergency phone is required';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (bookingInfo.email && !emailRegex.test(bookingInfo.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation (Kenyan format)
    const phoneRegex = /^(\+254|0)[17]\d{8}$/;
    if (bookingInfo.phone && !phoneRegex.test(bookingInfo.phone)) {
      newErrors.phone = 'Please enter a valid Kenyan phone number';
    }
    
    if (bookingInfo.emergencyPhone && !phoneRegex.test(bookingInfo.emergencyPhone)) {
      newErrors.emergencyPhone = 'Please enter a valid emergency phone number';
    }
    
    // Date validation (must be future date)
    const selectedDate = new Date(bookingInfo.visitDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (bookingInfo.visitDate && selectedDate < today) {
      newErrors.visitDate = 'Visit date must be in the future';
    }
    
    // Group size validation
    if (selectedPackage && bookingInfo.groupSize > selectedPackage.maxGroup) {
      newErrors.groupSize = `Group size cannot exceed ${selectedPackage.maxGroup} people`;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Generate booking number
    const bookingNum = 'AYO-VISIT-' + Date.now().toString().slice(-6);
    setBookingNumber(bookingNum);
    
    // Save booking to localStorage (in real app, this would be sent to backend)
    const booking = {
      bookingNumber: bookingNum,
      package: selectedPackage,
      bookingInfo,
      totalCost: selectedPackage.price * bookingInfo.groupSize,
      bookingDate: new Date().toISOString(),
      status: 'pending'
    };
    
    const existingBookings = JSON.parse(localStorage.getItem('ayoo-bookings') || '[]');
    existingBookings.push(booking);
    localStorage.setItem('ayoo-bookings', JSON.stringify(existingBookings));
    
    setBookingConfirmed(true);
  };

  const availableTimes = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const paymentMethods = [
    { id: 'mpesa', name: 'M-Pesa', description: 'Pay via M-Pesa mobile money' },
    { id: 'card', name: 'Credit/Debit Card', description: 'Visa, Mastercard accepted' },
    { id: 'bank', name: 'Bank Transfer', description: 'Direct bank transfer' },
    { id: 'cash', name: 'Pay on Arrival', description: 'Pay when you arrive at the farm' }
  ];

  if (!selectedPackage) {
    return <div>Loading...</div>;
  }

  if (bookingConfirmed) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Booking Confirmed!
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                Thank you for booking your visit to Ayoo Smart Farm. We're excited to welcome you and show you the future of agriculture!
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Booking Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-green-700">
                      <strong>Booking Number:</strong> {bookingNumber}
                    </p>
                    <p className="text-green-700">
                      <strong>Package:</strong> {selectedPackage.name}
                    </p>
                    <p className="text-green-700">
                      <strong>Group Size:</strong> {bookingInfo.groupSize} {bookingInfo.groupSize === 1 ? 'person' : 'people'}
                    </p>
                  </div>
                  <div>
                    <p className="text-green-700">
                      <strong>Visit Date:</strong> {new Date(bookingInfo.visitDate).toLocaleDateString()}
                    </p>
                    <p className="text-green-700">
                      <strong>Visit Time:</strong> {bookingInfo.visitTime}
                    </p>
                    <p className="text-green-700">
                      <strong>Total Cost:</strong> KSh {(selectedPackage.price * bookingInfo.groupSize).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">What's Next?</h3>
                <div className="text-left space-y-2 text-blue-700">
                  <p>• We will contact you at <strong>{bookingInfo.phone}</strong> within 24 hours to confirm your booking</p>
                  <p>• You will receive detailed directions and preparation instructions via email</p>
                  <p>• Payment instructions will be provided during confirmation call</p>
                  <p>• Please arrive 15 minutes before your scheduled time</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => navigate('/book-visit')} variant="outline">
                    Book Another Visit
                  </Button>
                  <Button onClick={() => navigate('/')}>
                    Back to Home
                  </Button>
                </div>
                
                <div className="text-sm text-gray-500">
                  <p>Need to make changes? Call us at <strong>+254 743 993 715</strong></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const totalCost = selectedPackage.price * bookingInfo.groupSize;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/book-visit')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Packages</span>
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">Confirm Your Visit</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleConfirmBooking} className="space-y-6">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Personal Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={bookingInfo.firstName}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
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
                      <input
                        type="text"
                        name="lastName"
                        value={bookingInfo.lastName}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={bookingInfo.email}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingInfo.phone}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+254 7XX XXX XXX"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization (Optional)
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={bookingInfo.organization}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="School, company, or organization name"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Visit Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Visit Details</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Group Size * (Max {selectedPackage.maxGroup})
                    </label>
                    <select
                      name="groupSize"
                      value={bookingInfo.groupSize}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.groupSize ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      {[...Array(selectedPackage.maxGroup)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? 'person' : 'people'}
                        </option>
                      ))}
                    </select>
                    {errors.groupSize && (
                      <p className="text-red-500 text-sm mt-1">{errors.groupSize}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Visit Date *
                      </label>
                      <input
                        type="date"
                        name="visitDate"
                        value={bookingInfo.visitDate}
                        onChange={handleInputChange}
                        min={new Date(Date.now() + 86400000).toISOString().split('T')[0]} // Tomorrow
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.visitDate ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.visitDate && (
                        <p className="text-red-500 text-sm mt-1">{errors.visitDate}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        name="visitTime"
                        value={bookingInfo.visitTime}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.visitTime ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select time slot</option>
                        {availableTimes.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                      {errors.visitTime && (
                        <p className="text-red-500 text-sm mt-1">{errors.visitTime}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>Emergency Contact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Emergency Contact Name *
                      </label>
                      <input
                        type="text"
                        name="emergencyContact"
                        value={bookingInfo.emergencyContact}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.emergencyContact ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Full name of emergency contact"
                      />
                      {errors.emergencyContact && (
                        <p className="text-red-500 text-sm mt-1">{errors.emergencyContact}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Emergency Contact Phone *
                      </label>
                      <input
                        type="tel"
                        name="emergencyPhone"
                        value={bookingInfo.emergencyPhone}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.emergencyPhone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+254 7XX XXX XXX"
                      />
                      {errors.emergencyPhone && (
                        <p className="text-red-500 text-sm mt-1">{errors.emergencyPhone}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Info className="h-5 w-5" />
                    <span>Additional Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dietary Requirements (Optional)
                    </label>
                    <input
                      type="text"
                      name="dietaryRequirements"
                      value={bookingInfo.dietaryRequirements}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g., Vegetarian, Halal, Allergies"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Accessibility Needs (Optional)
                    </label>
                    <input
                      type="text"
                      name="accessibilityNeeds"
                      value={bookingInfo.accessibilityNeeds}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g., Wheelchair access, mobility assistance"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      name="specialRequests"
                      value={bookingInfo.specialRequests}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Any special requests or questions..."
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>Payment Method</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {paymentMethods.map(method => (
                      <label key={method.id} className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.id}
                          checked={bookingInfo.paymentMethod === method.id}
                          onChange={handleInputChange}
                          className="text-primary focus:ring-primary"
                        />
                        <div>
                          <div className="font-medium">{method.name}</div>
                          <div className="text-sm text-gray-500">{method.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Booking Summary</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Package Details */}
                    <div className="border-b pb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        {selectedPackage.icon}
                        <h3 className="font-semibold text-lg">{selectedPackage.name}</h3>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{selectedPackage.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4" />
                          <span>Max {selectedPackage.maxGroup} people</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Booking Details */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Package Price:</span>
                        <span>KSh {selectedPackage.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Group Size:</span>
                        <span>{bookingInfo.groupSize} {bookingInfo.groupSize === 1 ? 'person' : 'people'}</span>
                      </div>
                      {bookingInfo.visitDate && (
                        <div className="flex justify-between">
                          <span>Visit Date:</span>
                          <span>{new Date(bookingInfo.visitDate).toLocaleDateString()}</span>
                        </div>
                      )}
                      {bookingInfo.visitTime && (
                        <div className="flex justify-between">
                          <span>Visit Time:</span>
                          <span>{bookingInfo.visitTime}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total Cost:</span>
                        <span className="text-primary">KSh {totalCost.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleConfirmBooking}
                      className="w-full"
                      size="lg"
                    >
                      Confirm Booking
                    </Button>
                    
                    <div className="text-xs text-gray-500 text-center">
                      We'll contact you within 24 hours to confirm availability and payment details.
                    </div>
                  </div>
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

export default BookingConfirmation;


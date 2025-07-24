import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import ayooLogo from '../assets/ayoo-logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={ayooLogo} alt="Ayoo Smart Farm" className="h-10 w-auto rounded-md" />
              <span className="text-xl font-bold">Ayoo Smart Farm</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Cultivating Tomorrow's Agriculture, Today. Revolutionizing agriculture in Kenya through smart technology, IoT solutions, and data-driven farming practices. 
              Helping farmers in Siaya and across Kenya increase yields, reduce costs, and build sustainable farming operations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1APNhGhnL3/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/ayoosmartfarm?igsh=MXhvMnN3NDBiNmxwYw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/254743993715" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/technology" className="text-gray-300 hover:text-primary transition-colors">Technology</Link></li>
              <li><Link to="/benefits" className="text-gray-300 hover:text-primary transition-colors">Benefits</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-300">info@ayoosmartfarm.co.ke</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300">+254 743 993 715</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-gray-300">Siaya County, Kenya</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with our latest news and offers.</p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Ayoo Smart Farm. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


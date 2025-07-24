import { useState } from 'react';
import { Phone, MessageCircle, X, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleWhatsApp = () => {
    window.open('https://wa.me/254743993715?text=Hello! I\'m interested in Ayoo Smart Farm services.', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+254743993715';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 space-y-3"
          >
            {/* WhatsApp Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleWhatsApp}
              className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="h-6 w-6" />
            </motion.button>

            {/* Call Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCall}
              className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
              title="Call us"
            >
              <Phone className="h-6 w-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMenu}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600 text-white' 
            : 'bg-primary hover:bg-primary/90 text-white'
        }`}
        title={isOpen ? 'Close menu' : 'Contact us'}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;


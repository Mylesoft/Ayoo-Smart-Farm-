import { motion } from 'framer-motion';
import { Leaf, Droplets, Sun } from 'lucide-react';

const LoadingSpinner = ({ size = 'md', message = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        {/* Rotating circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className={`${sizeClasses[size]} border-4 border-green-200 border-t-green-500 rounded-full`}
        />
        
        {/* Center icon that pulses */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Leaf className={`${iconSizes[size]} text-green-500`} />
        </motion.div>
      </div>
      
      {/* Animated dots */}
      <div className="flex space-x-1">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: index * 0.2
            }}
            className="w-2 h-2 bg-green-500 rounded-full"
          />
        ))}
      </div>
      
      {message && (
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-600 text-sm font-medium"
        >
          {message}
        </motion.p>
      )}
    </div>
  );
};

// Farm-themed page loader
export const FarmPageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Sun */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -top-4 -right-4"
          >
            <Sun className="h-8 w-8 text-yellow-500" />
          </motion.div>
          
          {/* Main plant growing animation */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 80 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="w-2 bg-green-500 mx-auto rounded-t-full"
          />
          
          {/* Leaves */}
          <motion.div
            animate={{ scale: [0, 1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="flex justify-center space-x-2 -mt-2"
          >
            <Leaf className="h-6 w-6 text-green-400 transform -rotate-45" />
            <Leaf className="h-6 w-6 text-green-400 transform rotate-45" />
          </motion.div>
          
          {/* Water drops */}
          <motion.div
            animate={{ y: [0, 20], opacity: [1, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 1 }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
          >
            <Droplets className="h-4 w-4 text-blue-500" />
          </motion.div>
        </div>
        
        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-2xl font-bold text-gray-800 mb-2"
        >
          Growing Your Experience...
        </motion.h2>
        
        <motion.p
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="text-gray-600"
        >
          Cultivating the best smart farming solutions
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingSpinner;


import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import DarkModeToggle from './DarkModeToggle';
import ayooLogo from '../assets/ayoo-logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Technology', path: '/technology' },
    { name: 'Benefits', path: '/benefits' }
  ];

  const productsItems = [
    { name: 'Shop', path: '/shop' },
    { name: 'Book Visit', path: '/book-visit' },
    { name: 'Advanced Features', path: '/advanced-features' }
  ];

  const resourcesItems = [
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-leafy-green/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src={ayooLogo} 
                  alt="Ayoo Smart Farm" 
                  className="h-10 w-10 rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-200" 
                />
                <div className="absolute inset-0 bg-ayoo-green/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-earth-brown brand-heading group-hover:text-ayoo-green transition-colors duration-200">
                  Ayoo Smart Farm
                </span>
                <span className="text-xs text-earth-brown/60 brand-tagline hidden sm:block">
                  Cultivating Tomorrow's Agriculture
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-white bg-ayoo-green shadow-md'
                    : 'text-earth-brown hover:text-ayoo-green hover:bg-leafy-green/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-earth-brown hover:text-ayoo-green hover:bg-leafy-green/20 transition-all duration-200"
              >
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {dropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-leafy-green/20 py-2"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {productsItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-earth-brown hover:text-ayoo-green hover:bg-leafy-green/10 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-earth-brown hover:text-ayoo-green hover:bg-leafy-green/20 transition-all duration-200"
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {dropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-leafy-green/20 py-2"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {resourcesItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-earth-brown hover:text-ayoo-green hover:bg-leafy-green/10 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-leafy-green/30">
              <DarkModeToggle />
              <Button 
                variant="outline" 
                size="sm"
                className="border-ayoo-green text-ayoo-green hover:bg-ayoo-green hover:text-white transition-all duration-200"
                asChild
              >
                <a 
                  href="https://vgh0i1co0z9z.manus.space/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Farm Login</span>
                </a>
              </Button>
              <Button 
                size="sm" 
                className="bg-sunshine-yellow text-earth-brown hover:bg-sunshine-yellow/90 font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                asChild
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-earth-brown hover:text-ayoo-green hover:bg-leafy-green/20 focus:outline-none focus:ring-2 focus:ring-ayoo-green transition-all duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/98 backdrop-blur-md border-t border-leafy-green/20 rounded-b-lg">
              {/* Main Navigation */}
              <div className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? 'text-white bg-ayoo-green shadow-md'
                        : 'text-earth-brown hover:text-ayoo-green hover:bg-leafy-green/20'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Products Section */}
              <div className="pt-4 border-t border-leafy-green/20">
                <div className="px-4 py-2 text-sm font-semibold text-earth-brown/70 uppercase tracking-wide">
                  Products
                </div>
                {productsItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-earth-brown hover:text-ayoo-green hover:bg-leafy-green/20 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Resources Section */}
              <div className="pt-4 border-t border-leafy-green/20">
                <div className="px-4 py-2 text-sm font-semibold text-earth-brown/70 uppercase tracking-wide">
                  Resources
                </div>
                {resourcesItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-earth-brown hover:text-ayoo-green hover:bg-leafy-green/20 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-leafy-green/20 space-y-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-ayoo-green text-ayoo-green hover:bg-ayoo-green hover:text-white transition-all duration-200"
                  asChild
                >
                  <a 
                    href="https://vgh0i1co0z9z.manus.space/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <LogIn className="h-4 w-4" />
                    <span>Farm Login</span>
                  </a>
                </Button>
                <Button 
                  className="w-full bg-sunshine-yellow text-earth-brown hover:bg-sunshine-yellow/90 font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                  asChild
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


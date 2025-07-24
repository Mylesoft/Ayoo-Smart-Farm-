import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Technology from './pages/Technology';
import Benefits from './pages/Benefits';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import BookVisit from './pages/BookVisit';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdvancedFeatures from './pages/AdvancedFeatures';
import Checkout from './pages/Checkout';
import BookingConfirmation from './pages/BookingConfirmation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/book-visit" element={<BookVisit />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/advanced-features" element={<AdvancedFeatures />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActionButton />
        <Chatbot />
      </div>
    </Router>
  );
}
export default App;


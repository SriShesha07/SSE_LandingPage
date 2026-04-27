import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          {/* Logo and Company Name */}
          <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
            <div className="brand-logo">SSE</div>
            <div className="brand-text">
              <span className="brand-name">Sri Shakthi Enterprises</span>
              <span className="brand-tagline">Excellence & Innovation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Contact Info */}
          <div className="navbar-contact">
            <a href="tel:9600082704" className="contact-item">
              <FaPhone /> <span>9600082704</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>Home</Link>
            <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>About</Link>
            <Link to="/services" className="mobile-nav-link" onClick={closeMobileMenu}>Services</Link>
            <Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>Contact</Link>
            <div className="mobile-contact">
              <a href="tel:9600082704" className="mobile-contact-item">
                <FaPhone /> 9600082704
              </a>
              <a href="mailto:srishakthi1976@gmail.com" className="mobile-contact-item">
                <FaEnvelope /> srishakthi1976@gmail.com
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

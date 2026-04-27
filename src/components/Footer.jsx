import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-brand">
                <div className="footer-logo">SSE</div>
                <h3>Sri Shakthi Enterprises</h3>
              </div>
              <p className="footer-tagline">
                Excellence and Innovation Built Into Every Design
              </p>
              <p className="footer-description">
                Leading provider of engineering works, fabrication, industrial piping, and materials trading solutions in Chennai.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4>Our Services</h4>
              <ul className="footer-links">
                <li><Link to="/services?service=0">Engineering Works</Link></li>
                <li><Link to="/services?service=1">Fabrication Works</Link></li>
                <li><Link to="/services?service=2">Trolley Works</Link></li>
                <li><Link to="/services?service=3">Rack Works</Link></li>
                <li><Link to="/services?service=4">Industrial Piping</Link></li>
                <li><Link to="/services?service=5">Filter Works</Link></li>
                <li><Link to="/services?service=6">Materials Trading</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Contact Us</h4>
              <ul className="footer-contact">
                <li>
                  <FaMapMarkerAlt className="footer-icon" />
                  <span>No.133, Aadhavan nagar,<br />Thirumazhisai, Chennai-124</span>
                </li>
                <li>
                  <FaPhone className="footer-icon" />
                  <a href="tel:9600082704">9600082704</a>
                </li>
                <li>
                  <FaEnvelope className="footer-icon" />
                  <a href="mailto:srishakthi1976@gmail.com">srishakthi1976@gmail.com</a>
                </li>
              </ul>

              {/* Social Media */}
              {/* <div className="footer-social">
                <a href="#" className="social-link" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Sri Shakthi Enterprises. All rights reserved.</p>
            {/* <p>Designed with <span className="heart">❤</span> for Excellence</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

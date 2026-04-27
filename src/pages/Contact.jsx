import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    setFormStatus('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Hero Banner */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contact Us</h1>
            <p>Get in Touch with Sri Shakthi Enterprises</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p className="contact-intro">
                Have a question or need a quote? We're here to help. Reach out to us through any of the following channels.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h4>Address</h4>
                    <p>No.133, Aadhavan nagar,<br />Thirumazhisai, Chennai-124</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p><a href="tel:9600082704">9600082704</a></p>
                    <p className="contact-person">Sripathi R</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p><a href="mailto:srishakthi1976@gmail.com">srishakthi1976@gmail.com</a></p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <FaClock />
                  </div>
                  <div className="contact-text">
                    <h4>Business Hours</h4>
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us more about your requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg">
                  <FaPaperPlane /> Send Message
                </button>

                {formStatus && <p className="form-status">{formStatus}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-placeholder">
          <div className="map-overlay">
            <h3>Visit Our Location</h3>
            <p>No.133, Aadhavan nagar, Thirumazhisai, Chennai-124</p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Thirumazhisai+Chennai+124" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

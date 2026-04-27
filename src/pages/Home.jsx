import { Link } from 'react-router-dom';
import { FaArrowRight, FaCog, FaIndustry, FaTruck, FaBoxes, FaWrench, FaFilter, FaShoppingCart } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: <FaCog />,
      title: 'Engineering Works',
      description: 'End-to-end engineering from design and installation to commissioning and maintenance for manufacturing plants',
      image: '/images/Engineering Works/hero.png'
    },
    {
      icon: <FaIndustry />,
      title: 'Fabrication Works',
      description: 'Precision cutting, welding, and full-assembly of custom industrial structures and components',
      image: '/images/Fabrication Works/hero.png'
    },
    {
      icon: <FaTruck />,
      title: 'Trolley Works',
      description: 'Custom-built heavy-duty trolleys engineered for efficient shop-floor material movement',
      image: '/images/Trolley Works/hero.png'
    },
    {
      icon: <FaBoxes />,
      title: 'Rack Works',
      description: 'Custom racking systems — from pallet racks to lean pipe shelving — to maximize storage and streamline picking',
      image: '/images/Rack Works/hero.png'
    },
    {
      icon: <FaWrench />,
      title: 'Industrial Piping',
      description: 'Turnkey piping for compressed air, hydraulic oil, coolant, steam, and process gas networks',
      image: '/images/Industrial Piping Works/hero.png'
    },
    {
      icon: <FaFilter />,
      title: 'Filter Works',
      description: 'Comprehensive filtration, fluid conditioning, and oil analysis solutions for hydraulic and lubrication systems',
      image: '/images/Filter Works/hero.png'
    },
    {
      icon: <FaShoppingCart />,
      title: 'Materials Trading',
      description: 'Quality-certified pipe fittings, valves, steel ropes, tapes, PUF panels, metal sheets, and aluminum profiles',
      image: '/images/Materials Trading - Pipe Fittings & Valves/materials_trading_hero.png'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-text animate-slide-up">
              <h1 className="hero-title">
                <span className="hero-logo-text">SSE</span>
                <span className="hero-subtitle">Excellence and Innovation</span>
                <span className="hero-main">Built Into Every Design</span>
              </h1>
              <p className="hero-description">
                Leading provider of engineering works, fabrication, industrial piping, and materials trading solutions in Chennai. Your trusted partner for quality and reliability.
              </p>
              <div className="hero-buttons">
                <Link to="/services" className="btn btn-primary btn-lg">
                  Explore Services <FaArrowRight />
                </Link>
                <Link to="/contact" className="btn btn-outline btn-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-image animate-slide-left">
              <img src="/images/Profile Photo/Profile Photo.jpeg" alt="Sri Shakthi Enterprises" />
              <div className="image-overlay">
                <div className="overlay-badge">
                  <span className="badge-number">4</span>
                  <span className="badge-text">Years of Excellence</span>
                </div>
              </div>
            </div>
            <div className="about-preview-content animate-slide-right">
              <h2>About Sri Shakthi Enterprises</h2>
              <p className="lead">
                Delivering excellence and innovation in every project since 2021.
              </p>
              <p>
                At Sri Shakthi Enterprises, we specialize in providing comprehensive engineering solutions, 
                fabrication services, and quality materials trading. Our commitment to customer delight and 
                quality response has made us a trusted name in the industry.
              </p>
              <div className="mission-vision">
                <div className="mv-card">
                  <h4>Our Mission</h4>
                  <p>Accelerate to reach out potential clients to build business through customer delight and quality response</p>
                </div>
                <div className="mv-card">
                  <h4>Our Vision</h4>
                  <p>Delight the customer beyond expectation and give employment for many people</p>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-section bg-off-white">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions for all your engineering and materials needs
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay">
                    <div className="service-icon">{service.icon}</div>
                  </div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={`/services?service=${index}`} className="service-link">
                    Learn More <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{marginTop: 'var(--spacing-xl)'}}>
            <Link to="/services" className="btn btn-primary btn-lg">
              View All Services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why Choose Us</h2>
            <p className="section-subtitle">
              Our commitment to excellence drives everything we do
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-number">01</div>
              <h4>Effective System Design</h4>
              <p>Innovative solutions tailored to your specific requirements</p>
            </div>
            <div className="value-card">
              <div className="value-number">02</div>
              <h4>Quality Assurance</h4>
              <p>Stage-wise quality confirmation and rigorous inspection</p>
            </div>
            <div className="value-card">
              <div className="value-number">03</div>
              <h4>Customer Support</h4>
              <p>Dedicated support team ensuring customer delight</p>
            </div>
            <div className="value-card">
              <div className="value-number">04</div>
              <h4>Trust in Service</h4>
              <p>Building long-term relationships through reliability</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Get in touch with us today and let's build something amazing together</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-gold btn-lg">
                Contact Us Now <FaArrowRight />
              </Link>
              <a href="tel:9600082704" className="btn btn-outline btn-lg">
                Call: 9600082704
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { FaCheckCircle, FaBullseye, FaEye, FaCog, FaTools, FaHandshake, FaAward } from 'react-icons/fa';
import './About.css';

const About = () => {
  const coreValues = [
    { icon: <FaCog />, title: 'Effective System Design', description: 'Innovative solutions tailored to your specific requirements' },
    { icon: <FaTools />, title: 'Equipment Specification', description: 'Precise specifications for optimal performance' },
    { icon: <FaHandshake />, title: 'Customer Support', description: 'Dedicated support ensuring customer delight' },
    { icon: <FaCheckCircle />, title: 'Quality Assurance', description: 'Stage-wise quality confirmation and inspection' },
    { icon: <FaAward />, title: 'Trust in Service', description: 'Building long-term relationships through reliability' },
    { icon: <FaBullseye />, title: 'Alternative Technology', description: 'Providing actual solutions and innovative alternatives' }
  ];

  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container">
          <div className="about-hero-content">
            <h1>About Sri Shakthi Enterprises</h1>
            <p>Excellence and Innovation Built Into Every Design</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Who We Are</h2>
              <p className="lead">
                Sri Shakthi Enterprises has been a trusted name in engineering works, fabrication, and materials trading since 2021.
              </p>
              <p>
                Based in Chennai, we specialize in providing comprehensive solutions for all your engineering and industrial needs. 
                Our commitment to quality, innovation, and customer satisfaction has made us a preferred partner for businesses 
                across various industries.
              </p>
              <p>
                With decades of experience and a team of skilled professionals, we deliver projects that exceed expectations. 
                From engineering works and fabrication to industrial piping and materials trading, we handle every aspect with 
                precision and care.
              </p>
            </div>
            <div className="about-image">
              <img src="/images/Profile Photo/Profile Photo.jpeg" alt="Sri Shakthi Enterprises" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mv-box mission-box">
              <div className="mv-icon">
                <FaBullseye />
              </div>
              <h3>Our Mission</h3>
              <p>
                Accelerate to reach out potential clients to build business through customer delight and quality response. 
                We strive to deliver exceptional service that not only meets but exceeds our clients' expectations.
              </p>
            </div>
            <div className="mv-box vision-box">
              <div className="mv-icon">
                <FaEye />
              </div>
              <h3>Our Vision</h3>
              <p>
                Our vision is to delight the customer beyond expectation and give employment for many people. 
                We aim to be the leading provider of engineering and materials solutions while creating opportunities for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>
          <div className="core-values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="core-value-card">
                <div className="core-value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-header text-center">
            <h2>Leadership</h2>
            <p className="section-subtitle">
              Meet the person behind our success
            </p>
          </div>
          <div className="team-section">
            <div className="team-card">
              <div className="team-image">
                <img src="/images/Profile Photo/Profile Photo.jpeg" alt="Sripathi R" />
              </div>
              <div className="team-info">
                <h3>Sripathi R</h3>
                <p className="team-role">Founder & Managing Director</p>
                <p className="team-description">
                  With over four decades of experience in the engineering and materials industry, Sripathi R has built 
                  Sri Shakthi Enterprises into a trusted name known for quality, reliability, and innovation.
                </p>
                <div className="team-contact">
                  <p><strong>Mobile:</strong> <a href="tel:9600082704">9600082704</a></p>
                  <p><strong>Email:</strong> <a href="mailto:srishakthi1976@gmail.com">srishakthi1976@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

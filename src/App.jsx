import { useState, useEffect } from 'react'
import './App.css'
import house1 from './assets/house1.jpg'
import house2 from './assets/house2.jpg'
import handshake from './assets/handshake.jpg'
import house4 from './assets/house4.jpg'
import house3 from './assets/house3.jpg'
import apartment from './assets/apartment.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  // const navbar = ({ activeSection, scrollToSection }) => 
  const [isOpen, setIsOpen] = useState(false);
  

  // Smooth scrolling navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'values', 'properties', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      {/* Navigation Header */}

<header className="header">
  <nav className="navbar">
    <div className="nav-container">
      <div className="logo">
        <h2>HOME D HOME PROPERTY LTD</h2>
      </div>
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>
      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("home")
              setIsOpen(false) // close after click
            }}
            className={activeSection === "home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("about")
              setIsOpen(false)
            }}
            className={activeSection === "about" ? "nav-link active" : "nav-link"}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("services")
              setIsOpen(false)
            }}
            className={activeSection === "services" ? "nav-link active" : "nav-link"}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#values"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("values")
              setIsOpen(false)
            }}
            className={activeSection === "values" ? "nav-link active" : "nav-link"}
          >
            Our Values
          </a>
        </li>
        <li>
          <a
            href="#properties"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("properties")
              setIsOpen(false)
            }}
            className={activeSection === "properties" ? "nav-link active" : "nav-link"}
          >
            Properties
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("contact")
              setIsOpen(false)
            }}
            className={activeSection === "contact" ? "nav-link active" : "nav-link"}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>


      {/* Hero Banner */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Making Every Home a Reality in Africa</h1>
          <p>Where dreams begin, families grow, and legacies are built</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection('properties')}>Explore Properties</button>
            <button className="btn-secondary" onClick={() => scrollToSection('contact')}>Contact Us Today</button>
          </div>
        </div>
        <div className="hero-image">
          <img
              src={house1}
              alt='a beautiful house'
              className='hero-placeholder'
              />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Us</h2>
              <p>At Home D Home Property Ltd, we believe a home is more than just a place to stay—it's the foundation of dreams, security, and belonging. With a commitment to integrity, excellence, accountability, and innovation, we are redefining the property market across Africa.</p>
              <button className="btn-primary" onClick={() => scrollToSection('values')}>Learn More About Us</button>
            </div>
            <div className="about-image">
              <img
              src={house2}
              // alt='Happy Family Home'
              className='image-placeholder'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>To become a reality in every home in Africa. We envision a continent where quality, comfort, and affordability are within reach for every family.</p>
            </div>
            <div className="vm-card">
              <div className="vm-icon">
                <i className="fas fa-compass"></i>
              </div>
              <h3>Our Mission</h3>
              <p>Excellent delivery of service with great innovation and down-to-earth customer relationships. We transform lives by helping people move closer to their dream homes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="values">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Integrity</h3>
              <p>Honesty and transparency at all times. Your trust is our foundation.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Excellence</h3>
              <p>Quality that exceeds expectations in every service we deliver.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Accountability</h3>
              <p>Taking responsibility for every action and promise we make.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>Creative solutions for modern property needs and evolving markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-home"></i>
              </div>
              <h3>Property Sales & Acquisition</h3>
              <p>Helping individuals, families, and businesses secure properties that match their dreams and budgets.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Property Management</h3>
              <p>Providing seamless, stress-free management of properties to maximize value for owners and satisfaction for tenants.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Real Estate Investment Advisory</h3>
              <p>Guiding investors with insights, market intelligence, and innovative solutions that yield lasting returns.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-key"></i>
              </div>
              <h3>Leasing & Rentals</h3>
              <p>Connecting clients with the right homes, apartments, or commercial spaces tailored to their needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <div className="container">
          <div className="why-content">
            <div className="why-text">
              <h2>Why Choose HOME D HOME PROPERTY LTD?</h2>
              <ul className="why-list">
                <li><i className="fas fa-check"></i> Trust & Transparency - Rooted in integrity and honesty</li>
                <li><i className="fas fa-check"></i> Tailored Solutions - Every client's journey is unique</li>
                <li><i className="fas fa-check"></i> Pan-African Reach - Committed to homes across Africa</li>
                <li><i className="fas fa-check"></i> People-First Service - Professionalism with genuine care</li>
              </ul>
            </div>
            <div className="why-image">
              {/* <div className="">Client Handshake</div> */}
              <img 
              src={handshake} 
              alt="shaking hands"
              className='image-placeholder' />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section id="properties" className="properties">
        <div className="container">
          <h2>Featured Properties</h2>
          <div className="properties-grid">
            <div className="property-card">
              <div className="property-image">
                <img 
                src={house4} 
                alt="" 
                className='image-placeholder'
                />
              </div>
              <div className="property-info">
                <h3>Luxury Villa in Lagos</h3>
                <p>4 bedrooms, 3 bathrooms, swimming pool</p>
                <div className="property-buttons">
                  <button className="btn-small">View Details</button>
                  <button className="btn-small-outline">Book Inspection</button>
                </div>
              </div>
            </div>
            <div className="property-card">
              <div className="property-image">
                 <img 
                src={house3} 
                alt="" 
                className='image-placeholder'
                />
              </div>
              <div className="property-info">
                <h3>Family Home in Abuja</h3>
                <p>3 bedrooms, 2 bathrooms, garden</p>
                <div className="property-buttons">
                  <button className="btn-small">View Details</button>
                  <button className="btn-small-outline">Book Inspection</button>
                </div>
              </div>
            </div>
            <div className="property-card">
              <div className="property-image">
                 <img 
                src={apartment} 
                alt="" 
                className='image-placeholder'
                />
              </div>
              <div className="property-info">
                <h3>Modern Apartments</h3>
                <p>2 bedrooms, 1 bathroom, city center</p>
                <div className="property-buttons">
                  <button className="btn-small">View Details</button>
                  <button className="btn-small-outline">Book Inspection</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Are Saying</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Home D Home Property made our dream of owning a home come true. Their professionalism and care throughout the process was exceptional."</p>
                <div className="testimonial-author">
                  <strong>Sarah Johnson</strong>
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The team's integrity and transparency gave us confidence in our investment. We couldn't be happier with our new property."</p>
                <div className="testimonial-author">
                  <strong>Michael Okafor</strong>
                  <span>Abuja, Nigeria</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"From property management to finding the perfect rental, they delivered beyond our expectations. Truly people-first service."</p>
                <div className="testimonial-author">
                  <strong>Amina Hassan</strong>
                  <span>Accra, Ghana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <h2>Let's walk with you on the journey to your dream home</h2>
            <button className="btn-primary-large" onClick={() => scrollToSection('contact')}>Get Started Today</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Contact Information</h3>
              <div className="contact-info">
                <p><i className="fas fa-map-marker-alt"></i> Friendship Junction Opposite Grace Plaza SCC Road Bwari,<br/>BWARI AREA COUNCIL </p>
                <p><i className="fas fa-phone"></i> +234 (0) 123 456 7890</p>
                <p><i className="fas fa-envelope"></i> info@homedhomeproperty.com</p>
              </div>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
                <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Home D Home Property Ltd - All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

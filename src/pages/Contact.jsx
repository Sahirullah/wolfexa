import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logoImage from '../assets/logo (3).png';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for contacting Virtual Library! We will respond within 24 hours.');
      setFormData({ name: '', email: '', phone: '', university: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="contact-page">
      <Header />
      
      <main className="contact-main">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="hero-background">
            <div className="hero-pattern"></div>
            <div className="hero-gradient"></div>
          </div>
          <div className="contact-hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-icon">📞</span>
                <span className="badge-text">Get in Touch</span>
              </div>
              <h1 className="hero-title">
                Let's Connect & Build Something
                <span className="title-highlight"> Amazing Together</span>
              </h1>
              <p className="hero-description">
                Have questions about our educational resources? Need support with your studies? 
                Want to contribute to our growing library? We're here to help you succeed.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-icon">⚡</div>
                  <div className="stat-content">
                    <span className="stat-number">24hrs</span>
                    <span className="stat-label">Response Time</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">👥</div>
                  <div className="stat-content">
                    <span className="stat-number">5K+</span>
                    <span className="stat-label">Students Helped</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">🎓</div>
                  <div className="stat-content">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Universities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-wrapper">
              
              {/* Contact Info Cards */}
              <div className="contact-info">
                <div className="info-header">
                  <h2 className="info-title">Multiple Ways to Reach Us</h2>
                  <p className="info-subtitle">
                    Choose the method that works best for you. We're available across multiple channels.
                  </p>
                </div>

                <div className="contact-cards">
                  <div className="contact-card email-card">
                    <div className="card-header">
                      <div className="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                      </div>
                      <div className="card-badge">Most Popular</div>
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">Email Support</h3>
                      <p className="card-contact">info@virtuallibrary.com</p>
                      <p className="card-description">
                        Get detailed responses to your questions. Perfect for complex inquiries and file sharing.
                      </p>
                      <div className="card-features">
                        <span className="feature">✓ 24hr Response</span>
                        <span className="feature">✓ File Attachments</span>
                        <span className="feature">✓ Detailed Support</span>
                      </div>
                    </div>
                  </div>

                  <div className="contact-card phone-card">
                    <div className="card-header">
                      <div className="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">Phone Support</h3>
                      <p className="card-contact">+234 904-663-1937</p>
                      <p className="card-description">
                        Speak directly with our support team for immediate assistance and guidance.
                      </p>
                      <div className="card-schedule">
                        <div className="schedule-item">
                          <span className="day">Mon - Fri</span>
                          <span className="time">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="schedule-item">
                          <span className="day">Saturday</span>
                          <span className="time">10:00 AM - 4:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="contact-card whatsapp-card">
                    <div className="card-header">
                      <div className="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                        </svg>
                      </div>
                      <div className="card-badge online">5K+ Members</div>
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">WhatsApp Community</h3>
                      <a 
                        href="https://chat.whatsapp.com/LRgagp3fuaM1hk8261RiCy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="card-contact-link"
                      >
                        Join Our Student Community →
                      </a>
                      <p className="card-description">
                        Connect with fellow students, get instant help, and access shared resources 24/7.
                      </p>
                      <div className="community-stats">
                        <div className="stat">
                          <span className="stat-value">5,000+</span>
                          <span className="stat-name">Active Students</span>
                        </div>
                        <div className="stat">
                          <span className="stat-value">24/7</span>
                          <span className="stat-name">Community Support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-wrapper">
                <div className="form-header">
                  <div className="form-logo">
                    <img src={logoImage} alt="Virtual Library" className="form-logo-img" />
                  </div>
                  <h2 className="form-title">Send us a Message</h2>
                  <p className="form-subtitle">
                    Fill out the form below and we'll get back to you within 24 hours with a personalized response.
                  </p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">
                        <span className="label-text">Full Name</span>
                        <span className="label-required">*</span>
                      </label>
                      <div className="input-wrapper">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Enter your full name"
                          required
                        />
                        <div className="input-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        <span className="label-text">Email Address</span>
                        <span className="label-required">*</span>
                      </label>
                      <div className="input-wrapper">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="your.email@example.com"
                          required
                        />
                        <div className="input-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        <span className="label-text">Phone Number</span>
                      </label>
                      <div className="input-wrapper">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="+92 XXX XXXXXXX"
                        />
                        <div className="input-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        <span className="label-text">University/Institution</span>
                      </label>
                      <div className="input-wrapper">
                        <input
                          type="text"
                          name="university"
                          value={formData.university}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="e.g., Virtual University, AIOU"
                        />
                        <div className="input-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label">
                      <span className="label-text">Subject</span>
                      <span className="label-required">*</span>
                    </label>
                    <div className="select-wrapper">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-select"
                        required
                      >
                        <option value="">Please select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="technical">Technical Support</option>
                        <option value="materials">Request Study Materials</option>
                        <option value="contribution">Contribute Materials</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="feedback">Feedback & Suggestions</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="select-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="6,9 12,15 18,9"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label">
                      <span className="label-text">Message</span>
                      <span className="label-required">*</span>
                    </label>
                    <div className="textarea-wrapper">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                        rows="6"
                        placeholder="Please provide detailed information about your inquiry..."
                        required
                      ></textarea>
                      <div className="textarea-counter">
                        {formData.message.length}/500
                      </div>
                    </div>
                  </div>

                  <div className="form-actions">
                    <button 
                      type="submit" 
                      className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="btn-spinner"></div>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="22" y1="2" x2="11" y2="13"/>
                            <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                          </svg>
                        </>
                      )}
                    </button>
                    <p className="form-note">
                      We typically respond within 24 hours. For urgent matters, please use our WhatsApp community.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="faq-container">
            <div className="faq-header">
              <h2 className="faq-title">Frequently Asked Questions</h2>
              <p className="faq-subtitle">
                Quick answers to common questions about Virtual Library
              </p>
            </div>
            
            <div className="faq-grid">
              <div className="faq-card">
                <div className="faq-icon">📚</div>
                <h3 className="faq-question">How do I access study materials?</h3>
                <p className="faq-answer">
                  Join our WhatsApp community where we share thousands of free study materials including handouts, assignments, and past papers from Pakistani universities.
                </p>
              </div>
              
              <div className="faq-card">
                <div className="faq-icon">🎯</div>
                <h3 className="faq-question">Can I request specific materials?</h3>
                <p className="faq-answer">
                  Absolutely! Contact us through any channel and let us know what you need. Our team actively sources requested materials from our network.
                </p>
              </div>
              
              <div className="faq-card">
                <div className="faq-icon">🤝</div>
                <h3 className="faq-question">How can I contribute materials?</h3>
                <p className="faq-answer">
                  We welcome high-quality contributions! Contact us to learn about our submission process and help fellow students succeed.
                </p>
              </div>
              
              <div className="faq-card">
                <div className="faq-icon">💰</div>
                <h3 className="faq-question">Is everything really free?</h3>
                <p className="faq-answer">
                  Yes! Virtual Library is completely free. Our mission is making quality education accessible to all Pakistani students.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
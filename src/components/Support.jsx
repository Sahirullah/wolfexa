import React from 'react';
import './Support.css';

const Support = () => {
  const supportOptions = [
    {
      id: 1,
      title: 'Free Study Materials',
      description: 'Access thousands of handouts, assignments, past papers, and notes from top Pakistani universities - completely free.',
      icon: '📚',
      features: [
        'Handouts & Notes',
        'Past Papers',
        'Assignments',
        'Study Guides'
      ],
      action: 'Browse Materials',
      link: 'https://chat.whatsapp.com/LRgagp3fuaM1hk8261RiCy',
      color: '#FF741F',
      bgGradient: 'linear-gradient(135deg, #FF741F 0%, #ff8c42 100%)'
    },
    {
      id: 2,
      title: 'Contact',
      description: 'Get in touch with our team through multiple channels. We\'re here to help with any questions or concerns.',
      icon: '📞',
      features: [
        'Email Support',
        'Phone Support',
        'WhatsApp Chat',
        'Quick Response'
      ],
      action: 'Contact Us',
      link: '/contact',
      color: '#FF741F',
      bgGradient: 'linear-gradient(135deg, #FF741F 0%, #ff8c42 100%)'
    },
    {
      id: 3,
      title: 'Free Help',
      description: 'Join our community of 5,000+ students for instant help, study tips, and peer support - all completely free.',
      icon: '🤝',
      features: [
        'Community Support',
        'Study Groups',
        'Peer Help',
        'Academic Guidance'
      ],
      action: 'Get Help',
      link: 'https://chat.whatsapp.com/LRgagp3fuaM1hk8261RiCy',
      color: '#FF741F',
      bgGradient: 'linear-gradient(135deg, #FF741F 0%, #ff8c42 100%)'
    }
  ];

  return (
    <section className="support">
      <div className="support-container">
        <div className="support-header">
          <h2 className="support-title">Why Choose Virtual Library?</h2>
          <p className="support-subtitle">
            Everything you need for academic success, all in one place
          </p>
        </div>
        
        <div className="support-grid">
          {supportOptions.map((option) => (
            <div key={option.id} className="support-card" style={{'--support-color': option.color}}>
              <div className="support-background" style={{background: option.bgGradient}}></div>
              
              <div className="support-content">
                <div className="support-icon-wrapper">
                  <div className="support-icon">{option.icon}</div>
                </div>
                
                <h3 className="support-title-card">{option.title}</h3>
                <p className="support-description">{option.description}</p>
                
                <div className="support-features">
                  {option.features.map((feature, index) => (
                    <div key={index} className="support-feature">
                      <span className="feature-dot">•</span>
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="support-action">
                  <div className="support-buttons">
                    <a 
                      href="https://chat.whatsapp.com/LRgagp3fuaM1hk8261RiCy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="support-btn primary"
                    >
                      <span>VU Students</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17l9.2-9.2M17 17V7H7"/>
                      </svg>
                    </a>
                    <a 
                      href="https://chat.whatsapp.com/LRgagp3fuaM1hk8261RiCy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="support-btn secondary"
                    >
                      <span>AIOU Students</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17l9.2-9.2M17 17V7H7"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="support-footer">
          <div className="support-stats">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Study Materials</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5K+</div>
              <div className="stat-label">Happy Students</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Free Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
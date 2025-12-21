import React from 'react';
import logoImage from '../assets/logo (2).png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <img src={logoImage} alt="Wolfexa Logo" className="footer-logo-image" />
              <div>
                <h3 className="footer-logo-text">WOLFEXA</h3>
                <p className="footer-logo-subtitle">Theme Marketplace</p>
              </div>
            </div>
            <p className="footer-description">
              Your trusted marketplace for premium themes and templates. 
              Discover high-quality designs created by talented developers worldwide.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">💼</a>
              <a href="#" className="social-link">🎵</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Marketplace</h4>
            <ul className="footer-links">
              <li><a href="#themes">All Themes</a></li>
              <li><a href="#wordpress">WordPress</a></li>
              <li><a href="#shopify">Shopify</a></li>
              <li><a href="#html">HTML Templates</a></li>
              <li><a href="#react">React Themes</a></li>
              <li><a href="#new">New Arrivals</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Categories</h4>
            <ul className="footer-links">
              <li><a href="#ecommerce">E-commerce</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#business">Business</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#agency">Agency</a></li>
              <li><a href="#education">Education</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#documentation">Documentation</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#community">Community</a></li>
              <li><a href="#tutorials">Tutorials</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Newsletter</h4>
            <p className="newsletter-text">
              Stay updated with our latest themes and exclusive offers.
            </p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-btn">
                Subscribe
              </button>
            </div>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>info@wolfexa.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+234 9046631937</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; 2024 Wolfexa. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
          <div className="footer-bottom-right">
            <div className="payment-methods">
              <span className="payment-text">We Accept:</span>
              <div className="payment-icons">
                <span className="payment-icon">💳</span>
                <span className="payment-icon">🏦</span>
                <span className="payment-icon">💰</span>
                <span className="payment-icon">🔒</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
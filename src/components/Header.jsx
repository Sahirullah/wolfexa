import React, { useState } from 'react';
import logoImage from '../assets/logo (2).png';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="logo-section">
            <img src={logoImage} alt="Wolfexa Logo" className="logo-image" />
            <div>
              <h1 className="logo">WOLFEXA</h1>
              <div className="logo-subtitle">Theme Marketplace</div>
            </div>
          </div>
          
          <div className="header-right">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div className="contact-text">
                  <span className="contact-label">Call Us for help!</span>
                  <span className="contact-value">+234 9046631937</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div className="contact-text">
                  <span className="contact-label">Mail Us</span>
                  <span className="contact-value">info@wolfexa.com</span>
                </div>
              </div>
            </div>
            
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <span className="theme-icon">
                {isDarkMode ? '☀️' : '🌙'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav">
        <div className="nav-container">
          <nav className={isMenuOpen ? 'nav-open' : ''}>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#themes">About Us</a></li>
              <li><a href="#categories">Reviews</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="category-nav">
        <div className="category-container">
          <ul className="category-links">
            <li className="dropdown">
              <a href="#shopify">
                Shopify <span className="dropdown-arrow">▼</span>
              </a>
              <div className="dropdown-menu">
                <a href="#portfolio">Portfolio</a>
                <a href="#shopping">Shopping</a>
                <a href="#agency">Agency</a>
                <a href="#institute">Institute</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#wordpress">
                WordPress <span className="dropdown-arrow">▼</span>
              </a>
              <div className="dropdown-menu">
                <a href="#blog">Blog</a>
                <a href="#business">Business</a>
                <a href="#ecommerce">E-commerce</a>
                <a href="#portfolio">Portfolio</a>
              </div>
            </li>
            <li><a href="#html">HTML</a></li>
            <li className="dropdown">
              <a href="#react">
                React <span className="dropdown-arrow">▼</span>
              </a>
              <div className="dropdown-menu">
                <a href="#dashboard">Dashboard</a>
                <a href="#landing">Landing Page</a>
                <a href="#admin">Admin Panel</a>
              </div>
            </li>
            <li><a href="#php">PHP</a></li>
            <li><a href="#vue">Vue.js</a></li>
            <li><a href="#angular">Angular</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import card1 from '../assets/card1.svg';
import card2 from '../assets/card2.svg';
import card3 from '../assets/card3.svg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Premium Themes & Templates for Your Next Project
          </h1>
          <p className="hero-subtitle">
            Discover thousands of high-quality themes, templates, and digital assets 
            created by talented designers from around the world.
          </p>
          <div className="hero-search">
            <input 
              type="text" 
              placeholder="Search for themes, templates, plugins..."
              className="search-input"
            />
            <button className="search-btn">Search</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Premium Themes</span>
            </div>
            <div className="stat">
              <span className="stat-number">25K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat">
              <span className="stat-number">1M+</span>
              <span className="stat-label">Downloads</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            <div className="floating-card card-1">
              <img src={card1} alt="Theme Preview 1" className="card-image" />
            </div>
            <div className="floating-card card-2">
              <img src={card2} alt="Theme Preview 2" className="card-image" />
            </div>
            <div className="floating-card card-3">
              <img src={card3} alt="Theme Preview 3" className="card-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
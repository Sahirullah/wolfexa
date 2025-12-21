import React from 'react';
import './Themes.css';

// Import card images
import card1Image from '../assets/card1.svg';
import card2Image from '../assets/card2.svg';
import card3Image from '../assets/card3.svg';

const Themes = () => {
  const themes = [
    {
      id: 1,
      name: 'ModernShop Pro',
      category: 'E-commerce',
      price: '$59',
      rating: 4.8,
      reviews: 234,
      image: card1Image,
      tags: ['Responsive', 'SEO Ready', 'Mobile First']
    },
    {
      id: 2,
      name: 'Creative Portfolio',
      category: 'Portfolio',
      price: '$45',
      rating: 4.9,
      reviews: 189,
      image: card2Image,
      tags: ['Creative', 'Animation', 'Gallery']
    },
    {
      id: 3,
      name: 'Business Hub',
      category: 'Business',
      price: '$69',
      rating: 4.7,
      reviews: 312,
      image: card3Image,
      tags: ['Corporate', 'Professional', 'Clean']
    },
    {
      id: 4,
      name: 'BlogMaster',
      category: 'Blog',
      price: '$39',
      rating: 4.6,
      reviews: 156,
      image: card1Image,
      tags: ['Blog', 'Content', 'Typography']
    },
    {
      id: 5,
      name: 'Agency Pro',
      category: 'Agency',
      price: '$79',
      rating: 4.9,
      reviews: 278,
      image: card2Image,
      tags: ['Agency', 'Marketing', 'Modern']
    },
    {
      id: 6,
      name: 'EduPlatform',
      category: 'Education',
      price: '$55',
      rating: 4.8,
      reviews: 203,
      image: card3Image,
      tags: ['Education', 'LMS', 'Interactive']
    }
  ];

  return (
    <section className="themes">
      <div className="themes-container">
        <div className="themes-header">
          <h2 className="themes-title">Featured Themes</h2>
          <p className="themes-subtitle">
            Handpicked premium themes designed by top creators
          </p>
        </div>
        
        <div className="themes-grid">
          {themes.map((theme) => (
            <div key={theme.id} className="theme-card">
              <div className="theme-image">
                <img src={theme.image} alt={theme.name} />
                <div className="theme-overlay">
                  <button className="preview-btn">
                    <span className="btn-icon">👁️</span>
                    Live Preview
                  </button>
                </div>
              </div>
              
              <div className="theme-content">
                <div className="theme-header">
                  <span className="theme-category">{theme.category}</span>
                  <div className="theme-rating">
                    <span className="rating-stars">⭐</span>
                    <span className="rating-value">{theme.rating}</span>
                    <span className="rating-reviews">({theme.reviews})</span>
                  </div>
                </div>
                
                <h3 className="theme-name">{theme.name}</h3>
                
                <div className="theme-tags">
                  {theme.tags.map((tag, index) => (
                    <span key={index} className="theme-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="theme-footer">
                  <div className="theme-price">
                    <span className="price-value">{theme.price}</span>
                  </div>
                  <div className="theme-actions">
                    <button className="buy-btn">
                      <span className="btn-icon">🛒</span>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="themes-footer">
          <button className="load-more-btn">
            Load More Themes
            <span className="btn-arrow">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Themes;
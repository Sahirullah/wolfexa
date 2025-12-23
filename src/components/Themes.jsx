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
      name: 'CS101 Complete Package',
      category: 'Computer Science',
      price: 'Free',
      rating: 4.8,
      reviews: 234,
      image: card1Image,
      tags: ['Handouts', 'Assignments', 'Past Papers']
    },
    {
      id: 2,
      name: 'Mathematics Solved Papers',
      category: 'Mathematics',
      price: 'Free',
      rating: 4.9,
      reviews: 189,
      image: card2Image,
      tags: ['Solutions', 'Formulas', 'Practice']
    },
    {
      id: 3,
      name: 'Physics Lab Reports',
      category: 'Physics',
      price: 'Free',
      rating: 4.7,
      reviews: 312,
      image: card3Image,
      tags: ['Lab Work', 'Experiments', 'Reports']
    },
    {
      id: 4,
      name: 'Islamic Studies Notes',
      category: 'Islamic Studies',
      price: 'Free',
      rating: 4.6,
      reviews: 156,
      image: card1Image,
      tags: ['Quran', 'Hadith', 'Fiqh']
    },
    {
      id: 5,
      name: 'Chemistry Practical Guide',
      category: 'Chemistry',
      price: 'Free',
      rating: 4.9,
      reviews: 278,
      image: card2Image,
      tags: ['Practicals', 'Reactions', 'Formulas']
    },
    {
      id: 6,
      name: 'MCM Project Collection',
      category: 'MCM',
      price: 'Free',
      rating: 4.8,
      reviews: 203,
      image: card3Image,
      tags: ['Projects', 'Media', 'Communication']
    }
  ];

  return (
    <section className="themes">
      <div className="themes-container">
        <div className="themes-header">
          <h2 className="themes-title">Featured Study Materials</h2>
          <p className="themes-subtitle">
            High-quality educational resources curated by top students and educators
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
                    Preview
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
                      <span className="btn-icon">📥</span>
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="themes-footer">
          <button className="load-more-btn">
            Load More Materials
            <span className="btn-arrow">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Themes;
import React from 'react';
import './Themes.css';

const Themes = () => {
  const themes = [
    {
      id: 1,
      name: 'ModernShop Pro',
      category: 'E-commerce',
      price: '$59',
      rating: 4.8,
      reviews: 234,
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f8fafc"/><rect width="300" height="60" fill="%23FF741F"/><rect x="20" y="20" width="40" height="20" fill="white" opacity="0.9"/><rect x="220" y="15" width="60" height="30" fill="white" opacity="0.9"/><rect x="20" y="80" width="260" height="100" fill="white"/><rect x="30" y="90" width="80" height="60" fill="%23e2e8f0"/><rect x="120" y="90" width="80" height="60" fill="%23e2e8f0"/><rect x="210" y="90" width="60" height="60" fill="%23e2e8f0"/><rect x="30" y="160" width="240" height="10" fill="%23cbd5e0"/></svg>',
      tags: ['Responsive', 'SEO Ready', 'Mobile First']
    },
    {
      id: 2,
      name: 'Creative Portfolio',
      category: 'Portfolio',
      price: '$45',
      rating: 4.9,
      reviews: 189,
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f8fafc"/><rect width="300" height="50" fill="%23764BA2"/><circle cx="50" cy="25" r="15" fill="white" opacity="0.9"/><rect x="200" y="15" width="80" height="20" fill="white" opacity="0.9"/><rect x="20" y="70" width="120" height="80" fill="%23e2e8f0"/><rect x="160" y="70" width="120" height="80" fill="%23cbd5e0"/><rect x="20" y="160" width="260" height="8" fill="%23a0aec0"/><rect x="20" y="175" width="180" height="6" fill="%23cbd5e0"/></svg>',
      tags: ['Creative', 'Animation', 'Gallery']
    },
    {
      id: 3,
      name: 'Business Hub',
      category: 'Business',
      price: '$69',
      rating: 4.7,
      reviews: 312,
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f8fafc"/><rect width="300" height="40" fill="%23667eea"/><rect x="20" y="10" width="60" height="20" fill="white" opacity="0.9"/><rect x="200" y="8" width="80" height="24" fill="white" opacity="0.9"/><rect x="20" y="60" width="260" height="120" fill="white"/><rect x="30" y="70" width="240" height="30" fill="%23FF741F"/><rect x="30" y="110" width="110" height="60" fill="%23e2e8f0"/><rect x="160" y="110" width="110" height="60" fill="%23cbd5e0"/></svg>',
      tags: ['Corporate', 'Professional', 'Clean']
    },
    {
      id: 4,
      name: 'BlogMaster',
      category: 'Blog',
      price: '$39',
      rating: 4.6,
      reviews: 156,
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f8fafc"/><rect width="300" height="45" fill="%23a855f7"/><rect x="20" y="12" width="80" height="20" fill="white" opacity="0.9"/><rect x="180" y="10" width="100" height="25" fill="white" opacity="0.9"/><rect x="20" y="65" width="180" height="115" fill="white"/><rect x="220" y="65" width="60" height="115" fill="%23f7fafc"/><rect x="30" y="75" width="160" height="20" fill="%23FF741F"/><rect x="30" y="105" width="160" height="8" fill="%23cbd5e0"/><rect x="30" y="120" width="120" height="6" fill="%23e2e8f0"/></svg>',
      tags: ['Blog', 'Content', 'Typography']
    },
    {
      id: 5,
      name: 'Agency Pro',
      category: 'Agency',
      price: '$79',
      rating: 4.9,
      reviews: 278,
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f8fafc"/><rect width="300" height="55" fill="%23e53e3e"/><rect x="20" y="15" width="70" height="25" fill="white" opacity="0.9"/><rect x="200" y="12" width="80" height="30" fill="white" opacity="0.9"/><rect x="20" y="75" width="260" height="105" fill="white"/><rect x="30" y="85" width="240" height="25" fill="%23FF741F"/><rect x="30" y="120" width="70" height="50" fill="%23e2e8f0"/><rect x="115" y="120" width="70" height="50" fill="%23cbd5e0"/><rect x="200" y="120" width="70" height="50" fill="%23a0aec0"/></svg>',
      tags: ['Agency', 'Marketing', 'Modern']
    },
    {
      id: 6,
      name: 'EduPlatform',
      category: 'Education',
      price: '$55',
      rating: 4.8,
      reviews: 203,
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f8fafc"/><rect width="300" height="50" fill="%2338b2ac"/><rect x="20" y="12" width="90" height="25" fill="white" opacity="0.9"/><rect x="180" y="10" width="100" height="30" fill="white" opacity="0.9"/><rect x="20" y="70" width="260" height="110" fill="white"/><rect x="30" y="80" width="240" height="20" fill="%23FF741F"/><rect x="30" y="110" width="80" height="60" fill="%23e2e8f0"/><rect x="125" y="110" width="80" height="60" fill="%23cbd5e0"/><rect x="220" y="110" width="50" height="60" fill="%23a0aec0"/></svg>',
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
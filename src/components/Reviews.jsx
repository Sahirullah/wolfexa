import React from 'react';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';
import user4 from '../assets/user4.png';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Web Developer',
      company: 'TechStart Inc.',
      avatar: user1,
      rating: 5,
      review: 'Wolfexa has been a game-changer for our projects. The quality of themes is outstanding and the customer support is exceptional. Highly recommended!',
      theme: 'ModernShop Pro',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Creative Director',
      company: 'Design Studio',
      avatar: user2,
      rating: 5,
      review: 'The portfolio themes are absolutely stunning. Clean code, responsive design, and easy customization. Worth every penny!',
      theme: 'Creative Portfolio',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Manager',
      company: 'Growth Agency',
      avatar: user3,
      rating: 4,
      review: 'Great selection of business themes. The documentation is clear and implementation was smooth. Our client loved the final result.',
      theme: 'Business Hub',
      date: '3 weeks ago'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Freelance Designer',
      company: 'Independent',
      avatar: user4,
      rating: 5,
      review: 'As a freelancer, Wolfexa saves me tons of time. Professional themes with modern designs that my clients absolutely love.',
      theme: 'Agency Pro',
      date: '1 week ago'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? 'filled' : 'empty'}`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section className="reviews">
      <div className="reviews-container">
        <div className="reviews-header">
          <h2 className="reviews-title">What Our Customers Say</h2>
          <p className="reviews-subtitle">
            Join thousands of satisfied customers who trust Wolfexa for their web projects
          </p>
        </div>

        <div className="reviews-stats">
          <div className="stat-item">
            <div className="stat-number">4.9</div>
            <div className="stat-label">Average Rating</div>
            <div className="stat-stars">
              {renderStars(5)}
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25K+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Themes Sold</div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="reviewer-avatar"
                  />
                  <div className="reviewer-details">
                    <h4 className="reviewer-name">{review.name}</h4>
                    <p className="reviewer-role">{review.role}</p>
                    <p className="reviewer-company">{review.company}</p>
                  </div>
                </div>
                <div className="review-meta">
                  <div className="review-rating">
                    {renderStars(review.rating)}
                  </div>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>

              <div className="review-content">
                <p className="review-text">"{review.review}"</p>
                <div className="review-theme">
                  <span className="theme-label">Theme purchased:</span>
                  <span className="theme-name">{review.theme}</span>
                </div>
              </div>

              <div className="review-footer">
                <button className="helpful-btn">
                  👍 Helpful
                </button>
                <span className="verified-badge">
                  ✅ Verified Purchase
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Join Our Happy Customers?</h3>
            <p className="cta-subtitle">Browse our collection and find the perfect theme for your project</p>
            <button className="cta-button">
              Browse Themes
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
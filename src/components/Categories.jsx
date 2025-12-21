import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'E-commerce',
      count: '2,450+',
      icon: '🛒',
      description: 'Online store templates',
      color: '#FF741F'
    },
    {
      id: 2,
      name: 'Portfolio',
      count: '1,890+',
      icon: '💼',
      description: 'Creative showcase themes',
      color: '#ff8c42'
    },
    {
      id: 3,
      name: 'Business',
      count: '3,200+',
      icon: '🏢',
      description: 'Corporate website templates',
      color: '#e5650e'
    },
    {
      id: 4,
      name: 'Blog',
      count: '1,650+',
      icon: '📝',
      description: 'Content publishing themes',
      color: '#FF741F'
    },
    {
      id: 5,
      name: 'Agency',
      count: '980+',
      icon: '🎯',
      description: 'Marketing agency templates',
      color: '#ff8c42'
    },
    {
      id: 6,
      name: 'Education',
      count: '750+',
      icon: '🎓',
      description: 'Learning platform themes',
      color: '#e5650e'
    },
    {
      id: 7,
      name: 'Restaurant',
      count: '620+',
      icon: '🍽️',
      description: 'Food & dining templates',
      color: '#FF741F'
    },
    {
      id: 8,
      name: 'Health',
      count: '540+',
      icon: '🏥',
      description: 'Medical & wellness themes',
      color: '#ff8c42'
    }
  ];

  return (
    <section className="categories">
      <div className="categories-container">
        <div className="categories-header">
          <h2 className="categories-title">Browse by Category</h2>
          <p className="categories-subtitle">
            Discover the perfect theme for your project from our curated collection
          </p>
        </div>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-icon" style={{ backgroundColor: category.color }}>
                <span>{category.icon}</span>
              </div>
              <div className="category-content">
                <h3 className="category-name">{category.name}</h3>
                <p className="category-description">{category.description}</p>
                <span className="category-count">{category.count} themes</span>
              </div>
              <div className="category-arrow">→</div>
            </div>
          ))}
        </div>
        
        <div className="categories-footer">
          <button className="view-all-btn">
            View All Categories
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
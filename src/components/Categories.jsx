import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Computer Science',
      count: '2,450+',
      icon: '💻',
      description: 'Programming & CS materials',
      color: '#FF741F'
    },
    {
      id: 2,
      name: 'Mathematics',
      count: '1,890+',
      icon: '📐',
      description: 'Math formulas & solutions',
      color: '#ff8c42'
    },
    {
      id: 3,
      name: 'Physics',
      count: '1,200+',
      icon: '⚛️',
      description: 'Physics concepts & experiments',
      color: '#e5650e'
    },
    {
      id: 4,
      name: 'Chemistry',
      count: '1,650+',
      icon: '🧪',
      description: 'Chemical reactions & formulas',
      color: '#FF741F'
    },
    {
      id: 5,
      name: 'Biology',
      count: '980+',
      icon: '🧬',
      description: 'Life sciences & biology',
      color: '#ff8c42'
    },
    {
      id: 6,
      name: 'Islamic Studies',
      count: '750+',
      icon: '🕌',
      description: 'Islamic knowledge & studies',
      color: '#e5650e'
    },
    {
      id: 7,
      name: 'MCM',
      count: '620+',
      icon: '📺',
      description: 'Mass Communication & Media',
      color: '#FF741F'
    },
    {
      id: 8,
      name: 'General',
      count: '540+',
      icon: '📚',
      description: 'General study materials',
      color: '#ff8c42'
    }
  ];

  return (
    <section className="categories">
      <div className="categories-container">
        <div className="categories-header">
          <h2 className="categories-title">Browse by Subject</h2>
          <p className="categories-subtitle">
            Find study materials organized by academic subjects and universities
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
            View All Subjects
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { finalTermData, finalTermCategories } from '../data/finalTermData';
import './FinalTerm.css';

const FinalTerm = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const papers = finalTermData.map(item => ({
    ...item,
    description: `Download Final Term papers for ${item.title} (${item.code}) in PDF Format.`,
    status: 'Final Term Papers',
    hasLecture: true
  }));

  const categories = finalTermCategories;

  const filteredPapers = selectedCategory === 'all' 
    ? papers 
    : papers.filter(p => p.category === selectedCategory);

  return (
    <div className="final-term-page">
      <Header />
      
      <div className="term-hero">
        <div className="hero-content">
          <div className="hero-icon">📝</div>
          <h1>FINAL TERM Files</h1>
          <p>Virtual University Final Term Exam Files</p>
        </div>
      </div>

      <div className="term-container">
        <div className="category-filter">
          <h2>Select Category</h2>
          <div className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="papers-grid">
          {filteredPapers.map(paper => (
            <div key={paper.id} className="paper-card">
              <div className="card-header">
                <div className="card-icon">{paper.image}</div>
                <span className="status-badge">{paper.status}</span>
              </div>
              
              <div className="card-body">
                <h3>{paper.code}</h3>
                <h4>{paper.title}</h4>
                <p>{paper.description}</p>
              </div>

              <div className="card-footer">
                <div className="card-features">
                  {paper.hasLecture && (
                    <span className="feature-tag">📄 Papers</span>
                  )}
                </div>
                <button className="download-btn">
                  📥 Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPapers.length === 0 && (
          <div className="no-results">
            <p>No papers found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default FinalTerm;

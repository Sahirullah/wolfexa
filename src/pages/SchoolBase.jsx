import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { schoolBoardsData } from '../data/schoolBoardsData';
import './SchoolBase.css';

const SchoolBase = () => {
  return (
    <div className="school-base-page">
      <Header />
      
      <main className="school-base-main">
        {/* Hero Section */}
        <section className="school-base-hero">
          <div className="school-base-hero-container">
            <h1 className="school-base-hero-title">Education Boards of Pakistan</h1>
            <p className="school-base-hero-subtitle">
              Comprehensive guide to all educational boards across Pakistan
            </p>
          </div>
        </section>

        {/* Boards Section */}
        <section className="school-base-content">
          <div className="school-base-container">
            {schoolBoardsData.map((category) => (
              <div key={category.id} className="board-category">
                <h2 className="category-title">{category.category}</h2>
                <div className="boards-grid">
                  {category.boards.map((board, index) => (
                    <div key={index} className="board-card">
                      <div className="board-card-header">
                        <h3 className="board-name">{board.name}</h3>
                      </div>
                      <div className="board-card-body">
                        <p className="board-location">
                          <span className="location-icon">📍</span>
                          {board.location}
                        </p>
                        {board.description && (
                          <p className="board-description">{board.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SchoolBase;

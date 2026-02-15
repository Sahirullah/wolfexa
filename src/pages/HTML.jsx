import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './HTML.css';

const HTML = () => {
  const [showAll, setShowAll] = useState(false);
  const coursesPerPage = 9;

  const htmlCourses = [
    'HTML5 Basics',
    'HTML5 Semantic Elements',
    'HTML5 Forms & Validation',
    'HTML5 Canvas & Graphics',
    'HTML5 Audio & Video',
    'HTML5 Geolocation API',
    'HTML5 Local Storage & Session Storage',
    'HTML5 Web Workers',
    'HTML5 Drag & Drop',
    'HTML5 Accessibility Features',
    'HTML5 Meta Tags & SEO',
    'HTML5 Responsive Images',
    'HTML5 Picture Element',
    'HTML5 Data Attributes',
    'HTML5 Microdata & Schema.org',
    'HTML5 Web Components',
    'HTML5 Shadow DOM',
    'HTML5 Custom Elements',
    'HTML5 Templates & Slots',
    'HTML5 Performance Optimization',
    'HTML5 Best Practices',
    'HTML5 Debugging & DevTools',
    'HTML5 Mobile Optimization',
    'HTML5 Progressive Enhancement',
    'HTML5 Accessibility Testing'
  ];

  return (
    <div className="html-page">
      <Header />
      
      <main className="html-main">
        {/* Hero Section */}
        <section className="html-hero">
          <div className="hero-content">
            <div className="hero-number">1</div>
            <h1>HTML5 Courses</h1>
            <p>Master the foundation of web development with comprehensive HTML5 training</p>
          </div>
        </section>

        {/* Complete Course List */}
        <section className="all-courses-section">
          <div className="container">
            <h2>HTML5 Course Catalog</h2>
            <p className="section-subtitle">Explore our comprehensive list of HTML5 courses covering all aspects of modern web markup</p>
            
            <div className="courses-list">
              {htmlCourses.slice(0, showAll ? htmlCourses.length : coursesPerPage).map((course, index) => (
                <div key={index} className="course-item">
                  <span className="course-number">{index + 1}</span>
                  <span className="course-name">{course}</span>
                </div>
              ))}
            </div>

            {!showAll && htmlCourses.length > coursesPerPage && (
              <div className="show-more-container">
                <button 
                  className="show-more-btn"
                  onClick={() => setShowAll(true)}
                >
                  Show More Courses
                </button>
                <p className="courses-count">Showing {coursesPerPage} of {htmlCourses.length} courses</p>
              </div>
            )}

            {showAll && htmlCourses.length > coursesPerPage && (
              <div className="show-more-container">
                <button 
                  className="show-more-btn show-less"
                  onClick={() => setShowAll(false)}
                >
                  Show Less
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HTML;

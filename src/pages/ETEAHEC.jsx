import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ETEAHEC.css';

const ETEAHEC = () => {
  const [activeTab, setActiveTab] = useState('etea');
  const [expandedMaterial, setExpandedMaterial] = useState(null);

  const eteaInfo = {
    title: 'ETEA (Engineering Testing & Evaluation Authority)',
    description: 'ETEA conducts entrance tests for engineering programs across Pakistan',
    details: [
      {
        id: 1,
        name: 'ETEA Engineering Test',
        icon: '⚙️',
        description: 'Entrance test for engineering universities',
        subjects: ['Physics', 'Chemistry', 'Mathematics'],
        duration: '2 hours',
        totalMarks: '200'
      },
      {
        id: 2,
        name: 'ETEA Medical Test',
        icon: '🏥',
        description: 'Entrance test for medical programs',
        subjects: ['Biology', 'Chemistry', 'Physics'],
        duration: '2 hours',
        totalMarks: '200'
      },
      {
        id: 3,
        name: 'ETEA Dental Test',
        icon: '🦷',
        description: 'Entrance test for dental programs',
        subjects: ['Biology', 'Chemistry', 'Physics'],
        duration: '2 hours',
        totalMarks: '200'
      }
    ]
  };

  const hecInfo = {
    title: 'HEC (Higher Education Commission)',
    description: 'HEC is responsible for quality assurance and accreditation of higher education institutions',
    details: [
      {
        id: 1,
        name: 'HEC Recognized Universities',
        icon: '🎓',
        description: 'List of HEC recognized universities in Pakistan',
        count: '200+',
        type: 'Universities'
      },
      {
        id: 2,
        name: 'HEC Scholarships',
        icon: '💰',
        description: 'Scholarship programs for higher education',
        count: 'Multiple',
        type: 'Opportunities'
      },
      {
        id: 3,
        name: 'HEC Accreditation',
        icon: '✅',
        description: 'Program accreditation and quality assurance',
        count: '1000+',
        type: 'Programs'
      },
      {
        id: 4,
        name: 'HEC Research Grants',
        icon: '🔬',
        description: 'Research funding and grants for academics',
        count: 'Ongoing',
        type: 'Funding'
      }
    ]
  };

  const pastPapers = {
    etea: [
      {
        id: 1,
        title: 'ETEA Engineering 2024',
        year: '2024',
        type: 'Engineering',
        difficulty: 'Advanced',
        downloads: '2.5K',
        icon: '📄'
      },
      {
        id: 2,
        title: 'ETEA Engineering 2023',
        year: '2023',
        type: 'Engineering',
        difficulty: 'Advanced',
        downloads: '3.2K',
        icon: '📄'
      },
      {
        id: 3,
        title: 'ETEA Medical 2024',
        year: '2024',
        type: 'Medical',
        difficulty: 'Advanced',
        downloads: '1.8K',
        icon: '📄'
      },
      {
        id: 4,
        title: 'ETEA Medical 2023',
        year: '2023',
        type: 'Medical',
        difficulty: 'Advanced',
        downloads: '2.1K',
        icon: '📄'
      },
      {
        id: 5,
        title: 'ETEA Dental 2024',
        year: '2024',
        type: 'Dental',
        difficulty: 'Advanced',
        downloads: '1.2K',
        icon: '📄'
      },
      {
        id: 6,
        title: 'ETEA Dental 2023',
        year: '2023',
        type: 'Dental',
        difficulty: 'Advanced',
        downloads: '1.5K',
        icon: '📄'
      }
    ]
  };

  const studyMaterials = {
    etea: [
      {
        id: 1,
        title: 'Physics Complete Guide',
        category: 'Physics',
        type: 'Study Guide',
        pages: '250+',
        icon: '📚',
        topics: ['Mechanics', 'Thermodynamics', 'Waves', 'Electricity']
      },
      {
        id: 2,
        title: 'Chemistry Formulas & Reactions',
        category: 'Chemistry',
        type: 'Reference',
        pages: '180+',
        icon: '⚗️',
        topics: ['Organic', 'Inorganic', 'Physical Chemistry']
      },
      {
        id: 3,
        title: 'Mathematics Problem Bank',
        category: 'Mathematics',
        type: 'Practice',
        pages: '300+',
        icon: '🔢',
        topics: ['Calculus', 'Algebra', 'Geometry', 'Trigonometry']
      },
      {
        id: 4,
        title: 'Biology Concepts & MCQs',
        category: 'Biology',
        type: 'Study Guide',
        pages: '220+',
        icon: '🧬',
        topics: ['Cell Biology', 'Genetics', 'Ecology', 'Physiology']
      },
      {
        id: 5,
        title: 'English Comprehension',
        category: 'English',
        type: 'Practice',
        pages: '150+',
        icon: '📖',
        topics: ['Reading', 'Vocabulary', 'Grammar']
      },
      {
        id: 6,
        title: 'Urdu & Islamic Studies',
        category: 'Urdu',
        type: 'Study Guide',
        pages: '120+',
        icon: '📝',
        topics: ['Literature', 'Grammar', 'Islamic Concepts']
      }
    ]
  };

  return (
    <div className="etea-hec-page">
      <Header />
      
      <main className="etea-hec-main">
        {/* Hero Section */}
        <section className="etea-hec-hero">
          <div className="etea-hec-hero-container">
            <h1 className="etea-hec-hero-title">ETEA & HEC</h1>
            <p className="etea-hec-hero-subtitle">
              Entrance Tests and Higher Education Commission Resources
            </p>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="tab-navigation-section">
          <div className="etea-hec-container">
            <div className="tab-buttons">
              <button 
                className={`tab-btn ${activeTab === 'etea' ? 'active' : ''}`}
                onClick={() => setActiveTab('etea')}
              >
                ⚙️ ETEA
              </button>
              <button 
                className={`tab-btn ${activeTab === 'hec' ? 'active' : ''}`}
                onClick={() => setActiveTab('hec')}
              >
                🎓 HEC
              </button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="etea-hec-content">
          <div className="etea-hec-container">
            {activeTab === 'etea' && (
              <div className="tab-content">
                <div className="content-header">
                  <h2>{eteaInfo.title}</h2>
                  <p>{eteaInfo.description}</p>
                </div>
                <div className="details-grid">
                  {eteaInfo.details.map((item) => (
                    <div key={item.id} className="detail-card">
                      <div className="card-icon">{item.icon}</div>
                      <h3 className="card-title">{item.name}</h3>
                      <p className="card-description">{item.description}</p>
                      <div className="card-info">
                        <div className="info-item">
                          <span className="info-label">Subjects:</span>
                          <span className="info-value">{item.subjects.join(', ')}</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Duration:</span>
                          <span className="info-value">{item.duration}</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Total Marks:</span>
                          <span className="info-value">{item.totalMarks}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'hec' && (
              <div className="tab-content">
                <div className="content-header">
                  <h2>{hecInfo.title}</h2>
                  <p>{hecInfo.description}</p>
                </div>
                <div className="details-grid">
                  {hecInfo.details.map((item) => (
                    <div key={item.id} className="detail-card">
                      <div className="card-icon">{item.icon}</div>
                      <h3 className="card-title">{item.name}</h3>
                      <p className="card-description">{item.description}</p>
                      <div className="card-info">
                        <div className="info-item">
                          <span className="info-label">Count:</span>
                          <span className="info-value">{item.count}</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Type:</span>
                          <span className="info-value">{item.type}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Past Papers Section */}
        {activeTab === 'etea' && (
          <section className="past-papers-section">
            <div className="etea-hec-container">
              <div className="section-header">
                <h2>📄 Past Papers</h2>
                <p>Download previous years' papers to practice and prepare</p>
              </div>
              <div className="papers-grid">
                {pastPapers.etea.map((paper) => (
                  <div key={paper.id} className="paper-card">
                    <div className="paper-header">
                      <span className="paper-icon">{paper.icon}</span>
                      <span className="paper-badge">{paper.year}</span>
                    </div>
                    <h3 className="paper-title">{paper.title}</h3>
                    <div className="paper-meta">
                      <span className="meta-item">
                        <span className="meta-label">Type:</span>
                        <span className="meta-value">{paper.type}</span>
                      </span>
                      <span className="meta-item">
                        <span className="meta-label">Level:</span>
                        <span className="meta-value">{paper.difficulty}</span>
                      </span>
                    </div>
                    <div className="paper-downloads">
                      <span className="download-count">⬇️ {paper.downloads}</span>
                    </div>
                    <button className="download-btn">Download PDF</button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Study Materials Section */}
        {activeTab === 'etea' && (
          <section className="study-materials-section">
            <div className="etea-hec-container">
              <div className="section-header">
                <h2>📚 Important Study Materials</h2>
                <p>Comprehensive resources for all subjects</p>
              </div>
              <div className="materials-grid">
                {studyMaterials.etea.map((material) => (
                  <div 
                    key={material.id} 
                    className="material-card"
                    onClick={() => setExpandedMaterial(expandedMaterial === material.id ? null : material.id)}
                  >
                    <div className="material-header">
                      <span className="material-icon">{material.icon}</span>
                      <span className="material-type">{material.type}</span>
                    </div>
                    <h3 className="material-title">{material.title}</h3>
                    <p className="material-category">{material.category}</p>
                    <div className="material-info">
                      <span className="info-badge">📖 {material.pages} pages</span>
                    </div>
                    {expandedMaterial === material.id && (
                      <div className="material-topics">
                        <p className="topics-label">Topics Covered:</p>
                        <div className="topics-list">
                          {material.topics.map((topic, idx) => (
                            <span key={idx} className="topic-tag">{topic}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    <button className="access-btn">
                      {expandedMaterial === material.id ? 'Hide Details' : 'View Details'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Info Section */}
        <section className="etea-hec-info">
          <div className="etea-hec-container">
            <div className="info-boxes">
              <div className="info-box">
                <h3>📋 Important Information</h3>
                <ul>
                  <li>Check official websites for latest updates</li>
                  <li>Register well in advance for entrance tests</li>
                  <li>Prepare with quality study materials</li>
                  <li>Follow admission guidelines carefully</li>
                </ul>
              </div>
              <div className="info-box">
                <h3>🔗 Useful Links</h3>
                <ul>
                  <li><a href="https://www.etea.edu.pk" target="_blank" rel="noopener noreferrer">ETEA Official Website</a></li>
                  <li><a href="https://www.hec.gov.pk" target="_blank" rel="noopener noreferrer">HEC Official Website</a></li>
                  <li><a href="https://www.hec.gov.pk/english/universities" target="_blank" rel="noopener noreferrer">HEC Recognized Universities</a></li>
                  <li><a href="https://www.hec.gov.pk/english/services/Pages/Scholarships.aspx" target="_blank" rel="noopener noreferrer">HEC Scholarships</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ETEAHEC;

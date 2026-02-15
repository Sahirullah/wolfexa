import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { boardContentData, getDefaultBoardContent } from '../data/boardContentData';
import './BoardDetail.css';

const BoardDetail = () => {
  const { boardName } = useParams();
  const navigate = useNavigate();
  const decodedBoardName = decodeURIComponent(boardName);
  
  const boardContent = boardContentData[decodedBoardName] || getDefaultBoardContent(decodedBoardName);

  return (
    <div className="board-detail-page">
      <Header />
      
      <main className="board-detail-main">
        {/* Hero Section */}
        <section className="board-detail-hero">
          <div className="board-detail-hero-container">
            <button className="back-btn" onClick={() => navigate(-1)}>
              ← Back
            </button>
            <h1 className="board-detail-title">{decodedBoardName}</h1>
            <p className="board-detail-subtitle">
              Explore subjects, past papers, and study guides
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="board-detail-content">
          <div className="board-detail-container">
            
            {/* Subjects Section */}
            <div className="content-section">
              <h2 className="section-title">📚 Subjects</h2>
              <div className="subjects-grid">
                {boardContent.subjects.map((subject) => (
                  <div key={subject.id} className="subject-card">
                    <div className="subject-icon">{subject.icon}</div>
                    <h3 className="subject-name">{subject.name}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Papers Section */}
            <div className="content-section">
              <h2 className="section-title">📄 Past Papers</h2>
              <div className="past-papers-grid">
                {boardContent.pastPapers.map((paper) => (
                  <div key={paper.id} className="past-paper-card">
                    <div className="paper-year">{paper.year}</div>
                    <div className="paper-term">{paper.term}</div>
                    <div className="paper-subjects">{paper.subjects} Subjects</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Study Guides Section */}
            <div className="content-section">
              <h2 className="section-title">📖 Study Guides</h2>
              <div className="guides-grid">
                {boardContent.guides.map((guide) => (
                  <div key={guide.id} className="guide-card">
                    <div className="guide-header">
                      <h3 className="guide-title">{guide.title}</h3>
                    </div>
                    <div className="guide-body">
                      <p className="guide-subject">Subject: {guide.subject}</p>
                      <p className="guide-level">Level: {guide.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BoardDetail;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo (3).png';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { isDarkMode, toggleTheme } = useTheme();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.main-nav')) {
        setIsMenuOpen(false);
      }
      if (isCategoryMenuOpen && !event.target.closest('.category-nav')) {
        setIsCategoryMenuOpen(false);
        setActiveDropdown(null);
        // Remove all active classes
        document.querySelectorAll('.dropdown.active').forEach(el => el.classList.remove('active'));
      }
      // Close dropdown when clicking outside
      if (activeDropdown && !event.target.closest('.dropdown-menu') && !event.target.closest('.dropdown > a')) {
        setActiveDropdown(null);
        document.querySelectorAll('.dropdown.active').forEach(el => el.classList.remove('active'));
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen, isCategoryMenuOpen, activeDropdown]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setIsCategoryMenuOpen(false);
        setActiveDropdown(null);
        // Remove all active classes
        document.querySelectorAll('.dropdown.active').forEach(el => el.classList.remove('active'));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategoryMenu = (e) => {
    e.stopPropagation();
    setIsCategoryMenuOpen(!isCategoryMenuOpen);
  };

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Handle touch events for mobile dropdown
  const handleDropdownClick = (e, dropdownName) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      handleDropdownToggle(dropdownName);
    }
  };

  // Handle mobile category item clicks
  const handleCategoryClick = (e, hasDropdown, dropdownName) => {
    if (window.innerWidth <= 768 && hasDropdown) {
      e.preventDefault();
      handleDropdownToggle(dropdownName);
      
      // Add active class to dropdown
      const dropdownElement = e.target.closest('.dropdown');
      if (dropdownElement) {
        if (activeDropdown === dropdownName) {
          dropdownElement.classList.remove('active');
        } else {
          // Remove active from all dropdowns
          document.querySelectorAll('.dropdown.active').forEach(el => el.classList.remove('active'));
          dropdownElement.classList.add('active');
        }
      }
    }
  };

  // Handle dropdown close
  const handleDropdownClose = () => {
    setActiveDropdown(null);
    document.querySelectorAll('.dropdown.active').forEach(el => el.classList.remove('active'));
  };

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="logo-section">
            <Link to="/" className="logo-link">
              <img src={logoImage} alt="Wolfexa Logo" className="logo-image" />
              <div>
                <h1 className="logo">VIRTUAL LIBRARY</h1>
                <div className="logo-subtitle">Educational Resources</div>
              </div>
            </Link>
          </div>
          
          <div className="header-right">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div className="contact-text">
                  <span className="contact-label">Call Us for help!</span>
                  <span className="contact-value">+923191954292</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div className="contact-text">
                  <span className="contact-label">Mail Us</span>
                  <span className="contact-value">info@virtuallibrary.com</span>
                </div>
              </div>
            </div>
            
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <span className="theme-icon">
                {isDarkMode ? '☀️' : '🌙'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav">
        <div className="nav-container">
          <nav className={isMenuOpen ? 'nav-open' : ''}>
            <ul className="nav-links">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
              <li><a href="#reviews" onClick={() => setIsMenuOpen(false)}>Reviews</a></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
            </ul>
          </nav>

          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="category-nav">
        <div className="category-container">
          <button 
            className={`category-menu-toggle ${isCategoryMenuOpen ? 'active' : ''}`}
            onClick={toggleCategoryMenu}
            aria-label="Toggle category menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <ul className={`category-links ${isCategoryMenuOpen ? 'category-open' : ''}`}>
            <li className="dropdown">
              <a 
                href="#islamic"
                onClick={(e) => handleCategoryClick(e, true, 'islamic')}
              >
                Islamic <span className="dropdown-arrow">▼</span>
              </a>
              <div className={`dropdown-menu ${activeDropdown === 'islamic' ? 'mobile-open' : ''}`}>
                <button className="dropdown-close" onClick={handleDropdownClose}>✕</button>
                <a href="#quran" onClick={handleDropdownClose}>Quran Studies</a>
                <a href="#hadith" onClick={handleDropdownClose}>Hadith</a>
                <a href="#fiqh" onClick={handleDropdownClose}>Fiqh</a>
                <a href="#tafseer" onClick={handleDropdownClose}>Tafseer</a>
              </div>
            </li>
            <li className="dropdown">
              <a 
                href="#virtual-university"
                onClick={(e) => handleCategoryClick(e, true, 'virtual-university')}
              >
                Virtual University <span className="dropdown-arrow">▼</span>
              </a>
              <div className={`dropdown-menu ${activeDropdown === 'virtual-university' ? 'mobile-open' : ''}`}>
                <button className="dropdown-close" onClick={handleDropdownClose}>✕</button>
                <div className="dropdown-submenu">
                  <a href="#handouts">Handouts <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#cs-handouts">CS Subjects</a>
                    <a href="#bio-handouts">Biology</a>
                    <a href="#chem-handouts">Chemistry</a>
                    <a href="#phy-handouts">Physics</a>
                    <a href="#islamyath-handouts">Islamyath</a>
                    <a href="#math-handouts">Mathematics</a>
                    <a href="#mcm-handouts">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#highlighted-handouts">Highlighted Handouts <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#cs-highlighted">CS Subjects</a>
                    <a href="#bio-highlighted">Biology</a>
                    <a href="#chem-highlighted">Chemistry</a>
                    <a href="#phy-highlighted">Physics</a>
                    <a href="#islamyath-highlighted">Islamyath</a>
                    <a href="#math-highlighted">Mathematics</a>
                    <a href="#mcm-highlighted">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#midterm">Midterm <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#cs-midterm">CS Subjects</a>
                    <a href="#bio-midterm">Biology</a>
                    <a href="#chem-midterm">Chemistry</a>
                    <a href="#phy-midterm">Physics</a>
                    <a href="#islamyath-midterm">Islamyath</a>
                    <a href="#math-midterm">Mathematics</a>
                    <a href="#mcm-midterm">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#final-term">Final Term <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#cs-final">CS Subjects</a>
                    <a href="#bio-final">Biology</a>
                    <a href="#chem-final">Chemistry</a>
                    <a href="#phy-final">Physics</a>
                    <a href="#islamyath-final">Islamyath</a>
                    <a href="#math-final">Mathematics</a>
                    <a href="#mcm-final">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#quizzes">Quizzes <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#cs-quizzes">CS Subjects</a>
                    <a href="#bio-quizzes">Biology</a>
                    <a href="#chem-quizzes">Chemistry</a>
                    <a href="#phy-quizzes">Physics</a>
                    <a href="#islamyath-quizzes">Islamyath</a>
                    <a href="#math-quizzes">Mathematics</a>
                    <a href="#mcm-quizzes">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#assignments">Assignments <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#cs-assignments">CS Subjects</a>
                    <a href="#bio-assignments">Biology</a>
                    <a href="#chem-assignments">Chemistry</a>
                    <a href="#phy-assignments">Physics</a>
                    <a href="#islamyath-assignments">Islamyath</a>
                    <a href="#math-assignments">Mathematics</a>
                    <a href="#mcm-assignments">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#gdbs">GDBs <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#cs-gdbs">CS Subjects</a>
                    <a href="#bio-gdbs">Biology</a>
                    <a href="#chem-gdbs">Chemistry</a>
                    <a href="#phy-gdbs">Physics</a>
                    <a href="#islamyath-gdbs">Islamyath</a>
                    <a href="#math-gdbs">Mathematics</a>
                    <a href="#mcm-gdbs">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#midterm-reviews">Midterm Student Reviews <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#cs-midterm-reviews">CS Subjects</a>
                    <a href="#bio-midterm-reviews">Biology</a>
                    <a href="#chem-midterm-reviews">Chemistry</a>
                    <a href="#phy-midterm-reviews">Physics</a>
                    <a href="#islamyath-midterm-reviews">Islamyath</a>
                    <a href="#math-midterm-reviews">Mathematics</a>
                    <a href="#mcm-midterm-reviews">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#final-reviews">Final Term Student Reviews <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#cs-final-reviews">CS Subjects</a>
                    <a href="#bio-final-reviews">Biology</a>
                    <a href="#chem-final-reviews">Chemistry</a>
                    <a href="#phy-final-reviews">Physics</a>
                    <a href="#islamyath-final-reviews">Islamyath</a>
                    <a href="#math-final-reviews">Mathematics</a>
                    <a href="#mcm-final-reviews">MCM</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <a 
                href="#allama-iqbal-uni"
                onClick={(e) => handleCategoryClick(e, true, 'allama-iqbal-uni')}
              >
                Allama Iqbal Uni <span className="dropdown-arrow">▼</span>
              </a>
              <div className={`dropdown-menu ${activeDropdown === 'allama-iqbal-uni' ? 'mobile-open' : ''}`}>
                <button className="dropdown-close" onClick={handleDropdownClose}>✕</button>
                <div className="dropdown-submenu">
                  <a href="#aiou-handouts">Handouts <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#aiou-cs-handouts">CS Subjects</a>
                    <a href="#aiou-bio-handouts">Biology</a>
                    <a href="#aiou-chem-handouts">Chemistry</a>
                    <a href="#aiou-phy-handouts">Physics</a>
                    <a href="#aiou-islamyath-handouts">Islamyath</a>
                    <a href="#aiou-math-handouts">Mathematics</a>
                    <a href="#aiou-mcm-handouts">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#aiou-highlighted-handouts">Highlighted Handouts <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#aiou-cs-highlighted">CS Subjects</a>
                    <a href="#aiou-bio-highlighted">Biology</a>
                    <a href="#aiou-chem-highlighted">Chemistry</a>
                    <a href="#aiou-phy-highlighted">Physics</a>
                    <a href="#aiou-islamyath-highlighted">Islamyath</a>
                    <a href="#aiou-math-highlighted">Mathematics</a>
                    <a href="#aiou-mcm-highlighted">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#aiou-midterm">Midterm <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#aiou-cs-midterm">CS Subjects</a>
                    <a href="#aiou-bio-midterm">Biology</a>
                    <a href="#aiou-chem-midterm">Chemistry</a>
                    <a href="#aiou-phy-midterm">Physics</a>
                    <a href="#aiou-islamyath-midterm">Islamyath</a>
                    <a href="#aiou-math-midterm">Mathematics</a>
                    <a href="#aiou-mcm-midterm">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#aiou-final-term">Final Term <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#aiou-cs-final">CS Subjects</a>
                    <a href="#aiou-bio-final">Biology</a>
                    <a href="#aiou-chem-final">Chemistry</a>
                    <a href="#aiou-phy-final">Physics</a>
                    <a href="#aiou-islamyath-final">Islamyath</a>
                    <a href="#aiou-math-final">Mathematics</a>
                    <a href="#aiou-mcm-final">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#aiou-quizzes">Quizzes <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#aiou-cs-quizzes">CS Subjects</a>
                    <a href="#aiou-bio-quizzes">Biology</a>
                    <a href="#aiou-chem-quizzes">Chemistry</a>
                    <a href="#aiou-phy-quizzes">Physics</a>
                    <a href="#aiou-islamyath-quizzes">Islamyath</a>
                    <a href="#aiou-math-quizzes">Mathematics</a>
                    <a href="#aiou-mcm-quizzes">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#aiou-assignments">Assignments <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#aiou-cs-assignments">CS Subjects</a>
                    <a href="#aiou-bio-assignments">Biology</a>
                    <a href="#aiou-chem-assignments">Chemistry</a>
                    <a href="#aiou-phy-assignments">Physics</a>
                    <a href="#aiou-islamyath-assignments">Islamyath</a>
                    <a href="#aiou-math-assignments">Mathematics</a>
                    <a href="#aiou-mcm-assignments">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#aiou-gdbs">GDBs <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#aiou-cs-gdbs">CS Subjects</a>
                    <a href="#aiou-bio-gdbs">Biology</a>
                    <a href="#aiou-chem-gdbs">Chemistry</a>
                    <a href="#aiou-phy-gdbs">Physics</a>
                    <a href="#aiou-islamyath-gdbs">Islamyath</a>
                    <a href="#aiou-math-gdbs">Mathematics</a>
                    <a href="#aiou-mcm-gdbs">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#aiou-midterm-reviews">Midterm Student Reviews <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#aiou-cs-midterm-reviews">CS Subjects</a>
                    <a href="#aiou-bio-midterm-reviews">Biology</a>
                    <a href="#aiou-chem-midterm-reviews">Chemistry</a>
                    <a href="#aiou-phy-midterm-reviews">Physics</a>
                    <a href="#aiou-islamyath-midterm-reviews">Islamyath</a>
                    <a href="#aiou-math-midterm-reviews">Mathematics</a>
                    <a href="#aiou-mcm-midterm-reviews">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#aiou-final-reviews">Final Term Student Reviews <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#aiou-cs-final-reviews">CS Subjects</a>
                    <a href="#aiou-bio-final-reviews">Biology</a>
                    <a href="#aiou-chem-final-reviews">Chemistry</a>
                    <a href="#aiou-phy-final-reviews">Physics</a>
                    <a href="#aiou-islamyath-final-reviews">Islamyath</a>
                    <a href="#aiou-math-final-reviews">Mathematics</a>
                    <a href="#aiou-mcm-final-reviews">MCM</a>
                  </div>
                </div>
              </div>
            </li>
            <li><a href="#courses">Courses</a></li>
            <li className="dropdown">
              <a 
                href="#biography"
                onClick={(e) => handleCategoryClick(e, true, 'biography')}
              >
                Biography <span className="dropdown-arrow">▼</span>
              </a>
              <div className={`dropdown-menu ${activeDropdown === 'biography' ? 'mobile-open' : ''}`}>
                <button className="dropdown-close" onClick={handleDropdownClose}>✕</button>
                <a href="#scholars" onClick={handleDropdownClose}>Islamic Scholars</a>
                <a href="#leaders" onClick={handleDropdownClose}>Leaders</a>
                <a href="#personalities" onClick={handleDropdownClose}>Personalities</a>
              </div>
            </li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#opportunities">Opportunities</a></li>
          </ul>
        </div>
        
        {/* Overlay for dropdown */}
        <div 
          className={`dropdown-overlay ${activeDropdown ? 'active' : ''}`}
          onClick={handleDropdownClose}
        ></div>
      </div>
    </header>
  );
};

export default Header;
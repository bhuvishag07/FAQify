import React from 'react';
import './Navbar.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar glass">
      <div className="container navbar-inner">
        {/* Brand */}
        <div className="navbar-brand">
          <div className="brand-logo">
            <span className="logo-icon">⬡</span>
            <div className="brand-text">
              <span className="brand-name gradient-text">FAQify</span>
              <span className="brand-tagline">Knowledge at your fingertips</span>
            </div>
          </div>
        </div>

        {/* Toggle */}
        <div className="navbar-right">
          <button
            className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <span className="toggle-icon sun">☀️</span>
            <span className="toggle-thumb" />
            <span className="toggle-icon moon">🌙</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

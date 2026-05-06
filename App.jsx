import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoCard from './components/InfoCard';
import Accordion from './components/Accordion';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="app">
      {/* Background ambient orbs */}
      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        {/* Hero */}
        <Hero />

        {/* Content section */}
        <section className="faq-section">
          <div className="container faq-layout">
            <InfoCard />
            <Accordion />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="container footer-inner">
          <span className="footer-brand gradient-text">FAQify</span>
          <span className="footer-sep">•</span>
          <span className="footer-year">2026</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

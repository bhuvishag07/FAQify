import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-inner">
                {/* Eyebrow label */}
                <div className="hero-eyebrow">
                    <span className="eyebrow-dot" />
                    <span>Help &amp; Support Center</span>
                </div>

                {/* Heading */}
                <h1 className="hero-title">
                    Frequently Asked
                    <br />
                    <span className="gradient-text">Questions</span>
                </h1>

                {/* Decorative underline */}
                <div className="hero-underline">
                    <span className="underline-bar" />
                    <span className="underline-sparkle">✦</span>
                    <span className="underline-bar" />
                </div>

                {/* Subheading */}
                <p className="hero-subtitle">
                    Find answers to the most common questions quickly and easily.<br />
                    Everything you need to know — all in one elegant place.
                </p>

                {/* Stats row */}
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number gradient-text">15+</span>
                        <span className="stat-label">Questions</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat-item">
                        <span className="stat-number gradient-text">React</span>
                        <span className="stat-label">Powered</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat-item">
                        <span className="stat-number gradient-text">100%</span>
                        <span className="stat-label">Responsive</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

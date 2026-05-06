import React from 'react';
import './InfoCard.css';

const InfoCard = () => {
    const features = [
        { icon: '⚡', label: 'Fast & Interactive' },
        { icon: '🎨', label: 'Premium Design' },
        { icon: '🔒', label: 'Reliable & Clean' },
    ];

    return (
        <aside className="info-card-wrapper">
            {/* Main card */}
            <div className="info-card">
                <div className="info-card-glow" />

                <div className="info-card-header">
                    <div className="info-icon-ring">
                        <span className="info-main-icon">💡</span>
                    </div>
                    <div className="info-card-badge">Knowledge Base</div>
                </div>

                <h2 className="info-card-title">
                    Together, we can build better experiences.
                </h2>

                <p className="info-card-desc">
                    Explore our curated collection of answers crafted to help you
                    understand React and modern web development from the ground up.
                </p>

                {/* Feature pills */}
                <ul className="info-features">
                    {features.map((f, i) => (
                        <li key={i} className="info-feature-item" style={{ animationDelay: `${i * 0.1}s` }}>
                            <span className="feature-icon">{f.icon}</span>
                            <span>{f.label}</span>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="info-card-cta">
                    <div className="cta-avatar-group">
                        {['A', 'B', 'C'].map((l, i) => (
                            <div key={i} className="cta-avatar" style={{ '--i': i }}>{l}</div>
                        ))}
                    </div>
                    <p className="cta-text">Join <strong>2,000+</strong> learners exploring React</p>
                </div>
            </div>
        </aside>
    );
};

export default InfoCard;

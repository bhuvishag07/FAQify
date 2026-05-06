import React, { useRef, useEffect } from 'react';
import './AccordionItem.css';

const AccordionItem = ({ item, index, isOpen, onToggle }) => {
    const contentRef = useRef(null);
    const num = String(index + 1).padStart(2, '0');

    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;
        if (isOpen) {
            el.style.maxHeight = el.scrollHeight + 'px';
            el.style.opacity = '1';
        } else {
            el.style.maxHeight = '0';
            el.style.opacity = '0';
        }
    }, [isOpen]);

    return (
        <div
            className={`accordion-item ${isOpen ? 'open' : ''}`}
            style={{ '--delay': `${index * 0.05}s` }}
        >
            <button
                className="accordion-header"
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={`answer-${index}`}
                id={`question-${index}`}
            >
                {/* Number badge */}
                <span className={`accordion-num ${isOpen ? 'active' : ''}`}>{num}</span>

                {/* Question text */}
                <span className="accordion-question">{item.question}</span>

                {/* Icon */}
                <span className={`accordion-icon ${isOpen ? 'rotated' : ''}`}>
                    {isOpen ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M5 12h14" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                    )}
                </span>
            </button>

            {/* Answer content */}
            <div
                id={`answer-${index}`}
                role="region"
                aria-labelledby={`question-${index}`}
                className="accordion-content"
                ref={contentRef}
            >
                <p className="accordion-answer">{item.answer}</p>
            </div>
        </div>
    );
};

export default AccordionItem;

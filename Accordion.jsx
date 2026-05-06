import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import './Accordion.css';

const faqData = [
    {
        question: "What is React.js?",
        answer: "React.js is a JavaScript library used to build user interfaces. It helps developers create fast and interactive web applications using reusable components."
    },
    {
        question: "What is JSX?",
        answer: "JSX allows writing HTML-like code inside JavaScript files. It makes React components easier to read and design while keeping the code clean and expressive."
    },
    {
        question: "What is useState?",
        answer: "useState is a React hook used to manage changing data. It updates the UI whenever the state changes, making dynamic interfaces simple to build."
    },
    {
        question: "Why use Components?",
        answer: "Components divide the UI into smaller reusable parts. This makes code cleaner, organized, and easier to maintain across large-scale applications."
    },
    {
        question: "What is Virtual DOM?",
        answer: "Virtual DOM is a lightweight copy of the real DOM. React uses it to update only changed elements for better performance and faster renders."
    },
    {
        question: "What is Props?",
        answer: "Props are used to pass data from one component to another. They help components communicate efficiently while maintaining a unidirectional data flow."
    },
    {
        question: "Is React beginner friendly?",
        answer: "Yes, React is beginner friendly after learning JavaScript basics. Its component structure is easy to understand with practice and rich community resources."
    },
    {
        question: "Why is React popular?",
        answer: "React is popular because it is fast, scalable, and reusable. Many companies use it for modern web development including Facebook, Instagram, and Netflix."
    },
    {
        question: "What is state in React?",
        answer: "State stores data that can change over time. When updated, React automatically refreshes the UI to reflect the latest values without a page reload."
    },
    {
        question: "What is map() in React?",
        answer: "map() is used to loop through arrays and display lists dynamically. It is commonly used for rendering repeated components like cards, list items, or FAQ entries."
    },
    {
        question: "What is conditional rendering?",
        answer: "Conditional rendering displays different UI based on conditions. It helps show or hide elements dynamically in response to user actions or application state."
    },
    {
        question: "What is a hook in React?",
        answer: "Hooks are special functions that let you use React features in functional components. Examples include useState for state and useEffect for side effects."
    },
    {
        question: "What is component reusability?",
        answer: "Reusable components can be used multiple times in different places. This saves time, avoids duplicate code, and keeps the codebase consistent and maintainable."
    },
    {
        question: "Why use Vite with React?",
        answer: "Vite provides a blazing-fast development server and optimized production builds. It dramatically improves the React development experience with instant hot module replacement."
    },
    {
        question: "Can React build modern websites?",
        answer: "Yes, React is widely used for modern responsive websites. It powers many professional and interactive applications including dashboards, e-commerce stores, and social platforms."
    },
];

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    const openCount = openIndex !== null ? 1 : 0;

    return (
        <div className="accordion-wrapper">
            {/* Accordion header */}
            <div className="accordion-list-header">
                <div className="alist-meta">
                    <span className="alist-count">{faqData.length} questions</span>
                    {openIndex !== null && (
                        <button className="alist-reset" onClick={() => setOpenIndex(null)}>
                            Close all ✕
                        </button>
                    )}
                </div>
                <div className="alist-search-hint">Click any question to expand</div>
            </div>

            <div className="accordion-list" role="list">
                {faqData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        item={item}
                        index={index}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Accordion;

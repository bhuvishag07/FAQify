# 📘 FAQify – React FAQ Application

FAQify is a modern and interactive Frequently Asked Questions (FAQ) web application built using **React.js**. It provides a clean UI with an accordion-style interface, allowing users to expand and collapse questions easily.

---

## 🚀 Features

* 🔽 Accordion-based FAQ system (expand/collapse answers)
* 🌙 Dark/Light mode toggle
* ⚡ Fast performance using Vite
* ♻️ Reusable React components
* 📱 Responsive and modern UI design
* 🎯 Clean and organized code structure

---

## 🛠️ Tech Stack

* **React.js** – Frontend library
* **Vite** – Build tool for fast development
* **JavaScript (ES6+)**
* **HTML5 & CSS3**

---

## 📂 Project Structure

```
FAQ/
├── src/
│   ├── components/
│   │   ├── Accordion.jsx
│   │   ├── AccordionItem.jsx
│   │   ├── InfoCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   └── *.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```
git clone https://github.com/your-username/faqify.git
```

2. Navigate to the project folder:

```
cd faqify
```

3. Install dependencies:

```
npm install
```

4. Run the development server:

```
npm run dev
```

---

## 💡 How It Works

* The FAQ data is stored in an array.
* The **Accordion component** manages which question is open using `useState`.
* Each FAQ item is rendered using `map()` and passed to `AccordionItem`.
* Clicking a question toggles its visibility using conditional rendering.
* The **dark mode toggle** updates the theme using `useEffect` and applies styles globally.

---

## 📸 Screenshots

<img width="1102" height="712" alt="07F0602A-0AA2-4B43-9FB1-B7EC16CA3408_1_105_c" src="https://github.com/user-attachments/assets/e3293cc8-720f-463e-999d-1db5c5044e6e" />

<img width="2608" height="1752" alt="4F7B33ED-CDAA-4632-B428-9BC146BC9592" src="https://github.com/user-attachments/assets/770cbcc4-9479-45dc-869c-5ff41b61fff9" />

<img width="1092" height="720" alt="C25F2E5E-33DF-43AA-83A4-5875D28FAAA1_1_105_c" src="https://github.com/user-attachments/assets/5278cb4c-4716-4194-9581-83e8f1aa4cd7" />

---

## 🔮 Future Improvements

* 🔍 Add search functionality
* 🌐 Fetch FAQs from an API/backend
* 🎨 Add animations for smoother UI
* 📊 Track user interactions

---

## 🙌 Learning Outcomes

* Understanding of React hooks (`useState`, `useEffect`)
* Component-based architecture
* Props and state management
* Dynamic rendering using `map()`
* Conditional rendering techniques

---

## 📄 License

This project is for educational purposes.

---

## 👩‍💻 Author

**Bhuvisha Gohil**

---

⭐ If you like this project, feel free to give it a star!

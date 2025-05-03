# Gemini Clone

A clone of Google's Gemini chatbot built with **React.js**. This project simulates the core functionality of Gemini, allowing users to enter prompts and receive AI-generated responses.

## 🚀 Features

* Real-time prompt handling
* Response loading indicator
* Context-aware conversations
* Error handling with fallback behavior
* Responsive and clean UI

## 🛠️ Tech Stack

* **React.js** (Functional Components & Hooks)
* **CSS**
* **JavaScript**
* **Vite** for blazing fast builds

## 📁 Project Structure

```
/your-gemini-clone
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Main/
│   │   │   ├── Main.css
│   │   │   └── Main.jsx
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.css
│   │   │   └── Sidebar.jsx
│   ├── config/
│   │   └── gemini.js
│   ├── context/
│   │   └── Context.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## ⚙️ Setup & Run

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/gemini-clone.git
cd gemini-clone
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. Visit `http://localhost:5173` in your browser

## 🧠 How it Works

* When a user types a prompt and sends it, the `onSent` function triggers an asynchronous function (`runChat`) that simulates or communicates with an AI model.
* Prompt history is maintained using a `prevPrompts` state array.
* Errors are gracefully handled, and the app provides visual feedback during loading.

---

Feel free to contribute or open issues! ⭐

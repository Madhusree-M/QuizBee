# QuizBee

**Test your C knowledge — Busy learning like a bee!**

**Check it out : https://madhusree-m.github.io/QuizBee/**

A lightweight, beautiful, and responsive single-page quiz web app built with vanilla HTML, CSS (Tailwind-ish utility classes) and JavaScript. *QuizBee* is designed for quick quizzes, countdown animations, timed questions, answer review, and feedback collection via Web3Forms. 

---

## 🚀 Highlights

* Minimal, responsive UI with playful animations (countdown cards, falling decorative elements).
* Timed questions with auto-advance when the timer hits zero.
* Score tracking and a review page that marks correct / wrong / unanswered responses.
* Built-in feedback forms using Web3Forms for both result and review pages.
* Easy to extend: add more questions to the `questions` array.

---

## 🧩 Features

* Countdown before quiz starts (3, 2, 1, GO!).
* Per-question timer with visual warning and auto-next behavior.
* Visual selection state and score incrementing for correct answers.
* Review mode with color-coded answer blocks and status labels (✔ Correct, ✖ Wrong, ⚠ Unanswered).
* Feedback submission using Web3Forms
* Accessible layout (large buttons, clear contrast) and mobile friendly.

---

## 🛠️ Tech Stack

* HTML5
* JavaScript (ES6+)
* Utility-first CSS (Tailwind-CSS)
* Web3Forms for collecting feedback

---

## 📁 Repository Structure

```
quizbee/
├─ index.html          # Main UI
├─ script.js           # Quiz logic (questions array, timer, review)
├─ pink-square.jpg     # Decorative assets used by the animation
└─ README.md
```

> In this project the styles are embedded inside `index.html`

---

## 💡 Quick Start

1. Clone the repo:

```bash
git clone https://github.com/<your-username>/quizbee.git
cd quizbee
```

Open index.html in your browser directly OR use VS Code Live Server:

Right‑click index.html → Open with Live Server

It will run at:
```bash
http://127.0.0.1:5500/index.html
```

3. Edit `script.js` to add more questions and customize behavior.

---

## ✍️ How to Add Questions

Open `script.js` and find the `questions` array. Each question object follows this shape:

```js
const questions = [
  {
    text: "Which operator is used to access the value at the address stored in a pointer?",
    options: ["&", "*", "@", "%"],
    correctIndex: 1
  },
  // add more objects here
]
```

* `text` — the question string
* `options` — array of 4 option strings (can be extended if you update UI)
* `correctIndex` — integer index (0-based) of the correct option

Tip: keep options short for the best mobile layout.

---

## ⏱️ Timer & Auto-next

The per-question timer value is set inside `startTimer()` in `script.js`. By default it is **20 seconds** for each question. To change it, edit the `timeLeft = 20` line.

If the timer reaches 0 and the user hasn't selected an option, the app marks the question as unanswered and auto-advances after a short pause.

---

## ✅ Review Mode Behaviour

Click **Review Answers** after finishing the quiz to:

* See each question with a status badge (Correct/Wrong/Unanswered).
* See the correct answer highlighted in green and any wrong selected answer highlighted in red.
* Submit feedback from the review page via Web3Forms.

---

## 📫 Contact

Made with ❤️ — feel free to open an issue or PR.

Maintainer: **Madhusree M** 

Email : **mmadhusreemayilsamy@gmail.com**

---

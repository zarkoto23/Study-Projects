# Rock-Paper-Scissors Game (Камък-Ножица-Хартия) - Version 2

## Overview

This is an improved version of the classic Rock-Paper-Scissors game implemented with plain JavaScript, HTML, and CSS. The player chooses Rock, Paper, or Scissors using buttons with icons, and the computer randomly generates its choice. The game shows the result of each round and keeps track of cumulative wins, losses, and ties.

---

## Technologies Used

- **HTML5**  
  Semantic structure with clear sections for user choices, game status, and score.

- **CSS3**  
  Responsive styling with Google Fonts integration (`Press Start 2P`), flexible layout using Flexbox, hover effects, and color-coded feedback for wins and losses.

- **JavaScript (ES6)**  
  Modular, event-driven code with:
  - Event handlers for button clicks.
  - Randomized computer choices.
  - Logic to determine the winner with clear if/else and switch statements.
  - DOM manipulation to update the displayed player choice, computer choice, results, and scores dynamically.
  - Use of class toggling for visual feedback (win/loss colors).

---

## Key Features and Development Highlights

- **Responsive design:**  
  Adapts to different screen sizes using media queries to ensure usability on mobile devices.

- **User-friendly interface:**  
  Intuitive buttons with emoji icons for Rock (✊), Scissors (✌️), and Paper (✋) for easy interaction.

- **Real-time score tracking:**  
  Keeps counters for player wins, computer wins, and ties displayed separately.

- **Clean and maintainable code:**  
  Functions are clearly named (`playLogic`), and variables use meaningful naming for readability.

- **Visual feedback:**  
  Result text changes color dynamically — green for wins, red for losses, neutral for ties.

---

## What I Learned

- Integrating Google Fonts to improve UI aesthetics.
- Using Flexbox and media queries to create responsive layouts.
- Handling user interaction and DOM updates efficiently.
- Implementing game logic with clean control flow and state management.
- Providing visual feedback using dynamic class manipulation.

---

## How to Run

1. Open `index.html` in a modern web browser.
2. Click one of the three buttons (✊, ✌️, ✋) to select your move.
3. The game will display the computer's move, the result of the round, and update the score counters.

---

## Potential Improvements

- Add animation or sound effects on result display.
- Add a reset button to start a new game.
- Improve accessibility (keyboard navigation, ARIA roles).
- Extract JavaScript into modules for scalability.
- Add more detailed instructions or tooltips.

---



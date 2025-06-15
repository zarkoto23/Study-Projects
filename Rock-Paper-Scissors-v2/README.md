# Rock-Paper-Scissors Game (Камък-Ножица-Хартия)

## Overview

This is a simple browser-based Rock-Paper-Scissors game implemented in plain JavaScript, HTML, and CSS. The user plays against the computer by clicking buttons to select Rock, Paper, or Scissors. The computer makes a random choice, and the game displays the result of each round.

---

## Technologies Used

- **HTML5** — Semantic markup for the game interface.
- **CSS3** — Basic styling to visually separate elements and style buttons.
- **Vanilla JavaScript (ES6)** — Core game logic and interaction:
  - Event listeners for user input (button clicks).
  - Random number generation for computer choice.
  - Simple control flow (if/else and switch) to determine the winner.
  - DOM manipulation to update the game state and results dynamically.

---

## Features and Approach

- **Clear separation of concerns:**  
  HTML handles the structure, CSS the styles, and JavaScript the behavior.

- **DOM Manipulation:**  
  Updates player choice, computer choice, and result texts dynamically after each round.

- **Randomized computer moves:**  
  The computer choice is randomly generated on each user selection.

- **Simple, readable code:**  
  Uses meaningful variable names and modular functions (`computerChoice` and `checkWinner`) for clarity.

- **Interactive UI:**  
  The player interacts by clicking buttons representing their move.

---

## What I learned

- Handling user input via event listeners.
- Manipulating DOM elements to update UI in real time.
- Using random numbers to simulate computer decisions.
- Writing clean, modular JavaScript code with clear function responsibilities.

---

## How to run

Open the `index.html` file in any modern browser. Click on any of the buttons ("Камък", "Хартия", "Ножица") to play a round against the computer.

---

## Possible improvements

- Add animations or sound effects for better UX.
- Track and display cumulative score.
- Prevent multiple clicks during result display.
- Improve UI styling and responsiveness.

---

## Author

Navcho

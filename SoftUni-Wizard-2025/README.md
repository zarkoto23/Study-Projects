# Wizard vs Bugs — Simple Browser Game

## Overview

This is a small 2D browser game built as a learning project. The player controls a wizard who moves around and shoots fireballs at incoming bugs. The goal is to survive and score points by eliminating the bugs.

---

## Technologies and Approach

- **JavaScript (ES6 Modules)** — The project is modularized into separate files (`game-state.js`, `game-objects.js`, `game-engine.js`, `game-controls.js`), ensuring clear code organization and separation of concerns.
- **DOM Manipulation and Events** — Pure JavaScript is used to dynamically create game elements, handle keyboard inputs, and animate the game using `requestAnimationFrame`.
- **State Management** — A centralized `state` object holds the game data, including player position, controls status, score, and game over flag.
- **Input Handling** — Supports multiple keys for movement (WASD and arrow keys) and spacebar for shooting, with boolean flags tracking key states.
- **Collision Detection** — Implemented using `getBoundingClientRect()` to detect overlaps between game elements.
- **Factory Pattern** — Game objects like the wizard, fireballs, and bugs are created through a factory module, promoting reusable and maintainable code.
- **Game Loop and Animation** — The game loop runs smoothly using recursive calls to `requestAnimationFrame` to update game state and render frames.
- **Clean, Modular Code** — Functions are clearly separated by responsibility (e.g., movement, shooting, spawning bugs), making the code easy to read and maintain.

---

## What I Learned / Improved

- Working with JavaScript modules and modular architecture.
- Understanding the game loop and animation frame updates in the browser.
- Handling keyboard input efficiently for responsive gameplay.
- Managing game state and updating UI elements in real-time.
- Implementing basic collision detection and DOM element management.

---

## How to Run

Open the `index.html` file in a modern browser and click the "Start" button to begin playing.

---

## Summary

This project showcases foundational frontend development skills with Vanilla JavaScript, including modular coding, DOM manipulation, event handling, and animation. It is a demonstration of clean coding practices suitable for a Junior Frontend Developer role, implemented without any external libraries.

---

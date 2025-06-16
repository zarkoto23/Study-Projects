# SPA Study Project

## Project Description

Single Page Application (SPA) implementing user registration, authentication, and CRUD operations for products. The frontend communicates asynchronously with a provided backend API using `fetch` and `async/await`. The application updates the DOM dynamically to reflect changes in the data model.

---

## Key Features

- User registration and login with authentication token/session management.
- Product CRUD operations: create, read, update, delete.
- Real-time UI updates on data changes.
- Error handling and success notifications.
- Modular codebase using ES6 modules.
- Encapsulation of API calls separate from UI logic.
- Use of asynchronous fetch API with `async/await` for all server interactions.

---

## Technologies & Tools

- JavaScript (ES6+)
- HTML5, CSS3
- Fetch API for HTTP requests
- Node.js/Express backend (provided study server)
- Modular architecture with ES6 import/export
- Browser DOM API for dynamic rendering

---

## Architecture & Code Structure

- `/src/api/` — API modules handling HTTP requests and authentication tokens.
- `/src/components/` — UI components for rendering views and handling user input.
- `/src/utils/` — Utility functions for validation, session storage, etc.
- `index.html` — entry point hosting the SPA container.
- Separate modules for authentication, product management, and UI rendering.
- State management implemented in frontend for user session and product data.

---

## Setup and Running

1. Clone repository.
2. Start provided backend server.
3. Open `index.html` in a browser.
4. Register or login to start managing products.
5. Perform CRUD operations which are reflected dynamically in the UI.

---

## Functionality Details

- **Authentication:** Handles user registration and login, stores authentication tokens securely, and manages session state.
- **Product Management:** Implements full CRUD functionality with forms for adding and editing products. Product list updates dynamically without page reload.
- **API Integration:** All server communication via fetch API wrapped in asynchronous functions with proper error handling.
- **UI Updates:** DOM manipulation and event handling to update the UI based on application state changes.
- **Code Modularity:** Clear separation between API logic, UI rendering, and utility functions.

---

## Future Improvements

- Implement client-side routing for improved navigation.
- Add form validation and user input sanitization.
- Integrate testing frameworks for unit and integration tests.
- Enhance UI/UX design with CSS frameworks or frontend libraries.



# 📚 Books CRUD API

A lightweight, well-structured RESTful API built with Node.js and Express. This project was developed as a practical exercise to implement backend best practices, clean architecture, & modular routing.

## 🚀 Features

- **Modular Routing:** Implements `express.Router` for clean separation of endpoints.
- **MVC Pattern (Partial):** Separates routing logic into a `routes` folder and request handling into a `controllers` folder.
- **Custom Middleware:** Includes a custom logger middleware to track incoming requests.
- **Environment Management:** Uses `.env` configuration files to securely manage variables like the server port.
- **In-Memory Storage:** Simulates database operations using a simple, predictable array of book objects.
- **Developer Workflow:** Leverages Node's native `--watch` mode for efficient hot-reloading during development.

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js

---

## 📁 Project Structure

```text
├── controllers/
│   └── booksController.js  # Request handlers and business logic
├── middlewares/
│   └── logger.js           # Custom request logging middleware
├── routes/
│   └── booksRoutes.js      # Endpoint route definitions
├── .env                    # Environment variables (git-ignored)
├── .gitignore              # Ignored files (node_modules, .env)
├── package.json            # Project metadata and dependencies
└── server.js               # Application entry point
```

---

## 🏁 Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org) installed on your machine.

### 2. Installation

Clone this repository and install the dependencies:

```bash
git clone https://github.com/Purnesh-codes/books-crud-api.git
cd books-crud-api
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory of your project and specify your port:

```env
PORT=3000
```

### 4. Running the Server

Start the development server with hot-reloading enabled:

```bash
npm run dev
```

_(Ensure your `package.json` has a script mapped to `node --watch server.js`)_

---

## 🔌 API Endpoints

All data is parsed using `express.json()` at the server level.

| Method     | Endpoint         | Description                     | Request Body                   |
| :--------- | :--------------- | :------------------------------ | :----------------------------- |
| **GET**    | `/api/books`     | Retrieve all books              | None                           |
| **GET**    | `/api/books/:id` | Retrieve a single book by ID    | None                           |
| **POST**   | `/api/books`     | Add a new book to the array     | `{ "title": "Book Title" }`    |
| **PUT**    | `/api/books/:id` | Update an existing book's title | `{ "title": "Updated Title" }` |
| **DELETE** | `/api/books/:id` | Remove a book from the array    | None                           |

# Express.js Routing Example

This project demonstrates how to organize and separate routes in an Express.js application using modular routing.

## Project Structure

```
02-routing/
├── routes/
│   ├── home.js          # Home page routes
│   └── users.js         # User-related routes
├── home.html            # Static HTML file for home page
├── index.js             # Main application file
├── package.json         # Project dependencies
└── README.md           # This file
```

## Features

- **Modular Routing**: Routes are separated into different files based on functionality
- **Express Router**: Uses Express.js Router for clean route organization
- **ES6 Modules**: Modern JavaScript module syntax
- **RESTful API**: Follows REST conventions for user operations

## Installation

1. Navigate to the project directory:
```bash
cd 02-routing
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the server:
```bash
npm start
```

The application will be available at `http://localhost:4000`

## API Endpoints

### Home Routes (`/`)
- **GET /** - Serves the home page (home.html)

### User Routes (`/users`)
- **POST /users** - Create a new user
- **PUT /users/:id** - Update user by ID
- **DELETE /users/:id** - Delete user by ID

## Route Files

### `routes/home.js`
Contains the home page route that serves static HTML content.

```javascript
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  // Serves home.html file
});

export default router;
```

### `routes/users.js`
Contains all user-related CRUD operations.

```javascript
import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  // Create user logic
});

router.put("/:id", (req, res) => {
  // Update user logic
});

router.delete("/:id", (req, res) => {
  // Delete user logic
});

export default router;
```

## Testing the API

### Using curl:

1. **Get Home Page:**
```bash
curl http://localhost:4000/
```

2. **Create User:**
```bash
curl -X POST http://localhost:4000/users
```

3. **Update User:**
```bash
curl -X PUT http://localhost:4000/users/123
```

4. **Delete User:**
```bash
curl -X DELETE http://localhost:4000/users/123
```

### Using a REST client (Postman, Thunder Client, etc.):

- **GET** `http://localhost:4000/` - Home page
- **POST** `http://localhost:4000/users` - Create user
- **PUT** `http://localhost:4000/users/123` - Update user with ID 123
- **DELETE** `http://localhost:4000/users/123` - Delete user with ID 123

## Key Concepts Demonstrated

1. **Route Separation**: Different route files for different functionalities
2. **Express Router**: Using `express.Router()` for modular routing
3. **Route Mounting**: Using `app.use()` to mount routes at specific paths
4. **ES6 Modules**: Modern import/export syntax
5. **RESTful Design**: Following REST conventions for API endpoints

## Benefits of This Structure

- **Maintainability**: Easy to find and modify specific routes
- **Scalability**: Simple to add new route files as the application grows
- **Organization**: Logical grouping of related routes
- **Reusability**: Route modules can be easily reused or moved
- **Testing**: Individual route files can be tested in isolation

## Next Steps

To extend this application, you could:

1. Add middleware for authentication and validation
2. Implement database integration
3. Add error handling middleware
4. Create more route modules (e.g., auth, products, orders)
5. Add request/response validation
6. Implement logging middleware

## Dependencies

- **express**: Fast, unopinionated, minimalist web framework for Node.js
- **path**: Node.js built-in module for working with file paths
- **url**: Node.js built-in module for URL utilities (for ES modules)
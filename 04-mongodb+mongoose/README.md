# Simple Todo App with MongoDB and Mongoose

A simple Todo application using MongoDB and Mongoose with ES Modules.

## Features

- MongoDB connection (local)
- Mongoose for data modeling
- Todo model with taskName and isDone fields
- Complete CRUD operations
- ES Modules syntax (type: "module")
- Express.js API (optional)

## Prerequisites

- Node.js installed
- MongoDB installed and running locally
  - Or MongoDB Atlas account (cloud)

## Setup

1. Install dependencies:
```
npm install
```

2. Make sure MongoDB is running locally:
```
# On Windows
# MongoDB should be running as a service or you can start it manually

# On macOS/Linux
mongod --dbpath=/data/db
```

3. Run the application:
```
# Run the console example
npm start

# OR run the Express API
npm run api
```

## Todo Model

```javascript
{
  taskName: String,  // required
  isDone: Boolean,   // default: false
  createdAt: Date    // default: current date
}
```

## Operations Demonstrated

- Creating new todos
- Retrieving all todos
- Getting a specific todo by ID
- Updating a todo's status (done/not done)
- Deleting a todo

## Code Structure

- `app.js` - Console application with MongoDB connection and CRUD operations
- `api.js` - Express.js API for Todo operations
- `models/Todo.js` - Todo model definition
- `.env` - Environment variables for MongoDB connection

## API Endpoints

If you run the Express API (`npm run api`), the following endpoints are available:

- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get a specific todo
- `POST /api/todos` - Create a new todo
  ```json
  {
    "taskName": "Your task here"
  }
  ```
- `PUT /api/todos/:id` - Update a todo
  ```json
  {
    "taskName": "Updated task name",
    "isDone": true
  }
  ```
- `DELETE /api/todos/:id` - Delete a todo

## Using with MongoDB Atlas (Cloud)

If you want to use MongoDB Atlas instead of a local MongoDB instance:

1. Create a MongoDB Atlas account and cluster
2. Get your connection string
3. Update the `.env` file:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todo_app
```
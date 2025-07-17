# Basic Express.js Server

This project demonstrates how to create a simple Express.js server with basic routing functionality. It's a foundational example showing the minimal setup required to get an Express application running.

## Project Structure

```
01-express-server/
├── index.js         # Main application file
├── package.json     # Project dependencies and scripts
└── README.md       # This file
```

## Features

- **Basic Express Server**: Minimal Express.js server setup
- **ES6 Modules**: Modern JavaScript module syntax (`import`/`export`)
- **GET Route**: Simple GET endpoint demonstration
- **Development Mode**: Hot reload with Node.js watch mode
- **Console Logging**: Request logging for debugging

## Installation

1. Navigate to the project directory:
```bash
cd 01-express-server
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
node index.js
```

The application will be available at `http://localhost:3000`

## API Endpoints

### Home Route
- **GET /** - Returns a welcome message
  - **Response**: `"Welcome! This is the GET route."`
  - **Console Output**: `"GET request received"`

## Code Explanation

### `index.js`
```javascript
// Including express module and initializing an app
import express from 'express';
const app = express();

// Variable that stores the port number
const port = 3000;

// GET Request Example
app.get('/', (req, res) => {
  console.log("GET request received");
  res.send("Welcome! This is the GET route.");
});

// Starting your app / server
app.listen(port, () => {
  console.log(`Application started on http://localhost:${port}`);
});
```

### Key Components:

1. **Express Import**: Uses ES6 module syntax to import Express
2. **App Initialization**: Creates an Express application instance
3. **Port Configuration**: Sets the server to run on port 3000
4. **Route Handler**: Defines a GET route for the root path (`/`)
5. **Server Start**: Starts the server and listens on the specified port

## Testing the Server

### Using a Web Browser:
1. Open your browser
2. Navigate to `http://localhost:3000`
3. You should see: "Welcome! This is the GET route."

### Using curl:
```bash
curl http://localhost:3000
```

### Using a REST client (Postman, Thunder Client, etc.):
- **Method**: GET
- **URL**: `http://localhost:3000`
- **Expected Response**: `"Welcome! This is the GET route."`

## Key Concepts Demonstrated

1. **Express.js Basics**: Fundamental Express server setup
2. **ES6 Modules**: Modern JavaScript import syntax
3. **HTTP GET Requests**: Handling basic HTTP GET requests
4. **Response Handling**: Sending text responses to clients
5. **Server Listening**: Starting and running an Express server
6. **Console Logging**: Basic request logging for debugging

## Package.json Scripts

- **`npm run dev`**: Runs the server in development mode with auto-reload using Node.js `--watch` flag
- **`npm test`**: Placeholder test script (not implemented)

## Dependencies

- **express**: `^5.1.0` - Fast, unopinionated, minimalist web framework for Node.js

## Development Features

- **Hot Reload**: The `npm run dev` script uses Node.js `--watch` flag for automatic server restart on file changes
- **ES6 Modules**: Uses `"type": "module"` in package.json for modern JavaScript syntax

## Next Steps

To extend this basic server, you could:

1. **Add More Routes**: Create additional GET, POST, PUT, DELETE routes
2. **Add Middleware**: Implement logging, authentication, or parsing middleware
3. **Static Files**: Serve static HTML, CSS, and JavaScript files
4. **Template Engine**: Add a template engine like EJS or Handlebars
5. **Database Integration**: Connect to a database (MongoDB, PostgreSQL, etc.)
6. **Error Handling**: Implement proper error handling middleware
7. **Environment Variables**: Use environment variables for configuration
8. **API Documentation**: Add API documentation with tools like Swagger

## Common Issues

### Port Already in Use
If you get an error that port 3000 is already in use:
1. Change the port number in `index.js`
2. Or kill the process using port 3000:
   ```bash
   # On Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   
   # On macOS/Linux
   lsof -ti:3000 | xargs kill
   ```

### Module Import Errors
Make sure your `package.json` includes `"type": "module"` for ES6 import syntax to work properly.

## Learning Objectives

After working with this project, you should understand:
- How to set up a basic Express.js server
- How to handle HTTP GET requests
- How to send responses to clients
- How to use ES6 modules in Node.js
- How to start and test a web server
- Basic Express.js application structure
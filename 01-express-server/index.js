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

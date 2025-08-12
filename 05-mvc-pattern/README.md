# MVC Pattern with Express.js and MongoDB

This project demonstrates the implementation of the MVC (Model-View-Controller) pattern in a Node.js application using Express.js and MongoDB.

## Project Structure

```
05-mvc-pattern/
├── config/
│   └── db.js          // MongoDB connection
├── models/
│   └── Product.js     // Mongoose schema/model
├── controllers/
│   └── productController.js // Business logic
├── routes/
│   └── productRoutes.js     // API endpoints
├── .env               // Environment variables
├── package.json       // Project dependencies
└── server.js          // Express app
```

## MVC Pattern Explanation

- **Model (M)**: Handles database interactions using Mongoose schemas/models
- **View (V)**: In this API-only project, the JSON responses serve as the "view"
- **Controller (C)**: Contains business logic, validations, and processing

## API Endpoints

- **GET /api/products**: Get all products
- **GET /api/products/:id**: Get a single product by ID
- **POST /api/products**: Create a new product
- **PUT /api/products/:id**: Update a product
- **DELETE /api/products/:id**: Delete a product

## How to Run

1. Install dependencies:
   ```
   npm install
   ```

2. Set up environment variables in `.env` file:
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/mvc-product-db
   ```

3. Start the server:
   ```
   npm run dev
   ```

## Testing with Postman

You can test the API endpoints using Postman:

1. **Create a Product (POST /api/products)**:
   - Body: 
     ```json
     {
       "name": "Smartphone",
       "price": 699.99,
       "description": "Latest model with high-end features",
       "category": "Electronics"
     }
     ```

2. **Get All Products (GET /api/products)**

3. **Get Single Product (GET /api/products/:id)**
   - Replace `:id` with an actual product ID

4. **Update Product (PUT /api/products/:id)**
   - Replace `:id` with an actual product ID
   - Body:
     ```json
     {
       "name": "Updated Smartphone",
       "price": 599.99,
       "description": "Updated description",
       "category": "Electronics"
     }
     ```

5. **Delete Product (DELETE /api/products/:id)**
   - Replace `:id` with an actual product ID
# Ecommerce API

This is a simple RESTful API for managing products in an e-commerce application.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ecommerce-api.git
   
cd ecommerce-api
npm install

Start the server:
node server.js

By default, the server will run on port 3000. You can change this by setting the PORT environment variable.

Endpoints
POST /products/create: Create a new product.
GET /products: Get a list of all products.
DELETE /products/:id: Delete a product by ID.
POST /products/:id/update_quantity?number=<quantity>: Update the quantity of a product by ID.

Dependencies
Express: Web application framework for Node.js.
Mongoose: MongoDB object modeling for Node.js.
body-parser: Middleware for parsing request bodies.
dotenv: Module to load environment variables from a .env file.

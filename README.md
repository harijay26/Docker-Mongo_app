# Dockerize a Node.js app connected to MongoDb.

- Run: "docker build -t mongo-app ."
- Then Run: "docker-compose up"

- The Mongo-App is running on port: 3002

## API Endpoints:

I have created two API endpoints for the this application to read and create customers.

- Get multiple customers: http://localhost:3002/customers
- Create a customer: http://localhost:3002/customer-create

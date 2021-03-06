const express = require('express');
const app = express();
const mongoose = require('mongoose');

//require('dotenv').config();

// Database connection
mongoose.connect(
    'mongodb://mongo:27017/webooks', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('connected to database'));

// Setting up our server to accept JSON using a middleware
app.use(express.json());

// app.get('/', (req, res) => {
//     res.json({
//         message: 'Welcome to Harry APIs application...In the URL attach /customers to fetch and /customers/:id(preferred ID to get a single customer). Enjoy!!)',
//     });
// });

// Routes
const customersRouter = require('./routes/customers_routes');
app.use('/', customersRouter);

// Start Server, Listen on port 3002
const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`server started...listening on port ${port}`);
});
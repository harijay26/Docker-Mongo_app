const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer_model');

// Get all customers
router.get('/customers', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

router.post('/customer-create', (req, res) => {
  const body = req.body

  const customer = new Customer(body)

  customer.save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: customer._id,
        message: 'Customer successfully created'
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Customer not created!'
      })
    })
})

module.exports = router;
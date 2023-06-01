const express = require('express');
const customerController = require('../controllers/customer.controller');

const router = express.Router();

router
  .route('/')
  .get(customerController.getManyCustomers)
  .post(customerController.createCustomer)
  .delete(customerController.deleteManyCustomers);

router
  .route('/:id')
  .get(customerController.getSingleCustomer)
  .put(customerController.editCustomer)
  .delete(customerController.deleteSingleCustomer);

module.exports = router;

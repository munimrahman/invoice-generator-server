const express = require('express');
const orderController = require('../controllers/order.controller');

const router = express.Router();

router
  .route('/')
  .get(orderController.getManyOrders)
  .post(orderController.createOrder)
  .delete(orderController.deleteManyOrders);

router
  .route('/:id')
  .get(orderController.getSingleOrder)
  .put(orderController.editOrder)
  .delete(orderController.deleteSingleOrder);

module.exports = router;

const express = require('express');
const productController = require('../controllers/product.controller');

const router = express.Router();

router
  .route('/')
  .get(productController.getManyProducts)
  .post(productController.createProduct)
  .delete(productController.deleteManyProducts);

router
  .route('/:id')
  .get(productController.getSingleProduct)
  .put(productController.editProduct)
  .delete(productController.deleteSingleProduct);

module.exports = router;

const express = require('express');
const productRouter = require('./product.route');

const router = express.Router();

router.use('/products', productRouter);

module.exports = router;

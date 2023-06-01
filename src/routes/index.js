const express = require('express');
const productRouter = require('./product.route');
const customerRouter = require('./customer.route');
const authRouter = require('./auth.route');

const router = express.Router();

router.use('/products', productRouter);
router.use('/customers', customerRouter);
router.use('/', authRouter);

module.exports = router;

const express = require('express');
const authRouter = require('./auth.route');
const productRouter = require('./product.route');
const customerRouter = require('./customer.route');
const taskRouter = require('./task.route');

const router = express.Router();

router.use('/', authRouter);
router.use('/products', productRouter);
router.use('/customers', customerRouter);
router.use('/tasks', taskRouter);

module.exports = router;

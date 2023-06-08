const express = require('express');
const authRouter = require('./auth.route');
const productRouter = require('./product.route');
const customerRouter = require('./customer.route');
const taskRouter = require('./task.route');
const userRouter = require('./user.route');
const orderRouter = require('./order.route');

const router = express.Router();

router.use('/', authRouter);
router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/customers', customerRouter);
router.use('/tasks', taskRouter);
router.use('/orders', orderRouter);

module.exports = router;

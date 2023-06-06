const express = require('express');
const verifyLogin = require('../middleware/verifyLogin');

const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/sign-up', authController.signUp);

router.post('/log-in', authController.logIn);

// router.get('/me', authController.getUserInfo);

module.exports = router;

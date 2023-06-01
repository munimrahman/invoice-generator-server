const express = require('express');

const router = express.Router();
const authController = require('../controllers/auth.controller');
// const verifyToken = require("../middleware/verifyToken");

router.post('/sign-up', authController.signUp);

// router.post('/log-in', authController.logIn);

// router.get('/me', authController.getUserInfo);

module.exports = router;

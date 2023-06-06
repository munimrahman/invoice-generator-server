/* eslint-disable consistent-return */
const authServices = require('../services/auth.service');
const catchErrors = require('../utils/catchError');
const generateJwtToken = require('../utils/generateJwtToken');
const User = require('../models/User');

const signUp = catchErrors(async (req, res, next) => {
  const data = req.body;
  const user = await authServices.signUpService(data);

  const accessToken = generateJwtToken(user, process.env.JWT_EXPIRY);

  res.status(201).send({
    success: true,
    message: 'User created successfully.',
    data: {
      user,
      accessToken,
    },
  });
});

const logIn = catchErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      success: false,
      message: 'Please provide email and password',
    });
  }

  const user = await authServices.findUserByEmail(email);

  if (!user) {
    return res.status(400).send({
      success: false,
      message: 'Invalid email or password',
    });
  }

  const isPasswordMatch = user.comparePassword(password, user.password);

  if (!isPasswordMatch) {
    return res.status(400).send({
      success: false,
      message: 'Invalid email or password',
    });
  }

  const accessToken = generateJwtToken(user, process.env.JWT_EXPIRY);

  res.status(201).send({
    success: true,
    message: 'User logged in successfully!',
    data: {
      user,
      accessToken,
    },
  });
});

module.exports = {
  signUp,
  logIn,
};

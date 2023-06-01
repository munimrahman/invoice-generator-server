/* eslint-disable consistent-return */
const authServices = require('../services/auth.service');
const catchErrors = require('../utils/catchError');
const generateJwtToken = require('../utils/generateJwtToken');
const User = require('../models/User');

exports.signUp = catchErrors(async (req, res, next) => {
  const data = req.body;
  const user = await authServices.signUpService(data);

  res.status(201).send({
    success: true,
    message: 'User created successfully.',
    data: user,
  });
});

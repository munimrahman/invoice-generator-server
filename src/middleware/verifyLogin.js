/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const verifyLogin = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(' ')?.[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'You are not logged in.',
      });
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      error: 'Invalid Token',
    });
  }
};

module.exports = verifyLogin;

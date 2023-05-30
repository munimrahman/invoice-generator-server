const User = require('../models/User');

exports.signUpService = async (userData) => {
  const result = await User.create(userData);
  return result;
};

exports.findUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

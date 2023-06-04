const User = require('../models/User');

exports.createUserService = async (data) => {
  const user = await User.create(data);
  return user;
};

exports.editUserService = async (id, data) => {
  const updatedUser = await User.findByIdAndUpdate(id, data, {
    runValidators: true,
    new: true,
  });
  return updatedUser;
};

exports.getSingleUserService = async (id) => {
  const user = await User.findById(id);
  return user;
};

exports.getManyUserService = async () => {
  const users = await User.find({});
  return { users, usersCount: users.length };
};

exports.deleteSingleUserService = async (id) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

exports.deleteManyUserService = async (ids) => {
  const result = await User.deleteMany({ _id: ids });
  return result;
};

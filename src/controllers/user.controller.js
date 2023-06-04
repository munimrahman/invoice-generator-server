const userService = require('../services/user.service');
const catchErrors = require('../utils/catchError');

const createUser = catchErrors(async (req, res, next) => {
  const user = await userService.createUserService(req.body);

  res.status(201).send({
    success: true,
    message: 'User created successfully',
    data: user,
  });
});

const editUser = catchErrors(async (req, res, next) => {
  const { id } = req.params;
  const user = await userService.editUserService(id, req.body);

  res.status(201).send({
    success: true,
    message: 'User updated successfully',
    data: user,
  });
});

const getSingleUser = catchErrors(async (req, res, next) => {
  const { id } = req.params;
  const user = await userService.getSingleUserService(id);

  res.status(200).send({
    success: true,
    message: 'User retrieved successfully',
    data: user,
  });
});

const getManyUsers = catchErrors(async (req, res, next) => {
  const result = await userService.getManyUserService();

  res.status(200).send({
    success: true,
    message: 'Users retrieved successfully',
    data: {
      count: result.usersCount,
      users: result.users,
    },
  });
});

const deleteSingleUser = catchErrors(async (req, res, next) => {
  const { id } = req.params;
  const result = await userService.deleteSingleUserService(id);

  res.status(200).send({
    success: true,
    message: 'User deleted successfully',
    data: result,
  });
});

const deleteManyUsers = catchErrors(async (req, res, next) => {
  const { ids } = req.body;

  const result = await userService.deleteManyUserService(ids);

  res.status(200).send({
    success: true,
    message: 'Users deleted successfully',
    data: result,
  });
});

module.exports = {
  createUser,
  editUser,
  getSingleUser,
  getManyUsers,
  deleteSingleUser,
  deleteManyUsers,
};

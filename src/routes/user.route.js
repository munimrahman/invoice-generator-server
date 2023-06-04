const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router
  .route('/')
  .get(userController.getManyUsers)
  .post(userController.createUser)
  .delete(userController.deleteManyUsers);

router
  .route('/:id')
  .get(userController.getSingleUser)
  .put(userController.editUser)
  .delete(userController.deleteSingleUser);

module.exports = router;

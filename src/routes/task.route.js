const express = require('express');
const taskController = require('../controllers/task.controller');

const router = express.Router();

router
  .route('/')
  .get(taskController.getManyTasks)
  .post(taskController.createTask)
  .delete(taskController.deleteManyTasks);

router
  .route('/:id')
  .get(taskController.getSingleTask)
  .put(taskController.editTask)
  .delete(taskController.deleteSingleTask);

module.exports = router;

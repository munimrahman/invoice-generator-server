const taskService = require('../services/task.service');
const catchErrors = require('../utils/catchError');

const createTask = catchErrors(async (req, res, next) => {
  const task = await taskService.createTaskService(req.body);

  res.status(201).send({
    success: true,
    message: 'Task created successfully',
    data: task,
  });
});

const editTask = catchErrors(async (req, res, next) => {
  const { id } = req.params;
  const task = await taskService.editTaskService(id, req.body);

  res.status(201).send({
    success: true,
    message: 'Task updated successfully',
    data: task,
  });
});

const getSingleTask = catchErrors(async (req, res, next) => {
  const { id } = req.params;
  const task = await taskService.getSingleTaskService(id);

  res.status(200).send({
    success: true,
    message: 'Task retrieved successfully',
    data: task,
  });
});

const getManyTasks = catchErrors(async (req, res, next) => {
  const result = await taskService.getManyTaskService();

  res.status(200).send({
    success: true,
    message: 'Tasks retrieved successfully',
    data: {
      count: result.tasksCount,
      tasks: result.tasks,
    },
  });
});

const deleteSingleTask = catchErrors(async (req, res, next) => {
  const { id } = req.params;
  const result = await taskService.deleteSingleTaskService(id);

  res.status(200).send({
    success: true,
    message: 'Task deleted successfully',
    data: result,
  });
});

const deleteManyTasks = catchErrors(async (req, res, next) => {
  const { ids } = req.body;

  const result = await taskService.deleteManyTaskService(ids);

  res.status(200).send({
    success: true,
    message: 'Tasks deleted successfully',
    data: result,
  });
});

module.exports = {
  createTask,
  editTask,
  getSingleTask,
  getManyTasks,
  deleteSingleTask,
  deleteManyTasks,
};

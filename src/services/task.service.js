const Task = require('../models/Task');

exports.createTaskService = async (data) => {
  const task = await Task.create(data);
  return task;
};

exports.editTaskService = async (id, data) => {
  const updatedTask = await Task.findByIdAndUpdate(id, data, {
    runValidators: true,
    new: true,
  });
  return updatedTask;
};

exports.getSingleTaskService = async (id) => {
  const task = await Task.findById(id);
  console.log(task);
  return task;
};

exports.getManyTaskService = async () => {
  const tasks = await Task.find({});
  return { tasks, tasksCount: tasks.length };
};

exports.deleteSingleTaskService = async (id) => {
  const result = await Task.findByIdAndDelete(id);
  return result;
};

exports.deleteManyTaskService = async (ids) => {
  const result = await Task.deleteMany({ _id: ids });
  return result;
};

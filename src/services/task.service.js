const Task = require('../models/Task');

exports.createTaskService = async (data) => {
  const product = await Task.create(data);
  return product;
};

exports.editTaskService = async (id, data) => {
  const updatedProduct = await Task.findByIdAndUpdate(id, data, { runValidators: true });
  return updatedProduct;
};

exports.getSingleTaskService = async (id) => {
  const product = await Task.findById(id);
  return product;
};

exports.getManyTaskService = async () => {
  const products = await Task.find({});
  return { products, productsCount: products.length };
};

exports.deleteSingleTaskService = async (id) => {
  const result = await Task.findByIdAndDelete(id);
  return result;
};

// TODO: Delete Many
exports.deleteManyTaskService = async (id) => {
  const result = await Task.deleteMany();
  return result;
};

const Order = require('../models/Order');

exports.createOrderService = async (data) => {
  const order = await Order.create(data);
  return order;
};

exports.editOrderService = async (id, data) => {
  const updatedOrder = await Order.findOneAndUpdate({ _id: id }, data, {
    runValidators: true,
    new: true,
  });
  return updatedOrder;
};

exports.getSingleOrderService = async (id) => {
  const order = await Order.findById(id).populate('products');
  return order;
};

exports.getManyOrderService = async () => {
  const orders = await Order.find({});
  return { orders, ordersCount: orders.length };
};

exports.deleteSingleOrderService = async (id) => {
  const result = await Order.findByIdAndDelete(id);
  return result;
};

exports.deleteManyOrderService = async (ids) => {
  const result = await Order.deleteMany({ _id: ids });
  return result;
};

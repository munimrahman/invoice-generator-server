const orderService = require('../services/order.service');
const catchErrors = require('../utils/catchError');

const createOrder = catchErrors(async (req, res, next) => {
  const order = await orderService.createOrderService(req.body);

  res.status(201).send({
    success: true,
    message: 'Order created successfully',
    data: order,
  });
});

const editOrder = catchErrors(async (req, res, next) => {
  const { id } = req.params;
  const order = await orderService.editOrderService(id, req.body);

  res.status(201).send({
    success: true,
    message: 'Order updated successfully',
    data: order,
  });
});

const getSingleOrder = catchErrors(async (req, res, next) => {
  const { id } = req.params;
  const order = await orderService.getSingleOrderService(id);

  res.status(200).send({
    success: true,
    message: 'Order retrieved successfully',
    data: order,
  });
});

const getManyOrders = catchErrors(async (req, res, next) => {
  // TODO: filter and pagination
  const result = await orderService.getManyOrderService();

  res.status(200).send({
    success: true,
    message: 'Orders retrieved successfully',
    data: {
      count: result.ordersCount,
      orders: result.orders,
    },
  });
});

const deleteSingleOrder = catchErrors(async (req, res, next) => {
  const { id } = req.params;
  const result = await orderService.deleteSingleOrderService(id);

  res.status(200).send({
    success: true,
    message: 'Order deleted successfully',
    data: result,
  });
});

const deleteManyOrders = catchErrors(async (req, res, next) => {
  const { ids } = req.body;

  const result = await orderService.deleteManyOrderService(ids);

  res.status(200).send({
    success: true,
    message: 'Orders deleted successfully',
    data: result,
  });
});

module.exports = {
  createOrder,
  editOrder,
  getSingleOrder,
  getManyOrders,
  deleteSingleOrder,
  deleteManyOrders,
};

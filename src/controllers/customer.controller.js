const customerService = require('../services/customer.service');
const catchErrors = require('../utils/catchError');

const createCustomer = catchErrors(async (req, res, next) => {
  const customer = await customerService.createCustomerService(req.body);

  res.status(201).send({
    success: true,
    message: 'Customer created successfully.',
    data: customer,
  });
});

const editCustomer = catchErrors(async (req, res, next) => {
  const { id } = req.params;
  const customer = await customerService.editCustomerService(id, req.body);

  res.status(201).send({
    success: true,
    message: 'Customer updated successfully',
    data: customer,
  });
});

const getSingleCustomer = catchErrors(async (req, res, next) => {
  const { id } = req.params;
  const customer = await customerService.getSingleCustomerService(id);

  res.status(200).send({
    success: true,
    message: 'Customer retrieved successfully',
    data: customer,
  });
});

const getManyCustomers = catchErrors(async (req, res, next) => {
  // TODO: filter and pagination
  const result = await customerService.getManyCustomerService();

  res.status(200).send({
    success: true,
    message: 'Customers retrieved successfully',
    data: {
      count: result.customersCount,
      customers: result.customers,
    },
  });
});

const deleteSingleCustomer = catchErrors(async (req, res, next) => {
  const { id } = req.params;
  const result = await customerService.deleteSingleCustomerService(id);

  res.status(200).send({
    success: true,
    message: 'Customer deleted successfully',
    data: result,
  });
});

const deleteManyCustomers = catchErrors(async (req, res, next) => {
  const { ids } = req.body;

  const result = await customerService.deleteManyCustomerService(ids);

  res.status(200).send({
    success: true,
    message: 'Customers deleted successfully',
    data: result,
  });
});

module.exports = {
  createCustomer,
  editCustomer,
  getSingleCustomer,
  getManyCustomers,
  deleteSingleCustomer,
  deleteManyCustomers,
};

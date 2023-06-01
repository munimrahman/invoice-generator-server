const Customer = require('../models/Customer');

exports.createCustomerService = async (data) => {
  const customer = await Customer.create(data);
  return customer;
};

exports.editCustomerService = async (id, data) => {
  const updatedCustomer = await Customer.findOneAndUpdate({ _id: id }, data, {
    runValidators: true,
    new: true,
  });
  return updatedCustomer;
};

exports.getSingleCustomerService = async (id) => {
  const customer = await Customer.findById(id);
  return customer;
};

exports.getManyCustomerService = async () => {
  const customers = await Customer.find({});
  return { customers, customersCount: customers.length };
};

exports.deleteSingleCustomerService = async (id) => {
  const result = await Customer.findByIdAndDelete(id);
  return result;
};

exports.deleteManyCustomerService = async (ids) => {
  const result = await Customer.deleteMany({ _id: ids });
  return result;
};

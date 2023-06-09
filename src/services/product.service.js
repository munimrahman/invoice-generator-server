const Product = require('../models/Product');

exports.createProductService = async (data) => {
  const product = await Product.create(data);
  return product;
};

exports.editProductService = async (id, data) => {
  const updatedProduct = await Product.findOneAndUpdate({ _id: id }, data, {
    runValidators: true,
    new: true,
  });
  return updatedProduct;
};

exports.getSingleProductService = async (id) => {
  const product = await Product.findById(id);
  return product;
};

exports.getManyProductService = async () => {
  const products = await Product.find({});
  return { products, productsCount: products.length };
};

exports.deleteSingleProductService = async (id) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

exports.deleteManyProductService = async (ids) => {
  const result = await Product.deleteMany({ _id: ids });
  return result;
};

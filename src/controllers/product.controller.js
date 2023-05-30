const productService = require('../services/product.service');
const catchErrors = require('../utils/catchError');

const createProduct = catchErrors(async (req, res, next) => {
  const product = await productService.createProductService(req.body);

  res.status(201).send({
    success: true,
    message: 'Product created successfully',
    data: product,
  });
});

const editProduct = catchErrors(async (req, res, next) => {
  const { id } = req.params;
  const product = await productService.editProductService(id, req.body);

  res.status(201).send({
    success: true,
    message: 'Product updated successfully',
    data: product,
  });
});

const getSingleProduct = catchErrors(async (req, res, next) => {
  const { id } = req.params;
  const product = await productService.getSingleProductService(id);

  res.status(200).send({
    success: true,
    message: 'Product retrieved successfully',
    data: product,
  });
});

const getManyProducts = catchErrors(async (req, res, next) => {
  // TODO: filter and pagination
  const result = await productService.getManyProductService();

  res.status(200).send({
    success: true,
    message: 'Products retrieved successfully',
    data: {
      count: result.productsCount,
      products: result.products,
    },
  });
});

const deleteSingleProduct = catchErrors(async (req, res, next) => {
  const { id } = req.params;
  const result = await productService.deleteSingleProductService(id);
  // TODO: if no response response should be 204
  res.status(200).send({
    success: true,
    message: 'Product deleted successfully',
    data: result,
  });
});

const deleteManyProducts = catchErrors(async (req, res, next) => {
  const { ids } = req.body;

  const result = await productService.deleteManyProductService(ids);

  // TODO: if no response response should be 204
  res.status(200).send({
    success: true,
    message: 'Products deleted successfully',
    data: result,
  });
});

module.exports = {
  createProduct,
  editProduct,
  getSingleProduct,
  getManyProducts,
  deleteSingleProduct,
  deleteManyProducts,
};

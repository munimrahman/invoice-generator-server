const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: [3, 'Name must be at least 3 characters'],
      maxLength: [100, 'Name must be at most 100 characters'],
    },
    productCode: {
      type: String,
      required: [true, 'Product Code is Required'],
    },
    category: {
      type: String,
    },
    price: {
      type: String,
      required: [true, 'Price is Required'],
      min: [0, 'Product Price Must Be at Least 0'],
    },
    photo: {
      type: String,
      required: [true, 'Photo is Required'],
    },
    stock: {
      type: Number,
      required: [true, 'Stock is Required'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
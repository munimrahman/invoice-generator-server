const mongoose = require('mongoose');
const validator = require('validator');

const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    customer: {
      type: String,
      required: true,
      minLength: [3, 'Name must be at least 3 characters'],
      maxLength: [100, 'Name must be at most 100 characters'],
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('User', orderSchema);

module.exports = Order;

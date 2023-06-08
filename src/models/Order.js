const mongoose = require('mongoose');
const validator = require('validator');

const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    customer: {
      name: {
        type: String,
        required: true,
        minLength: [3, 'Name must be at least 3 characters'],
        maxLength: [100, 'Name must be at most 100 characters'],
      },
      email: {
        type: String,
        validate: [validator.isEmail, 'Provide a Valid Email Address'],
        required: true,
        trim: true,
        lowercase: true,
      },
      mobile: {
        type: String,
        validate: [validator.isMobilePhone, 'bn-BD', 'Provide a Valid BD Mobile Number'],
        trim: true,
        lowercase: true,
      },
      address: {
        type: String,
        required: true,
      },
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

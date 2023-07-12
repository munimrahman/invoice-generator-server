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
        name: {
          type: String,
          required: true,
        },
        productCode: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        productPrice: {
          type: Number,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
      },
    ],
    date: {
      type: String,
      required: true,
    },
    dueDate: {
      type: String,
      required: true,
    },
    subTotal: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
    },
    total: {
      type: Number,
      required: true,
    },
    note: {
      type: String,
    },
    invoiceNumber: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

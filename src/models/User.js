const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [3, 'Name must be at least 3 characters'],
      maxLength: [100, 'Name must be at most 100 characters'],
    },
    email: {
      type: String,
      validator: [validator.isEmail, 'Provide a Valid Email Address'],
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    mobile: {
      type: String,
      validator: [validator.isMobilePhone, 'bn-BD', 'Provide a Valid BD Mobile Number'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    fbProfile: {
      type: String,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    confirmPassword: {
      type: String,
      required: [true, 'Please confirm your password'],
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },

    confirmationToken: String,
    confirmationTokenExpires: Date,

    passwordChangeAt: Date,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);

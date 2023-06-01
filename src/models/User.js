/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const crypto = require('crypto');

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
      validate: [validator.isEmail, 'Provide a Valid Email Address'],
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    mobile: {
      type: String,
      validate: [validator.isMobilePhone, 'bn-BD', 'Provide a Valid BD Mobile Number'],
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
      validate: {
        validator: (value) => validator.isStrongPassword(value, {
            minLength: 6,
            minLowerCase: 1,
            minUpperCase: 1,
            minNumbers: 1,
            minSymbols: 1,
          }),
          message: 'Password {VALUE} is not strong enough.'
      },
    },
    confirmPassword: {
      type: String,
      required: [true, 'Please confirm your password'],
      validate: {
        validator(value) {
          return value === this.password;
        },
        message: 'Passwords does not match!'
      }
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'blocked'],
      default: 'inactive',
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

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const { password } = this;
  const hashedPassword = bcrypt.hashSync(password);

  this.password = hashedPassword;
  this.confirmPassword = undefined;

  next();
});

userSchema.methods.comparePassword = function (password, hash) {
  const isPasswordValid = bcrypt.compareSync(password, hash);
  return isPasswordValid;
};

userSchema.methods.generateConfirmationToken = function () {
  const token = crypto.randomBytes(32).toString('hex');

  this.confirmationToken = token;

  const date = new Date();

  date.setDate(date.getDate() + 1);
  this.confirmationTokenExpires = date;

  return token;
};

const User = mongoose.model('User', userSchema);

module.exports = User;

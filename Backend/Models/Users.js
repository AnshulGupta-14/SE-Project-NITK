const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  // username: String,
  // password: String,
  // email: String,
  regno: String,
  // name: String,
  // mobile: String,
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 50,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 100,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  // regno: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   trim: true,
  //   lowercase: true,
  // },
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    trim: true,
    lowercase: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  }
});

module.exports = mongoose.model("Users", userSchema);
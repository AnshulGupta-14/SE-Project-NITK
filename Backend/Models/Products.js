const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    lowercase: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 500,
    trim: true,
  },
  // image: {
  //   type: String,
  //   required: true,
  // },
  category: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
});

module.exports = mongoose.model("Products", Schema);

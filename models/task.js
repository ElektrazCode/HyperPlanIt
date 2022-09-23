const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task:{
    type: String
  },
  list:{
    type: String
  },
  user: { 
    type: String,
    unique: true,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  due: {
    type: Date
  },
  complete:{
    type: Boolean,
    default: false
  },
  progress:{
    type: Number
  }
});
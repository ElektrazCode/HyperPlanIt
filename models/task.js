const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List",
  },
  task: {
    type: String,
    required: true,
  },
  due: {
    type: Date
  },
  complete:{
    type: Boolean,
    default: false
  },
  progress:{
    type: Number,
    default: 0
  },
  recurrent:{
    type: Boolean,
    default: false
  },
  frequency:{
    type: Number,
    default: 0
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Task", TaskSchema);
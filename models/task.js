const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List",
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
  },
  recurrent:{
    type: Boolean,
    deafult: false
  }
});

module.exports = mongoose.model("Task", TaskSchema);
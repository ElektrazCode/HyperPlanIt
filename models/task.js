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
  }
});

module.exports = mongoose.model("Task", TaskSchema);
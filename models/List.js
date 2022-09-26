const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  title:{
    type: String,
    unique: true,
    required: true
  },
  category:{
    type: String,
    required: true
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

module.exports = mongoose.model("List", ListSchema);
const mongoose = require("mongoose");

const StartSchema = new mongoose.Schema({
  time: {
    type: Date,
    default: Date.now,
  },
  id: {
    type: String,
    required:true,
  }
});

module.exports = mongoose.model("Start", StartSchema);

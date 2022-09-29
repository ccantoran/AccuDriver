const mongoose = require("mongoose");

const StopSchema = new mongoose.Schema({
  time: {
    type: Date,
    default: Date.now,
  },
  id: {
    type: String,
    required:true,
  }
});

module.exports = mongoose.model("Stop", StopSchema);

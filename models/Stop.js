const mongoose = require("mongoose");

const StopSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
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


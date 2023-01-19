const mongoose = require("mongoose");

const StartSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Start", StartSchema);

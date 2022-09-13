const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
  driverName: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Profiles', ProfileSchema)

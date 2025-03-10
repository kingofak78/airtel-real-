const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  uniqueid: { type: String, required: true, unique: true },
  entries: [
    {
      shopName: { type: String, required: true },
      boardSize: { type: String, required: true },
      lapuNumber: { type: String, required: true },
      submittedAt: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model('User', userSchema);

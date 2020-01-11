const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Mesajele nu pot if goale"],
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: String
  }
});
const Message = mongoose.model("Message", messageSchema);
module.exports = Message;

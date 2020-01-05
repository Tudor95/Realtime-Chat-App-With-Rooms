const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Mesajele nu pot if goale"]
  },
  date: {
    type: Date,
    default: Date.now
  }
});
const Message = mongoose.model("Message", messageSchema);
models.exports = Message;

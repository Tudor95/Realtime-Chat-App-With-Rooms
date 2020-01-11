const mongoose = require("mongoose");
const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Va rog introduceti un nume pentru room"],
    unique: true,
    trim: true
  },
  users: {
    type: Number,
    default: 0
  },
  messages: {
    type: Number,
    default: 0
  }
});
const Room = mongoose.model("Room", roomSchema);
module.exports = Room;

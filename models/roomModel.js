const mongoose = require("mongoose");
const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Va rog introduceti un nume pentru room"],
    unique: true
  }
});
const Room = mongoose.model("Room", roomSchema);
models.exports = Room;

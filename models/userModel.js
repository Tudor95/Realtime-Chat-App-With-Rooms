const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Va rog introduceti un nume pentru user"],
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, "Va rog introduceti o parola pentru user"],
    select: false
  },
  messages: {
    type: Number,
    default: 0
  }
});
const User = mongoose.model("User", userSchema);
module.exports = User;

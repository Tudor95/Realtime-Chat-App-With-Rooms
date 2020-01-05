const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Va rog introduceti un nume pentru user"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Va rog introduceti o parola pentru user"]
  }
});
const User = mongoose.model("User", userSchema);
models.exports = User;

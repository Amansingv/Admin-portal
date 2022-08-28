const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 30 },
  email: { type: String, required: true, minlength: 11, maxlength: 50 },
});

const User = mongoose.model("User", userSchema);
module.exports = User;

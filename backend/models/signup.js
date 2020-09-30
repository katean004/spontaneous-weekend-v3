const mongoose = require("mongoose");
const signupSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  favorites: {
    type: Array
    // error message
    // Needs further considertion.
  }
});
module.exports = mongoose.model("Signup", signupSchema);

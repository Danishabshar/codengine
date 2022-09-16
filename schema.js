const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
    unique:true,
  }
  
});



const userModel = mongoose.model("country", userSchema);

module.exports = userModel;
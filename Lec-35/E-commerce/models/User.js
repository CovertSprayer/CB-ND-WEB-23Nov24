const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String
  },
  role: {
    type: String,
    required: true,
    enum: ["seller", "buyer"]
  }
})

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
//Create Schema

const moongose = require("mongoose");
const userSchema = new moongose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    ipAddress: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
  );
  
  //Create Model
  
  const User = moongose.model("user", userSchema);

   
  module.exports = User;
  
const mongoose = require("mongoose");

//username, email, password

const User = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const userDetails = mongoose.model(" userDetails", User);
module.exports = userDetails;

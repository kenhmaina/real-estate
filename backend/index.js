const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const validator = require("validator.js");
const userDetails = require("./models/Users");

//

dotenv.config();
const PORT = process.env.PORT;
const app = express();
const URI = process.env.URI;
app.use(express.json());

//testing the get api route

app.get("/get", (req, res) => {
  res.status(200).json("testing on api route");
});

//registering a user
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!email || !password || !username) {
    res.status(400).send("Fill in all the fields");
  }

  try {
    const user = await userDetails.create({
      username,
      email,
      password,
    });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
});

//connecting to mongoose database
try {
  mongoose.connect(URI).then(() => {
    console.log("connected to database");
  });
} catch (error) {
  console.log({ message: error.message });
}

//initialising the express app

app.listen(PORT || 5000, () => {
  console.log(`Server started on port ${PORT}`);
});

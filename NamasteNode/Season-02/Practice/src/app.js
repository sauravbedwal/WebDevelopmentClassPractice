const express = require("express");
const app = express();

const connectDB = require("./config/database");
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "John",
    lastName: "Doe",
    emailId: "john@example.com",
    password: "password",
  });

  try {
    await user.save();
    res.send("User saved successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Connection successful");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.log("Connection failed");
    resizeBy.status(400).send("Connection failed: " + err.message);
  });

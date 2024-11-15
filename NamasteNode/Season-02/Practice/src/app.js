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

// GET USER as per EMAIL
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const users = await User.find({ emailId: userEmail });

    if (users === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
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

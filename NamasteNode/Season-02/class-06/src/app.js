const express = require("express");
const app = express();

const connectDB = require("./config/database");

const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Virat",
    lastName: "Kohli",
    emailId: "kohli18@gmail.com",
    password: "anushkaVamika",
  };

  // Creating a new instance of the User model
  const user = new User(userObj);

  try {
    await user.save();
    res.send("User added successfully!");
  } catch (err) {
    console.log("Error creating" + err.message);
    res.status(400).send("Error saving the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection estabilished..");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected!!");
  });

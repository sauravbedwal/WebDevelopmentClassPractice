const express = require("express");
const app = express();

const connectDB = require("./config/database");

const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  console.log(req.body);
  // Creating a new instance of the User model
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added successfully!");
  } catch (err) {
    console.log("Error creating" + err.message);
    res.status(400).send("Error saving the user:" + err.message);
  }
});

// // GET user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  console.log(userEmail);

  try {
    // const userEmail = req.body.emailId;
    // console.log(userEmail);

    const users = await User.find({ emailId: userEmail });

    if (users.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

// GET user by email but only One User
// app.get("/user", async (req, res) => {
//   try {
//     const userEmail = req.body.emailId;
//     console.log(userEmail);
//     const user = await User.findOne({ emailId: userEmail });

//     if (!user) {
//       res.status(404).send("user not found");
//     } else {
//       res.send(user);
//     }
//   } catch (err) {
//     res.status(400).send("Something went wrong");
//   }
// });

// Feed API - GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      res.status(404).send("No users found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

// DELETE API - DELETE /user - delete the user
app.delete("/user", async (req, res) => {
  try {
    const userId = req.body._id;
    console.log(userId);

    const user = await User.findByIdAndDelete(userId);

    // we can write like this as its normal way and above is the shorthand for this
    // const user = await User.findByIdAndDelete({_id: userId});

    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send("User deleted successfully");
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

//// PATCH API - Update data of the user
// app.patch("/user", async (req, res) => {
//   try {
//     const userId = req.body._id;
//     const data = req.body;

//     const user = await User.findByIdAndUpdate(userId, data);
//     // const user = await User.findByIdAndUpdate(userId, { firstName: "Ishant" });
//     if (!user) {
//       res.status(404).send("User not found");
//     } else {
//       res.send("User updated successfully");
//     }
//   } catch (err) {
//     res.status(400).send("Something went wrong");
//   }
// });

// PATCH API - Update data of the user but also added Optional 3rd parameter
app.patch("/user", async (req, res) => {
  try {
    const userId = req.body._id;
    const data = req.body;

    const user = await User.findByIdAndUpdate(userId, data, {
      returnDocument: "before",
    });
    console.log(user);

    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send("User updated successfully");
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
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

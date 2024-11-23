const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const validator = require("validator");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { userAuth } = require("./middlewares/auth");

app.use(express.json());
app.use(cookieParser());

app.post("/signup", async (req, res) => {
  try {
    // console.log(req.body);

    //Validation of data
    validateSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;

    //Encrypt the password
    const passwordHash = await bcrypt.hash(password, 10);
    // console.log(passwordHash);

    // Creating a new instance of the User model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    await user.save();
    res.send("User added successfully!");
  } catch (err) {
    console.log("Error creating" + err.message);
    res.status(400).send("Error saving the user: " + err.message);
  }
});

// login
app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    if (!validator.isEmail(emailId)) {
      throw new Error("Invalid email");
    }

    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    // Old way to check password is correct or not but as per best practices we can check in user schema by schema methods
    // const isPasswordValid = await bcrypt.compare(password, user.password);

    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {
      // Create a JWT token

      // Old way to generate token but as per best practices we get the token in user schema by schema methods
      // const token = await jwt.sign({ _id: user._id }, "DEV@Tinder$786", { expiresIn: "1d",});

      const token = await user.getJWT();
      // console.log(token);

      // Add the token to cookie and send the response back to the user
      res.cookie("token", token, { expires: new Date(Date.now() + 900000) });

      res.send("Logged in successfully!");
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

// GET Profile using middleware
app.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

app.post("/sendConnectionRequest", userAuth, async (req, res) => {
  try {
    const user = req.user;

    console.log("Sending a connection request");
    res.send(user.firstName + " sent connection request");
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

// Will create api's with validation as Akshay removed all of the api's mentioned below
// GET /profile - as we learning so we did validations here only now we made a middlware(ABOVE EXAMPLE) which does the validations & that middlware can use for multiple API's
// app.get("/profile", async (req, res) => {
//   try {
//     const cookies = req.cookies;
//     console.log(cookies);

//     // Validate the token
//     const { token } = cookies;
//     if (!token) {
//       throw new Error("No token found");
//     }

//     const decodedMessage = await jwt.verify(token, "DEV@Tinder$786");
//     // console.log(decodedMessage);

//     const { _id } = decodedMessage;
//     console.log("Logged In user is: ", _id);

//     const user = await User.findById(_id);
//     if (!user) {
//       throw new Error("User does not exist");
//     }

//     res.send(user);
//   } catch (err) {
//     res.status(400).send("ERROR: " + err.message);
//   }
// });

// // GET user by email
// app.get("/user", async (req, res) => {
//   try {
//     const userEmail = req.body.emailId;
//     console.log(userEmail);

//     const users = await User.find({ emailId: userEmail });

//     if (users.length === 0) {
//       res.status(404).send("User not found");
//     } else {
//       res.send(users);
//     }
//   } catch (err) {
//     res.status(400).send("Something went wrong");
//   }
// });

// Feed API - GET /feed - get all the users from the database
// app.get("/feed", async (req, res) => {
//   try {
//     const users = await User.find({});
//     if (users.length === 0) {
//       res.status(404).send("No users found");
//     } else {
//       res.send(users);
//     }
//   } catch (err) {
//     res.status(400).send("Something went wrong");
//   }
// });

// DELETE API - DELETE /user - delete the user
// app.delete("/user", async (req, res) => {
//   try {
//     const userId = req.body._id;
//     console.log(userId);

//     const user = await User.findByIdAndDelete(userId);

//     if (!user) {
//       res.status(404).send("User not found");
//     } else {
//       res.send("User deleted successfully");
//     }
//   } catch (err) {
//     res.status(400).send("Something went wrong");
//   }
// });

// PATCH API - Update data of the user but also added Optional 3rd parameter
// (exactly same to normal if we don't add 3 parameter i.e returnDocument: before as runvalidator: true is important to apply validate function in schema)
// app.patch("/user/:userId", async (req, res) => {
//   try {
//     const userId = req.params?.userId;
//     const data = req.body;

//     // Request data
//     //   {
//     //     "_id": "672f3d4130b7f0f4fe37fce8",
//     //     "emailId": "bcde@gmail.com",
//     //     "gender": "male",
//     //     "skills": ["Cricket", "Acting", "JavaScript"]

//     // }

//     const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];

//     const isUpdateAllowed = Object.keys(data).every((key) =>
//       ALLOWED_UPDATES.includes(key)
//     );

//     if (!isUpdateAllowed) {
//       throw new Error("Update not allowed");
//     }

//     if (data.skills.length > 10) {
//       throw new Error("Skills cannot be more than 10");
//     }

//     const user = await User.findByIdAndUpdate(userId, data, {
//       returnDocument: "before",
//       runValidators: true,
//     });
//     console.log(user);

//     if (!user) {
//       res.status(404).send("User not found");
//     } else {
//       res.send("User updated successfully");
//     }
//   } catch (err) {
//     res.status(400).send("UPDATE FAILED: " + err.message);
//   }
// });

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

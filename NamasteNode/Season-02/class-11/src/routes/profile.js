const express = require("express");
const profileRouter = express.Router();
const { userAuth } = require("../middlewares/auth");
const {
  validateProfileEditData,
  validatePasswordUpdate,
} = require("../utils/validation");

// GET /profile/view (using middleware)
profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

// PATCH /profile/edit
profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateProfileEditData(req)) {
      throw new Error("Invalid Edit Request");
      // ----- we can write like this also -----
      // return res.status(400).send("Invalid Edit Request");
    }

    // ----- if writing if statement in validateProfileEditData function in validation.js then we can simply invoke the function -----
    // validateProfileEditData(req);

    const loggedInUser = req.user;
    // console.log(loggedInUser);

    console.log("keyboard", req.body);
    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));

    await loggedInUser.save();
    res.json({
      message: `${loggedInUser.firstName} your profile updated successfully!`,
      data: loggedInUser,
    });
    // ----- we can write like this also -----
    // res.send(`${loggedInUser.firstName} your profile updated successfully!`);
  } catch (err) {
    console.log("Error: " + err.message);
    res.status(400).send("Error: " + err.message);
  }
});

// PATCH /profile/password
profileRouter.patch("/profile/password", userAuth, async (req, res) => {
  try {
    const newPasswordHash = await validatePasswordUpdate(req);

    const user = req.user;
    user.password = newPasswordHash;

    await user.save();
    res.json({
      message: "Password updated successfully!",
      data: user,
    });
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});
module.exports = profileRouter;

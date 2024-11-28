const express = require("express");
const { userAuth } = require("../middlewares/auth");
const userRouter = express.Router();
const ConnectionRequest = require("../models/connectionRequest");

const USER_SAFE_DATA = [
  "firstName",
  "lastName",
  "photoUrl",
  "age",
  "gender",
  "about",
  "skills",
];
// ----- get all the pending connection request for the loggedIn user with interested status -----
userRouter.get("/user/requests/received", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const connectionRequest = await ConnectionRequest.find({
      toUserId: loggedInUser._id,
      status: "interested",
    }).populate("fromUserId", [
      "firstName",
      "lastName",
      "photoUrl",
      "age",
      "gender",
      "about",
      "skills",
    ]);

    res.json({ message: "Connection request", data: connectionRequest });
  } catch (err) {
    res.status(400).json({ message: "Error: " + err.message });
  }
});

userRouter.get("/user/connections", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const connectionRequests = await ConnectionRequest.find({
      $or: [
        { fromUserId: loggedInUser._id, status: "accepted" },
        { toUserId: loggedInUser._id, status: "accepted" },
      ],
    })
      .populate("fromUserId", USER_SAFE_DATA)
      .populate("toUserId", USER_SAFE_DATA);

    const data = connectionRequests.map((request) => {
      // ----- We can also use toString() so it will compare the strings i.e ObjectId's as we can't just do === as these are object strings so it can't compare -----
      // if (request.fromUserId._id.toString() === loggedInUser._id.toString())
      if (request.fromUserId._id.equals(loggedInUser._id)) {
        return request.toUserId;
      }
      return request.fromUserId;
    });

    res.send({ message: "success", data: data });
  } catch (err) {
    res.status(400).json({ message: "Error: " + err.message });
  }
});

module.exports = userRouter;

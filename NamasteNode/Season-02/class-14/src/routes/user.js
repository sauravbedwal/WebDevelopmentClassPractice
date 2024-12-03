const express = require("express");
const { userAuth } = require("../middlewares/auth");
const userRouter = express.Router();
const ConnectionRequest = require("../models/connectionRequest");
const User = require("../models/user");

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

// ----- feed api and pagination implemented as page and limit are optional if not given then we will give first 10 users -----
userRouter.get("/feed", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;
    const page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 10;
    limit = limit > 50 ? 50 : limit;

    const skip = (page - 1) * limit;

    const connectionRequests = await ConnectionRequest.find({
      $or: [{ fromUserId: loggedInUser._id }, { toUserId: loggedInUser._id }],
    }).select("fromUserId toUserId");
    // console.log("connectionRequest", connectionRequest);

    const hideUserFromFeed = new Set();
    connectionRequests.forEach((req) => {
      hideUserFromFeed.add(req.fromUserId.toString());
      hideUserFromFeed.add(req.toUserId.toString());
    });
    // console.log("hideUserFromFeed", hideUserFromFeed);

    const users = await User.find({
      $and: [
        { _id: { $nin: Array.from(hideUserFromFeed) } },
        { _id: { $ne: loggedInUser._id } },
      ],
    }).select(USER_SAFE_DATA);

    res.json({ message: "Feed Users", data: users });
  } catch (err) {
    res.status(400).json({ messgae: "Error: " + err.message });
  }
});

// ----- My way as i also want to show rejected user in feed same like insta/fb didn't applied pagination -----
// userRouter.get("/user/feed", userAuth, async (req, res) => {
//   try {
//     // user can't see his profile
//     // user can't see connected user
//     // user can't see interested and ignored user
//     const loggedInUser = req.user;

//     const feedUserNotNeed = await ConnectionRequest.find({
//       $or: [
//         {
//           fromUserId: loggedInUser._id,
//           status: "accepted",
//         },
//         {
//           fromUserId: loggedInUser._id,
//           status: "interested",
//         },
//         {
//           fromUserId: loggedInUser._id,
//           status: "ignored",
//         },
//         {
//           toUserId: loggedInUser._id,
//           status: "accepted",
//         },
//         {
//           toUserId: loggedInUser._id,
//           status: "interested",
//         },
//       ],
//     });

//     const feedUserNotNeed_Ids = feedUserNotNeed.map((request) => {
//       if (request.toUserId.toString() === loggedInUser._id.toString()) {
//         return request.fromUserId;
//       }
//       return request.toUserId;
//     });

//     const feedUserNeeded = await User.find({
//       _id: { $nin: [...feedUserNotNeed_Ids, loggedInUser._id] },
//     }).select(USER_SAFE_DATA);

//     // console.log("feedUserNotNeed", feedUserNotNeed);
//     // console.log("feedUserNotNeed_Ids", feedUserNotNeed_Ids);
//     // console.log("feedUserNeeded", feedUserNeeded);

//     res.json({ message: "Feed Users", data: feedUserNeeded });
//   } catch (err) {
//     res.status(400).json({ message: "Error: " + err.message });
//   }
// });

module.exports = userRouter;

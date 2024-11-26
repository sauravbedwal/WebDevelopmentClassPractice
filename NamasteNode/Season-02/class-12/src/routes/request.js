const express = require("express");
const requestRouter = express.Router();
const { userAuth } = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionRequest");
const User = require("../models/user");

requestRouter.post(
  "/request/send/:status/:toUserId",
  userAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id;
      const toUserId = req.params.toUserId;
      const status = req.params.status;

      // checking allowed status
      const allowedStatus = ["interested", "ignored"];
      if (!allowedStatus.includes(status)) {
        return res
          .status(400)
          .json({ message: "Invalid message type: " + status });
      }

      // check if toUserId is in User DB
      const toUser = await User.findById({ _id: toUserId });
      if (!toUser) {
        return res.status(404).json({ message: "User not found!!" });
      }

      // Check if the request already exists
      const existingConnectionRequest = await ConnectionRequest.findOne({
        $or: [
          { fromUserId: fromUserId, toUserId: toUserId },
          { fromUserId: toUserId, toUserId: fromUserId },
        ],
      });

      if (existingConnectionRequest) {
        return res
          .status(400)
          .json({ message: "Connection Request Already Exists!!" });
      }

      // New instance of connection request
      const connectionRequest = new ConnectionRequest({
        fromUserId,
        toUserId,
        status,
      });

      await connectionRequest.save();
      res.json({
        message:
          req.user.firstName +
          (status === "interested"
            ? " sent connection request to "
            : " ignored connection request of ") +
          toUser.firstName,
        data: connectionRequest,
      });
    } catch (err) {
      res.status(400).json({ message: "Error: " + err.message });
    }
  }
);

module.exports = requestRouter;

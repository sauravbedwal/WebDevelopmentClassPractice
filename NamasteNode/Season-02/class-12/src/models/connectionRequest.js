const mongoose = require("mongoose");

const connectionRequestSchema = new mongoose.Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    status: {
      type: String,
      enum: {
        values: ["ignored", "interested", "accepted", "rejected"],
        messagee: `{VALUE} is not a valid status`,
      },
    },
  },
  {
    timestamps: true,
  }
);

// ----- Suppose we doing query by firstName like connectionRequest.find({fromUserId: 31313464641321354}) then we can use normal index so our query become faster -----
// connectionRequestSchema.index({ fromUserId: 1 });

// ----- Compound index for fromUserId and toUserId so that query to find existingConnectionRequest will become faster -----
connectionRequestSchema.index({ fromUserId: 1, toUserId: 1 });

connectionRequestSchema.pre("save", function (next) {
  const connectionRequest = this;
  // check if fromUserId is same as toUserId
  if (connectionRequest.fromUserId.equals(connectionRequest.toUserId)) {
    throw new Error("Cannot send connection request to yourself!");
  }
  next();
});

const ConnectionRequest = mongoose.model(
  "ConnectionRequest",
  connectionRequestSchema
);

module.exports = ConnectionRequest;

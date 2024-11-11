const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(
    "mongodb+srv://sauravbedwal1234:LAxU7xXSS9gO09WJ@namastenodesauravbedwal.vwabz.mongodb.net/devTinder"
  );
};

module.exports = connectDB;

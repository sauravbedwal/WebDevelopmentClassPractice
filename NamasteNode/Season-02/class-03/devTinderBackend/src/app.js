// console.log("Starting a new Project!");

const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello from the dashboard");
});

app.use("/hello", (req, res) => {
  res.send("Hello Hello!");
});

app.use("/test", (req, res) => {
  res.send("Hello from the test!");
});

// // this will show with every route like localhost:3000, localhost:3000/test, localhost:3000/home
// app.use((req, res) => {
//   res.send("Hello from the Server!");
// });

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});

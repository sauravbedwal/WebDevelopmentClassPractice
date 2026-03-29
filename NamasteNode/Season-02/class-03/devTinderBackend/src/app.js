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

// -- UNDERSTANDING OF CODE --
// 1. app.use() matches prefix routes
//    "/" matches ALL routes

// 2. Express checks routes top → bottom

// 3. First match gets executed

// 4. If response is sent → next routes won't run

// 5. To avoid issues:
//    - Use app.get() for specific routes
//    OR
//    - Keep "/" route at the bottom

// 6. Always write:
//    Specific routes → first
//    General routes → last
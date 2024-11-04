// console.log("Starting a new Project!");

const express = require("express");

const app = express();

// this is for understanding that order matters as if it will be uncommented all the requests of http method will be handled by this only
// app.use("/user", (req, res) => {
//   res.send("HAHAHAHAHAHA");
// });

// This will only handle GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstName: "Saurav", lastName: "Bedwal" });
});

app.post("/user", (req, res) => {
  console.log(req.body);
  // logic of saving data to DB
  res.send("Data successfully saved to the database!");
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully");
});

app.put("/user", (req, res) => {
  res.send("Put successfully");
});

app.patch("/user", (req, res) => {
  res.send("Patch successfully");
});

//
//
// This will match all the HTTP method API calls
app.use("/hello/2", (req, res) => {
  res.send("Abracadabra!!! Hello From 2!!!");
});

app.use("/hello", (req, res) => {
  res.send("Hello Hello!");
});

app.use("/test", (req, res) => {
  res.send("Hello from the test!");
});

app.use("/", (req, res) => {
  res.send("Hello from the dashboard");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});

// console.log("Starting a new Project!");

const express = require("express");

const app = express();

// this is for understanding that order matters as if we uncomment it all the requests of http method will be handled by this only bcoz app.use handles all http requests
// app.use("/user", (req, res) => {
//   res.send("HAHAHAHAHAHA");
// });

// //This will only handle GET call to /user
// app.get("/user", (req, res) => {
//   res.send({ firstName: "Saurav", lastName: "Bedwal" });
// });

// app.post("/user", (req, res) => {
//   console.log(req.body);
//   // logic of saving data to DB
//   res.send("Data successfully saved to the database!");
// });

// app.delete("/user", (req, res) => {
//   res.send("Deleted successfully");
// });

// app.put("/user", (req, res) => {
//   res.send("Put successfully");
// });

// app.patch("/user", (req, res) => {
//   res.send("Patch successfully");
// });

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

/*----------------------------------------*/

// advanced routing
// app.get("/ab?c", (req, res) => {
//   res.send({ firstName: "Saurav", lastName: "Bedwal" });
// });

// app.get("/ab+c", (req, res) => {
//   res.send({ firstName: "Saurav", lastName: "Bedwal" });
// });

// app.get("/ab*cd", (req, res) => {
//   res.send({ firstName: "Saurav", lastName: "Bedwal" });
// });

// app.get("/a(bc)?d", (req, res) => {
//   res.send({ firstName: "Saurav", lastName: "Bedwal" });
// });

// app.get("/a(bc)+d", (req, res) => {
//   res.send({ firstName: "Saurav", lastName: "Bedwal" });
// });

// regex
// app.get(/a/, (req, res) => {
//   res.send({ firstName: "Saurav", lastName: "Bedwal" });
// });

// app.get(/.*fly$/, (req, res) => {
//   res.send({ firstName: "Saurav", lastName: "Bedwal" });
// });

// how to get query parameter/params => /user?userId=101 or /user?userId=101&password=testing
// app.get("/user", (req, res) => {
//   console.log(req.query);
//   res.send({ firstName: "Saurav", lastName: "Bedwal" });
// });

// //  how to make routes dynamic or dynamic api's => /user?user/707
// app.get("", (req, res) => {
//   console.log(req.params);
//   res.send({ firstName: "Saurav", lastName: "Bedwal" });
// });

// app.get("/user/:userId/:name/:password", (req, res) => {
//   console.log(req.params);
//   res.send({ firstName: "Saurav", lastName: "Bedwal" });
// });

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});

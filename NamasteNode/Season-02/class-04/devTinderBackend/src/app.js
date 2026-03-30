// console.log("Starting a new Project!");

const express = require("express");

const app = express();

// // this is for understanding that order matters as if we uncomment it all the requests of http method will be handled by this only bcoz app.use handles all http requests
// // app.use("/user", (req, res) => {
// //   res.send("HAHAHAHAHAHA");
// // });

// // in post call req.body is undefined because Express is not parsing JSON. req.body is NOT parsed by default ❌ 👉 Express does NOT understand JSON automatically
// // Incoming request → Raw JSON → Express can't read it ❌
// // AFTER ADDING MIDDLEWARE --> Incoming request → express.json() parses → req.body becomes usable ✅
// app.use(express.json());

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

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// This will match all the HTTP method API calls
// app.use("/hello/2", (req, res) => {
//   res.send("Abracadabra!!! Hello From 2!!!");
// });

// app.use("/hello", (req, res) => {
//   res.send("Hello Hello!");
// });

// app.use("/test", (req, res) => {
//   res.send("Hello from the test!");
// });

// app.use("/", (req, res) => {
//   res.send("Hello from the dashboard");
// });

/***************************************************************************************************************************************************************************/

// // Advanced routing - These are PATTERN routes, not exact strings
// // These are NOT literal strings. As, 👉 They are pattern routes so below are routes to hit on postman

// // 👉 b is optional
// // http://localhost:7777/ac, http://localhost:7777/abc 
// app.get("/ab?c", (req, res) => {
//   res.send({ firstName: "Saurav", lastName: "Bedwal" });
// });

// // 👉 b repeats 1 or more times
// // http://localhost:7777/abc, http://localhost:7777/abbc, http://localhost:7777/abbbc, http://localhost:7777/abbbbbc
// app.get("/ab+c", (req, res) => {
//   res.send({ firstName: "Saurav", lastName: "Bedwal" });
// });

// // 👉 * = anything (even nothing)
// // http://localhost:7777/abcd, http://localhost:7777/abxcd, http://localhost:7777/ab123cd, http://localhost:7777/abXYZcd
// app.get("/ab*cd", (req, res) => {
//   res.send({ firstName: "Saurav", lastName: "Bedwal" });
// });

// // 👉 (bc) is optional
// // http://localhost:7777/ad, http://localhost:7777/abcd
// app.get("/a(bc)?d", (req, res) => {
//   res.send({ firstName: "Saurav", lastName: "Bedwal" });
// });

// // 👉 (bc) repeats 1 or more times
// // http://localhost:7777/abcd, http://localhost:7777/abcbcd, http://localhost:7777/abcbcbcd
// app.get("/a(bc)+d", (req, res) => {
//   res.send({ firstName: "Saurav", lastName: "Bedwal" });
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Regex
// //Match ANY route that contains letter "a" anywhere /a/  → contains "a" anywhere
// // http://localhost:7777/a, http://localhost:7777/cat, http://localhost:7777/bat, http://localhost:7777/alpha, http://localhost:7777/123a456
// app.get(/a/, (req, res) => {
//   res.send({ firstName: "Saurav", lastName: "Bedwal" });
// });

// //"ends with fly" => .*   → anything (0 or more characters) fly  → must end with "fly" $    → end of string
// // http://localhost:7777/fly, http://localhost:7777/butterfly, http://localhost:7777/dragonfly, http://localhost:7777/superfly, http://localhost:7777/123fly, http://localhost:7777/flying   ❌ (does not end with fly)
// app.get(/.*fly$/, (req, res) => {
//   res.send({ firstName: "Saurav", lastName: "Bedwal" });
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// how to get query parameter/params => /user?userId=101 or /user?userId=101&password=testing
// app.get("/user", (req, res) => {
//   console.log(req.query);
//   res.send({ firstName: "Saurav", lastName: "Bedwal" });
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//  how to make routes dynamic or dynamic api's => /user/707
// app.get("", (req, res) => {
//   console.log(req.params);
//   res.send({ firstName: "Saurav", lastName: "Bedwal" });
// });

app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Saurav", lastName: "Bedwal" });
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});

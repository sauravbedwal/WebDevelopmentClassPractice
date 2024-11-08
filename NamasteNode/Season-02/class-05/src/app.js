// console.log("Starting a new Project!");

const express = require("express");

const app = express();

// // When we don't send any response then it will go in an infinite loop of sending request bcoz we are not sending any response from the server.
// app.use("/user", (req, res) => {
//   console.log("No response from server!");
// });

//// When there are 2 route handler and in both 1st and 2nd route handler there is response it will print res of 1st route handler.
// app.use(
//   "/user",
//   (req, res, next) => {
//     // Route Handler
//     console.log("Handling the route user 1!!");
//     res.send("Response 1");
//   },
//   (req, res) => {
//     console.log("Handling the route user 2!!");
//     res.send("Response 2");
//   }
// );

//// When there are 2 route handler but in 1st route handler there is no response & in 2nd route handler there is response & not using next() it will keep sending request
// app.use(
//   "/user",
//   (req, res) => {
//     console.log("Handling the route user 1!!");
//     // res.send("Response 1");
//   },
//   (req, res) => {
//     console.log("Handling the route user 2!!");
//     res.send("Response 2");
//   }
// );

//When there are 2 route handler but in 1st route handler there is no response & in 2nd route handler there is response & using next() it will print res of 2nd route handler
// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("Handling the route user 1!!");
//     // res.send("Response 1");
//     next();
//   },
//   (req, res) => {
//     console.log("Handling the route user 2!!");
//     res.send("Response 2");
//   }
// );

//// When there are 2 route handler and in both 1st and 2nd route handler there is response but using next() also it will print res of 1st route handler but also executes 2nd
//// route handler and prints console log but unable to send res as thows error
// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("Handling the route user 1!!");
//     res.send("Response 1");
//     next();
//   },
//   (req, res) => {
//     console.log("Handling the route user 2!!");
//     res.send("Response 2");
//   }
// );

//// When there are 2 route handler and in both 1st and 2nd route handler there is res but using next() before res of 1st route handler so it executes 1st route handler and
//// prints console log then goes to 2nd route handler and prints console log & res of 2nd route handler and then try to execute res of 1st route handler and throws error.
// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("Handling the route user 1!!");
//     next();
//     res.send("Response 1");
//   },
//   (req, res) => {
//     console.log("Handling the route user 2!!");
//     res.send("Response 2");
//   }
// );

//// When there are multiple (4) route handlers and 1st route handler doesnt have res but using next() and rest route handler has res but are not using next() it will print
//// console log of 1st and 2nd route handler and res of 2nd route handler and there will be no ERROR.
// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("Handling the route user 1!!");
//     next();
//   },
//   (req, res) => {
//     console.log("Handling the route user 2!!");
//     res.send("Response 2");
//   },
//   (req, res) => {
//     console.log("Handling the route user 3!!");
//     res.send("Response 3");
//   },
//   (req, res) => {
//     console.log("Handling the route user 4!!");
//     res.send("Response 4");
//   }
// );

//// When there are multiple (4) route handlers & none of them have res but using next() in every route handler & it will print console log of every route handler but
////  throws an ERROR as in last route handler (4th) there is next() so express exprect another route handler but there is no route handler.
// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("Handling the route user 1!!");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Handling the route user 2!!");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Handling the route user 3!!");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Handling the route user 4!!");
//     // res.send("Response 4");
//     next();
//   }
// );

//// When there are multiple (4) route handlers & none of them have res but using next() in every route handler except last route handler (4) & it will print console log of
// every route handler as it is not throwing any ERROR but its Hanging BCOZ not handling route handler as it keep sending request to the server and not getting any response.
// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("Handling the route user 1!!");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Handling the route user 2!!");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Handling the route user 3!!");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Handling the route user 4!!");
//     // res.send("Response 4");
//     // next();
//   }
// );

//// CORRECT WAY => When there are multiple (5) route handlers & none of them have res and using next() except last one (5) &it will print console log of every route handler
//// and res of last route handler(5).
app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user 1!!");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 2!!");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 3!!");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 4!!");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 5!!");
    res.send("Response 5");
  }
);

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});

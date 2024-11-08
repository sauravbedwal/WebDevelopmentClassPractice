// console.log("Starting a new Project!");

const express = require("express");

const app = express();

// // When we don't send any response then it will go in an infinite loop of sending request bcoz we are not sending any response from the server.
// app.use("/user", (req, res) => {
//   console.log("No response from server!");
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//// CORRECT WAY => When there are multiple (5) route handlers & none of them have res and using next() except last one (5) &it will print console log of every route handler
//// and res of last route handler(5).
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
//     next();
//   },
//   (req, res, next) => {
//     console.log("Handling the route user 5!!");
//     res.send("Response 5");
//   }
// );

/***************************************************************************************************************************************************************************/

//// We can write the multiple routes like this also it is exactly the same thing
// app.use("/user", (req, res, next) => {
//   console.log("Handling the route user!!");
//   next();
// });

// app.use("/user", (req, res, next) => {
//   console.log("Handling the route user 2!!");
//   res.send("2nd Route Handler");
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//// We can write the multiple routes like this also but order matters alot as here it went to the 1st route handler print the console log and send the response back and
// // didn't even go the 2nd route
// app.use("/user", (req, res, next) => {
//   console.log("Handling the route user 2!!");
//   res.send("2nd Route Handler");
// });

// app.use("/user", (req, res, next) => {
//   console.log("Handling the route user!!");
//   next();
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//// We can write the multiple routes like this also but order matters alot as here it went to the 1st route handler, print the console log and as there is no res in 1st
// route handler but there is next() so it went to 2nd route handler and print console log but there also there is no route handler but a next() so it throws an ERROR as it
// expects another route handler

// app.use("/user", (req, res, next) => {
//   console.log("Handling the route user 2!!");
//   // res.send("2nd Route Handler");
//   next();
// });

// app.use("/user", (req, res, next) => {
//   console.log("Handling the route user!!");
//   next();
// });

/***************************************************************************************************************************************************************************/

// as there are 2 route handlers and after "/" everything falls in it so when we call an api "/user" it will print res of 1st route handler i.e "Handling / route" but if res
// is not there and next() is there then it will go to the next route handler (2nd) and there prints console log and as there is also next() so it go further and at prints
// res of last route handler i.e "2nd Route Handler"

// GET /users => It checks all the app.xxx ("matching routes") functions, andtry to execute them one by one till it gets the response back to the server.
// GET /users => Midlleware chain => request handler
// app.use("/", (req, res, next) => {
//   // res.send("Handling / route");
//   next();
// });

// app.get(
//   "/user",
//   (req, res, next) => {
//     console.log("Handling /user route");
//     next();
//   },
//   (req, res, next) => {
//     next();
//   },
//   (req, res, next) => {
//     res.send("2nd Route Handler");
//   }
// );

/***************************************************************************************************************************************************************************/

// below code is right but for making it more cleaner we wrote all the code in auth.js file and imported here
//Handle Auth Middleware for all request handlers GET, POST, PUT, DELETE etc.
// app.use("/admin", (req, res, next) => {
//   console.log("Admin auth is getting checked!!");
//   // Logic of checking if the request is authorized
//   const token = "xyz";
//   const isAdminAuthorized = token === "xyz";
//   if (!isAdminAuthorized) {
//     res.status(401).send("Unauthorized request");
//   } else {
//     next();
//   }
// });

// app.get("/admin/getAllData", (req, res) => {
//   //Logic of fetching all data
//   res.send("All Data Sent");
// });

// app.get("/admin/deleteUser", (req, res) => {
//   res.send("Deleted a User");
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Cleaner way of writting middlewares as wrote the auth in sepearete auth.js file in middleware folder
// const { adminAuth, userAuth } = require("./middlewares/auth");

// app.use("/admin", adminAuth);

// app.get("/user", userAuth, (req, res) => {
//   res.send("User Data Sent");
// });

// app.post("/user/login", (req, res) => {
//   res.send("User logged in successfully!");
// });

// app.delete("/user/deleteUser", userAuth, (req, res) => {
//   res.send("User deleted successfully!");
// });

// app.get("/admin/getAllData", (req, res) => {
//   //Logic of fetching all data
//   res.send("All Data Sent");
// });

// app.get("/admin/deleteUser", (req, res) => {
//   res.send("Deleted a User");
// });

/***************************************************************************************************************************************************************************/

// ERROR in the code and we are not using try and catch and for some unsolved error we used another middleware for ERROR handling
// app.get("/getUserData", (req, res) => {
//   //Logic of DB call and get user data
//   throw new Error("asdasda");
//   res.send("User Data Sent");
// });

// app.use("/", (err, req, res, next) => {
//   if (err) {
//     // log your error
//     res.status(500).send("something went wrong");
//   }
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ERROR in the code and we used try and catch but still for some unsolved error we used another middleware for ERROR handling
// app.get("/getUserData", (req, res) => {
//      try {
////  Logic of DB call and get user data
//  throw new Error("asdasda");
//     res.send("User Data Sent");
//   } catch (err) {
//     res.status(500).send("Some Error contact support team");
//   }
// });

// app.use("/", (err, req, res, next) => {
//   if (err) {
//     // log your error
//     res.status(500).send("something went wrong");
//   }
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ERROR in the code and we used try and catch but still for some unsolved error we used another middleware for ERROR handling and put it on top and it prints catch error
// bcoz for error middleware there is no error there but we throw the error in try and catch middleware

// app.use("/", (err, req, res, next) => {
//   if (err) {
//     // log your error
//     res.status(500).send("something went wrong");
//   }
// });

// app.get("/getUserData", (req, res) => {
//   try {
//     //Logic of DB call and get user data
//     throw new Error("asdasda");
//     res.send("User Data Sent");
//   } catch (err) {
//     res.status(500).send("Some Error contact support team");
//   }
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ERROR in the code and we didn't used try and catch and for some unsolved error we used another middleware for ERROR handling and put it on top and it throws ERROR bcoz
// route handled one by one as order is very important and for error middleware there is no error there but we throw the error in /getUserData middlware and there is no one
// to handle the ERROR

// app.use("/", (err, req, res, next) => {
//   if (err) {
//     // log your error
//     res.status(500).send("something went wrong");
//   }
// });

// app.get("/getUserData", (req, res) => {
//   //Logic of DB call and get user data
//   throw new Error("asdasda");
//   res.send("User Data Sent");
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ERROR in the code and we didn't used try and catch and for some unsolved error we used another middleware for ERROR handling and put it on top and it prints ERROR of
// 2nd error middleware bcoz route handled one by one as order is very important and for 1st error middleware there is no error there but we throw the error in /getUserData
// middlware but not handling there but 2nd error middleware is there to handle the error

app.use("/", (err, req, res, next) => {
  if (err) {
    // log your error
    res.status(500).send("something went wrong");
  }
});

app.get("/getUserData", (req, res) => {
  //Logic of DB call and get user data
  throw new Error("asdasda");
  res.send("User Data Sent");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    // log your error
    res.status(500).send("something went wrong");
  }
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});

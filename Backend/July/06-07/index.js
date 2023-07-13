// HTTP Module

// const http = require("node:http");

// http.createServer(() => {
//     console.log("SERVER IS UP AND RUNNING");
// }).listen(8080, () => {
//     console.log("Server is up and running on port 8080");
// });


//Same thing as above as here we created the function sepereately so it looks more clean


// const http = require("node:http");

// const server = () => {
//     console.log("SERVER IS UP AND RUNNING");
// };

// const onServerUp = () => {
//     console.log("Server is up and running on port 8080");
// };


// http.createServer(server).listen(8080, onServerUp);


//---------------------------------------------------------------------------------------------------------


// In this code just understaing that server have two parameters request and response and implemeneting it.

// const http = require("node:http");

// const server = (req, res) => {
//     console.log(req);
//     res.write("This is my first fullfiled request, hello!!");
//     res.end();  //Server sends the response back to the client
// };

// const onServerUp = () => {
//     console.log("Server is up and running on port 8080");
// };


// http.createServer(server).listen(8080, onServerUp);


//---------------------------------------------------------------------------------------------------------


// Another example of above code

// const http = require("node:http");

// const server = (req, res) => {
//     console.log("URL", req.url);
//     res.write(`Request is received on end point ${req.url}`);
//     res.end();  //Server sends the response back to the client
// };

// const onServerUp = () => {
//     console.log("Server is up and running on port 8080");
// };


// http.createServer(server).listen(8080, onServerUp);


//---------------------------------------------------------------------------------------------------------


// Another example of above code as here we learned how we render the routes.

// const http = require("node:http");

// const server = (req, res) => {
//     console.log("URL", req.url);
//     if (req.url === "/todos") {
//         //Endpoint
//         res.write("To do list will appear here");
//     } else if (req.url === "/posts") {
//         res.write("Posts list will appear here");
//     } else {
//         res.write(`Error 404, request route ${req.url} not found`);
//     }
//     res.end();  //Server sends the response back to the client
// };

// const onServerUp = () => {
//     console.log("Server is up and running on port 8080");
// };


// http.createServer(server).listen(8080, onServerUp);


//---------------------------------------------------------------------------------------------------------


// Another example of above code as here we learned abt GET and POST method as when we make an api we want to
// check that it is working fine or not by the help of Postman as get method will show in browser but not
//  post method for that we would need Postman.

// const http = require("node:http");

// const server = (req, res) => {
//     console.log("URL", req.method);
//     if (req.url === "/todos") {
//         //Endpoint
//         if (req.method === "GET") {
//             res.write("To do list will appear here, this is a GET request");
//         } else if (req.method === "POST") {
//             res.write("This route will be used to create a new ToDo");
//         }
//     } else if (req.url === "/posts") {
//         res.write("Posts list will appear here");
//     } else {
//         res.write(`Error 404, request route ${req.url} not found`);
//     }
//     res.end();  //Server sends the response back to the client
// };

// const onServerUp = () => {
//     console.log("Server is up and running on port 8080");
// };


// http.createServer(server).listen(8080, onServerUp);


//---------------------------------------------------------------------------------------------------------


// Another example of above code as here we learned abt GET and POST method and writing a sample data also.

// const http = require("node:http");

// //Sample JSON data
// const todos = [
//     { id: 1, title: "lomre ipsum", completed: true },
//     { id: 2, title: "lomre ipsum1", completed: true },
//     { id: 3, title: "lomre ipsum2", completed: false },
//     { id: 4, title: "lomre ipsum3", completed: false },
//     { id: 5, title: "lomre ipsum4", completed: true },
//     { id: 6, title: "lomre ipsum5", completed: true },
//     { id: 7, title: "lomre ipsum6", completed: false },
// ];

// const todosString = JSON.stringify(todos);

// // API ROUTE
// const server = (req, res) => {
//     console.log("URL", req.method);
//     if (req.url === "/todos") {
//         //Endpoint
//         if (req.method === "GET") {
//             // res.write("To do list will appear here, this is a GET request");
//             res.end(todosString);
//         } else if (req.method === "POST") {
//             res.write("This route will be used to create a new ToDo");
//         }
//     } else if (req.url === "/posts") {
//         res.write("Posts list will appear here");
//     } else {
//         res.write(`Error 404, request route ${req.url} not found`);
//     }
//     res.end();  //Server sends the response back to the client
// };

// const onServerUp = () => {
//     console.log("Server is up and running on port 8080");
// };


// http.createServer(server).listen(8080, onServerUp);


//---------------------------------------------------------------------------------------------------------


// In this code we importing the functions from module.js file.


// const functions = require("./module.js");

const functions = require("divtestcalc");

const sum = functions.add(5, 7);
console.log(sum);

const difference = functions.subtract(20, 2);
console.log(difference);
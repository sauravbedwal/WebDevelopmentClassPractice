// const express = require('express');
// const app = express();  //http.createServer()

// app.get("/", (req, res) => {
//     res.send("The express server is up and running");
// });

// // app.get("/users", (req, res) => {
// //     const user = {
// //         id: 123,
// //         name: "Jack",
// //         address: "123 ABC Street",
// //     };
// //     res.json(user);
// // })

// // app.get("/todos", (req, res) => {
// //     const todo = {
// //         id: 1,
// //         title: "Lorem Ipsum",
// //         description: "adafaa asdfadfa adafaa asdfadfa",
// //         completed: false,
// //     };
// //     res.json(todo);
// // })

// // app.post("/create-user", (req, res) => {
// //     const responseJson = {
// //         success: true,
// //         message: "User created successfully",
// //     };
// //     res.json(responseJson);
// // });

// // app.put("/replace-user", (req, res) => {
// //     const putResponse = {
// //         success: true,
// //         message: "User replaced successfully",
// //     };
// //     res.json(putResponse);
// // });


// //for the same url we can create multiple API's by using different methods means url can be same but methods 
// // has to be different and that the best practice
// //as the combination of methods and url should be unique.

// app.get("/user", (req, res) => {
//     const user = {
//         id: 123,
//         name: "Jack",
//         address: "123 ABC Street",
//     };
//     res.json(user);
// })

// app.post("/user", (req, res) => {
//     const responseJson = {
//         success: true,
//         message: "User created successfully",
//     };
//     res.json(responseJson);
// });

// app.put("/user", (req, res) => {
//     const putResponse = {
//         success: true,
//         message: "User replaced successfully",
//     };
//     res.json(putResponse);
// });

// app.delete("/user", (req, res) => {
//     const deleteResponse = {
//         success: true,
//         message: "User deleted successfully",
//     };
//     res.json(deleteResponse);
// });

// const port = 8080;

// app.listen(port, () => {
//     //server.listen()
//     console.log("Server is up and running on port", port);
// });

// // for calling api in frontend
// // fetch("http://localhost:8080/user").
// // then((response) => response.json())
// // .then((data) => console.log(data))
// // .catch()


//----------------------------------------------------------------------------------------------------


// const express = require('express');
// const app = express();  //http.createServer()

// //Dynamic Routing (url)
// app.get("/user/:userId", (req, res) => {
//     console.log(req.params.userId);  //req.params is an object with {userId: 2}
//     const user = {
//         userId: req.params.userId,
//     };
//     res.json(user);
// })

// const port = 8080;

// app.listen(port, () => {
//     //server.listen()
//     console.log("Server is up and running on port", port);
// });


//----------------------------------------------------------------------------------------------------

const express = require('express');
const app = express();  //http.createServer()

const products = [
    { id: 1, name: "Product Name", price: 2000, quantity: 50 },
    { id: 2, name: "Product Name", price: 2000, quantity: 50 },
    { id: 3, name: "Product Name", price: 2000, quantity: 50 },
];

app.get("/product/:productId", (req, res) => {
    const productId = req.params.productId;
    const product = products.find((product) => product.id == productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

const port = 8080;

app.listen(port, () => {
    //server.listen()
    console.log("Server is up and running on port", port);
});




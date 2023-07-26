const express = require('express');
const app = express();  //http.createServer()

require('dotenv').config()


// console.log(process.env);  //Environment variable  //process shows the information of the current thread and node js have only 1 thread

// process.env.NODE_AUTHOR = "divyansh";
// console.log(process.env);

console.log(process.env.SERCRET_NUMBER);  //Environment variable


app.get("/", (req, res) => {
    res.send("The express server is up and running");
});


app.get("/", (req, res) => {
    res.send("The express server is up and running");
});

app.get("/user", (req, res) => {
    const user = {
        id: 123,
        name: "Jack",
        address: "123 ABC Street",
    };
    res.json(user);
})

app.post("/user", (req, res) => {
    const responseJson = {
        success: true,
        message: "User created successfully",
    };
    res.json(responseJson);
});

app.put("/user", (req, res) => {
    const putResponse = {
        success: true,
        message: "User replaced successfully",
    };
    res.json(putResponse);
});

app.delete("/user", (req, res) => {
    const deleteResponse = {
        success: true,
        message: "User deleted successfully",
    };
    res.json(deleteResponse);
});

const port = 8080;

app.listen(port, () => {
    //server.listen()
    console.log("Server is up and running on port", port);
});
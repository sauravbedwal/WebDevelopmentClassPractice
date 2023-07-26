// onServerUp is an event as whenever we start the server is an event for node js and whwnever we receive any
// request then server function is called and all that happending bcoz of event is.e. request event and everything 
//  here is event based and before in previous class i.e. on 06-07 it was working fine without .on (listener)bcz
// we directly passed the server funciton in http.createServer(server).listen(8080, onServerUp); and that we do 
// to keep syntax short. this EVENT is DEFAULT EVENT emitted by node js as the request here is not that we have 
// created rather it is an event created by node js itself. 

const http = require("node:http");

//Sample JSON data
const todos = [
    { id: 1, title: "lomre ipsum", completed: true },
    { id: 2, title: "lomre ipsum1", completed: true },
    { id: 3, title: "lomre ipsum2", completed: false },
    { id: 4, title: "lomre ipsum3", completed: false },
    { id: 5, title: "lomre ipsum4", completed: true },
    { id: 6, title: "lomre ipsum5", completed: true },
    { id: 7, title: "lomre ipsum6", completed: false },
];

const todosString = JSON.stringify(todos);

// API ROUTE
const server = (req, res) => {
    console.log("URL", req.method);
    if (req.url === "/todos") {
        //Endpoint
        if (req.method === "GET") {
            // res.write("To do list will appear here, this is a GET request");
            res.end(todosString);
        } else if (req.method === "POST") {
            res.write("This route will be used to create a new ToDo");
        }
    } else if (req.url === "/posts") {
        res.write("Posts list will appear here");
    } else {
        res.write(`Error 404, request route ${req.url} not found`);
    }
    res.end();  //Server sends the response back to the client
};

const onServerUp = () => {
    console.log("Server is up and running on port 8080");
};

// http.createServer(server).listen(8080, onServerUp);

const myServer = http.createServer();  //myServer emitting an event but nobody is listening to it

myServer.on("request", server);        //now this is the listner here 

myServer.listen(8080, onServerUp);
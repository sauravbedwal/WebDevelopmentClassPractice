const fs = require('node:fs');
const events = require('node:events');

const fileName = "sample.txt";


//CREATE OPERATION
// const writeFile = () => {
//     // fs.writeFile(filePath, fileContent, callbackFn);
//     fs.writeFile(fileName, "Hi There! wssup?",
//         (error) => {
//             if (error) {
//                 console.log(error);
//             }
//         });
// };


// UPDATE/EDIT OPERATION
// const updateFile = () => {
//     const msg = new Date().toLocaleString() + " User Login Activity\n";     //also can use toLocaleString() instead of toISOString()
//     fs.appendFile(fileName, msg, (error) => {
//         if (error) {
//             console.log(error);
//         }
//     });
// };

// updateFile();


//READ OPERATION
const readFile = () => {
    fs.readFile(fileName, (error, data) => {
        if (error) {
            console.log("ERROR WHILE READING THE FILE", error);
        }
        console.log("FILE_CONTENT", data.toString());
    });
};

// readFile();


//DELETE OPERATION
// const deleteFile = () => {
//     fs.unlink(fileName, (error) => {
//         if (error) {
//             console.log("ERROR WHILE DELETING FILE", error);
//             return;
//         }
//         console.log("FILE", fileName, "DELETED SUCCESSFULLY");
//     });
// };

// deleteFile();


//CREATE FOLDER OPERATION
// const createFolder = () => {
//     fs.mkdir("logs", (error) => {
//         if (error) {
//             console.log("ERROR CREATING FOLDER");
//             return;
//         }
//         console.log("FOLDER CREATED SUCCESSFULLY");
//     });
// };

// createFolder();


//CHECK FOLDER EXIST OPERATION
const folderExists = () => {
    const exists = fs.existsSync("logs");
    console.log(exists);
};

// folderExists();



/**********************************************************************************************************/


//Events Module

// const myEmitter = new events.EventEmitter();                  //events we imported which have a class EventEmitter and by new we makes it an object

// // Listen to the event
// myEmitter.on("MY_EVENT", () => {
//     // console.log("MY EVENT LISTENER IS WORKING");
// });

// //Emit an event                               //without emit listen code won't work
// myEmitter.emit("MY_EVENT");



// //here we use setTimeout and setIneterval to understand that as listen code is before emit code but still it
// //will not console log anything until it emits

// // setTimeout(() => {
// //     myEmitter.emit("MY_EVENT");
// // }, 10_000);

// setInterval(() => {
//     myEmitter.emit("MY_EVENT");
// }, 5000);


//-----------------------------------------------------------------------------------------------------------


// Example of events as here we sa the use case of it regarding of traffic signal

// const myEmitter = new events.EventEmitter();
// const SIGNAL_CHANGE = "SIGNAL_CHANGE";
// const os = require("node:os");

// // Listen to the event (Event Listener)
// myEmitter.on(SIGNAL_CHANGE, (signalColor) => {                           //signalColor is event here so we can also write event or e

//     const msg = new Date().toLocaleString() + ": SIGNAL CHANGED TO " + signalColor + os.EOL;

//     fs.appendFile("signal.log", msg, (error) => {
//         if (error) {
//             console.log("ERROR WHILE WRITING LOG", error);
//             return;
//         }
//     })
//     // console.log("MY EVENT LISTENER IS WORKING", signalColor);
// });

// const signalColors = ["GREEN", "YELLOW", "RED"];

// let counter = 0;

// //Emit an event (Event Emitter)
// setInterval(() => {
//     const index = counter % 3;
//     counter++;
//     // console.log(signalColors[index]);
//     myEmitter.emit(SIGNAL_CHANGE, signalColors[index]);
// }, 2000);



/**********************************************************************************************************/


// HTTP Module

const http = require("node:http");

http.createServer(() => {
    console.log("SERVER IS UP AND RUNNING");
}).listen(8080);
const os = require('node:os');  //CJS import
const fs = require('node:fs');

//import os from "node:os";   //ESM import


// console.log(os.arch());

// console.log("A\n", os.EOL, "B");

// console.log(os.cpus());

// console.log("CORES AVAILABLE IN THE CPU", os.cpus().length);

// console.log(os.freemem());

// console.log(os.homedir());

// console.log(os.hostname());

// console.log(os.networkInterfaces());

// console.log(os.platform());

// console.log(os.release());

// console.log(os.tmpdir());

// console.log(os.type());

// console.log(os.uptime() / 3600);

// console.log(os.userInfo());

// console.log(os.constants);

// console.clear();


/********************************************************************************************************* */


//CREATE OPERATION
// fs.writeFile(filePath, fileContent, callbackFn);
// fs.writeFile("sample.txt", "Hi There! wssup?",
//     (error) => {
//         if (error) {
//             console.log(error);
//         }
//     });


//UPDATE/EDIT OPERATION
// fs.appendFile("Sample.txt", "\n This is updated Content4",
//     (error) => {
//         if (error) {
//             console.log(error);
//         }
//     });

const updateFile = () => {
    const msg = new Date().toISOString() + "User Login Activity\n";     //also can use toLocalString() instead of toISOString()
    //Asynchronus way we prefer this
    fs.appendFile("Sample.txt", msg, (error) => {
        if (error) {
            console.log(error);
        }
    });
};
//synchronus way but we don't prefer it
// fs.appendFile("Sample.txt", msg);

updateFile();

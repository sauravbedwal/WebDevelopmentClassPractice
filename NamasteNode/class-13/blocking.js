const crypto = require("node:crypto");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// pbkdf2 - Password Base Key Deravative Function

// Synchronous Function - WILL BLOCK THE MAIN THREAD - DON'T USE IT
// crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
// console.log("First Key is Generated");


setTimeout(() => {
    console.log("CALL ME RIGHT NOW!!!!");
}, 0);   //it will only be called once call stack of main thread is empty


// Async Function
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("Second Key is Generated");
});

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);
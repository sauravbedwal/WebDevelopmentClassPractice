require("./xyz.js"); // one module into another

// function (){
//     // All the code of the module is run inside this function
// }

const util = require("node:util");

var a = 10;

var b = 20;

const {calculateMultiply, calculateSum } = require("./calculate");   //Better folder structure

calculateSum(a, b);
calculateMultiply(a, b);

// JSON data

const data = require("./data.json");

console.log(data);

console.log(__filename);
console.log(__dirname);
// var x = 100;
// console.log(x);
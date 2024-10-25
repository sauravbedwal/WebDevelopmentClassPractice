// COMMON JS MODULES (import)

require("./xyz.js"); // one module into another

var a = 10;

var b = 20;

console.log(globalThis === global);


// If export only one variable or function then directly put the name of that varibale or function while importing it.

// const calculateSum =  require("./sum.js");  
// calculateSum(a, b);


// If export more than one variable or function i.e an Object then use obj.

// const obj = require("./sum.js");  

// obj.calculateSum(a, b);
// console.log(obj.x);


// If exported more than one variable or function i.e an Object and DESTRUCTURED it (best practice).

// const { x, calculateSum} = require("./calculate/sum.js"); 

// const { calculateMultiply } = require("./calculate/multiply.js");

const {calculateMultiply, calculateSum } = require("./calculate");   //Better folder structure

calculateSum(a, b);
calculateMultiply(a, b);

// JSON data

const data = require("./data.json");

console.log(data);

// var x = 100;
// console.log(x);


// -------------------------------------------------------------------


// ES MODULES (import)

// import {x,calculateSum} from "./sum.js";

// var a = 10;

// var b = 20;

// console.log(globalThis === global);

// calculateSum(a, b);

// // var x = 1000;
// console.log(x);
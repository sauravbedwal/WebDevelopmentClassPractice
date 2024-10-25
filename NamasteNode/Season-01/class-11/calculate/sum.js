// Modules protects their variables and functions from leaking

require("../xyz.js");

console.log("Sum Module Executed");

z = "Hello India"; //no error in non strict mode

var x = "Hello World";

function calculateSum(a,b){
    const sum = a + b;

    console.log(sum);
}


module.exports = { x, calculateSum };
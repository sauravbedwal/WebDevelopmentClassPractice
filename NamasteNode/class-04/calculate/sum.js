// Modules protects their variables and functions from leaking

// COMMON JS MODULES (export)

console.log("Sum Module Executed");

z = "Hello India"; //no error in non strict mode

var x = "Hello World";

function calculateSum(a,b){
    const sum = a + b;

    console.log(sum);
}

// If only one varibale or function is exporting (best practice to wrap everything in {} whether exporting one or multiple varible or function)

// module.exports = calculateSum;
// module.exports = {calculateSum}; // preffered/best practice
   

// If multiple varibale or function is exporting.

// module.exports = {    
//     x: x,
//     calculateSum: calculateSum
//  };

// If multiple varibale or function is exporting using JS SHORT HAND (best practice).

// console.log(module.exports); 

module.exports = {    
    x,
    calculateSum
};

// module.exports is an empty object so we can also write it like this

// module.exports.x = x;
// module.exports.calculateSum = calculateSum;

    
// ---------------------------------------------------------------------


// ES MODULES (export)

// console.log("Sum Module Executed");

// export var x = "Hello World";

// export function calculateSum(a,b){
//     const sum = a + b;

//     console.log(sum);
// }

console.log("Hello World");

var a = 1078698;
var b = 20986;

// This callback will only be pushed to call stack in v8 once the call stack is empty. 
setTimeout(() => {
    console.log("CALL ME RIGHT NOW");
}, 0);

setTimeout(() => {
    console.log("CALL ME AFTER 3 SECONDS");
}, 3000);

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);
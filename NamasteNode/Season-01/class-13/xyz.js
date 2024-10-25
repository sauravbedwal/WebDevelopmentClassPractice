console.log("very important js code");

// we can't access b as it is in different/function scope
// (function x() {

//     const a = 10;

//     function b() {
//         console.log("b");
//     }
// })();

// x();
// // b();


// -----------------------------------------------------------


// if we access a different module like multiply then require will take the code wrap it in an IIFE and then execute and also we can access module.exports or require bcoz
//  IIFE have thr parameters module and require given by Node JS.

(function x(module, require) {

    require("./path")

    // All code of the module runs inside here

    function calculateMultiply(a,b){
        const result = a * b;
        
        console.log(result);
    }
     
    module.exports = { calculateMultiply };
})();




// Code from node js repository

let wrap = function(script) { // eslint-disable-line func-style
    return Module.wrapper[0] + script + Module.wrapper[1];
  };

  const wrapper = [
    '(function (exports, require, module, __filename, __dirname) { ',
    '\n});',
  ];
  
(function (exports, require, module, __filename, __dirname) {

       // ALL THE CODE OF YOUR MODULE 
});
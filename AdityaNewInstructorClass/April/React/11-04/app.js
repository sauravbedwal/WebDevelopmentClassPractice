// import { sum as add, city as location } from "./utils.js"; 

// import hobbies from "./utils.js";  //we can directly import it wihtout {} bcoz its default and here name can be anyhting but it will be prefer to hobbies only bcoz if anything we importing wihtout { } its obious its default cox defaut can be only one and if we gave any other name also then it s direct to hobbies onky bcoz that only default
// import anythingYouWant from "./utils.js";

// import hobbies, { sum as add, city as location, isInstructor } from "./utils.js"; 

import * as User from "./utils.js";    //can import evyerthing and assign it to here to one varaiable but we do this mostly when use thir partr librbary othwerise we do other thing that we learend 

// const city  = "Mumbai";     

// const data = add(1, 3);

// // console.log("Inside app.js -> ", data, city, hobbies);
// console.log("Inside app.js -> ", hobbies, data, location, isInstructor, city);

// console.log("Inside app.js -> ", hobbies);
// console.log("Inside app.js -> ", anythingYouWant);

console.log("Inside app.js -> ", User);
console.log("Inside app.js -> ", User.city, User.score);











// so as here same function we using n both the js files as it can be mutiple times as well in 20-30 files and in that
// case we need to keep copy pastethe function and taht not a right way to do so as there soild be away to share same 
// function in multiple files .a
// as it has to be wrote the function once and able to share it multiple files and here comes export and import 


// and we need multiple js fies to keeo taht cean so one fik=le can do one task coz its not possible to write long codes in just on file thata wh we use multiple js files

// if utils.js is in let say misc folder and we want to accesss utils.js as they r not on same level so we have to globalThisinside misc folder 
// then vhoose utils.js do here we will type ./ soit will sbow the same level files/folders we vhoose misc then /
// and it will take us inside it and we can choose utils .js 

// now let say we have a folder main and we added app.js in taht  now in the same level of app.js there is no other 
// file so we have to go one lvel up(outside the folder) and then can choose other files so here we use 
// ../ means one level up and can choose then utils.js


//here it will clash bcoz we also importing city variable which is already declared so we can as keyword to solve this same can be done for functions as well as we can name sum function as add
// and same cant be done in export means we cant change the name of varable in export by using as keyword -->


// if exporting only one functon one componenet then we can use default export but w have a file like utils.js which contain multiple small thinsh whihc need to be get exported
// in that case use named exports.
// or if there is a case that in file we have main thing there we can use defaukt export and small other multiple files can be exported by named export
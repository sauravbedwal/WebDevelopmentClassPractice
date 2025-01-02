// Asked to create a promise with setTimeout of 5 seconds

// const promise = new Promise((resolve, reject) => {
//   let foodAvailable = true;

//   setTimeout(() => {
//     if (foodAvailable) {
//       resolve(console.log("Yes!!..We have food."));
//     } else {
//       reject(console.log("No...M hungry."));
//     }
//   }, 5000);
// });

// const promise = new Promise((resolve, reject) => {
//   let foodAvailable = true;

//   if (foodAvailable) {
//     resolve("Food is available");
//   } else {
//     const error = new Error("Food is not available");
//     reject(error);
//   }
// });

// promise
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/****************************************************************************/

// Asked to create an array of string and pass the elements by props in different component

// import './App.css';
// import Test from './Test';

// function App() {
//     const arr = ['Messi', 'Ronaldo', 'Mbappe'];

//     return (
//         <>
//             <div>
//                 <Test array={arr} />
//             </div>
//         </>
//     );
// }

// export default App;

// const Test = (props) => {
//     const { array } = props;

//     return (
//         <div>
//             <ul>
//                 {array.map((item) => (
//                     <li>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Test;

/****************************************************************************/

// An array is given with key value pairs now you have to sepearete keys and values in an array.

// const arr = [a = "hello", b = "namaste"];

// const key = Object.keys(arr);
// const value = Object.values(arr);

// console.log(key);
// console.log(value);

/****************************************************************************/

// How to fetch api by Promise

// const promise = fetch('').then((response) => {
//     return response.json();
// }).then((data) => {
//     console.log(data);
// })

/****************************************************************************/

// How to fetch api by async await

// async function getApi() {
//     const response = await fetch("");
//     const data = await response.json();
//     console.log(data);
// }

/****************************************************************************/

// fetch always return a promise that can be resolve or rejected.

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value!!!");
//   }, 2000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value!!!");
//   }, 1000);
// });

// async function getData() {
//   console.log("hello");

//   const val = await p1;
//   console.log("NJ 1");
//   console.log(val);

//   const val2 = await p2;
//   console.log("NJ 2");
//   console.log(val2);
// }

// getData();

/****************************************************************************/

// NJ1 - 1,2

// var n = 2;
// function square(num) {
//     var ans = num * num;
//     return ans;
// }

// var one = square(4);
// console.log(one);

/****************************************************************************/

// NJ1 - 3
// console.log(x);
// getName();

// var x = 7;
// function getName() {
//     console.log("Saurav");
// };

/****************************************************************************/

// NJ1 - 4
// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b() {
//     var x = 100;
//     console.log(x);
// }

/****************************************************************************/

// NJ1 - 5
// console.log(window)

/****************************************************************************/

// NJ1 - 6

// let a = null;
// let b;
// console.log(typeof a); //object
// console.log(b); // undefined

/****************************************************************************/

// NJ1 - 7

// function a() {
//     var b = 10;
//     function c() {
//         console.log(b);
//     };
//     c();
// };

// a();

/****************************************************************************/

// NJ1 - 8

// console.log(a);

// var b = 20;
// let a = 10;

// console.log(a);

// function scope
// function a() {
//     var x = 10;
//     if (x) {
//         console.log(x);
//     }
// }
// a();

// let a = 10;
// let a = 25;             //errors
// var a = 80;

// const a = 100;
// a = 600;                 //erros
// const a = 90;
// var a = 50;

// console.log(a);

/****************************************************************************/

// NJ1 - 9

// let b = 100;
// {
//     let b = 20;
//     console.log(b);
// }
// console.log(b);

// var a = 10;

// function x() {
//     var a = 50;
//     console.log(a);
// }
// x();
// console.log(a);

/****************************************************************************/

// NJ1 - 10

// function x() {
//     var a = 10;
//     function y() {
//         console.log(a);
//     }
//     y();
// }

// x();

// function x() {
//     var a = 10;
//     function y() {
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }

// var z = x();
// console.log(z);
// z();

// function z() {
//     var b = 900;
//     function x() {
//         var a = 10;
//         function y() {
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// z();

/****************************************************************************/

// var count = 5;
// function sum() {
//     var ans = count + 1;
//     console.log(ans);
// }

// sum();
// console.log(count);

/****************************************************************************/

// NJ1 - 11

// function x() {
//     var i = 10;
//     setTimeout(() => {
//         console.log(i);
//     }, 3000);
//     console.log("Damn!")
// }

// x();

// function x() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Namaste JavaScript");
// }
// x(); //6 6 6 6 6 6

// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Namaste JavaScript");
// }
// x(); // 1 2 3 4 5

// function x() {
//     for (var i = 1; i <= 5; i++) {
//         function close(x) {
//             setTimeout(() => {
//                 console.log(x);
//             }, x * 1000)
//         }
//         close(i);
//     }
// }
// x(); // 1 2 3 4 5

/****************************************************************************/

// NJ1 - 12 Closure Interview

/****************************************************************************/

// NJ1 - 13

// Function Statement aka Function Declaration

// function greet(name) {
//     console.log("Hello", name);
// }
// greet("Saurav");

// Function Expression

// let greet = function (name) {
//     console.log(name);
// }
// greet("Sameer");

// let person = (name) => {
//     console.log(name);
// }
// person("Raftaar");

// Anonymuous Function

// let fn = function(){
//     console.log("hello");
// }
// fn();

// Named Function

// let fn = function xyz() {
//     console.log("ABCD");
// }
// fn();

// First Class Functions

//Example 1
// const greet = (param1) => {
//     console.log(param1);
//     param1();
// }

// function xyz() {
//     console.log("Helllo");
// }
// greet(xyz);

// const greet = () => {
//     function xyz() {
//         console.log("heyyy wssup");
//     }
//     return xyz;
// }

// const abc = greet();
// abc();

// Example 2
// const greet = (param1, param2) => {
//     param1();
//     console.log(param2);
// }

// const wish = () => {
//     console.log("Saurav");
// }
// greet(wish, "chilll");

// function greet() {
//     return function () {
//         console.log("killer");
//     }
// }

// let a = greet();
// a();

/****************************************************************************/

// NJ1 - 14

// inside setTimeout is callback funciton and y is also a callback
// setTimeout(() => {
//     console.log("timer");
// }, 5000);

// function x(y) {
//     console.log("x");
//     y();
// }

// x(function y() {
//     console.log("y");
// });

// setTimeout(() => {
//     console.log("log after 5 seconds");
// }, 5000);

// function alpha() {
//     console.log("alpha");
// }

// alpha();

/****************************************************************************/

// NJ1 - 18

// function x() {
//     console.log("hiii");
// };

// function y(param1) {
//     param1();
// };
// y(x);

// function abc() {
//     console.log("let see");
//     return function xyz() {
//         console.log("what happens");
//     }
// }

// const a = abc();
// a();

// const radius = [3, 5, 8, 22];

// const area = (radius) => {
//     return Math.PI * radius * radius;
// }

// const diameter = (radius) => {
//     return 2 * radius;
// }

// const circumference = (radius) => {
//     return 2 * Math.PI * radius;
// }

// const calculate = (radius, logic) => {
//     const result = [];
//     for (let i = 0; i < radius.length; i++) {
//         result.push(logic(radius[i]));
//     }
//     return result;
// }

// console.log(calculate(radius, diameter));

/****************************************************************************/

// NJ1 - 19

// MAP

// Example 1
// const arr = [5, 2, 3, 4, 7, 1, 9];

// const double = (input) => {
//     return input * 2;
// }
// // const ans = arr.map((input) => {
// //     return input * 2;
// // });

// const tripple = (input) => {
//     return input * 3;
// }
// console.log(arr.map(double));
// console.log(arr)
// console.log(arr.map(tripple));
// // console.log(ans);

// Example 2
// const arr = [
//     { firstName: "Roronoa", lastName: "Zoro" },
//     { firstName: "Nico", lastName: "Robin" },
//     { firstName: "Vinsmoke", lastName: "Sanji" },
//     { firstName: "Tony", lastName: "Chopper" },
// ];

// const ans = arr.map((input) => {
//     return input.firstName + input.lastName;
// })

// console.log(ans);

// FILTER

// const arr = [5, 2, 3, 4, 7, 1, 9];

// const even = (input) => {
//     return input % 2 == 0;
// };

// const odd = (input) => {
//     return input % 2;
// }

// const greater = (input) => {
//     return input > 4;
// }

// const ans = arr.filter(even);
// console.log(ans);

// console.log(arr.filter(odd));

// console.log(arr.filter(greater));

// const arr = [
//     { firstName: "Roronoa", lastName: "Zoro", age: 19 },
//     { firstName: "Nico", lastName: "Robin", age: 22 },
//     { firstName: "Vinsmoke", lastName: "Sanji", age: 19 },
//     { firstName: "Tony", lastName: "Chopper", age: 10 },
// ]

// const ans = arr.filter((input) => {
//     return input.age > 18;
// })
//     .map((input) => {
//         return input.firstName + input.lastName;
//     });

// console.log(ans);
// console.log(arr);

// REDUCE

// const arr = [5, 2, 3, 4, 7, 1, 9];

// const ans = arr.reduce((acc, curr) => {
//     return acc += curr;
// }, 0);

// console.log(ans);

// const ans = arr.reduce((acc, curr) => {
//     if (curr > acc) {
//         acc = curr;
//     };
//     return acc;
// }, 0)
// console.log(ans);

//     { firstName: "Roronoa", lastName: "Zoro", age: 19 },
//     { firstName: "Nico", lastName: "Robin", age: 22 },
//     { firstName: "Vinsmoke", lastName: "Sanji", age: 19 },
//     { firstName: "Tony", lastName: "Chopper", age: 10 },
// ];

// const ans = arr.reduce((acc, curr) => {
//     if (acc[curr.age]) {
//         acc[curr.age] = acc[curr.age]++;
//     }
//     else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {})

// console.log(ans);

/****************************************************************************/

// CALL, APPLY, BIND

// CALL
// const obj = {
//     name: "Saurav",
//     age: 20,
// }

// const obj2 = {
//     name: "Raff",
//     age: 35,
// }

// function details(city, a, b) {
//     console.log(this.name, this.age, city, "", (a + b));
// };

// // obj.details.call(obj2);
// details.call(obj2, "delhi", 5, 10);

// APPLY
// const obj = {
//     name: "SAURAV",
//     age: 23,
// }

// const obj2 = {
//     name: "Gaurav",
//     age: 30,
// }

// function details(city, country) {
//     console.log(this.name, this.age, city, country);
// }

// details.apply(obj2, ["delhi", "India"])

// BIND
// const obj = {
//     name: "SAURAV",
//     age: 23,
// }

// const obj2 = {
//     name: "Gaurav",
//     age: 30,
// }

// function details(city) {
//     console.log(this.name, this.age, city);
// }

// const info = details.bind(obj2, "punjab");
// info();

/****************************************************************************/

// let a = [1, 2, 3];
// let b = [...a];

// b.push(5, 9)
// console.log(a);
// console.log(b)

// const promise = new Promise((resolve, reject) => {
//     let foodAvailable = true;

//     if (foodAvailable) {
//         resolve(console.log("Yesss"));
//     }
//     else {
//         reject(console.log("No"));
//     }
// });

// https://fakestoreapi.com/products/1

// const promise = fetch("https://fakestoreapi.com/products")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// const promise = fetch('https://fakestoreapi.com/products/1').then((response) => {
//     return response.json();
// })
// console.log(promise);

// async function getApi() {
//     const response = await fetch('https://fakestoreapi.com/products/1');
//     const data = await response.json();
//     console.log(data);
// }

// getApi();

// let a = 10;
// let b = a;
// b = 50;

// console.log(a);
// console.log(b);

// let a = [1, 2, 3];
// let b = a;

// a.push(5);

// console.log(a);
// console.log(b);

// let obj = {
//     value: 10,
// }

// function check(obj) {
//     obj.value++;
//     return obj;
// }

// console.log(check(obj));
// console.log(obj.value);

// let a = 10;

// function check(num) {
//     num++;
//     return num;
// }

// console.log(a);
// console.log(check(a));

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// const person1 = new Person("JOhn", "doe");
// const person2 = new Person("David", "Bekham");

// console.log(person1)

// const obj = {
//     name: "Saurav",
//     age: 23,
//     details() {
//         console.log(this);
//     }
// }

// obj.details();

// obj.stop = function () {
//     console.log("dtop", this);
// }

// obj.stop();

// const obj = {
//     name: "Saurav",
//     city: ["delhi", "Noida", "Punjab"],
//     details() {
//         this.city.forEach((input) => {
//             console.log(input)
//         })
//     }
// }

// obj.details();

// function ball() {
//     console.log(this);
// }

// ball();

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     console.log(this.firstName);
// }
// const Person1 = new Person("John", "Cena");

// let a = [1, 2, 3, 4];
// let b = [...a];

// a.push(6);
// console.log(a);
// console.log(b);

// function sum(a, b, ...rest) {
//     console.log(a, b);
//     console.log(rest);
// }

// sum(1, 2, 5, 8, 9);

// const a = [1, 2, 3, 4, 5];

// function sum(a, b, c, ...rest) {
//   let ans = a + b + c;
//   console.log(ans);
//   console.log(rest);
// }

// const trial = sum(...a);

// (function () {
//     console.log("IIFE")
// })();

// const greet = (param1, param2) => {
//     param1();
//     console.log(param2);
// }

// const wish = () => {
//     console.log("davidB");
// }

// greet(wish, "Wssup")

// function greet() {
//     return function () {
//         console.log("shakiraa");
//     }
// }

// const hips = greet();
// hips();

// function counter() {
//     var count = 0;
//     function incrementCounter() {
//         count++;
//         console.log(count)
//     }
//     incrementCounter();
// }

// counter();

//currying
// function add(a) {
//     return function (b) {
//         console.log(a + b);
//     }
// }

// add(3)(5)

// function callBack() {
//     console.log("22")
//     setTimeout(() => {
//         console.log("hiiii");
//     }, 5000)
// }

// callBack();

// function callback(para1) {
//     para1();
// }

// const wish = () => {
//     console.log("Happy birthday");
// }

// callback(wish);

// function add(number) {
//     if (number <= 0) {
//         return 0;
//     } else {
//         return number + add(number - 1);
//     }
// }

// console.log(add(3));

// function add256() {
//     var cache = {};
//     return function (num) {
//         if (num in cache) {
//             return cache[num];
//         }
//         else {
//             cache[num] = num + 256;
//             return cache[num];
//         }
//     }
// }

// var memoizeFunction = add256();
// console.log(memoizeFunction(20));

/****************************************************************************/

//implicit binding
// let obj = {
//     name: "Saurav",
//     age: 23,
//     details() {
//         console.log(this);
//     }
// }

// obj.details();

//expicit binding
// let obj = {
//     name: "Saurav",
//     age: 23,
//     detail: function () {
//         console.log(this.name);
//     }
// }

// let obj2 = {
//     name: "Drillin Nair"
// }

// obj.detail.call(obj2);

//lexical Binding

// let obj = {
//     name: "Krishna",
//     age: 23,
//     details() {

//         const arrow = () => {
//             console.log(this);
//         }
//         arrow();
//     }
// }

// obj.details();

//window binding
// function greet() {
//     console.log(this);
// }

// greet();

/****************************************************************************/

// function a() {
//     // var b = 10
//     function c() {
//         console.log(b);
//     }
//     c();
// }

// var b = 10
// a();
// // console.log(b);

// function z() {
//     var a = 100;
//     console.log(a);

//     function x() {
//         var a = 50;
//         function y() {
//             var a = 25;
//         }
//         y();
//     }
//     x();

// }

// z();

// function counter() {
//     var count = 0;
//     function incrementCounter() {
//         count++;
//         console.log(count);
//     }
//     return incrementCounter;
// }

// var ans = counter();
// ans();

// function Counter() {
//     var count = 0;
//     this.increment = function () {
//         count++;
//         console.log(count);
//     }
//     this.decrement = function () {
//         count--;
//         console.log(count);
//     }
// }

// const counting = new Counter();

// counting.increment();
// counting.increment();
// counting.decrement();

// const arr = [
//     { firstName: "Roronoa", lastName: "Zoro", age: 19 },
//     { firstName: "Nico", lastName: "Robin", age: 22 },
//     { firstName: "Vinsmoke", lastName: "Sanji", age: 19 },
//     { firstName: "Tony", lastName: "Chopper", age: 10 },
// ]

// const ans = arr.reduce((acc, curr) => {
//     if (acc[curr.age]) {
//         acc[curr.age] = acc[curr.age]++;
//     } else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {})

// console.log(ans);

// function Music(title) {
//     this.title = title;
//     console.log(this);

// }
// const play = new Music("Rock");

// function sum(a, b, ...rest) {
//     console.log(rest);
// }

// sum(1, 2, 3, 4);

// how to make site responsive media queries
// how to center element, position properties
// includes indexof let var const
// how to change key names in object
// WHY WE USE JSON
// array methods
// object methods
// large binary object
// based on key how to define particular

// split method
// output based question 10
// let ans = 10 + "20";
// let ans = 10 + + "20";
// console.log(ans, typeof (ans));
// difference betwen array and object?
// how to find a number in anarray?
// how to find key in an object ?
// all method knoweldge
// if we want to remove first  element from an array
// image tag attributes specially the one that we can use if image does not load instead of alt..
// tell the attribute that defines or check image is there or not
// margin or padding differnce ?? are they inclusive of parent tag or exclusive like if we have one div tag inside other
// and aprent have 100px height and weidht and if we gce insdide one 20 px what happen in case of padding and margin
//how can we put a tag in center except flex

//inline  element and innline block element diff.
//tell inline and block elelment
//margin padding difference and padding is inclusivev parent height or exclusive
// 100px h and w parent div and inside div ko 20px padding and margin dene p kta farak pdega?
//100vw and 100vh what is this? and we want to center a div so tell how we can do that and also responsive? there is a prop by which we can make the div tag in center used with relative and abslute prop.? css m variable use kr skte h ya nhi?
//what is calc?
//can we use variables in css?

// Example 1: This example uses window.innerHeight property to get the height of the device screen.The innerHeight property is used to return the height of the device.
//     Output:
// Example 2: This example uses document.documentElement. ...
// Output:
//data attribute

//== and === difference
// object and array differnece? homogenous nad heterogenous, key pair , indexes ,
//find eleeent in an array tell the ways write find code? - includes, find, filter, indexOf
//how to remove first tlement in an array tell methods? unshift from first, pop from last
//[2,3,4,5] array remove 3 by finding it as assume uh dont know the index? -indexof se index nikala and then splice
//object m se key value pair avaialble h ya nhi how ?? - forIn loop se check kia and console true krda by if condtion cehcek
//key value pair delete kaise krte h?
//how to change key and value both? means  name: trinay, naam: saurav
//"i am trinay".split("").reverse().join("")
//trim method

// const root = document.getElementById("green");

// const heading = document.createElement("h1");

// heading.innerText = "aa hellll waht?"

// root.appendChild(heading);

// console.log(heading.inner)

// var a = "3" + true;
// console.log(a)
// console.log(typeof (a))

// var x = [10, 20, 30];
// var y = x;

// console.log(x)

// console.log(y)

// function add(number) {
//     if (number <= 0) {
//         return 0;
//     }
//     else {
//         return number + add(number - 1);
//     }
// }

// console.log(add(3))

// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// const person1 = new Person("Saurav", 35, "Male");
// console.log(person1)

// const greet = (param1, param2) => {
//     param1();
//     console.log(param2);
// }
// const wish = () => {
//     console.log("hiii")
// }

// greet(wish, ":sam")

// function x() {
//     console.log("high")
// }

// function closure() {
//     var x = 10;
//     function y() {
//         console.log(x);
//     }
//     y();
// }

// What is JSON and why it is used ?
//JavaScript Object Notation(JSON) is a standard text - based format for representing structured data
// based on JavaScript object syntax.It is commonly used for transmitting data in web applications(e.g.,
//  sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

// When a variable is inside a function then its memory space will be in Local.

/****************************************************************************/
//  JavaScript Interview

// const arr = [10, 20, 30, 40, 50];
// const result = [];
// for(let i=0; i<arr.length; i++) {
//   const ans = arr[i] * 5;
//   result.push(ans);
// }
// console.log(result);

// const obj = {
//   name : "Saurav",
//   id: 22,
// }

// const input1 = document.getElementbyId("#input1");

// const input2 = document.getElementbyId("#input2");

// input1.innerText = obj.name;

// const increment = document.getElementbyId("#input1");

// const increment = ()=>{
//   onClick(()=>{
//     value++;
//   });
// };

// const onClick = ()=>{0
// }

// const promise = new Promise((resolve, reject) => {
//   let foodAvailable = true;

//   if(foodAvailable){
//     resolve(foodAvailable);
//   }
//   else {
//     const err = new Error("error");
//     reject(err);
//   }
// });

// promise.then((resolve) => {
//   console.log(resolve);
// }).catch((reject) => {
//   console.log(reject);
// })

// <form>
//   <div>
//     <input type=text id="#input1" value="10" />
//     <input type=tex id="#input2" />
//     <button id="increment">Click Me</button>
//   </div>
// </form>

// difference between class datatypes and id datatypes

// differnece between classes and id

// what is the differnece between local storage and cookies

// diiference between https:get and https:post?

//     < form >
//     <div>
//         <input type=text id="#input1" value="10" />
//         <input type=tex id="#input2" />
//         <button id="increment">Click Me</button>
//     </div>0
// </form >

// in input 1 and 2 show // const obj = {
// //   name : "Saurav",
// //   id: 22,
// // }

//     < form >
//     <div>
//         <input type=text id="#input1" value="10" />
//         <input type=tex id="#input2" />
//         <button id="increment">Click Me</button>
//     </div>
// </form >

// while clcking on button vaue of input 1 should increase

// React and JavaScript Interview

// what is JSX ?
// what is virtual DOM?
// Why we use Key ?
// What is hooks?
// What is props?
// What is difference b/w state and props?
// what is the differnece b/w let var const?
// what is hoisitng?
// Reconcilliation
// What are differnet type of compoenents?
// what is event loop? How it works ? Is event loop important?
// what are pure function/compoenent?
// what are asnhronous operation?
// waht is promises?

// promsie create and given an array pass the props fro this compoenent to another and show the array item in
// a list

// // Shorthand Syntax for Object Property Value in ES6

// // This example displaying the details of object using shorthand Syntax for object property value in ES6.
// // Object property shorthand
// const name = 'Raj'
// const age = 20
// const location = 'India'

// // User with ES6 shorthand
// // property
// const user = {
//     name,
//     age,
//     location
// }

// console.log(user)

// // This example displaying the details of the object without using shorthand Syntax for object property value.
// // Object property shorthand
// const name = 'Raj'
// const age = 20
// const location = 'India'

// // User without ES6
// // shorthand property
// const user = {
//     name: name,
//     age: age,
//     location: location
// }

// console.log(user)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// this keyword by akshay saini

// "use strict";

// function x() {
//   console.log(this);
// }

// x();
// window.x();

// const obj = {
//   a: 10,
//   x: function () {
//     console.log(this);
//     console.log(this.a);
//   },
// };

// obj.x();

// const student = {
//   name: "Saurav",
//   printName: function () {
//     console.log(this.name);
//   },
// };

// student.printName();

// const student2 = {
//   name: "Deepika",
// };

// student.printName.call(student2);

// const obj = {
//   a: 10,
//   x: () => {
//     console.log(this);
//   },
// };

// obj.x();

// const obj = {
//   a: 20,
//   x: function () {
//     const y = () => {
//       console.log(this);
//     };
//     y();
//   },
// };

// obj.x();

// function a() {
//   var a = 10;
//   let b = 20;
//   const c = 30;
// }

// a();

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
// }

// function x() {
//   if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//   }
// }
// x();

// var a = 10;

// let b = 20;

// const c = 30;

// function x() {
//   var a = 10;

//   function y() {
//     console.log(a);
//   }
//   return y;
// }

// var z = x();
// z();

// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
//   console.log("Namaste JavaScript");
// }

// x();

// function x() {
//   for (var i = 0; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("sup");
// }
// x();

//---------------------------------------------------------------------------------------------------------------------------------

// first class function and High order functions
// first class function can be passsed as an argument in another function and can be return from a function. So i can give the same example for high order functions also
//  as the function that taking another function as an argument and returning a function from it is high prder function.

// // -------- function passed as an argument ----------
// const greet = (param1, param2) => {
//   param1();
//   console.log(param2);
// };

// const wish = () => {
//   console.log("Good Morning");
// };
// greet(wish, "Saurav");

//// -------- retrun from a function --------------
// const greet = () => {
//   return function (name) {
//     console.log("Good Morning " + name);
//   };
// };

// const check = greet();
// check("Saurav");

////----- high order component ----------
// const radius = [3, 5, 8, 22];

// const diameter = (radius) => {
//   return 2 * radius;
// };

// const circumference = (radius) => {
//   return 2 * Math.PI * radius;
// };

// const area = (radius) => {
//   return Math.PI * radius * radius;
// };

// const calculate = (radius, logic) => {
//   const result = [];
//   for (let i = 0; i < radius.length; i++) {
//     result.push(logic(radius[i]));
//   }
//   return result;
// };

// console.log(calculate(radius, diameter));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, area));

// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   y();
// }

// x();

// function x() {
//   var a = 10;
//   return function y() {
//     console.log(a);
//   };
// }

// const z = x();
// z();

// const arr = [5, 2, 3, 4, 7, 1, 9];

// const result = arr.reduce((acc, curr) => {
//   acc = curr + acc;
//   return acc;
// }, 0);

// console.log(result);

// const arr = [5, 2, 3, 4, 7, 1, 9];

// const result = arr.reduce((acc, curr) => {
//   if (curr > acc) {
//     acc = curr;
//   }
//   return acc;
// }, 0);

// console.log(result);

// const arr = [
//   { firstName: "Roronoa", lastName: "Zoro", age: 19 },
//   { firstName: "Nico", lastName: "Robin", age: 22 },
//   { firstName: "Vinsmoke", lastName: "Sanji", age: 19 },
//   { firstName: "Tony", lastName: "Chopper", age: 10 },
// ];

// const result = arr.reduce((acc, curr) => {

// }, {});

// promises
// const promise = fetch("https://api.github.com/users/sauravbedwal");

// console.log(promise);

// promise
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// promise chaining only 1 promise
// const cart = ["shoes", "pants", "kurta"];

// // createOrder , proceedToPayment, showOrderSummary, updateWallet
// const promise = createOrder(cart);
// // console.log(promise);

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// function createOrder(cart) {
//   const promise = new Promise((resolve, reject) => {
//     if (!validateCart(cart)) {
//       const error = new Error("cart is not valid");
//       reject(error);
//     }

//     const orderId = "12345";

//     if (orderId) {
//       resolve(orderId);
//     }
//   });
//   return promise;
// }

// function validateCart(cart) {
//   return true;
// }

//// ----------- promise chaining multiple  promise -----------
// const cart = ["shoes", "pants", "kurta"];

// // createOrder , proceedToPayment, showOrderSummary, updateWallet
// const promise = createOrder(cart);
// // console.log(promise);

// promise
//   .then((orderId) => {
//     console.log(orderId);
//     return orderId;
//   })
//   .then((orderId) => {
//     return proceedToPayment(orderId);
//   })
//   .then((paymentDetails) => {
//     return showOrderSummary(paymentDetails);
//   })
//   .then((orderSummary) => {
//     return updateWallet(orderSummary);
//   })
//   .then((cartDetails) => {
//     console.log(cartDetails);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// function createOrder(cart) {
//   const promise = new Promise((resolve, reject) => {
//     if (!validateCart(cart)) {
//       const error = new Error("cart is not valid");
//       reject(error);
//     }

//     const orderId = "12345";

//     if (orderId) {
//       resolve(orderId);
//     }
//   });
//   return promise;
// }

// function proceedToPayment(orderId) {
//   return new Promise((resolve, reject) => {
//     resolve("payment successfully done!");
//   });
// }

// function showOrderSummary(paymentDetails) {
//   return new Promise((resolve, reject) => {
//     resolve("Order summary is shown!");
//   });
// }

// function updateWallet(orderSummary) {
//   return new Promise((resolve, reject) => {
//     resolve("Wallet is updated!");
//   });
// }

// function validateCart(cart) {
//   return true;
// }

// -------------- async await --------------

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise run successfully");
//   }, 5000);
// });

// const getPromise = async () => {
//   const data = await promise;

//   console.log("Namaste JS");
//   console.log(data);
// };

// getPromise();

// function getData() {
//   promise.then((data) => {
//     console.log(data);
//   });
//   console.log("Namaste JS");
// }

// getData();

// function findPairs(arr, target) {
//   // console.log(arr, target);
//   const pairs = [];
//   for(let i=0; i<arr.length; i++) {
//     for(let j=i+1; j<arr.length; j++) {
//           if(arr[i] + arr[j] === target){
//           pairs.push([arr[i], arr[i+1]]);
//       }
//     }
//   }
//   return pairs;
// }
// console.log(findPairs([1, 2, 3, 4, 5], 6));

// function removeDuplicates(arr) {
//   let uniqueArr = [];
//   for(let i=0; i<arr.length; i++) {
//       if(!uniqueArr.includes(arr[i])){
//           uniqueArr.push(arr[i]);
//       }
//   }
//   return uniqueArr;
// }

// console.log(removeDuplicates([1, 2, 3, 1, 4, 2]));

// const fetchData = () => {
//   return (dispatch) => {
//     dispatch({ type: "FETCH_START" });
//     fetch("/api/")
//       .then((response) => response.json())
//       .then((data) => dispatch({ type: "FETCH_SUCEES", payload: data }))
//       .catch((err) => dispatch({ type: "FETCH_ERROR", payload: err }));
//   };
// };

// call
// const obj = {
//   name: "saurav",
//   print: function () {
//     console.log(this.name);
//   },
// };

// obj.print();

// const obj2 = {
//   name: "Shakshi",
// };

// obj.print.call(obj2);

// const obj = {
//   name: "saurav",
// };

// const obj2 = {
//   name: "kohli",
// };

// function print(gender) {
//   console.log(this.name + " is " + gender);
// }

// print.call(obj, "male");
//apply

// const obj = {
//   name: "saurav",
// };

// const p = {
//   age: 24,
// };

// obj.__proto__ = p;

// console.log(obj.age);

// Event Bubbling and Event Capturing

// {
//   /* <div id="grandparent">
//   <div id="parent">
//     <div id="child"></div>
//   </div>
// </div>;

// document.getElementById("grandparent").addEventListener(
//   "click",
//   (e) => {
//     console.log("GrandParent Clicked");
//     // e.stopPropagation();
//   },
//   false
// );

// document.getElementById("parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent Clicked");
//   },
//   false
// );

// document.getElementById("child").addEventListener(
//   "click",
//   () => {
//     console.log("Child Clicked");
//   },
//   true
// ); */
// }
// let arr = ["saurav", "anant"];

// Function.prototype.check = function () {
//   console.log("check called");
// };
// function fun() {}

// const obj = {
//   name: "Hajin",
//   age: "20",
//   details: function () {
//     console.log(this.name);
//   },
// };
// const obj2 = {
//   name: "Nayun",
//   age: "21",
// };
// // const details = function (gender) {
// //   console.log(this.name + " is " + this.age + " yrs old is " + gender);
// // };
// // details.call(obj, "male"); //Hajin is 20 yrs old is male
// // details.call(obj2, "female"); //Nayun is 21 yrs old is female

// const detail = obj.details.bind(obj2, "female");
// detail; // ƒ bound details() copied function
// detail(); // Nayun is 21 yrs old is female

// function bigFunc() {
//   let newArray = new Array(700).fill("♥");
//   return (element) => newArray[element];
// }

// const getFunction = bigFunc();

// getFunction(500);

// const nums = [1, 2, 3, 4, 5, 6, 7];

// const a = function () {
//   console.log(this);

//   const b = {
//     func1: function () {
//       console.log(this);
//     },
//   };

//   const c = {
//     func2: () => {
//       console.log(this);
//     },
//   };

//   b.func1();
//   c.func2();
// };

// a();

// console.log(x);
// x = 100;

// var x;

console.log("Hello, World!");

// nums = [1,2,4,7,2];

// target = 4
// Output: [1,4]

// Find the indeces that sum to target
// function getNumber(arr, target) {
//   let indecesArr = [];
//   // console.log(arr, target);

//   for(let i=0; i<arr.length; i++) {
//     for(let j=i+1; j<arr.length; j++){
//       if(arr[i] + arr[j] == target) {
//         console.log(i, j);
//         indecesArr.push(i, j);
//       }
//     }
//   }
//   return indecesArr;
// }

// console.log(getNumber([1,2,4,7,2], 4));

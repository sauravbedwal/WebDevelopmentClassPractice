// const promise = fetch('').then((response) => {
//     return response.json();
// }).then((data) => {
//     console.log(data);
// })

// async function getApi() {
//     const response = await fetch("");
//     const data = await response.json();
//     console.log(data);
// }

// fetch always return a promise that can be resolve or rejected.

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise Resolved Value!!!")
//     }, 20000)
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise Resolved Value!!!")
//     }, 10000)
// });

// async function getData() {
//     console.log("hello");

//     const val = await p1;
//     console.log("NJ 1");
//     console.log(val);

//     const val2 = await p2;
//     console.log("NJ 2");
//     console.log(val2);
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

// function a() {

//     var b = 10;

//     function c() {

//         console.log(b);

//     }
//     c();
// }

// a();


/****************************************************************************/

// NJ1 - 7


// console.log(a);

// var b = 20;
// let a = 10;

// console.log(a);

//function scope
// function a() {
//     var x = 10;
//     if (x) {
//         console.log(x);
//     }
// }
// a();


/****************************************************************************/

// NJ1 - 10

// function x() {
//     var a = 10;
//     function y() {
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }

// var z = x();
// z();


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

/****************************************************************************/



// NJ1 - 13

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


// map
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
// console.log(arr.map(tripple));
// // console.log(ans);



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



// const arr = [
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

// const promise = fetch('https://fakestoreapi.com/productaas/1').then((response) => {
//     return response.json();
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err.message);
// })


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

// b.push(6);
// console.log(a);
// console.log(b);


// function sum(a, b, ...rest) {
//     console.log(a, b);
//     console.log(rest);
// }

// sum(1, 2, 5, 8, 9);

// const a = [1, 2, 3, 4, 5];

// function sum(a, b, c, ...rest) {
//     let ans = a + b + c;
//     console.log(ans);
//     console.log(rest);
// }

// const trial = sum(...a);
// trial();

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
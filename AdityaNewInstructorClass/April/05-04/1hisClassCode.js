/* ---------------------- Function returning a Promise ---------------------- */

// const getAPromise = () =>
//   new Promise((resolve) => {
//     resolve("Hello");
//   });

// getAPromise().then((data) => console.log(data));

/* ---------- Shortcut for creating Fulfilled and Rejected promises --------- */

// const promise = new Promise((resolve) => {
//   resolve("Hello");
// });

// const promise = Promise.resolve("Hello");
// promise.then((data) => console.log(data));

// const promise = new Promise((_, reject) => {
//   reject("Failed!");
// });

// const promise = Promise.reject("Failed!");

/* --------------------- Stores promises inside an array -------------------- */

// const promiseOne = Promise.resolve("🚀");
// const promiseTwo = Promise.reject("🔥");
// const promiseThree = Promise.resolve("✅");
// const arrayOfPromises = [promiseOne, promiseTwo, promiseThree];

/* -------------------------------------------------------------------------- */
/*                                Async & Await                               */
/* -------------------------------------------------------------------------- */

// Error

// async function stuff() {
//   // returning a simple value
//   // return [1, 2, 3];
//   // return a fulfilled promise
//   // return Promise.resolve("Success!");
//   //return a rejected promise
//   return Promise.reject("Failed");
// }

// const promise = stuff();
// promise.then((data) => console.log(data)).catch((error) => console.log(error));

// async function getTodoItem() {
//   // await keyword
//   // await on the promise
//   // await returns the resolved value of the fulfilled promise
//   // fetch("https://jsonplaceholder.typicode.com/todos/1")
//   //   .then((response) => response.json())
//   //   .then((data) => console.log(data));
//   // const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   // const data = await response.json();
//   // console.log(data);

//   try {
//     console.log("Inside try block");
//     throw new Error("Failed");
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// getTodoItem();

// Top Level Await


async function getTodoItem() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/incorrect/1"
      );
  
      // response.ok -> true -> successful
      // response.ok -> false -> unsuccessful
  
      // If an error occurred
      if (!response.ok) {
        throw new Error(`An error occured with status code : ${response.status}`);
      }
  
      const data = await response.json();
    } catch (error) {
      console.log(error.message);
    }
  }
  
  getTodoItem();


  // ====================================================================================================== //

abdur

  const promise = new Promise((resolve, reject) =>{

    setTimeout(()=>{
    
    if(age>=18){
    
    resolve("You can vote");
    
    }
    
    else
    
    reject("You can not vote");
    
    },time)
    
    })
    
    return promise;

  // ====================================================================================================== //


    function checkCanIVote(delay, age) {

      const promise = new Promise((resolve, reject) => {
      
      // If age is >= 18 -> resolve
      
      // DRY -> Don't repeat yourself
      
      // if (age >= 18) {
      
      // setTimeout(() => {
      
      // resolve("You can vote");
      
      // }, delay);
      
      // } else {
      
      // setTimeout(() => {
      
      // reject("You can not vote");
      
      // }, delay);
      
      // }
      
      setTimeout(() => {
      
      if (age >= 18) {
      
      resolve("You can vote");
      
      } else {
      
      reject("You can not vote");
      
      }
      
      }, delay);
      
      });
      
      return promise;
      
      }
      
      checkCanIVote(200, 70)
      
      .then((data) => {
      
      console.log(data); // prints 'You can vote'
      
      })
      
      .catch((err) => {
      
      console.log(err); // does not do anything
      
      });
      
      checkCanIVote(200, 16)
      
      .then((data) => {
      
      console.log(data); // does not do anything
      
      })
      
      .catch((err) => {
      
      console.log(err); // prints 'You can not vote'
      
      });
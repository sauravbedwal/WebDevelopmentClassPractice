// Create a Promise

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let foodAvailable = false;
//     if (foodAvailable) {
//       // Operation Successful! 🎊
//       resolve(); // PENDING -> FULFILLED
//     } else {
//       // Operation Unsuccessful 😭
//       reject(); // PENDING -> REJECTED
//     }
//   }, 3000);
// });

// console.log(promise);

// setTimeout(() => {
//   console.log(promise);
// }, 4000);

/*********************************************************************************************************/

// Create a Promise
console.log("I PROMISE I will text you in sometime");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let foodAvailable = false;
    if (foodAvailable) {
      // Operation Successful! 🎊
      resolve("Noodles received!"); // PENDING -> FULFILLED
    } else {
      // Operation Unsuccessful 😭
      reject("Noodles not available!"); // PENDING -> REJECTED
    }
  }, 3000);
});

console.log("Friend just left to get noodles...");

promise
  .then((textMessage) => {
    console.log("Messaged received :", textMessage);
    console.log("Great! Setting up the table");
  })
  .catch((textMessage) => {
    console.log("Messaged received :", textMessage);
    console.log("Oh no! :( I will prepare some maggie then");
  });

/***********************************************************************************************************/

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    const newPromise = response.json();
    return newPromise;
  })
  .then((data) => {
    console.log(data);
  });
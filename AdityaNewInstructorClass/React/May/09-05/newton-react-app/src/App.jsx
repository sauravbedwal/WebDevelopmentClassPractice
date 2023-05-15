import "./App.css"
/* ----------------------------------------------- Events ------------------------------------------------- */


//In this code we learned abt Events and saw how it is different from JS Event(syntax).

// const App = () => {
//     // Most common event on a button is the "click" event
  

//     // Name of the event handler can be whatever you want!!
//     // Standard -> handle{type of event}
//     // Example -> For click -> handleClick, For scroll -> handleScroll

//     // We want to call this function when we click on the button
//     function handleClick() {
//       console.log("Button clicked!");
//     }
  
//     // call a function on click on a button
//     // All event handlers are camelCase by default
  
//     // onClick -> ALWAYS requires a callback function
//     // DO NOT CALL THE FUNCTION HERE!!!!   
//     return <button onClick={handleClick}>Click me</button>;             //No need to grab the button element bcoz element is right here and also here we passing the function to onClick handler and it will be called by react when we click on button.
//   };
  
  
//   // Named Export
//   export { App };

//   // Using Regular Javascript :
//   // You first grab the button element
//   // const button = document.querySelector('button');
//   // Register an event listener
//   // Important : We run the callback when the button is clicked
//   // button.addEventListener('click', () => {                   //addEventListener is a high order function bcoz it take another function here, if any function accepts another function as a parameter is always a high order function. 
//   // })

//   // and also we use onClick event dfferently in JS
//   // <button onClick="handleClick()">Click me</button>;
  

//----------------------------------------------------------------------------------------------------------


//Same as avabove code as hrere we used multiple click event on multiple tags.

// const App = () => {
//     // Event Handler functions can either be normal functions or arrow functions
//     // No difference between them both
//     const handleAnchorClick = () => {
//       console.log("Clicked by anchor element");
//     };
  
//     const handleDivClick = () => {
//       console.log("Clicked by div element");
//     };
  
//     const handleSpanClick = () => {
//       console.log("Clicked by span element");
//     };
  
//     // Most of the html elements have the onClick listener
//     // This is possible in normal JS as well!
//     return (
//       <main>
//         <a onClick={handleAnchorClick}>Google</a>
//         <div className="container" onClick={handleDivClick}></div>
//         <span onClick={handleSpanClick}>This is a span</span>
//       </main>
//     );
//   };
  
//   // Named Export
//   export { App };
  

//----------------------------------------------------------------------------------------------------------  


//In this code we passing One event handler for multiple elements as it is possible.
  
// const App = () => {
//     // One event handler for multiple elements
  
//     const handleClick = () => {
//       console.log("Handle Click!");
//     };
  
//     return (
//       <main>
//         <a onClick={handleClick}>Google</a>
//         <div className="container" onClick={handleClick}></div>
//         <span onClick={handleClick}>This is a span</span>
//       </main>
//     );
//   };
  
//   // Named Export
//   export { App };


//----------------------------------------------------------------------------------------------------------  


//In this code we learned abt the ways of adding functions for event listeners.

  // const App = () => {
  // // Another way of adding functions for event handlers
  
  //   // Method 1 : Creating a function outside JSX
  //   function handleClick() {
  //     console.log("Clicked by an element!");
  //   }
  
  //   return (
  //     <main>
  //       <a onClick={handleClick}>Google</a>
  //       <div className="container" onClick={handleClick}></div>
  
  //       {/* Method 2 : Creating a function inside JSX  */}
  //       <span
  //         onClick={() => {                                   //passing function definition as its not a function call 
  //           console.log("Span is clicked!");
  //         }}
  //       >
  //         This is a span
  //       </span>
  //     </main>
  //   );
  // };
  
  // // Named Export
  // export { App };


//----------------------------------------------------------------------------------------------------------  


//In this code we learning abt event object as Whenever we click on event button an event object gets generated
// as that event object basically contains all the data of that specific event like if we done click event then 
//it probably contains the data that which element is clicked and where it clicked, values and lot of things and
// whethter or not use of event object is upto us but there are certain types of events where event object is 
//very essential thing one of them is input event like in search bar there is input tag and in input tag has a 
// event handler which is listening to whatever we type here and whatever we type here is the part of the event 
// object but when it comes to button liek Add file button there we dont need the event object as there is no use
// for it but here also we get the event object. as there is hadnleClick function that will be saved  and react
// remebers that react needs to call this fucntion whenever we click on the tag as react will deceide when to call 
// the funciton as it it is in react control and it can pass any argument also and react will pass event object here 

// Event Object
// const App = () => {
//   // React will pass the event object because react is in control of when to call the handleClick function

//   // It's up to us, whether we want to use it or not
//   const handleClick = (event) => {
//     console.log(event.target); // most commonly used property on event is event.target
//   };

//   return (
//     <main>
//       <a id="anchor" onClick={handleClick}>
//         Google
//       </a>
//       <div className="container" onClick={handleClick}></div>

//       {/* Method 2 : Creating a function inside JSX  */}
//       <span
//         onClick={(event) => {
//           console.log("Span event ->", event);
//         }}
//       >
//         This is a span
//       </span>
//     </main>
//   );
// };

// // Named Export
// export { App };


//----------------------------------------------------------------------------------------------------------  


//In this code we learend abt events object that we pass in fucntion as well as calling other funciton when click event get called.

// // Event Object
//   const App = () => {
//     // React will pass the event object because react is in control of when to call the handleClick function
  
//     // It's up to us, whether we want to use it or not
//     const handleClick = (event) => {
//       console.log(event.target); // most commonly used property on event is event.target
  
//       // Call other functions when this handleClick is triggered
//       dummyFunctionOne();
//       dummyFunctionTwo();
//       dummyFunctionThree();
//     };
  
//     const dummyFunctionOne = () => {
//       console.log("dummyFunctionOne");
//     };
  
//     const dummyFunctionTwo = () => {
//       console.log("dummyFunctionTwo");
//     };
  
//     const dummyFunctionThree = () => {
//       console.log("dummyFunctionThree");
//     };
  
//     return (
//       <main>
//         <a id="anchor" onClick={handleClick}>
//           Google
//         </a>
//         <div className="container" onClick={handleClick}></div>
  
//         {/* Method 2 : Creating a function inside JSX  */}
//         <span
//           onClick={(event) => {
//             console.log("Span event ->", event);
  
//             // Call other functions when this handleClick is triggered
//             dummyFunctionOne();
//             dummyFunctionTwo();
//             dummyFunctionThree();
//           }}
//         >
//           This is a span
//         </span>
//       </main>
//     );
//   };
  
//   // Named Export
//   export { App };
  

//----------------------------------------------------------------------------------------------------------  


// In this code we learning abt using 3 seerate functoons for three differnet elements(button) and by differnet method
//  Creating one function that handles all three elements(button)

// // Objective : When One, Two or Three buttons are clicked, print the
//     // respective console logs :
//     // "One has been clicked"
//     // "Two has been clicked"
//     // "Three has been clicked"
//   const App = () => {
//     // Method 1 : Using three separate functions

//     // const handleOneButton = () => {
//     //   console.log("One has been clicked");
//     // };
//     // const handleTwoButton = () => {
//     //   console.log("Two has been clicked");
//     // };
//     // const handleThreeButton = () => {
//     //   console.log("Three has been clicked");
//     // };

//     //   return (
//     //   <main>
//     //     <button id="One" onClick={handleOneButton}>One</button>
//     //     <button id="Two" onClick={handleTwoButton}>Two</button>
//     //     <button id="Three" onClick={handleThreeButton}>Three</button>
//     //   </main>
//     // );
  

//   //   // We can write above code also directly in jsx:
//   //  return (
//   //     <main>
//   //       <button onClick={() => {
//   //         console.log("One has been clicked")}}>One</button>

//   //       <button onClick={() => {
//   //         console.log("Two has been clicked")}}>Two</button>

//   //       <button onClick={() => {
//   //         console.log("Three has been clicked")}}>Three</button>
//   //     </main>
//   //   );


//     // Method 2 :
//     // Create one function that handles all three buttons
//     const handleClick = (event) => {
//       console.log(`${event.target.id} has been clicked!`);                    //we can also do event.target.textContent or innerText
//     };
  
//     return (
//       <main>
//         <button id="One" onClick={handleClick}>One</button>
//         <button id="Two" onClick={handleClick}>Two</button>
//         <button id="Three" onClick={handleClick}>Three</button>
//       </main>
//     );
//   };
  
//   // Named Export
//   export { App };


//----------------------------------------------------------------------------------------------------------  


// In this code learning abt arguments inside the event handler.

// // Arguments inside the event handlers
//   const App = () => {
// //     const handleClick = (event) => {
// //       console.log(event);
// //     };
  
// //     return (
// //       <main>
// //         {/* Using this way, we cannot pass any other argument, apart from the 
// //         event object that's passed by React itself */}
// //         {/* <button onClick={handleClick}>One</button>
// //         <button onClick={handleClick}>Two</button>
// //         <button onClick={handleClick}>Three</button> */}
// //   </main>
// // );


//   const handleClick = (parameter) => {
//       console.log(parameter);
//     };

//   return (
//     <main>
//     <button
//           onClick={(event) => {
//             // Event object is optional
//             // Pass it along to handleClick ONLY if required
//             handleClick("ONE");}}>One</button>
        
//         <button
//           onClick={(event) => {
//             // Event object is optional
//             // Pass it along to handleClick ONLY if required
//             handleClick("TWO");}}>Two</button>

//         <button
//           onClick={(event) => {
//             // Event object is optional
//             // Pass it along to handleClick ONLY if required
//             handleClick("THREE");}}>Three</button>
//     </main>
//   );
// };
  
//   // Named Export
//   export { App };


//----------------------------------------------------------------------------------------------------------  


//Another example of above code.

  // Arguments inside the event handlers
  const App = () => {
    const users = [
      { id: 1, name: "Barry", occupation: "Assassin" },
      { id: 2, name: "Gene Cousineau", occupation: "Theatre Teacher" },
      { id: 3, name: "Monroe Fuches", occupation: "Assassin Manager" },
    ];
  
    const handleClick = ({ name, occupation }) => {                               //destructured name and occupation
      console.log(`Name is ${name} with occupation ${occupation}`);
    };

    return (
      <main>
        {users.map((user) => {
          return (
            <div className="card" onClick={() => {
                handleClick({ name: user.name, occupation: user.occupation });
              }}>
              <p>Name : {user.name}</p>
              <p>Occupation : {user.occupation}</p>
            </div>
          );
        })}
      </main>
    );
  };
  
  // Named Export
  export { App };
  
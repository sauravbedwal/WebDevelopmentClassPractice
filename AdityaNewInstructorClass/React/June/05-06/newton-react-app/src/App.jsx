import "./App.css";

/************************************************* useRef **************************************************/

// useState 👑 // useEffect 👑

// useRef 🔥 // useReducer 🔥

//Hooks must be called at the top level and before any condition like if.

// we need useRef to get the reference of the element and we need actual element to access the DOM like we want to do 
// focus or blur



//In this code we learned whenever we use useRef it returns/create a ref varibale and ref contains an object with one property i.e.
// current which has a default value i.e. undefined which comes from useRef() as if we change it to useRef(null)
//  then current value will be null ( { current: null } ) as useRef returns a ref varibale and also every html
//  element has a ref attribute in which we can give the value of ref variable and then the reference of  html
//  element will be stored in ref variable i.e. inputRef here. and after first render whatever is the actual 
// input element that will be stored inside inputRef variable menas the element(input) in which we use ref variable 
// (inputRef) will store the element(input) in that variable(inputRef). 

//the default value of current { current: undefined }  bcz of useRef() and if we gave null in useRef like useRef(null)
// here then { current: null}.

//once we give inputRef to the ref attribute as value then react will basically store the actual element (input element 
// here) with in the current property and if we do inputRef.focus then it is the whole object so as we know that
// the element is value of current property means input.current contains the actual element so we will use 
// inputRef.current.focus() 

// when we create a ref i.e. useRef() we assosicate the ref with particular element that is we used it in input element
// if we console input it gives as an object with current proerpty whihc contains input element and if we use input.current then 
// it will give us the whole element directly
// one ref can be assigned to only one element 


// import { useEffect, useReducer, useRef, useState } from "react";


// /** First Use Case of useRef :
//  * Get the actual HTML DOM element so that we can manipulate it
//  * within our code.
//  */
// const App = () => {
//   const inputRef = useRef(null);
//     // { current: null }


//   /* using it in useEffect  */
//   // useEffect(() => {
//   //   inputRef.current.focus();
//   // }, []);

//   return (
//     <main>
//       <input ref={inputRef} id="firstName" type="text" placeholder="Focus me!" />
//       <br />
//       <br />
//       <button
//         onClick={() => {
//           // console.log(inputRef);
//           inputRef.current.focus();
//         }}>Focus!</button>
//       <button
//         onClick={() => {
//           inputRef.current.blur();
//         }}>Blur!</button>
//     </main>
//   );
// };

// /* in regular JS */
// // const input = document.querySelector("input");
// // input.focus();

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// In this code we want the variable to remember what the previous value was after the re-render of the state also
// and at the same time we dont want the variable to cause a re-render like useState and for that we use useRef().
//as we want to chnage the value of variable that can be done by state but when state chnage it re-renders and we 
// dont want it to get re-render so we will use useRef().
// useRef don't re-render like useState.    

// import { useEffect, useReducer, useRef, useState } from "react";

// /** Second use :
//  */

// const App = () => {
//   const [count, setCount] = useState(0);
//   let copyOfCount = useRef(0);
// //{ current: 0 }

//   return (
//     <main>
//       <h3>Count : {count}</h3>
//       <h3>Ref : {copyOfCount.current}</h3>

//       <button
//         onClick={() => {
//           /** THIS TRIGGERS A RE-RENDER */
//           setCount((prevCount) => prevCount + 1);
//         }}
//       >
//         Increment State
//       </button>
//       <button
//         onClick={() => {
//           /** THIS DOES NOT TRIGGER A RE-RENDER */
//           copyOfCount.current += 1;                       //copyOfCount.current = copyOfCount.current + 1
//         }}
//       >
//         Increment ref
//       </button>
//     </main>
//   );
// };

// // const input = document.querySelector("input");
// // input.focus();

// // Named Export
// export { App };


//-----------------------------------------------------------------------------------------------------------


// Same as above code as here we using muliple useRef()

import { useEffect, useReducer, useRef, useState } from "react";


const App = () => {
  const inputNameRef = useRef();
  const inputEmailRef = useRef();

  return (
    <main>
      <input ref={inputNameRef} type="text" placeholder="Name" />
      <br />
      <br />
      <input ref={inputEmailRef} type="email" placeholder="Email" />
      <br />
      <br />
      <div>
        <button
          onClick={() => {
            inputNameRef.current.focus();
          }}
        >Focus Name</button>
        <button
          onClick={() => {
            inputEmailRef.current.focus();
          }}
        >Focus Email</button>
      </div>
    </main>
  );
};

// Named Export
export { App }; 
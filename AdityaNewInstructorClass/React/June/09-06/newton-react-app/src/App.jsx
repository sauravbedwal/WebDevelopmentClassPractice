import "./App.css";

//IN this code we learned abt that whenever we pass an object, array or function react will not go and check 
// inside of everything as it wil check it by references so for ex if we passing an object then it will re-render
// again and again due to diff. reference though the property and value is same but as refeence is differnt so 
// react will take it as changed prop and it will re-render and it also called Referential Equality or Shallow Comparision or 
// Shallow Prop/State Comparision and also we saw that if we store the object in a variable then also it will
// re-render again and again bcz everytime when state will change the App Comp. will re-render and create the 
// user variable again and again due to which refernce will change and react will see that prop is changing so it 
// will re-render it again and again. 


// import { useState, memo, useRef } from "react";

// const Child = ({ count }) => {
//   console.log("Child re-render");
//   return <h1>Count in child : {count}</h1>;
// };
// // Cache : <h1>Child</h1>

// const OptimizedChild = memo(Child);
// //{ id: 1 } -> xA123
// //{ id: 1 } -> ay123

// export const App = () => {
//   const [count, setCount] = useState(0);

//   const user = { id: 1 };

//   return (
//     <main>
//       <h1>Count : {count} </h1>
//       <button onClick={() => setCount((c) => c + 1)}>Increment</button>

//       {/* <OptimizedChild age={{ id: 1 }} /> */}
//       <OptimizedChild age={user} />
//     </main>
//   );
// }; 


//----------------------------------------------------------------------------------------------------------


//Same as above code as here we reslved the probkem now here <OptimizedChild /> won't re-render again and again
// bcoz we used useRef here as if we want to create a variable which we can change over time but when we change it,
// it should not cause a re-render but also the same time i want it to persist across re-renders it basically have
// quality of normalvariableand also of state varaible and for that we use useRef. useRef can change over time and
// the value will be remebered by react in every single render and the value will not be recreated and at the same
// time everysingle time we change the useRef value it never trigger a re-render.    

//as whenevr react comes across to the file for the first time i.e. App.jsx file in main.jsx file when we import 
// it so in that react will go inside the file and run every single line of the file and after first run now 
// whenevre the App component will re-render only the functions inside it will run as the entire file wont't 
// run again and bcoz of that user vairbale will not be created agian means its refernce will be same across all
// the renders but if our variable depends on the props of our comp. or count of the comp. then we can't use this.  
// we can use this when this when the variable(user) is a simple variable which does not contain any values from 
// state or props.



// import { useState, memo, useRef } from "react";

// const Child = ({ count }) => {
//   console.log("Child re-render");
//   return <h1>Count in child : {count}</h1>;
// };

// const OptimizedChild = memo(Child);
// //{ id: 1 } -> xA123
// //{ id: 1 } -> ay123


// // Method 2
// const userRef = useRef({ id: 1 });                   //as its a very simple object so we can simpy create it putside of App comp also as by that it wont re-render again and again

// export const App = () => {
//   const [count, setCount] = useState(0);

//   //Method 1
//   // const userRef = useRef({ id: 1 });

//   return (
//     <main>
//       <h1>Count : {count} </h1>
//       <button onClick={() => setCount((c) => c + 1)}>Increment</button>

//       {/* <OptimizedChild age={userRef.current} /> */}
      
//       <OptimizedChild age={user} />
//     </main>
//   );
// }; 


//----------------------------------------------------------------------------------------------------------


//Same as above code as here user object depends on the count. if we click on incremrent of count then also
{/* <OptimizedChild age={user} /> will re-render bcoz it will create new reference/new object every single time. */}
//as it won't be solved normally or by useRef() so we used useMemo in below code which is a sol for such cases.


// import { useState, memo, useRef } from "react";

// const Child = ({ count }) => {
//   console.log("Child re-render");
//   return <h1>Count in child : {count}</h1>;
// };

// const OptimizedChild = memo(Child);
// //{ id: 1 } -> xA123
// //{ id: 1 } -> ay123


// export const App = () => {
//   const [count, setCount] = useState(0);
//   const [anotherCount, setAnotherCount] = useState(0);

//   // const user = { id: anotherCount };
//   const user = useRef({ id: anotherCount });
//  //{ id: 0 }
 
//   return (
//     <main>
//       <h1>Count : {count} </h1>
//       <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      
//       <h1>Another Count : {anotherCount}</h1>
//       <button onClick={() => setAnotherCount((c) => c + 1)}>Increment</button>
      
//       {/* <OptimizedChild age={user} /> */}
//       <OptimizedChild age={user.current.id} />
//     </main>
//   );
// }; 


//----------------------------------------------------------------------------------------------------------


// as here we run each line then redner the jsx and then click on the inremernt of count now the comp will re-render 
// and run the lines but in useMemo as we have an empty array of depenedencies so it means this function will run
// only first time in the first render and useMemo has already stored the result in its cache  and as we have empty
// array of dependencies useMemo will simply return the value i.e. { id:0 } every single time when it re-render
//  and also useMemo will return the same reference of the object as it will not create the new refference.

// useMemo will run during the first-render no matter what we gave as the second argument as not after the render
// like useEffect and whatever return from this function i.e the object here that will be return to user variable.

// Whenever we want to run some logic only when a certain state  or prop will change then use useMemo  

// import { useState, memo, useRef, useMemo } from "react";

// const Child = ({ count }) => {
//   console.log("Child re-render");
//   return <h1>Count in child : {count}</h1>;
// };

// const OptimizedChild = memo(Child);


// export const App = () => {
//   const [count, setCount] = useState(0);
//   const [anotherCount, setAnotherCount] = useState(0);

// //{ id : 0 }
//   const user = useMemo(() => {            //unlike useEffect it does not run after the render as useMemo will run during the render as in useMemo whatever we will return that will become a value of the user variable.  
//     return { id: anotherCount };
//   }, []);
  

//   return (
//     <main>
//       <h1>Count : {count} </h1>
//       <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      
//       <h1>Another Count : {anotherCount}</h1>
//       <button onClick={() => setAnotherCount((c) => c + 1)}>Increment</button>
    
//       <OptimizedChild age={user} />
//     </main>
//   );
// }; 

// 543536363563563

//----------------------------------------------------------------------------------------------------------


// Same as above code as here we gave array of depenedency as whenever anotherCount will change we want to use a
// new user object which has the new anotherCount value.

// as here in the first render it will run each line of App comp then in useMmeo will run the function and it will
//  return watever object we have here and two things will happen as the object will stoer in user variable and 
//  it also stores in the cache and after that it will render the jsx  and we passsinf age of user  and user is 
//  id: 0 and after this when we click on setCount the count value will change the comp will re-render and when we 
//  come across useMemo it will check that it is depedend on anotherCount and value of anotherCount is 0 now and before
//  also it was 0 as there is no Change so useMemo will not run the function again as useMemo will return whatever 
//  was there in the previous render which is avaiable in cache bcoz of which user value is still id: 0 with the
// same reference and passed the smae thing to <OptimizedChild /> and this comp will not re-render bcoz it has
//  same refercene.
// but if we click on incremement of anotherCount bcoz of which state will change and app will re-render and this
// time anotherCount is 1 and now we came across useMemo now it will check now the value of anotherCount is 1 and 
// previously it was 0 so value changed and as it changes useMemo will run the function and stored the new object 
// refernece with in the user variaable and in cache. 



// import { useState, memo, useMemo } from "react";

// const Child = ({ count }) => {
//   console.log("Child re-render");
//   return <h1>Count in child : {count}</h1>;
// };

// const OptimizedChild = memo(Child);

// export const App = () => {
//   const [count, setCount] = useState(0);
//   const [anotherCount, setAnotherCount] = useState(0);
// //anotherCount -> 1

// //{ id : 0 } <--- CACHE when click on increment of count 
// //{ id : 1 } <--- CACHE when click on increment of anotherCount
//   const user = useMemo(() => {                                   //unlike useEffect it does not run after the render as useMemo will run during the render as in useMemo whatever we will return that will become a value of the user variable.  
//     return { id: anotherCount };
//   }, [anotherCount]);  
//   //0 -> 0 NOT CHANGED! WHEN CLICK ON COUNT INCREMENT !! 
//   //0 -> 1 CHANGED! CHANGED WHEN CLICK ON ANOTHERCOUNT INCREMENT !! 
  

//   return (
//     <main>
//       <h1>Count : {count} </h1>
//       <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      
//       <h1>Another Count : {anotherCount}</h1>
//       <button onClick={() => setAnotherCount((c) => c + 1)}>Increment</button>
    
//       <OptimizedChild  age={user} />
//     </main>
//   );
// }; 


//----------------------------------------------------------------------------------------------------------


// In this code we usind useMemo as here we want to validate the name if it contains & then it has error but now
//so when we type in name as state changes it re-renders and isValidate function runs for every single character
// which is correct but when we typing in email or loaction then also statae changes and isValidate function 
// runs which is not needed so we use useMemo here to get the solution 


// import { useState, useMemo } from "react";

// function isValidName(string) {
//   console.log("isValidName run!");
//   return !string.includes("&");
// }

// export const App = () => {
//   const [formDetails, setFormDetails] = useState({
//     name: "",
//     email: "",
//     location: "",
//   });

//   // formDetails.name -> "A"

//   const handleInputChange = (event) => {
//     setFormDetails((prevState) => ({
//       ...prevState,
//       [event.target.name]: event.target.value,
//     }));
//   };

//   // const isNameError = !isValidName(formDetails.name);
//   const isNameError = useMemo(() => {
//     return !isValidName(formDetails.name);
//   }, [formDetails.name]);

//   return (
//     <main onChange={handleInputChange}>
//       <input name="name" type="text" placeholder="Name" value={formDetails.name} className={isNameError && "error"} />
//       <input name="email" type="email" placeholder="Email" value={formDetails.email} />
//       <input name="location" type="text" placeholder="Location" value={formDetails.location} />
//     </main>
//   );
// };


//----------------------------------------------------------------------------------------------------------


// In this code as we have handleClick function which is not changing and bcpz of memo we changed our child comp.
// to OptimizedChild which only re-renders when props changed but now here its value is  not changing but as if we 
// click on Incremrent from child due to which state will change menas App comp. will re-render and when it will 
// re-render it will create heandleClick function again which means a new referece so OptimizedChild will also 
// re-render 
//whenever we pass an object or array or a function as a prop react will only look at the refernces.   
//in useMemo wahtever we return is memoised but in useCallBack whatever function we pass will be memoised and as 
// we passing empty array of dependencies this useCallback will never return a new function 
//useCallback will return the function only once on the first render as it will never recreate any other function. 


import { useState, memo, useCallback } from "react";

const Child = ({ handleClick }) => {
  console.log("Child re-render");
  return (
    <div>
      <button onClick={handleClick}>Increment from child</button>
    </div>
  );
};

const OptimizedChild = memo(Child);

export const App = () => {
  const [count, setCount] = useState(0);

    // const handleClick = () => {
    //   setCount((c) => c + 1);
    // };


  // const handleClick = useMemo(() => {
  //   return () => {
  //     setCount((c) => c + 1);
  //   };
  // }, []);


    const handleClick = useCallback(() => {
    setCount((c) => c + 1);
    // count => 0
  }, []);


  return (
    <main>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <OptimizedChild handleClick={handleClick} />
    </main>
  );
}; 
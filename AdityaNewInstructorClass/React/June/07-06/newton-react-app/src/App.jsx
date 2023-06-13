import "./App.css";

// 1
// In this code we used the logic(useState) and createContext function and provider in differnt file in differnt 
// folder i.e UserContext file bcoz the compenent like UserCityChange in App.jsx file can contain other type 
// of states and logic as well but if we have the lgoic of UserContext file also there then its hard to understand 
// that which logic is belong to function provider thats why e just seperated that provider logiv in diff. file  

// import { useEffect, useReducer, useRef, useState, createContext, useContext } from "react";
// import UserContext, { UserContextProvider } from "./Context/UserContext";

// const SelectedCity = () => {
//     const [user] = useContext(UserContext);
//     return <h1>{user.city}</h1>;
// };

// const UserMumbai = () => {
//     const [, setUser] = useContext(UserContext);
//     return (
//         <>
//       <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
//         <h3>Mumbai</h3>
//         <button onClick={() => setUser({ city: "Mumbai" })}>
//           Update from Mumbai
//         </button>
//       </div>
//       <SelectedCity />
//       </>
//     );
//   };
  
//   const UserBangalore = () => {
//     const [, setUser] = useContext(UserContext);
//     return (
//       <>
//         <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
//           <h3>Bangalore</h3>
//           <button onClick={() => setUser({ city: "Bangalore" })}>
//             Update from Bangalore
//           </button>
//         </div>
//         <UserMumbai />
//       </>
//     );
//   };
  
//   const UserLucknow = () => {
//     const [, setUser] = useContext(UserContext);
//     return (
//       <>
//         <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
//           <h3>Lucknow</h3>
//           <button onClick={() => setUser({ city: "Lucknow" })}>
//             Update from Lucknow
//           </button>
//         </div>
//         <UserBangalore />
//       </>
//     );
//   };
  
//   const UserCityChange = () => {
//     const [user, setUser] = useState({ city: "Hyderabad" });
  
//     return (
//       <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
//         {/* passing the user and setUser in value as we can also pass an object but it looks like 
//         useState so we using an array */}
//         <UserContextProvider value={[ user, setUser]}>   
//           <UserLucknow />
//         </UserContextProvider>
//         <button onClick={() => setUser({ city: "Hyderabad" })}>Reset</button>
//       </div>
//     );
//   };
  
//   const App = () => {
//     return (
//       <main>
//         <UserCityChange />
//       </main>
//     );
//   };
  
//   // Named Export
//   export { App };


//----------------------------------------------------------------------------------------------------------


// 2
// In this code we refactor the code and used diffwrnet file for components and provider(logic) bocz the 
// component will have the function which are part of the provider and also whuch are not and if we use 
// everything inside same comp then it will be confusing thats why we used provider in different file.


// import { useEffect, useReducer, useRef, useState, useContext, createContext } from "react";
// import UserContext, { UserContextProvider } from "./Context/UserContext";

// const SelectedCity = () => {
//   const [user] = useContext(UserContext);                             //here we destructured user bcoz wewanted to use it here
//   return <h1>{user.city}</h1>;
// };

// const UserMumbai = () => {
//   const [, updateUserCity] = useContext(UserContext);                 //using const [, updateUserCity] as here we destrured it as whatever is the first value before , we dont need it
//   return (
//     <>
//       <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
//         <h3>Mumbai</h3>
//         <button onClick={() => updateUserCity("Mumbai")}>
//           Update from Mumbai
//         </button>
//       </div>
//       <SelectedCity />
//     </>
//   );
// };

// const UserBangalore = () => {
//   const [, updateUserCity] = useContext(UserContext);
//   return (
//     <>
//       <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
//         <h3>Bangalore</h3>
//         <button onClick={() => updateUserCity("Bangalore")}>
//           Update from Bangalore
//         </button>
//       </div>
//       <UserMumbai />
//     </>
//   );
// };

// const UserLucknow = () => {             //this component doesnt know how exactly the city is updated as earlier we were passing directly the setState(setUser) now we passing a function which contains the setState so through function its changing.  
//   const [, updateUserCity] = useContext(UserContext);
//   return (
//     <>
//       <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
//         <h3>Lucknow</h3>
//         <button onClick={() => updateUserCity("Lucknow")}>
//           Update from Lucknow
//         </button>
//       </div>
//       <UserBangalore />
//     </>
//   );
// };

// const UserCityChange = () => {
//   return (
//     <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
//       <UserContextProvider>
//         <UserLucknow />
//       </UserContextProvider>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <main>
//       <UserCityChange />
//     </main>
//   );
// };

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


/*********************************************** custom hooks ***********************************************/


// It should start from use like other hooks and we can't use simple normal function bcoz in that we can't use 
// other hooks like useState 👑 useEffect 👑 useRef 🔥 useReducer 🔥 useContext ❤️. as for using custom hooks,
// we should use the use keyword first and then whatever the name we want we can use like useIncrement, useCounter.


//In this code we using custom hooks as we doing incremrent in App and ChildWithIncrement comp and decrement in App 
// as custom hooks will never return jsx bcoz the purpose of custom hooks is to work with logic
// (react hooks, function) not with UI as we can also say this or think like this that
// useCounter here which is a custom hook whereever be used whatever is in the body of useCounter function except
// return statement will be replaced by useCounter and useCounter is not a component but it will also re-render 
// when we will click on increment button it will go to the incremrent function above in front of useCounter() and from
// there it will call increment function written in useCounter function and from there setstate will change and updated
// and when the statea updated then function useCounter() will also re-render or we can say useCounter hook will be call again
// and again the values will be assigned(count), function formed(increment , decmrenet)inside useCounter function and at last it will retrun count 
// but this time count value will be 1. and that value will be go inside count of ChildWithIncrement comp.
// const { count, increment } = useCounter(); and that is what will be display in jsx return count and whenver 
// the useCounter (custom hook) will called again wherever the hook is used that comp will re-render bcoz as we said
// we can think useCounter() in comp. replaced by the function useCounter() and whenever we calls a function if 
// that function changes the state then whole comp re-renders.
// which means that within a custom hook whenever a state changes the entire hook is called again.


// import { useEffect, useReducer, useRef, useState, createContext, useContext } from "react";
// import UserContext, { UserContextProvider } from "./Context/UserContext";
  
  
//   function useCounter() {
//     const [count, setCount] = useState(0);
//     const increment = () => setCount((c) => c + 1);
//     const decrement = () => setCount((c) => c - 1);
  
//     return { count, increment, decrement };
//   }
  
//   const ChildWithIncrement = () => {
//     const { count, increment } = useCounter();       //when we use/call useCounter() function we want it to return count value and incremenet function here
//     /*
//     const [count, setCount] = useState(0);
//     const increment = () => setCount((c) => c + 1);
//     const decrement = () => setCount((c) => c - 1);
//     */
  
//     return (
//       <>
//         <h1> Counter : {count}</h1>
//         <button onClick={increment}>Increment</button>
//       </>
//     );
//   };
  
//   const App = () => {
//     const { count, increment, decrement } = useCounter();
//     // same code using in two different comp. so instead that we using custom hooks
    
//     // const [count, setCount] = useState(0);
//     // const increment = () => setCount((c) => c + 1);
//     // const decrement = () => setCount((c) => c - 1);
//     return (
//       <main>
//         <h1> Counter : {count}</h1>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//         <hr />
//         <ChildWithIncrement />
//       </main>
//     );
//   };
  
//   // Named Export
//   export { App };


//--------------------------------------------------------------------------------------------------------


// In this code we want the to start the count of ChildWithIncrement by 5 and in App by 0 and both increase by 1 
// and decrease by 1.


// import { useEffect, useReducer, useRef, useState, createContext, useContext } from "react";

// function useCounter(initialCount = 0) {                      //default value given 
//   // we can use like this also that if there is no initialCount then it will be 0 for that in function parameter there will be just initialCount but prefer way is to use default parameter
//   // const [count, setCount] = useState(initialCount || 0);
//   const [count, setCount] = useState(initialCount);
//   const increment = () => setCount((c) => c + 1);
//   const decrement = () => setCount((c) => c - 1);

//   return { count, increment, decrement };
// }

// const ChildWithIncrement = () => {
// const { count, increment } = useCounter(5);            //here count will be 5 coz we passing 5 as an argument

//   return (
//     <>
//       <h1> Counter : {count}</h1>
//       <button onClick={increment}>Increment</button>
//     </>
//   );
// };

// const App = () => {
//   const { count, increment, decrement } = useCounter();              //if we dont pass here anything then count will be undefined bcoz in function there is parameter and we r not giving any argument so as a solution,  we can give explicit value of 0 here in useCounter(0) or in useCounter function we gave the parameter a default value 0 
//   return (
//     <main>
//       <h1> Counter : {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <hr />
//       <ChildWithIncrement />
//     </main>
//   );
// };

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// In this code we want the to start the count of ChildWithIncrement by 5 and in App by 0 and also want the 
// ChildWithIncrement comp don't want it to be increment by 1 as want to increment by 5 as this code is fine but 
// in argument there is no calrity which one is intialCount and whihc one is step and as per standard whenever we 
// have 2 or more values its better to convert it as an object that we are doing in below code .


// import { useEffect, useReducer, useRef, useState, createContext, useContext } from "react";

// function useCounter(initialCount = 0, step = 1) {                      //default value given 
//   const [count, setCount] = useState(initialCount);
//   const increment = () => setCount((c) => c + step);
//   const decrement = () => setCount((c) => c - 1);

//   return { count, increment, decrement };
// }

// const ChildWithIncrement = () => {
// const { count, increment } = useCounter(5, 5);            //here count will be 5 coz we passing 5 as an argument

//   return (
//     <>
//       <h1> Counter : {count}</h1>
//       <button onClick={increment}>Increment</button>
//     </>
//   );
// };

// const App = () => {
//   const { count, increment, decrement } = useCounter();              //if we dont pass here anything then count will be undefined bcoz in function there is parameter and we r not giving any argument so as a solution,  we can give explicit value of 0 here in useCounter(0) or in useCounter function we gave the parameter a default value 0 
//   return (
//     <main>
//       <h1> Counter : {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <hr />
//       <ChildWithIncrement />
//     </main>
//   );
// };

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


//Same as above code as here we have 2 or more values its better to convert it as an object that we are doing 
// in this code.

// import { useEffect, useReducer, useRef, useState, createContext, useContext } from "react";

// function useCounter({initialCount = 0, step = 1}) {                      //default value given 
//   const [count, setCount] = useState(initialCount);
//   const increment = () => setCount((c) => c + step);
//   const decrement = () => setCount((c) => c - 1);

//   return { count, increment, decrement };
// }

// const ChildWithIncrement = () => {
// const { count, increment } = useCounter({initialCount: 5, step: 5});            //here count will be 5 coz we passing 5 as an argument

//   return (
//     <>
//       <h1> Counter : {count}</h1>
//       <button onClick={increment}>Increment</button>
//     </>
//   );
// };

// const App = () => {
//   const { count, increment, decrement } = useCounter({});              //if we dont pass here anything then count will be undefined bcoz in function there is parameter and we r not giving any argument so as a solution,  we can give explicit value of 0 here in useCounter(0) or in useCounter function we gave the parameter a default value 0 
//   return (
//     <main>
//       <h1> Counter : {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <hr />
//       <ChildWithIncrement />
//     </main>
//   );
// };

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


//Same as above code as here we have 2 or more values its better to convert it as an object and we also
// don't want to use step for increment it by 5 so we doing it in differet way i.e on click previosuly we 
// were passing incremernt only but now here we passing function in it with an argument and also in
//  useCounter function gave the parameter to increment function as it doing same thing but ways are
//  differnt we can choose anything 


// import { useEffect, useReducer, useRef, useState, createContext, useContext } from "react";

// function useCounter({initialCount = 0}) {                      //default value given 
//   const [count, setCount] = useState(initialCount);
//   const increment = (step) => setCount((c) => c + step);
//   const decrement = () => setCount((c) => c - 1);

//   return { count, increment, decrement };
// }

// const ChildWithIncrement = () => {
// const { count, increment } = useCounter({initialCount: 5});            //here count will be 5 coz we passing 5 as an argument

//   return (
//     <>
//       <h1> Counter : {count}</h1>
//       <button onClick={() => increment(5)}>Increment</button>
//     </>
//   );
// };

// const App = () => {
//   const { count, increment, decrement } = useCounter({});              //if we dont pass here anything then count will be undefined bcoz in function there is parameter and we r not giving any argument so as a solution,  we can give explicit value of 0 here in useCounter(0) or in useCounter function we gave the parameter a default value 0 
//   return (
//     <main>
//       <h1> Counter : {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <hr />
//       <ChildWithIncrement />
//     </main>
//   );
// };

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// In this code we created a custom hook i.e. useMount() and in that we used useEffect hook

// import { useEffect, useReducer, useRef, useState, createContext, useContext } from "react";

// function useMount(callback) {
//   useEffect(() => {
//     callback();
//   }, []);
// }

// const App = () => {
//   // useEffect(() => {
//   //   callback();
//   // }, []);

//   useMount(() => {
//     console.log("Ran on mount!");
//   });

//   return (
//     <main>
//       <h1>useOnMount</h1>
//     </main>
//   );
// };

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// In this code we using fetch api call by custom hook i.e useFetch as when we call useFetch we set the state
// and we run the useEffect and once we setData(data) then this useFetch will call again coz whenver state changing 
// with in a custom hook , the hook will re-run again and return the data and whenever the hook will re-run bcoz of
// state change the entire component in which it is called will re-render i.e. App comp. here 

//Comp re-render when state changes, prop chnages or whenever the parent will change and custom hook re-render/
// run again when state will change and if custom hook is with in/inside Comp then whenever the custom hook runs
// again the entire comp will also re-render.


// import { useEffect, useReducer, useRef, useState, createContext, useContext } from "react";

// function useFetch() {
//   const [data, setData] = useState(null);
  
//   useEffect(() => { 
  
//     (async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const data = await response.json();
//     setData(data);
//   })();

// }, []);

//  return { data };
// };


// const App = () => {
//   const { data } = useFetch();
  
//   return (
//   <main>
//       {/* using optional chaining operator (?) as if function called is undefined or null, it won't go further for prop. and won't throw any error */}
//     <h1>{data?.title}</h1>
//   </main>
// );
// };

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// Same as above code as here we want that url can be chnaged 

import { useEffect, useReducer, useRef, useState, createContext, useContext } from "react";
// import Loader from "./components/Loader/Loader";
import useFetch from "./hooks/useFetch";


const App = () => {
  const [count, setCount] = useState(1);
  const { data, loading } = useFetch(`https://jsonplaceholder.typicode.com/todos/${count}`);

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <h1>{data?.title}</h1>                 
      <button onClick={() => setCount((c) => c + 1)}>Fetch next title</button>
      <h1>ID : {count}</h1>
    </main>
  );
};

// Named Export
export { App };
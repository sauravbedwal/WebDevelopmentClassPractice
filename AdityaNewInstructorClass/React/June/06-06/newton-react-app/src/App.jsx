import "./App.css";
import UserContextProvider from "./context/UserContext";


/************************************ createContext function and useContext *********************************/


// In this code we learnng abt prop drilling as we can see comp A and B dont need the props bcoz they r not using it 
// as they just forwarding the props to the comp C as they are intermiddiatry/middle man


// import { useEffect, useReducer, useRef, useState } from "react";

// const ComponentC = ({ userName }) => {                         //destructure username
//   return <h3>Component C : {userName}</h3>;
// };

// const ComponentB = (props) => {
//   return (
//     <div>
//       <h3>Component B</h3>
//       {/* <ComponentC userName="Oscar Isaac" /> */}
//       <ComponentC {...props} />
//     </div>
//   );
// };

// const ComponentA = (props) => {
//    // const { userName } = props;                      //can also destrucuture like this (comp A and C same thing but different method of destructuring)
//   // props -> { userName: 'Oscar Isaac' }

//   return (
//     <div>
//       <h3>Component A</h3>
//       {/* <ComponentB userName="Oscar Isaac" /> */}                 
//       {/* spreading the prop below it is a same thing we doing in above line */}
//       <ComponentB {...props} />
//     </div>
//   );
// };

// const App = () => {
//   const userName = "Oscar Isaac";
//   return (
//     <main>
//       <ComponentA userName={userName} />
//     </main>
//   );
// };

// // Named Export
// export { App };


//----------------------------------------------------------------------------------------------------------


// In this code we learnig abt createContext function and useContext hook as it helps us from avoiding prop
// drilling as we can provide the values only the places where we want and use them as there will be no 
// middleMan/intermediate. 


// import { useReducer, useRef, useEffect, useState, createContext, useContext } from "react";

//     // useContext ❤️
  
//   const ComponentC = () => {
//     const userName = useContext(UserNameContext);
//     return <h3>Component C : {userName} </h3>;
//   };
  
//   const ComponentB = () => {
//     const userName = useContext(UserNameContext);
//     return (
//       <div>
//         <h3>Component B : {userName}</h3>
//         {/* <ComponentC userName="Oscar Isaac" /> */}
//         <ComponentC />
//       </div>
//     );
//   };
  
//   const ComponentA = () => {
//     // props -> { userName: 'Oscar Isaac' }
  
//     return (
//       <div>
//         <h3>Component A </h3>
//         {/* <ComponentB userName="Oscar Isaac" /> */}
//         <ComponentB />
//       </div>
//     );
//   };
  
//   /**
//    * Context
//    * Problem : Prop drilling
//    *
//    * Two important concepts :
//    * 1. Provide a value ✅
//    * 2. Consume a value ✅
//    */
  
//   /** createContext returns a Context Object */
//   /** Make sure to name it in PascalCase */
//   const UserNameContext = createContext();
  
//   //UserNameContext is an object which contains a property called provider.
//   // UserNameContext.Provider -> A React Component
  
//   const App = () => {
//     /** Context value */
//     const userName = "Oscar Isaac";
//     return (                                        //whatever comp. comes in b/w the <UserNameContext.provider> tag will belong to this provider means whatever value(name of the prop has to be value only here) is provided by the provider will be avaiable for all the inner comp. and each of the comp. within the provider called as context consumers.
//       <main>
//         <UserNameContext.Provider value={userName}>            
//           <ComponentA />
//         </UserNameContext.Provider>
//       </main>
//     );
//   };
  
//   // Named Export
//   export { App };


//----------------------------------------------------------------------------------------------------------


// Same as above code as here we learned that we can pass anything in the value like string, no. noolean, array,
//  or an object and here we passed an object.

// import { useEffect, useReducer, useRef, useState, createContext, useContext } from "react";
  
//   const ComponentC = () => {
//     const user = useContext(UserNameContext);                  //didn't destructured userName
//     return <h3>Component C : {user.userName} </h3>;
//   };
  
//   const ComponentB = () => {
//     const { userName } = useContext(UserNameContext);         //destructured userName
//     return (
//       <div>
//         <h3>Component B : {userName}</h3>
//         {/* <ComponentC userName="Oscar Isaac" /> */}
//         <ComponentC />
//       </div>
//     );
//   };
  
//   const ComponentA = () => {
//     // props -> { userName: 'Oscar Isaac' }
  
//     return (
//       <div>
//         <h3>Component A </h3>
//         {/* <ComponentB userName="Oscar Isaac" /> */}
//         <ComponentB />
//       </div>
//     );
//   };
  
//   /**
//    * Context
//    * Problem : Prop drilling
//    *
//    * Two important concepts :
//    * 1. Provide a value ✅
//    * 2. Consume a value ✅
//    */
  
//   /** createContext returns a Context Object */
//   /** Make sure to name it in PascalCase */
//   const UserNameContext = createContext();
  
//   // UserNameContext.Provider -> A React Component
  
//   const App = () => {
//     /** Context value */
//     const userName = "Oscar Isaac";
//     return (
//       <main>
//         <UserNameContext.Provider value={{ userName: "Aditya" }}>
//           <ComponentA />
//         </UserNameContext.Provider>
//       </main>
//     );
//   };
  
//   // Named Export
//   export { App };


//-----------------------------------------------------------------------------------------------------------


// In this code we used useState with useContext and createContext as here by clicking bith the buttons count will 
// increase.


// import { useEffect, useReducer, useRef, useState, createContext, useContext } from "react";
  
//   const ComponentC = () => {
//     const { setCount } = useContext(UserNameContext);                 //destructured setCount
//     return (
//       <div style={{ border: "1px solid #40128B", padding: "1rem" }}>
//         <h3>Component C </h3>
//         <button onClick={() => setCount((c) => c + 1)}>Increment</button>
//       </div>
//     );
//   };
  
  
//   const ComponentB = () => {
//     return (
//       <div>
//         <h3>Component B</h3>
//         <ComponentC />
//       </div>
//     );
//   };
  

//   const ComponentA = () => {
  
//     return (
//       <div>
//         <h3>Component A </h3>
//         <ComponentB />
//       </div>
//     );
//   };
  
//   const UserNameContext = createContext();
  
//   // UserNameContext.Provider -> A React Component
  
//   const App = () => {
//     /** Context value */
//     const userName = "Oscar Isaac";
//     const [count, setCount] = useState(0);
//     return (
//       <main>
//         <div style={{ border: "1px solid #40128B", padding: "1rem", marginTop: "1rem" }}>
//           <h3>App Count : {count} </h3>
//           <button onClick={() => setCount((c) => c + 1)}>Increment</button>
//         </div>
//         {/* //that is {setcount: setcount} in value same key and value so we can use lik this also */}
//         <UserNameContext.Provider value={{ setCount }}> 
//           <ComponentA />
//         </UserNameContext.Provider>
//       </main>
//     );
//   };
  
//   // Named Export
//   export { App };


//----------------------------------------------------------------------------------------------------------


// Same as above code as here we have two buttons in comp C increment and decrement and both change the state value
// and also we passed multiple value in provider i.e. setCount and userName and using setCount in comp C and 
// userName only in comp B as bcoz of provider its avaiable for A, B and C and its now our choice where we
//  want to use the value but here we directly sending setCount i.e asetStae function direclty as a value and 
// thats not preferable so we won't do this instead follow then below code.

// import { useEffect, useReducer, useRef, useState, createContext, useContext } from "react";
  
//   const ComponentC = () => {
//     const { setCount } = useContext(UserNameContext);
//     return (
//       <div style={{ border: "1px solid #40128B", padding: "1rem" }}>
//         <h3>Component C </h3>
//         <button onClick={() => setCount((c) => c + 1)}>Increment</button>
//         <button  onClick={() => setCount((c) => c - 1)}>Decrement</button>
//       </div>
//     );
//   };
  
//   const ComponentB = () => {
//     const { userName } = useContext(UserNameContext);
//     return (
//       <div>
//         <h3>Component B : {userName} </h3>
//         <ComponentC />
//       </div>
//     );
//   };
  
//   const ComponentA = () => {

//     return (
//       <div>
//         <h3>Component A </h3>
//         <ComponentB />
//       </div>
//     );
//   };
  
  
//   const UserNameContext = createContext();
  
//   // UserNameContext.Provider -> A React Component
  
//   const App = () => {
//     /** Context value */
//     const userName = "Oscar Isaac";
//     const [count, setCount] = useState(0);
  
//     const increment = () => {
//       setCount((c) => c + 1);
//     };
  
//     const decrement = () => {
//       setCount((c) => c - 1);
//     };
  
//     return (
//       <main>
//         <div style={{ border: "1px solid #40128B", padding: "1rem", marginTop: "1rem" }}>
//           <h3>App Count : {count} </h3>
//           <button onClick={() => setCount((c) => c + 1)}>Increment</button>
//         </div>
//         <UserNameContext.Provider value={{ setCount, userName }}>
//           <ComponentA />
//         </UserNameContext.Provider>
//       </main>
//     );
//   };
  
//   // Named Export
//   export { App };
  
//-----------------------------------------------------------------------------------------------------------


// Same as above code as here we are not passing setState function(setCount) direclty as a value we have two 
// buttons in comp C increment and decrement and both change the state value and also we passed multiple value in
// provider i.e. increment, decrement and userName and using increment and decrement in comp C and userName only
// in comp B as bcoz of provider its avaiable for A, B and C and its now our choice where we want to use the value 

// import { useEffect, useReducer, useRef, useState, createContext, useContext } from "react";
  
//   const ComponentC = () => {
//     const { increment, decrement } = useContext(UserNameContext);
//     return (
//       <div style={{ border: "1px solid #40128B", padding: "1rem" }}>
//         <h3>Component C </h3>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//       </div>
//     );
//   };
  
//   const ComponentB = () => {
//     const { userName } = useContext(UserNameContext);
//     return (
//       <div>
//         <h3>Component B : {userName} </h3>
//         <ComponentC />
//       </div>
//     );
//   };
  
//   const ComponentA = () => {

//     return (
//       <div>
//         <h3>Component A </h3>
//         <ComponentB />
//       </div>
//     );
//   };
  
  
//   const UserNameContext = createContext();
  
//   // UserNameContext.Provider -> A React Component
  
//   const App = () => {
//     /** Context value */
//     const userName = "Oscar Isaac";
//     const [count, setCount] = useState(0);
  
//     const increment = () => {
//       setCount((c) => c + 1);
//     };
  
//     const decrement = () => {
//       setCount((c) => c - 1);
//     };
  
//     return (
//       <main>
//         <div style={{ border: "1px solid #40128B", padding: "1rem", marginTop: "1rem" }}>
//           <h3>App Count : {count} </h3>
//           <button onClick={() => setCount((c) => c + 1)}>Increment</button>
//         </div>
//         <UserNameContext.Provider value={{ increment, decrement, userName }}>
//           <ComponentA />
//         </UserNameContext.Provider>
//       </main>
//     );
//   };
  
//   // Named Export
//   export { App };
  

//-----------------------------------------------------------------------------------------------------------


// in this code we using array in value if we use array and pass value and some function in an arary i.e. count and increment here so 
// we can basically amke it look like useState even though this setCount here in comp C is not useState 
// setCount it is increment function but we cna look like it like useState. we can use array when we want to 
// pass two values like this case otherwise use object.

// import { useEffect, useReducer, useRef, useState, createContext, useContext } from "react";
  
//   const ComponentC = () => {
//     const [count, setCount] = useContext(UserNameContext);
//     return (
//       <div style={{ border: "1px solid #40128B", padding: "1rem" }}>
//         <h3>Component C : {count} </h3>
//         <button onClick={setCount}>Increment</button>
//       </div>
//     );
//   };
  
//   const ComponentB = () => {
//     const { userName } = useContext(UserNameContext);
//     return (
//       <div>
//         <h3>Component B : {userName} </h3>
//         <ComponentC />
//       </div>
//     );
//   };
  
//   const ComponentA = () => {
  
//     return (
//       <div>
//         <h3>Component A </h3>
//         <ComponentB />
//       </div>
//     );
//   };
  
//   const UserNameContext = createContext();
  
//   const App = () => {
//     /** Context value */
//     const userName = "Oscar Isaac";
//     const [count, setCount] = useState(0);
  
//     const increment = () => {
//       setCount((c) => c + 1);
//     };
  
//     return (
//       <main>
//         <div style={{ border: "1px solid #40128B", padding: "1rem", marginTop: "1rem" }}>
//           <h3>App Count : {count} </h3>
//           <button onClick={() => setCount((c) => c + 1)}>Increment</button>
//         </div>
//         <UserNameContext.Provider value={[count, increment]}>
//           <ComponentA />
//         </UserNameContext.Provider>
//       </main>
//     );
//   };
  
//   // Named Export
//   export { App };


//----------------------------------------------------------------------------------------------------------


// 8
// In this code we using UserContextProvider (custom comp) and enlcosing evrything in b/w and 
// whatever comes in b/w UserContextProvider will be the children and in UserContextProvider (custom comp)
// we returning Children in b/w UserContext.Provider (react comp) and whatever comes in b/w UserContext.Provider
// will get the value. and benifit of doing it by this is tha whatever logic we want to write fro our Context 
// provider will be written in UserContextProvider comp and in the sperate file and we cna simply use it.


// import { useEffect, useReducer, useRef, useState, createContext, useContext } from "react";
// import UserContextProvider from "./context/UserContext";
  
//   const UserLucknow = () => {
//     return (
//         <div>
//             <h3>Lucknow</h3>
//         </div>  
//     );
//   };
  
//   const App = () => {
//     return (
//       <main>
//         <UserContextProvider>
//             <UserLucknow />
//         </UserContextProvider>
//       </main>
//     );
//   };
  
//   // Named Export
//   export { App };
  

//-----------------------------------------------------------------------------------------------------------


// 9
// In this code we importing UserContext from UserContext file which is an object return by createContext 
// function and by using that we assigning the value to the comp same as we doing in previous code here just we 
// didnt created the createContext function in this file  

// import { useEffect, useReducer, useRef, useState, createContext, useContext } from "react";
// import UserContext from "./context/UserContext";
  
//   const UserMumbai = () => {
//     const setUser = useContext(UserContext);
//     return (
//       <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
//         <h3>Mumbai</h3>
//         <button onClick={() => setUser({ city: "Mumbai" })}>
//           Update from Mumbai
//         </button>
//       </div>
//     );
//   };
  
//   const UserBangalore = () => {
//     const setUser = useContext(UserContext);
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
//     const setUser = useContext(UserContext);
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
  
//   const App = () => {
//     const [user, setUser] = useState({ city: "Hyderabad" });
//     return (
//       <main style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
//         <h1>{user.city}</h1>
//         <UserContext.Provider value={setUser}>
//           <UserLucknow />
//         </UserContext.Provider>
//         <button onClick={() => setUser({ city: "Hyderabad" })}>Reset</button>
//       </main>
//     );
//   };
  
//   // Named Export
//   export { App };
  

//-----------------------------------------------------------------------------------------------------------

// INCOMPLETE CODE as class over and said do it tomoroow

import { useEffect, useReducer, useRef, useState, createContext, useContext } from "react";
import UserContext from "./context/UserContext";

const UserMumbai = () => {
    const setUser = useContext(UserContext);
    return (
      <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
        <h3>Mumbai</h3>
        <button onClick={() => setUser({ city: "Mumbai" })}>
          Update from Mumbai
        </button>
      </div>
    );
  };
  
  const UserBangalore = () => {
    const setUser = useContext(UserContext);
    return (
      <>
        <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
          <h3>Bangalore</h3>
          <button onClick={() => setUser({ city: "Bangalore" })}>
            Update from Bangalore
          </button>
        </div>
        <UserMumbai />
      </>
    );
  };
  
  const UserLucknow = () => {
    const setUser = useContext(UserContext);
    return (
      <>
        <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
          <h3>Lucknow</h3>
          <button onClick={() => setUser({ city: "Lucknow" })}>
            Update from Lucknow
          </button>
        </div>
        <UserBangalore />
      </>
    );
  };
  
  const UserCityChange = () => {
    const [user, setUser] = useState({ city: "Hyderabad" });
  
    return (
      <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
        <h1>{user.city}</h1>
        <UserContext.Provider value={setUser}>
          <UserLucknow />
        </UserContext.Provider>
        <button onClick={() => setUser({ city: "Hyderabad" })}>Reset</button>
      </div>
    );
  };
  
  const App = () => {
    return (
      <main>
        <UserCityChange />
      </main>
    );
  };
  
  // Named Export
  export { App };
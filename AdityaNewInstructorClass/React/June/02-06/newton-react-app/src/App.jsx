import "./App.css";

/************************************************ useReducer *********************************************** */


// useReducer is the alternative to useState means its also use to manage state.
// as useState is very common and useReducer used much more less than useState

// useState - 300 times
// useReducer - 3 to 10 time maximum

// use case of useReducer is when uh want to update multiple states based on a single action like certain event or 
// action happens and uh want to change multiple states bcoz of that one specific action. ex- Api. 


// IN this code we doing it simply by useState thta we learned in previous class as here we can see that if we have 
// success action means response.ok is true then we changing 3 different states i.e. setUsers, setLoading and 
// setError by one action as one action triggering 3 difernet states which are related to each other as here data
// is deciding the state value of other two states as each of them is dependent on the other and when we have a
// situation like this then we should use useReducer. As we can use useReducer wherever we use useState and the 
// opposite.  


// import { useEffect, useReducer, useState } from "react";

// const App = () => {
//   const [users, setUsers] = useState();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     (async () => {
//       setLoading(true);
//       try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
      
//         if(!response.ok) {
//           throw new Error(`API failure : ${response.status}`);
//         }
        
//         const data = await response.json();
//         setUsers(data);
//         setError("");
//       } catch(e) {
//         const errorMessage = e.message;
//         setError(errorMessage);
//       } finally {
//         setLoading(false);
//       }
      
//     })();
//   }, []);

//   if(loading){
//     return <Loader />
//   }

//   if(error){
//     return <h3>{error}</h3>
//   }

//   return <main>
//     {users.map((user) => {
//     <h3>{user.name}</h3>
//     })}
//   </main>
// };

// export { App };


//--------------------------------------------------------------------------------------------------------


// when we click on incremement button we dispatch an action and action is nothing but a simple object 
// {type: "INCREMENT"}(as name can be anyhting like a letter, normally word or in caps but standrad is
//  using a word in caps) and have a property called as type property which will us what kind of action it is which 
// will be sent to the function and funciton will also have a current state of it {count: 0 } and based on the action it will
// update the current state and return a newState {count: 1} (that is done by reducer) and this new state is what we will show on the UI.
// we create type property in action object bcoz if there are two buttons i.e. decrement and increment then both 
// will have acton object then how react will differentiate b/w them which action is of whom so type will help in this
// as based on the action reducer modifies the state.  
//reducer and app has to be pure function means if the state and action is the same and we keep calling reducer 
// with the same state and action it will always returns us the same state again and again 


// import { useEffect, useReducer, useState } from "react";

// // useState 👑
// // useEffect 👑

// // useReducer

// const INITIAL_STATE = {
//   count: 0,
// };

// const reducer = (state, action) => {
//   // state  -> { count: 0 }                            //intial state value
//   // action -> { type: "INCREMENT" }
//   if (action.type === "INCREMENT") {
//     // DON'T DO THIS!! React requires a new reference!!
//     // return state.count = state.count + 1

//     // By returning a new state, the component re-renders
//     const newState = { count: state.count + 1 };
//     return newState;
//   }

//   return state;
// };


// const App = () => {
//   const [state, dispatch] = useReducer(reducer, INITIAL_STATE);                  //whatever the value of INITIAL_STATE (obj) that will be the vale of state here in the 1st render.
//   // state       -> { count: 0 }            //entire object 
//   // state.count -> 0                       //smae thing like INITIAL_STATE.count

//   const increment = () => {
//     // Event occured!
//     // STEP 1 - Create an Action object
//     const action = { type: "INCREMENT" };

//     // STEP 2 - Dispatch the created Action object
//     // dispatch sends the action object to the reducer
//     dispatch(action);
//   };

//   return (
//     <main>
//       <h3>Count : {state.count}</h3>
//       <button onClick={increment}>Increment</button>
//     </main>
//   );
// };

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// same as above code as here we have multiple actions i.e. INCREMENT and DECREMENT

// import { useEffect, useReducer, useState } from "react";
// const INITIAL_STATE = {
//   count: 0,
// };

// const reducer = (state, action) => {
//   // // state  -> { count: 0 }
//   // // action -> { type: "DECREMENT" }

//   // //by using if else
//   // if (action.type === "INCREMENT") {
//   //   // DON'T DO THIS!! React requires a new reference!!
//   //   // return state.count = state.count + 1

//   //   // By returning a new state, the component re-renders
//   //   const newState = { count: state.count + 1 };
//   //   return newState;
//   // }

//   // if (action.type === "DECREMENT") {
//   //   const newState = { count: state.count - 1 };
//   //   return newState;
//   // }
//   // return state;

//   // by switch case(mostly used)
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + 1 };
//     case "DECREMENT":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
//   // state       -> { count: 0 }
//   // state.count -> 0

//   const increment = () => {
//     // STEP 1 - Create an Action object
//     const action = { type: "INCREMENT" };

//     // STEP 2 - Dispatch the created Action object
//     // dispatch sends the action object to the reducer
//     dispatch(action);
//   };

//   const decrement = () => {
//     const action = { type: "DECREMENT" };
//     dispatch(action);
//   };

//   return (
//     <main>
//       <h3>Count : {state.count}</h3>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </main>
//   );
// };

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// In this code we doing it by useReducer as the first code of this file was done by useState and this is the same
// code/use case that we doing by useReducer

import { useEffect, useReducer, useState } from "react";
import Loader from "./components/Loader/Loader";

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: "", users: [] };
    case "SUCCESS":
      return { loading: false, error: "", users: action.payload };
    case "ERROR":
      return { loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    (async () => {
      dispatch({ type: "LOADING" });
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/userssssss"
        );

        if (!response.ok) {
          throw new Error(`API failure : ${response.status}`);
          // { message: `API failure : ${response.status}` }
        }

        const data = await response.json();
        dispatch({ type: "SUCCESS", payload: data });
      } catch (e) {
        dispatch({ type: "ERROR", payload: e.message });
      }
    })();
  }, []);

  if (state.loading) {
    return <Loader />;
  }

  if (state.error) {
    return <h3>{state.error}</h3>;
  }

  return (
    <main>
      {state.users.map((user) => (
        <h3>{user.name}</h3>
      ))}
    </main>
  );
};

// Named Export
export { App };
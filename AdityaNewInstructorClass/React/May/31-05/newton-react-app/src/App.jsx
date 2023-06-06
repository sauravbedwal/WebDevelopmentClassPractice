import "./App.css";


// In this code we saw in previous class that we tried to do it by object but it will not work as the setState
//  will not be applied properly here as if we have multiple set State calls and all of them changing the same 
//  state then whatever we have at the end will only apply once BUT here we did that by using callback in
// set State bcoz here the new State depends on the previous state (and wherever we got a situation where new state
//   depends on the previous state) there we use a callback   

// This code won't work correctly

// import { useEffect, useState } from "react";
// import Loader from "./components/Loader/Loader";


// const App = () => {
//   const [state, setState] = useState({
//     loading: false,
//     users: [],
//     error: "",
//   });

//   useEffect(() => {
//     (async () => {
//       // setLoading(true); // loading start
//       setState({ ...state, loading: true });
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );

//         /** Error making the API call */
//         if (!response.ok) {
//           throw new Error(`API failed status : ${response.status}`);
//           // { message: `API failed status : ${response.status}` }
//         }

//         const data = await response.json();
//         // setUsers(data);
//         // setState({ ...state, users: data });
//         setState((prevState) => {
//           return { ...prevState, users: data };
//         });
//       } catch (e) {
//         // { message: `API failed status : ${response.status}` }
//         // setError(e.message);
//         // setState({ ...state, error: e.message });
//         setState((prevState) => {
//           return { ...prevState, error: e.message };
//         });
//       } finally {
//         // setLoading(false);
//         // setState({ ...state, loading: false });
//         setState((prevState) => {
//           return { ...prevState, loading: false };
//         });
//       }
//     })();

//     // State Updates Batching
//     // setState({ ...state, users: data });
//     // setState({ ...state, loading: false });
//   }, []);

//   console.log(state);

//   if (state.loading) {
//     return <Loader />;
//   }

//   if (state.error) {
//     return (
//       <div>
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/5804/5804966.png"
//           height={150}
//         />
//         <h2 className="error">{error}</h2>
//       </div>
//     );
//   }

//   if (state.users.length === 0) {
//     return <h2>No users in the system!</h2>;
//   }

//   return (
//     <main>
//       {state.users.map((user) => (
//         <h3>{user.name}</h3>
//       ))}
//     </main>
//   );
// };

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


// In this code we using callback in set state bcoz it depends on previous state as here we have value and 
// count which changes when we click on toggle and incremrent button as we can say whenver we have counter 
// or anything which deends on previous value we should use setCount((prevState) => prevState + 1);

// import { useEffect, useState } from "react";

// const App = () => {
//   const [value, setValue] = useState(true);
//   const [count, setCount] = useState(0);

//   /*Its a same thing in toggle and incremenet just the syntax is different as in incremenet we removed return
//   keyword and {}  */

//   const toggle = () => {
//     setValue((prevState) => {
//       return !prevState;
//     });
//   };

//   const increment = () => {
//       // setCount(count + 1);               //we can write like this also but as the new state depends in the previous state so we using callback function here
//     setCount((prevState) => prevState + 1);
//   };

//   return (
//     <main>
//       <h3>{value ? "on" : "off"}</h3>
//       <button onClick={toggle}>Toggle</button>
//       <hr />
//       <h3>Count : {count}</h3>
//       <button onClick={increment}>Increment</button>
//     </main>
//   );
// };

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


// In this code we making an Api call on a click of a button as we can make an api call either within a 
// useEffect or in event (event can be anything onClikc, onChnage, onBlur etc) and if we want to show the data
// or anhything on UI we have to do re-render as without that we cant do that and one way to re-render the Comp.
// is using state 

// import { useEffect, useState } from "react";

// const App = () => {
//   const [todo, setTodo] = useState({});                           //we cna use null also instead of emoty object but preferred using object

//   /** Whenever you're writing any API logic, make sure you add :
//    * 1. Error Handling (try / catch)
//    * 2. Loading indicator
//    */
//   const getTodo = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const data = await response.json();
//     setTodo(data);
//   };

//   return (
//     <main>
//       <h3>{todo.title && todo.title}</h3>
//       <button onClick={getTodo}>Fetch and show Todo</button>
//     </main>
//   );
// };

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


// ANother example of caling an api as here we calling it in child component  
// in useEffect we can crate a normal async fucntion also and call it or can create IIFE also but as we want to call
// it only at once so we used IIFE as when we creating a variable or state and we want to mention explicitly that it doesnt 
// contain any value then we can use null or empty [], {} but some people also use undefined but in b/w null and undefined
// we should use null bcoz null is something that we explicitley giving to a variable to explain taht it doenst contain any value 
// but undefined js also returns undefined under some cindition like whenn we create a fucntion which returns nothing 
// function sum () {}; calling sum(); or const array[] = [1] and calling array[100]; then in these cases it will return
// undefined which means undefined have a menaing here so that why we prefer to use null over undefined as its not
// a rule we can use undefiend also but best practicve is using null over undefined 


// import { Component, useEffect, useState } from "react";

// const Todo = ({ id }) => {
//   // id -> 2
//   const [todo, setTodo] = useState({});                       //we can use null also instead of empty object {} 
//   // todo -> {}

//   useEffect(() => {
//     (async () => {                                                                   //async function getTodo () {await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);} getTodo();
//       /** Not recommended. But wanted to show it's possible to write fetch
//        * in one line. 😎
//        */
//       // const data = await (
//       //   await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//       // ).json();
//       // console.log(data);

//       const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
//       const data = await response.json();
//       setTodo(data);
//     })();
//   }, [id]); // 1 --> 2 CHANGED!

//   return <h3>{todo.title}</h3>;                  //but if we use null then we have to check it like <h3>{todo && todo.title}</h3>; or use optional chain <h3>{todo?.title}</h3>;  
// };

// const App = () => {
//   const [id, setId] = useState(1);
//   // id -> 1

//   const showNextTodo = () => {
//     setId((prevId) => prevId + 1);
//   };

//   return (
//     <main>
//       <Todo id={id} />
//       <button onClick={showNextTodo}>Show next todo</button>
//     </main>
//   );
// };

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


// In this code we havng useState in App comp but we changing the set state from Child comp and it re-render 
// and increase the count value

// import { useEffect, useState } from "react";

// const Child = ({ number, changeNumber }) => {
//   return (
//     <>
//       <h3>Child : {number}</h3>
//       <button onClick= {() => changeNumber((prevCount) => prevCount + 1)}>Increment</button>
//     </>
//   );
// };

// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <main>
//       <Child number={count} changeNumber={setCount} />
  //     </main>
//   );
// };

// // Named Export
// export { App };


// doubt as we doing changeNumber whihc setCOUNT IN child then child need to re-render again why App 
// re-rendering  is this because set Count means usetate n app comp


//---------------------------------------------------------------------------------------------------------


// same as above code as here we hidding the logic to update the number is from child comp so we created a 
// function updateNumber in App comp and previously in aboce code we passed the actual fucntion to the child
//  compoenet but here we just calling the changeNumber whihc is actuallly updateNumber


// import { useEffect, useState } from "react";

// const Child = ({ number, changeNumber }) => {
//   return (
//     <>
//       <h3>Child : {number}</h3>
//       <button onClick={changeNumber}>Increment</button>
//     </>
//   );
// };

// const App = () => {
//   const [count, setCount] = useState(0);

//   const updateNumber = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   return (
//     <main>
//       <Child number={count} changeNumber={updateNumber} />
//     </main>
//   );
// };

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


// In this code we learning abt lifting the state up concept 

import { useEffect, useState } from "react";

const ChildOne = ({ count, updateCount }) => {
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={updateCount}>Increment</button>
    </div>
  );
};

const ChildTwo = ({ count }) => {
  return (
    <div>
      <h3>Count is {count}</h3>
      <h1>🎉</h1>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <main>
      <section>
        <ChildOne count={count} updateCount={updateCount} />
        <ChildTwo count={count} />
      </section>
    </main>
  );
};

// Named Export
export { App };
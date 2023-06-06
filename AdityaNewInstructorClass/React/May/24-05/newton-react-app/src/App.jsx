import "./App.css";

//****************************************** useEffect introduction **************************************** 


//In this code we understood that as there is no porps in Child component but still it will re-render if App
// component re-renders again and again bcoz it doesnt matter that it is there in child component if parent
// component re-renders then child component will also re-render. 

// import { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   return <Child />
// };

// // Named Export
// export { App };


//------------------------------------------------------------------------------------------------------------


// In this code we usnderstadning abt another hook like useState which is useEffect as they both are very import.
// react hooks as the main duty of react component is whatever jsx is return from the component that need to add
// in actual DOM (adds into UI) and those things which are not directly related to actually adding things to DOM
// are called Side-Effect ex. changing the title of page thats possible but thats not main resposnibility of react.
//as except returning of jsx whatever react does can be count as side-effect. as if there are things which are not
// directly related to rendering stuff on UI those things are called Side-Effect. and we can handle all these 
// effects inside of a react hook is called useEffect as if we want to use any effect in react component use that
// with in this react hook.

// import { useState } from "react";

// // useState ✅
// // useEffect

// // Side-Effect
// // 1. Changing title of the page
// // 2. Make API calls
// // 3. Timer and Intervals


// const App = () => {
//   return (
//     <main>
//       <h1>Hello, World</h1>
//     </main>
//   );
// };

// //Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// In this code we understanding that first rule that every hook in react must start with use keyword and 
// secondly hook is always going to be a function and no need to store useEffect in any variable as it does
//not returns anything like useState do return an array and the useEffect here will run after every render as
// here we had only one render but if we re-render it then every single time after the rendering is done then 
// react will basically come and run useEffect means  every single time we re-rendering the component, the 
// useEffect will run every single time as react will store this function in its memoery and not call it immediately 
// and after the render this useEffect will be called  as useEffect always run after a function.   like here 
// it renders at first and after render it console it but if we click on increment then setCount will be triggered 
// and the App() will re-render then there it will apply line by line and useEffect will be store in  memory of 
// react then it will replace the Count 0 with 1 and add this to the UI(browser) and after this render is done
// then t will come back to useEffect and run the useEffect nad console it. useEffect will run after the render 
// neither before render nor during the render 

// import { useEffect, useState } from "react";

// // useState ✅
// // useEffect

// // Side-Effect
// // 1. Changing title of the page
// // 2. Make API calls
// // 3. Timer and Intervals


// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() =>{
//     console.log("When will I run?");
//   });

//   return (
//     <main>
//       <h1>Count : {count}</h1>
//       <button onClick={() => { setCount(count + 1)}}>Increment</button>
//     </main>
//   );
// };

// //Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// Same as above code as here we want the useEffect to render only after the first render once and never again
// and we can do this by the second argument in useEffect i.e. array of dependecies.
// in useEffect first argument which is a fucntion ismandatory but second argument is optional
// as here we gave empty array no values in it  so it wll run only after the first render but never again

// import { useEffect, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() =>{
//     console.log("I will run only AFTER the first render");
//   }, []);
// //array of dependencies

//   return (
//     <main>
//       <h1>Count : {count}</h1>
//       <button onClick={() => { setCount(count + 1)}}>Increment</button>
//     </main>
//   );
// };

// //Named Export
// export { App };

//--------------------------------------------------------------------------------------------------------


// Same as above Code but here in second argument i.e. array of dependecies we have a value i.e. anotherCount
// which is another useState and whether the second argument is empty or have a value it doesnt matter what the
// second argument is as useEffect will definitely run on the first render forsure but after the first render
// whether or not it will run that will depened on the second argument's value as useEffect ran on the first 
// render now useEffect will not run again unless the anotherCount value changes bcoz it is array of dependencies    
// means useEffect run after the first render then if we click on count increment count will increase but useEffect
// will not render but once we click on anotherCount increment App() will re-render and apply each line then it
// check in useEffect value onf anotherCount and as now value changes from 0 to 10 then it will move on and render(print) 
// the same in UI and then useEffect will run (after the current render)

// import { useEffect, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const  [anotherCount, setAnotherCount] = useState(0);

//   useEffect(() =>{
//     console.log("useEffect ran!");
//   }, [anotherCount]); //0 -> 10  changed!!!
// //array of dependencies

//   return (
//     <main>
//       <h1>Count : {count}</h1>
//       <button onClick={() => { setCount(count + 1)}}>Increment</button>
//       <hr />
//       <h1>Another Count : {anotherCount}</h1>
//       <button onClick={() => { setAnotherCount(anotherCount + 10)}}>Increment</button>
//     </main>
//   );
// };

// //Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// Same as above code as on the first render user is empty string and then after render useEffect will run in which
// we run setUser menas in first render on UI only Count and Another count rendered bcoz string is empty and 
// then when useEffect ran then setUser rendered    

// import { useEffect, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const  [anotherCount, setAnotherCount] = useState(0);

//   const [user, setUser] = useState("");

//   useEffect(() => {
//     setUser("Dwayne Johnson");
//   }, []);

//   return (
//     <main>
//       <h1>Count : {count}</h1>
//       <button onClick={() => { setCount(count + 1)}}>Increment</button>
//       <hr />
//       <h1>Another Count : {anotherCount}</h1>
//       <button onClick={() => { setAnotherCount(anotherCount + 10)}}>Increment</button>
//       <hr />
//       {user && <h1>Hello, {user}</h1>}
//     </main>
//   );
// };

// //Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// In this code we learning about mounting, upgrade and unmounting of Component as mounting is when renders for
// the first time and unmounting is as we gave an conditional render for child now if count is 1 it will remove
// the child from DOM and the process of a Component being removed from the DOM is valled unmounting and 
// upgrade is in the mounting phase App() and child () got rendered as its rendering for the first time now when
// we click on anotherCount it becomes 10 then child component also re-render bcoz when parent() re-render then 
// child() also re-render so when we changed anotherCount 0 to 10 then the App() and Child() both are in
// update phase and when again count becomes 2 App() will re-render and Child will come in mounting state 
// coz it was not there and it render for the first time all over again. 

// import { useEffect, useState } from "react";

// const Child = () => {
//   return <h1>child</h1>;
// };

// const App = () => {
//   const [count, setCount] = useState(0);
//   const  [anotherCount, setAnotherCount] = useState(0);

//   return (
//     <main>
//       <h1>Count : {count}</h1>
//       <button onClick={() => { setCount(count + 1)}}>Increment</button>
//       <hr />
//       <h1>Another Count : {anotherCount}</h1>
//       <button onClick={() => { setAnotherCount(anotherCount + 10)}}>Increment</button>
//       <hr />
//       {/* conditionaly rendering */}
//       {count % 2 === 0 && <Child />}
//     </main>
//   );
// };

// //Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// In this code we understanding that first useEffect of Child() will run and then useEffect of App()  

// import { useEffect, useState } from "react";


// const Child = () => {
//   useEffect(() => {
//     console.log("Child component useEffect ran!");
//   }, []);
//   return <h1>child</h1>;
// };


// const App = () => {
//   const [count, setCount] = useState(0);
//   const  [anotherCount, setAnotherCount] = useState(0);

//   useEffect(() => {
//     console.log("App component useEffect ran!");
//   }, []);

//   return (
//     <main>
//       <h1>Count : {count}</h1>
//       <button onClick={() => { setCount(count + 1)}}>Increment</button>
//       <hr />
//       <h1>Another Count : {anotherCount}</h1>
//       <button onClick={() => { setAnotherCount(anotherCount + 10)}}>Increment</button>
//       <hr />
//       {/* conditionaly rendering */}
//       {count % 2 === 0 && <Child />}
//     </main>
//   );
// };

// //Named Export
// export { App };

// doubt how un consoe child rendering as er used [] it has to be once only
//--------------------------------------------------------------------------------------------------------


// In this code we learning abt cleanups as if we use return in useEffect then it will Runs just before the
// component is unmounted whihc means in first render it will print 1 and 3 and if we click on anotherCount 
// then none of them will run but when we click on Count then only 2 will run and if we click again then 1 wll run 
// and again click 2 will run  

import { useEffect, useState } from "react";

// useState ✅
// useEffect

// Side-Effect
// 1. Changing title of the page
// 2. Make API calls
// 3. Timer and Intervals

// Cleanups

const Child = () => {
  useEffect(() => {
    // 1
    console.log("Child component mounted!");

    // Runs just before the component is unmounted
    return () => {
      // 2
      console.log("Child component unmounted!");
    };
  }, []);

  return <h1>Child</h1>;
};

const App = () => {
  const [count, setCount] = useState(0);
  const  [anotherCount, setAnotherCount] = useState(0);

  useEffect(() => {
    //3
    console.log("App component mounted!");
  }, []);

  return (
    <main>
      <h1>Count : {count}</h1>
      <button onClick={() => { setCount(count + 1)}}>Increment</button>
      <hr />
      <h1>Another Count : {anotherCount}</h1>
      <button onClick={() => { setAnotherCount(anotherCount + 10)}}>Increment</button>
      <hr />
      {/* conditionaly rendering */}
      {count % 2 === 0 && <Child />}
    </main>
  );
};

//Named Export
export { App };


// doubt how child is renderung again and agaun
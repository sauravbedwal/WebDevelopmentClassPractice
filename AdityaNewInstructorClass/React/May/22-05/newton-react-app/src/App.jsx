import "./App.css";


// In this code we understanding abt rendering as useState only take the intial value in first render after 
// that it ignores it  and take the value what it is getting from onCount by setCount. 
// as last in previous class we saw the problem when we create the function inside App() and now here we 
// doing solution of it as if a funciton is passed as an reference/argument to another function and its not been
// called then the function in which we passed will have total conrtoll over the function which is passsed that
// when to call it and how many times to call.


// import { useState } from "react";

// /** Lazy State Initialization */

// const getInitialState = () => {
//   return { id: 1, city: "Hyderabad" };
// };

// const App = () => {
//   const [user, setUser] = useState(getInitialState);

//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increment
//       </button>
//       <h1>{user.city}</h1>
//     </div>
//   );
// };

// // Named Export
// export { App };


//-----------------------------------------------------------------------------------------------------------


// When does a component render/re-render? firstly Initial render happens due to root.render and for re-render 
// whenver the state with in a component changes the component will re-render (if we have an array or object 
// in a component and if we are not gving a new array/object then compoennet will not re-render again) but here
// we have useState of count in the App compoennet now whenver the state changes the entire compoennet will
// re-render. 
// As when we click on button then as per useState of count App Component need to re-render bcoz whenever the state
// of a Component changes the entire Component re-render but here the Child also nested with in the App component
// means App component rendering the Child component and whenever the parent component re-renders all the Children
// component with in the parent component also re-render for sure as that is the default behaviour of react and 
// i.e unnecessary rendering

// import { useState } from "react";

// const Child = () => {
//   console.log("Child render");

//   return <h1>Child</h1>;
// };

// // <Child /> ->

// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increment
//       </button>
//       <hr />
//       <Child />
//     </div>
//   );
// };


//-----------------------------------------------------------------------------------------------------------


// In this code we clearing input by clicking on Reset button

// import { useState } from "react";

// const App = () => {
//   const [firstName, setFirstName] = useState("");
//   return (
//     <div>
//       <input
//         onChange={(event) => {
//           setFirstName(event.target.value);
//         }}
//         value={firstName}
//       />
//       <div>
//         <br />
//         <button
//           onClick={() => {
//             setFirstName("");
//           }}
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// // Named Export
// export { App };


//-----------------------------------------------------------------------------------------------------------


import { useState } from "react";

const App = () => {
  const [shapes, setShapes] = useState([]);
  const [currentShape, setCurrentShape] = useState("square");

  const addShape = () => {
    setShapes([...shapes, currentShape]);
  };

  return (
    <div className="container">
      <select
        onChange={(event) => {
          setCurrentShape(event.target.value);
        }}
        value={currentShape}
      >
        <option value="square">Square</option>
        <option value="circle">Circle</option>
      </select>{" "}
      <button onClick={addShape}>Add shape</button>
      <hr />
      {shapes.map((shape, index) => (
        <div className={`${shape}`}>{index}</div>
      ))}
    </div>
  );
};

// Named Export
export { App };
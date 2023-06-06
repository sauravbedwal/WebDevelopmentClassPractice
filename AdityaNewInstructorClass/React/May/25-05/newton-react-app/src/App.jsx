import "./App.css";

/******************************************* useEffect - Real use cases **************************************/

// In this code we understood that if we using array of dependencies in useEffect and have two values in it as 
// useEffect depends on it then if one of them will change then useEffect will run again.

// import { useEffect, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [anotherCount, setAnotherCount] = useState(0);

//   useEffect(() => {
//     console.log("App component mounted!");
//   }, [count, anotherCount]);

//   return (
//     <main>
//       <h1>Count : {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <hr />
//       <h1>Another Count : {anotherCount}</h1>
//       <button onClick={() => setAnotherCount(anotherCount + 10)}>
//         Increment
//       </button>
//       <hr />
//     </main>
//   );
// };

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// In this code we understanding that we can use multiple useEffect also (but preference is not to use multiple)
//as order of useEffects matter bcoz whatever comes first will print first when it will run as order matters in the 
// context what we want to print first 

// import { useEffect, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [anotherCount, setAnotherCount] = useState(0);

//   useEffect(() => {
//     console.log("Count changes!");
//   }, [count]);

  
//   useEffect(() => {
//     console.log("Another Count changes!");
//   }, [anotherCount]);

//   return (
//     <main>
//       <h1>Count : {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <hr />
//       <h1>Another Count : {anotherCount}</h1>
//       <button onClick={() => setAnotherCount(anotherCount + 10)}>
//         Increment
//       </button>
//       <hr />
//     </main>
//   );
// };

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// Another example of above code as here we used two values in one useEffect and 1 value in another useEffect but  
// that doesnt matter as if anotherCount will change then both useEffect will run (just an example) 

// import { useEffect, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [anotherCount, setAnotherCount] = useState(0);

//   useEffect(() => {
//     console.log("1st Effect!");
//   }, [count, anotherCount]);

  
//   useEffect(() => {
//     console.log("2nd Effect!");
//   }, [anotherCount]);

//   return (
//     <main>
//       <h1>Count : {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <hr />
//       <h1>Another Count : {anotherCount}</h1>
//       <button onClick={() => setAnotherCount(anotherCount + 10)}>
//         Increment
//       </button>
//       <hr />
//     </main>
//   );
// };

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// In this code we changing the title of page which is not reacts main Responsibility and that is an side-effect
// that we doing BY useEffect.

// import { useEffect, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [anotherCount, setAnotherCount] = useState(0);

//   useEffect(() => {
//     document.title = "Hello, Newton!";
//   }, []);

//   return (
//     <main>
//       <h1>Count : {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <hr />
//       <h1>Another Count : {anotherCount}</h1>
//       <button onClick={() => setAnotherCount(anotherCount + 10)}>
//         Increment
//       </button>
//       <hr />
//     </main>
//   );
// };

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// In this code we making a form and also used useEffect as we want it to console log only if email or phonenumber
// or both change and we can do that in one useEffect also like we did or create two differnert useEffect for 
// both thats the same thing but appropriate way is to do both in one useEffect.

// import { useEffect, useState } from "react";

// // useState ✅
// // useEffect

// // Side-Effect
// // 1. Changing title of the page
// // 2. Make API calls (react-query)
// // 3. Timer and Intervals

// // Cleanups

// const App = () => {
//   const [formDetails, setFormDetails] = useState({
//     firstName: "",
//     email: "",
//     phoneNumber: "",
//   });

//   const { firstName, email, phoneNumber } = formDetails;

//   useEffect(() => {
//     console.log(email, phoneNumber);  
//   }, [email, phoneNumber]);


//   const handleFormChange = (event) => {
//     setFormDetails({ ...formDetails, [event.target.name]: event.target.value });
//   };

//   return (
//     <main onChange={handleFormChange}>
//       <input name="firstName" type="text" placeholder="First Name" value={firstName} />
//       <input name="email" type="email" placeholder="Email" value={email} />
//       <input name="phoneNumber" type="number" placeholder="Phone Number" value={phoneNumber} />
//     </main>
//   );
// };

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// In this code we used the event listener in useEffect i.e. mouseMove as here event listener will be attach at once
// but whnever the ecent mousMove event will occur this fucntion will be called those many times

// import { useEffect, useState } from "react";

// // useState ✅
// // useEffect

// // Side-Effect
// // 1. Changing title of the page
// // 2. Make API calls (react-query)
// // 3. Timer and Intervals
// // 4. Event Listeners

// // Cleanups

// const App = () => {
//   // const [x, setX] = useState(0);
//   // const [y, setY] = useState(0);

//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0,
//   });

//   useEffect(() => {
//     function handleMouseMove(event) {
//       setMousePosition({ x: event.clientX, y: event.clientY });
//     }

//     window.addEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <main>
//       <h1>
//         {mousePosition.x} / {mousePosition.y}
//       </h1>
//     </main>
//   );
// };

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// Same as above code as here we added and removed the Event listener mousemove.

// import { useEffect, useState } from "react";


// function MouseCoords() {
//   // const [x, setX] = useState(0);
//   // const [y, setY] = useState(0);

//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0,
//   });

//   useEffect(() => {
//     function handleMouseMove(event) {
//       console.log("Inside handleMouseMove function");
//       setMousePosition({ x: event.clientX, y: event.clientY });
//     }

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <h1>
//       {mousePosition.x} / {mousePosition.y}
//     </h1>
//   );
// }

// const App = () => {
//   const [showMouseCoords, setShowMouseCoords] = useState(true);
//   return (
//     <main>
//       {showMouseCoords && <MouseCoords />}
//       <button onClick={() => setShowMouseCoords(false)}>
//         Stop showing Mouse Coords!
//       </button>
//     </main>
//   );
// };

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// Another example of above code as here we used the Event listener when window sixe changes it triggered.

// import { useEffect, useState } from "react";

// function WindowSize() {
//   const [windowDimensions, setWindowDimensions] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   const { height, width } = windowDimensions;                 //destructure

//   useEffect(() => {
//     function handleResize() {
//       const { innerHeight, innerWidth } = window;             //destructure
//       setWindowDimensions({ width: innerWidth, height: innerHeight });
//     }

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <h1>
//       {width} / {height}
//     </h1>
//   );
// }

// const App = () => {
//   return (
//     <main>
//       <WindowSize />
//     </main>
//   );
// };

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// Same as above code as here instead of widow we used event.target as its same thing 

import { useEffect, useState } from "react";

function WindowSize() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const { height, width } = windowDimensions;

  useEffect(() => {
    function handleResize({ target: { innerHeight, innerWidth } }) {           //instead of destructuring below we destrucured here only
      // const { innerHeight, innerWidth } = event.target;                    //bcoz event.target === window
      setWindowDimensions({ width: innerWidth, height: innerHeight });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <h1>
      {width} / {height}
    </h1>
  );
}

const App = () => {
  return (
    <main>
      <WindowSize />
    </main>
  );
};

// Named Export
export { App }; 
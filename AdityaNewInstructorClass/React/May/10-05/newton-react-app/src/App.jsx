import "./App.css";


//In this code we learning abt onChange event as it will be called each time whenever we add or erase anything in input
//  and even space will be count

// // Arguments inside the event handlers
// const App = () => {
//   const handleChange = (event) => {
//     // What we want is : input.value

//     // We know that :
//     // event.target -> input (Actual element that was interacted with)

//     // So we just need :
//     // event.target.value -> input.value

//     console.log(event.target.value); // The current value of the input element
//   };

//   return (
//     <main>
//       <form>
//         <label htmlFor="firstName">First Name :</label>
//         <input onChange={handleChange} id="firstName" type="text" />
//       </form>
//     </main>
//   );
// };

// // onClick -> callback

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


//In this code we learning abt onFocus and onBlur event as onFocus will be called when we focus on input tag
//and when we go out of focus then onBlur will be called but blur event occurs ONLY when the input element 
//was previously in focus.

// // Arguments inside the event handlers
// const App = () => {
//   const handleChange = (event) => {
//     console.log(event.target.value);
//   };

//   // Focus event -> When the input element gets into focus
//   const handleFocus = () => {
//     console.log("Element in focus");
//   };

//   // Blur event -> When the input element goes OUT OF focus
//   // blur event occurs ONLY when the input element was previously in focus
//   // Which means, blur event won't occur when the input element was initially not in focus
//   const handleBlur = () => {
//     console.log("Element is blurred!");
//   };

//   return (
//     <main>
//       <form>
//         <label htmlFor="firstName">First Name :</label>
//         <input onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} id="firstName" type="text" />
//       </form>
//     </main>
//   );
// };

// // onClick -> callback

// // Named Export
// export { App };


//-----------------------------------------------------------------------------------------------------------


//In this code we making a button in which content is used by children props and also added onClick event in button.

// const AlertButton = ({ children, message }) => {
//     return (
//       <button onClick = {() => {
//         console.log(message);
//       }}>{children}</button>
//     );
// };

// const App = () => {
//   return (
//     <main>
//       <AlertButton message="Playing">Play Movie</AlertButton>
//     </main>
//   );
// };

// // Named Export
// export { App };


//-----------------------------------------------------------------------------------------------------------


//In this code we making a button in which content is used by children props and also added onClick event in 
// button with a different function i.e. handleClick

// const AlertButton = ({ children, onClick }) => {                        //destrcuted onClick
//   // onClick -> handleClick
//   return <button onClick={onClick}>{children}</button>;               //we can write like this also: <button onClick = {() => {
// };                                                                   //                              onClick();   //handleClick();
//                                                                     //                                }}>{children}</button>


// const App = () => {
//   const handleClick = () => {
//     console.log("Alert Button Clicked!");
//   };

//   return (
//     <main>
// {/* instead of onClick here in AlertButton we cna name it anything as this onClick is not the event here its just a name. */}
//       <AlertButton onClick={handleClick} message="Playing">Play Movie</AlertButton>      

// {/* wahtever we did above in AlertButton reagarding passing handleClick through onClick is same as we do normally. */}
//       {/* <button onClick={handleClick}>Click me</button> */}            
//     </main>
//   );
// };

// // Named Export
// export { App };


//-----------------------------------------------------------------------------------------------------------


// In this code we learning abt event bubbling in events but here we did  normally as nt by event bubbling concept

// const AlertButton = ({ onClick }) => {
//   // onClick -> handleClick
//   return <button onClick={onClick}></button>;
// };

// const App = () => {
//   return (
//     <main>
//       <button onClick={()=>{
//         console.log("One Clicked");
//       }}>One</button>

//       <button onClick={()=>{
//         console.log("Two Clicked");
//       }}>Two</button>

// <button onClick={()=>{
//         console.log("Three Clicked");
//       }}>Three</button>

// <button onClick={()=>{
//         console.log("Four Clicked");
//       }}>Four</button>
//     </main>
//   );
// };

// // Named Export
// export { App };


//-----------------------------------------------------------------------------------------------------------


// In this code we learning abt event bubbling in events and here we did  by event bubbling concept as instead
// of using event in every button w used it in one parent tag that contains all the items.

// const AlertButton = ({ onClick }) => {
//   // onClick -> handleClick
//   return <button onClick={onClick}></button>;
// };

// const App = () => {
//   return (
//     <main onClick={() =>{
//       console.log("Button Clicked");
//     }}>
//       <button>One</button>
//       <button>Two</button>
//       <button>Three</button>
//       <button>Four</button>
//     </main>
//   );
// };

// // Named Export
// export { App };



//-----------------------------------------------------------------------------------------------------------


//Another example of above code of event bubbling as here we wanted to print differnet thing for differnet 
// buttons so we added switch case also. 

// const AlertButton = ({ children, message, onClick }) => {
//   // onClick -> handleClick
//   return <button onClick={onClick}>{children}</button>;
// };

// const App = () => {
//   return (
//     <main
//       onClick={(event) => {
//         switch (event.target.textContent) {
//           case "Casuals":
//             console.log("Casuals clicked!");
//             return;
//           // Navigate to Casuals page
//           case "Formals":
//             console.log("Formals clicked!");
//             return;
//           // Navigate to Casuals page
//           case "T-Shirts":
//             console.log("T-Shirts clicked!");
//             return;
//           // Navigate to Casuals page
//           case "Jeans":
//             console.log("Jeans clicked!");
//             return;
//           // Navigate to Casuals page
//         }
//       }}
//     >
//       <button>Casuals</button>
//       <button>Formals</button>
//       <button>T-Shirts</button>
//       <button>Jeans</button>
//     </main>
//   );
// };

// // Named Export
// export { App };


//-----------------------------------------------------------------------------------------------------------


// In this code we learned abt event.preventDefault to stop the page for further action i.e. getrefereshed. 

// const App = () => {
//   return (
//     <main>
//       <form onSubmit={(event) => {
//         event.preventDefault();
//       }}>
//         <input type="text" />
//         <button>Submit</button>
//       </form>
//           </main>
//   );
// };

// // Named Export
// export { App };


//-----------------------------------------------------------------------------------------------------------


// In this code we again doing event bubbling as we took an example we havinga  dropdown and in which we want
//  wahtever we select we should know abt it so we added value and used onChnage event with value.

// const App = () => {
//   return (
//     <main>
//       <select
//         onChange={(event) => {
//           console.log(event.target.value);
//         }}
//       >
//         <option value="spidy1">Spider Man 1</option>
//         <option value="spidy2">Spider Man 2</option>
//         <option value="spidy3">Spider Man 3</option>
//       </select>
//     </main>
//   );
// };

// // Named Export
// export { App };


//-----------------------------------------------------------------------------------------------------------


//  Another example of above code

const App = () => {
  const OPTIONS = [
    { label: "Spider Man 1", value: "spidy1" },
    { label: "Spider Man 2", value: "spidy2" },
    { label: "Spider Man 3", value: "spidy3" },
  ];

  return (
    <main>
      <select
        onChange={(event) => {
          const { selectedIndex } = event.target.options;
          console.log(OPTIONS[selectedIndex]);
        }}
      >
        {OPTIONS.map((spidyOption) => (
          <option value={spidyOption.value}>{spidyOption.label}</option>
        ))}
      </select>
    </main>
  );
};

// Named Export
export { App };
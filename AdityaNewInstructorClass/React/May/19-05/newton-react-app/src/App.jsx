import "./App.css";


// ********************************************** Basic Form Validation **************************************


// In this code we creating one object instead of 3 different useState bcoz we have a single form and each of
// the three things belong to one user so we can create an object which contains the state value for every 
// single thing as in the form we gonna validate the data that we putting as we can  do that by two ways i.e. we can wait
// untill we click on submit button and then validate the data.
//as validation happens on the backend also as data send to backend and it will be validate and if there is
// issue then it will show us error but best approach can be taht we dont wait for backend to validate the data as
// we can validate the data on frontend and send the correct data to the backend.


// import { useState } from "react";

// const App = () => {
//   const [formDetails, setFormDetails] = useState({
//     firstName: "",
//     secondName: "",
//     email: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     firstNameError: "",
//     secondNameError: "",
//     emailError: "",
//   });

//   const handleFormInputs = (event) => {
//     const field = event.target.name;
//     const value = event.target.value;

//     setFormDetails({
//       ...formDetails,
//       [field]: value,
//     });
//   };

//   const submit = () => {
//     const { firstName, secondName, email } = formDetails;

//     const firstNameError = firstName.length < 3 && "First name must contain at least 3 characters";

//     const secondNameError = secondName.length < 3 && "Second name must contain at least 3 characters";

//     const emailError = email.length < 3 && "Email must contain at least 3 characters";

//     if (firstNameError || secondNameError || emailError) {
//       setFormErrors({
//         firstNameError,                                         //firstNameError: firstNameError means same thing as its eactly same so we can use it by writing just firstNameError but if name of the valriable is differnet i.e firstNameErr in submit() then we have to do firstNameError: firstNameErr
//         secondNameError,
//         emailError,
//       });
//     }

//     // by this method it will show only email error as everythhing will be overridden.

//     // if (firstName.length < 3) {
//     //   setFormErrors({
//     //     ...formErrors,
//     //     firstNameError: "First name must contain at least 3 characters",             //firstName error here is the key of formErrors object of useState 
//     //   });
//     // }

//     // if (secondName.length < 3) {
//     //   setFormErrors({
//     //     ...formErrors,
//     //     secondNameError: "Second name must contain at least 3 characters",
//     //   });
//     // }

//     // if (email.length < 3) {
//     //   setFormErrors({
//     //     ...formErrors,
//     //     emailError: "Email must contain at least 3 characters",
//     //   });
//     // }
//   };

//   return (
//     <main>
//       <div className="container">
//         <label>First Name </label>
//         <div>
//           <input placeholder="John" onChange={handleFormInputs} value={formDetails.firstName} type="text" 
//           name="firstName" />
//           {formErrors.firstNameError && <p>{formErrors.firstNameError}</p>}
//           {/* {formErrors.firstNameError ? <p>{formErrors.firstNameError}</p> : null} */}

//         </div>
        
//         <label>Second Name </label>
//         <div>
//           <input placeholder="Cena" onChange={handleFormInputs} value={formDetails.secondName} type="text" 
//           name="secondName" />
//           {formErrors.secondNameError && <p>{formErrors.secondNameError}</p>}
//         </div>

//         <label>Email </label>
//         <div>
//           <input placeholder="youcantseeme@wwe.com" onChange={handleFormInputs} value={formDetails.email} 
//           type="email" name="email" />
//           {formErrors.emailError && <p>{formErrors.emailError}</p>}
//         </div>
//       </div>

//       <button onClick={submit}>Submit</button>
//     </main>
//   );
// };

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


//Same as Above Code as in the form when we filling the details we keep validating it and throw error (not completed).

// import { useState } from "react";

// const App = () => {
//   const [formDetails, setFormDetails] = useState({
//     firstName: "",
//     secondName: "",
//     email: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     firstNameError: "",
//     secondNameError: "",
//     emailError: "",
//   });

//   const handleFormInputs = (event) => {
//     const field = event.target.name;
//     const value = event.target.value;

//     const firstNameError =
//       field === "firstName" &&
//       value.length < 3 &&
//       "First name must contain at least 3 characters";

//     const secondNameError =
//       field === "secondName" &&
//       value.length < 3 &&
//       "Second name must contain at least 3 characters";

//     const emailError =
//       field === "email" &&
//       value.length < 3 &&
//       "Email must contain at least 3 characters";

//     if (firstNameError || secondNameError || emailError) {
//       setFormErrors({
//         firstNameError,
//         secondNameError,
//         emailError,
//       });
//     }

//     setFormDetails({
//       ...formDetails,
//       [field]: value,
//     });
//   };

//   return (
//     <main>
//       <div className="container">
//         <label>First Name </label>
//         <div>
//           <input placeholder="John" onChange={handleFormInputs} value={formDetails.firstName} type="text" 
//           name="firstName" />
//           {formErrors.firstNameError && <p>{formErrors.firstNameError}</p>}
//         </div>
        
//         <label>Second Name </label>
//         <div>
//           <input placeholder="Cena" onChange={handleFormInputs} value={formDetails.secondName} type="text" 
//           name="secondName" />
//           {formErrors.secondNameError && <p>{formErrors.secondNameError}</p>}
//         </div>

//         <label>Email </label>
//         <div>
//           <input placeholder="youcantseeme@wwe.com" onChange={handleFormInputs} value={formDetails.email} 
//           type="email" name="email" />
//           {formErrors.emailError && <p>{formErrors.emailError}</p>}
//         </div>
//       </div>

//       <button>Submit</button>
//     </main>
//   );
// };

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


// ***************************************  Asynchronous State Updates **************************************


// In this code we learning abt Asynchronous State Updates as setCount is state setter but it is not Immediately 
// doing it as it schdeules the update like a reminder/todoList after everything within the function is done
// thats why in console it is showing count one less than what it showing on browser (browser 1, console 0)
// as handleCount is handling clickEvent of the button which means react have to process everything within this 
// click event before it set te state. As it wont re-render it untill or unless everything in the funciton is done.


// import { useState } from "react";

// /** Asynchronous State Updates */

// const App = () => {
//   const [count, setCount] = useState(0);

//   const handleCount = () => {
//     setCount(count + 1); // state setters are NOT immediate
//     console.log(count); 
//   };

//   return (
//     <main>
//       <p>You've clicked {count} times.</p>
//       <button onClick={handleCount}>Click me!</button>
//     </main>
//   );
// };

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


//Same as above code as here we making both the count browser and console to be same. 

// import { useState } from "react";

// /** Asynchronous State Updates */

// const App = () => {
//   const [count, setCount] = useState(0);

//   const handleCount = () => {
//     const nextCount = count + 1; // 1

//     setCount(nextCount); // state setters are NOT immediate

//     //setCount(count + 1); !== count = count + 1; -> NOT WHAT HAPPENS!
//     console.log(nextCount); // 1
//   };

//   return (
//     <main>
//       <p>You've clicked {count} times.</p>
//       <button onClick={handleCount}>Click me!</button>
//     </main>
//   );
// };

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


//Another example of above code as here we getting older values after clicking also as it is not Immediately 
// doing it as it schdeules the update like a reminder/todoList after everything within the function is done.

// import { useState } from "react";

// /** Asynchronous State Updates */

// const App = () => {
//   const [strength, setStrength] = useState(6);
//   const [dexterity, setDexterity] = useState(9);
//   const [intelligence, setIntelligence] = useState(15);

//   function triggerLevelUp() {
//     setStrength(strength + 1); // 7
//     setDexterity(dexterity + 2); // 11
//     setIntelligence(intelligence + 3); // 18

//     window.alert(`
//       Congratulations! Your hero now has the following stats:
//       Str: ${strength}
//       Dex: ${dexterity}
//       Int: ${intelligence}
//     `);
//   }

//   return (
//     <div className="container">
//       <img
//         alt="8-bit wizard character"
//         src="https://sandpack-bundler.vercel.app/img/mage-sprite.gif"
//       />
//       <div>
//         <button onClick={triggerLevelUp}>Level Up</button>
//       </div>
//     </div>
//   );
// };

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


//Same as above code as here IT IS showing us the correct values. 


// import { useState } from "react";

// /** Asynchronous State Updates */

// const App = () => {
//   const [strength, setStrength] = useState(6);
//   const [dexterity, setDexterity] = useState(9);
//   const [intelligence, setIntelligence] = useState(15);

//   function triggerLevelUp() {
//     const nextStrength = strength + 1;
//     const nextDexterity = dexterity + 2;
//     const nextIntelligence = intelligence + 3;

//     setStrength(nextStrength); // 7
//     setDexterity(nextDexterity); // 11
//     setIntelligence(nextIntelligence); // 18

//     window.alert(`
//       Congratulations! Your hero now has the following stats:
//       Str: ${nextStrength}
//       Dex: ${nextDexterity}
//       Int: ${nextIntelligence}
//     `);
//   }

//   return (
//     <div className="container">
//       <img
//         alt="8-bit wizard character"
//         src="https://sandpack-bundler.vercel.app/img/mage-sprite.gif"
//       />
//       <div>
//         <button onClick={triggerLevelUp}>Level Up</button>
//       </div>
//     </div>
//   );
// };

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


// In this code we understanding abt the problem wihtout Lazy State Initialization and also rendering as 
// useState only take the intial value in first render after that it ignores it  and take the value what it is 
// getting from onCount by setCount 

import { useState } from "react";

/** Lazy State Initialization */

// instead creating the function outside we created that inside though creating outside is best approach
// const getInitialState = () => {
//   return { id: 1, city: "Hyderabad" };
// };

const App = () => {
  // Problem 1 : Re-creating this function
  const getInitialState = () => {
    return { id: 1, city: "Hyderabad" };
  };

  // Problem 2 : Calling this function even after the first render
  // const initialState = getInitialState();
  const [user, setUser] = useState(getInitialState());

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h1>{user.city}</h1>
    </div>
  );
};

// Named Export
export { App };
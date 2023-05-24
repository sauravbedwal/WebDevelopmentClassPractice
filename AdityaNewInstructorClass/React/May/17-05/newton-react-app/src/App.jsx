import { useState } from "react";
import "./App.css";


//Another example of using multiple useState (continued from previous class) as here we adding one more useState 
// i.e. designation as well as as they all belong to one specific collection which is user details so we can use
// only one state value that is an object.

// import { useState } from "react";

// // name, age, city, country

// /** Solution 4 - Remove inline functions. Add ids. */
// const App = () => {
//   const [name, setName] = useState("Aditya Keri");
//   const [age, setAge] = useState(1000);
//   const [city, setCity] = useState("New York");
//   const [country, setCountry] = useState("USA");
//   const [designation, setDesignation] = useState("Software Developer");

//   const STATE_MAPPING = {
//     name: {
//       set: setName,
//       value: "Abhishek Keri",
//     },
//     age: {
//       set: setAge,
//       value: 23,
//     },
//     city: {
//       set: setCity,
//       value: "Hyderabad",
//     },
//     country: {
//       set: setCountry,
//       value: "India",
//     },
//     designation: {
//       set: setDesignation,
//       value: "Driver",
//     },
//   };

//   const updateUserDetails = (event) => {
//     const field = event.target.name;

//     const setState = STATE_MAPPING[field].set;
//     const value = STATE_MAPPING[field].value;
//     setState(value);
//     // STATE_MAPPING[field].set(STATE_MAPPING[field].value);
//   };

//   return (
//     <div>
//       <p>Name : {name}</p>
//       <p>Age : {age}</p>
//       <p>City : {city}</p>
//       <p>Country : {country}</p>
//       <p>Designation : {designation}</p>
//       <hr />
//       {/* Aditya Keri -> Abhishek Keri */}
//       <button name="name" onClick={updateUserDetails}>
//         Change Name
//       </button>

//       {/* 1000 -> 23 */}
//       <button name="age" onClick={updateUserDetails}>
//         Change Age
//       </button>

//       {/* New York - Hyderabad */}
//       <button name="city" onClick={updateUserDetails}>
//         Change City
//       </button>

//       {/* USA -> India */}
//       <button name="country" onClick={updateUserDetails}>
//         Change Country
//       </button>

//       {/* Software Developer -> Driver */}
//       <button name="designation" onClick={updateUserDetails}>
//         Change Designation
//       </button>
//     </div>
//   );
// };

// // Named Export
// export { App };


/********************************************** Complex Form State ******************************************/


//In this code we learning abt complex form state and doing it by Brute force. 

// import { useState } from "react";

// /** Complex Form State */

// /** Method 1 : Brute Force Approach */
// const App = () => {
//   const [firstName, setFirstName] = useState("");

//   const [secondName, setSecondName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleFirstNameChange = (event) => {
//     setFirstName(event.target.value);
//   };

//   const handleSecondNameChange = (event) => {
//     setSecondName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   return (
//     <div className="container">
//       <label>First Name </label>
//       <input onChange={handleFirstNameChange} value={firstName} placeholder="John" type="text" />
//       <label>Second Name </label>
//       <input onChange={handleSecondNameChange} value={secondName} placeholder="Cena" type="text" />
//       <label>Email </label>
//       <input onChange={handleEmailChange} value={email} placeholder="youcantseeme@wwe.com" type="email" />
//     </div>
//   );
// };

// // Named Export
// export { App };


//----------------------------------------------------------------------------------------------------------


//In this code we learning abt complex form state and doing it Using if-else. 

// import { useState } from "react";

// /** Complex Form State */

// /** Method 2 : Using if-else
// const App = () => {
//   const [firstName, setFirstName] = useState("");
//   const [secondName, setSecondName] = useState("");
//   const [email, setEmail] = useState("");


//   const handleFormInputs = (field, value) => {
//   if (field === "firstName") {
//     setFirstName(value);
//   } else if (field === "secondName") {
//     setSecondName(value);
//   } else {
//     setEmail(value);
//   }

//   // also instead of writing else if we can write return
//   // if (field === "firstName") {
//   //   setFirstName(value);
//   //   return;
//   // }
//   // if (field === "secondName") {
//   //   setSecondName(value);
//   //   return;
//   // }
//   // setEmail(value);
//  };

//   return (
//     <div className="container">
//       <label>First Name </label>
//       <input
//         onChange={(event) => {
//           handleFormInputs("firstName", event.target.value);
//         }}
//         value={firstName}
//         placeholder="John"
//         type="text"
//       />

//       <label>Second Name </label>
//       <input
//         onChange={(event) => {
//           handleFormInputs("secondName", event.target.value);
//         }}
//         value={secondName}
//         placeholder="Cena"
//         type="text"
//       />

//       <label>Email </label>
//       <input
//         onChange={(event) => {
//           handleFormInputs("email", event.target.value);
//         }}
//         value={email}
//         placeholder="youcantseeme@wwe.com"
//         type="email"
//       />
//     </div>
//   );
// };

// // Named Export
// export { App };


//----------------------------------------------------------------------------------------------------------


//In this code we learning abt complex form state and doing it Using switch case.

// import { useState } from "react";

// /** Complex Form State */

// /** Method 3 : Using switch case */
// const App = () => {
//   const [firstName, setFirstName] = useState("");
//   const [secondName, setSecondName] = useState("");
//   const [email, setEmail] = useState("");

//   // when to use return keyword or break in switch case is when we writing a switch case with in a function and 
//   // we want to return from the function itself then use return but if we only want to break out of that switch 
//   // case like we have some other code further that we want to execute then use break statement.

//   const handleFormInputs = (field, value) => {

//   switch (field) {
//     case "firstName":
//       setFirstName(value);
//       return;
//     case "secondName":
//       setSecondName(value);
//       return;
//     case "email":
//       setEmail(value);
//       return;
//   }
//   };
  
//   return (
//     <div className="container">
//            <label>First Name </label>
//            <input
//             onChange={(event) => {
//               handleFormInputs("firstName", event.target.value);
//             }}
//             value={firstName}
//             placeholder="John"
//             type="text"
//           />
    
//           <label>Second Name </label>
//           <input
//             onChange={(event) => {
//               handleFormInputs("secondName", event.target.value);
//             }}
//             value={secondName}
//             placeholder="Cena"
//             type="text"
//           />
    
//           <label>Email </label>
//           <input
//             onChange={(event) => {
//               handleFormInputs("email", event.target.value);
//             }}
//             value={email}
//             placeholder="youcantseeme@wwe.com"
//             type="email"
//           />
//         </div>
//   );
// };

// // Named Export
// export { App };


//----------------------------------------------------------------------------------------------------------


//In this code we learning abt complex form state and doing it Using mapping.

// import { useState } from "react";

// /** Complex Form State */

// /** Method 4  : Using mapping  */
// const App = () => {
//   const [firstName, setFirstName] = useState("");
//   const [secondName, setSecondName] = useState("");
//   const [email, setEmail] = useState("");

//   const MAPPING = {
//     firstName: setFirstName,
//     secondName: setSecondName,
//     email: setEmail,
//   };

//   const handleFormInputs = (field, value) => {
//     const set = MAPPING[field]; // setFirstName | setSecondName | setEmail
//     set(value);
//   };

//   return (
//     <div className="container">
//            <label>First Name </label>
//            <input
//             onChange={(event) => {
//               handleFormInputs("firstName", event.target.value);
//             }}
//             value={firstName}
//             placeholder="John"
//             type="text"
//           />
    
//           <label>Second Name </label>
//           <input
//             onChange={(event) => {
//               handleFormInputs("secondName", event.target.value);
//             }}
//             value={secondName}
//             placeholder="Cena"
//             type="text"
//           />
    
//           <label>Email </label>
//           <input
//             onChange={(event) => {
//               handleFormInputs("email", event.target.value);
//             }}
//             value={email}
//             placeholder="youcantseeme@wwe.com"
//             type="email"
//           />
//         </div>
//   );
// };

// // Named Export
// export { App };


//----------------------------------------------------------------------------------------------------------


//In this code we learning abt complex form state and doing it Using name attribute.

// import { useState } from "react";

// /** Complex Form State */

// /** Method 5 : Using name attribute */
// const App = () => {
//   const [firstName, setFirstName] = useState("");
//   const [secondName, setSecondName] = useState("");
//   const [email, setEmail] = useState("");

//   //left is key and right is its value i.e. a function
//   const MAPPING = {
//     firstName: setFirstName,
//     secondName: setSecondName,
//     email: setEmail,
//   };

//   const handleFormInputs = (event) => {
//     const field = event.target.name;
//     const value = event.target.value;

//     const set = MAPPING[field]; // setFirstName | setSecondName | setEmail
//     set(value);
//   };

//   return (
//     <div className="container">
//       <label>First Name </label>
//       <input
//         onChange={handleFormInputs}
//         value={firstName}
//         placeholder="John"
//         type="text"
//         name="firstName"
//       />
//       <label>Second Name </label>
//       <input
//         onChange={handleFormInputs}
//         value={secondName}
//         placeholder="Cena"
//         type="text"
//         name="secondName"
//       />
//       <label>Email </label>
//       <input
//         onChange={handleFormInputs}
//         value={email}
//         placeholder="youcantseeme@wwe.com"
//         type="email"
//         name="email"
//       />
//     </div>
//   );
// };

// // Named Export
// export { App };


//----------------------------------------------------------------------------------------------------------


// In this code we bulding an array in which there is 1 initially and we want when we click on Adda it will add one 
// to thelast number and add thta number in array and so on like [1, 2, 30] Initial render we have an array of 1 
// i.e. State of number and for re-rendering when we have an array involved then react checks State of number is 1
// and after push  we got [1,2] but react wont check what is change in array as react will check the refernece of 
// number before and after of push. is it same or not as it is same here so react will think nothing has changed.
// As react, says if uh want me to re-render uh must give me new referrence always as if no new refernnce then it 
// will be considered that nothing has changed. So referrence has to be different if we want re-render  

// Render a list of increasing numbers
const App = () => {
  const [numbers, setNumbers] = useState([1]);

  //thats incorrct as it wont work as its not even re rendering
  // const add = () => {
  //   // Take the last number in the array
  //   const lastNumber = numbers[numbers.length - 1];

  //   // Add 1 to it
  //   const nextNumber = lastNumber + 1;

  //   // Add this new number to the array
  //   numbers.push(nextNumber);

  //   // call setNumbers
    /* React does NOT re-render, because the reference is the same */
  //   setNumbers(numbers);
  // };

  const add = () => {
    // Take the last number in the array
    const lastNumber = numbers[numbers.length - 1];

    // Add 1 to it
    const nextNumber = lastNumber + 1;

    // Create a brand new array (NEW REFERENCE)
    const newNumbers = [...numbers, nextNumber]; // [1, 2]

    // set the state
    /* reffernce is different of newNumbers array and numbers array so react will re-render */ 
    setNumbers(newNumbers);
  };

  return (
    <div>
      <section>
        {numbers.map((number) => (
          <h3>{number}</h3>
        ))}
      </section>
      <button onClick={add}>Add</button>
    </div>
  );
}; 
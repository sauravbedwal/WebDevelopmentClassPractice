import "./App.css";

// In this code we using only one useState as no need of using three useState indivdiually, so we combining
// these 3 States in 1 State by using an object bcoz these three things r linked together as they belong to certain
// thing i.e. user itself as they all r closely related to each other as whenver we have state pieces whuch are 
// r closely linked to each other then its good to use an object.  
// So here we created an object called fromDetails in whcih it has properties firstName, secondName and email
// how to update the State whihch contains arrays or objects. as its done but its not appropriate way to do.

// import { useState } from "react";

// const App = () => {
//   const [formDetails, setFormDetails] = useState({
//     firstName: "",
//     secondName: "",
//     email: "",
//   });

//   const handleFormInputs = (event) => {
//     const field = event.target.name;  // secondName
//     const value = event.target.value; // K

//     // WILL NOT WORK!!
//     // You cannot mutate/modify the state (object/array) directly
//     // formDetails[field] = value;
//     // setFormDetails(formDetails);

//     // To make it work, we need to pass in a new object (new reference)
//     // to setFormDetails

//     // Bad way of writing :
//     let newFormDetails = {};
//     if (field === "firstName") {
//       newFormDetails = {
//         ...formDetails,
//         firstName: value, // A
//       };
//     } else if (field === "secondName") {
//       newFormDetails = {
//         ...formDetails,
//         secondName: value, // K
//       };
//     } else {
//       newFormDetails = {
//         ...formDetails,
//         email: value,
//       };
//     }
//     setFormDetails(newFormDetails);
//     };

//   return (
//     <div className="container">
//       <label>First Name </label>
//       <input
//         onChange={handleFormInputs}
//         value={formDetails.firstName}
//         placeholder="John"
//         type="text"
//         name="firstName"
//       />
//       <label>Second Name </label>
//       <input
//         onChange={handleFormInputs}
//         value={formDetails.secondName}
//         placeholder="Cena"
//         type="text"
//         name="secondName"
//       />
//       <label>Email </label>
//       <input
//         onChange={handleFormInputs}
//         value={formDetails.email}
//         placeholder="youcantseeme@wwe.com"
//         type="email"
//         name="email"
//       />
//     </div>
//   );
//   };

// // Named Export
// export { App };


//-----------------------------------------------------------------------------------------------------


//Same as above code as here we done it in a appropriate way that needs to be done.

// import { useState } from "react";

// const App = () => {
//   const [formDetails, setFormDetails] = useState({
//     firstName: "",
//     secondName: "",
//     email: "",
//   });

//   const handleFormInputs = (event) => {
//     const field = event.target.name; // secondName
//     const value = event.target.value; // K

//     // Refactored code that approach we need to do as it is appropriate.
//     const newFormDetails = {
//       ...formDetails,
//       [field]: value,
//     };
//     setFormDetails(newFormDetails);

//     //we can directly also add that in setFormDetails() as we passig brand new object here. (comment above code when use this started from //Refator)
//     // setFormDetails({
//     //   ...formDetails,
//     //   [field]: value,
//     // });

//   };

//   return (
//     <div className="container">
//       <label>First Name </label>
//       <input
//         onChange={handleFormInputs}
//         value={formDetails.firstName}
//         placeholder="John"
//         type="text"
//         name="firstName"
//       />
//       <label>Second Name </label>
//       <input
//         onChange={handleFormInputs}
//         value={formDetails.secondName}
//         placeholder="Cena"
//         type="text"
//         name="secondName"
//       />
//       <label>Email </label>
//       <input
//         onChange={handleFormInputs}
//         value={formDetails.email}
//         placeholder="youcantseeme@wwe.com"
//         type="email"
//         name="email"
//       />
//     </div>
//   );
// };

// // Named Export
// export { App };


//-----------------------------------------------------------------------------------------------------


// In this code we added a button which is disable and gave some conditions also when the conditions will be 
// fulfilled then only button will be enable as we can als do that by making a new useState like
// const [disabled, setdisabled] = useState() but that not approppriate as why create new useState.

import { useState } from "react";

/** Complex Form State */

const App = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    secondName: "",
    email: "",
  });

  const handleFormInputs = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    setFormDetails({
      ...formDetails,
      [field]: value,
    });
  };
 
  //value of validate will be in boolean as if condition fail then false else true.
  const validated =
    formDetails.firstName.length >= 2 &&
    formDetails.secondName.length >= 2 &&
    formDetails.email.length >= 2;

  return (
    <main>
      <div className="container">
        <label>First Name </label>
        <input
          onChange={handleFormInputs}
          value={formDetails.firstName}
          placeholder="John"
          type="text"
          name="firstName"
        />
        <label>Second Name </label>
        <input
          onChange={handleFormInputs}
          value={formDetails.secondName}
          placeholder="Cena"
          type="text"
          name="secondName"
        />
        <label>Email </label>
        <input
          onChange={handleFormInputs}
          value={formDetails.email}
          placeholder="youcantseeme@wwe.com"
          type="email"
          name="email"
        />
      </div>
      {/* if validated value is false then here !validated will become true and it will be keep disabled. */}
      <button disabled={!validated}>Submit</button>             

      {/* Whenever you add a prop without giving it any value, it will be
          considered as having a value of true.
          This works for components and html elements as well. 
      */}
      {/* <Child isAlive /> */}
    </main>
  );
};

// const Child = ({ isAlive }) => {
//   console.log(isAlive);
//   return <h1>Child</h1>;
// };

// Named Export
export { App };

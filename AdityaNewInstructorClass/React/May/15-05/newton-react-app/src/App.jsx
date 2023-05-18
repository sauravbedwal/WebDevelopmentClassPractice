import "./App.css";

//uncontrolled and controlled components majorly use when we use form elements.

// /*
//  * React Uncontrolled Components :
//  */

// const App = () => {
//   return (
//     /** Currently React is NOT controlling this component. Because, there's no
//      * React State managing this input element.
//      * Example : Whatever is being typed inside the input element, can't be displayed
//      * in the p tag.
//      *
//      * Right now, only the input element knows what the value of the input is.
//      */
//     <form>
//       <label>University : </label>
//       <input type="text" />
//     </form>
//   );
// };

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


// In this code we are learning abt React Controlled Components as here we want Whatever is being typed inside
//  the input element, can be displayed in the p tag using state so we gave the value of input as university so it
//  can be changed and it can only be done by the setUniversity function and understanding usage of State.
//uncontrolled and controlled components majorly use when we use form elements. 

// import { useState } from "react";

// /*
//  * React Controlled Components :
//  */

// const App = () => {
//   /** Step 1 : Create a state variable which contains the value being typed inside
//    * the input element
//    */

//   const [university, setUniversity] = useState("");

//   const handleInputChange = (event) => {
//     // event.target.value
//     /** Step 4 : Update the state with the new event.target.value */
//     setUniversity(event.target.value);
//   };

//   return (
//     <form>
//       <label>University : </label>
//       {/* Step 2 : Add the state to the value prop */}

//       {/* Step 3 : Add the onChange */}
//       <input onChange={handleInputChange} value={university} type="text" />
//       <p>Output : {university} </p>
//       {/* <p>Output : {university.toUpperCase()} </p> */}
//     </form>
//   );
// };

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


// In this code we understanding that is there any need to use State here as the answer is No, coz its static
// and we are not changing anything (if we click on that button also) as we can get this if there is a value which
// needs to change over time or may change over time always use State for that and if nothing changing then no need
// to use it so we took two examples here one is of button and one is of <a> tag(while anchor tag ex ignore Button()).


// const Button = ({children}) => {
// return <button>{children}</button>;
// };

// const App = () => {
//   return (
//     <div>
//       <Button> Click me </Button>    
//       {/* <a href="https://www.google.com">Google</a> */}
//       </div>
//   );
// };

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


//Same as Above code as here we understanding that there is need of using State bcoz there is a value which
// needs to change over time and whenever we call setTitle we always trigger a re-render. 


// import { useState } from "react";

// const App = () => {
//   const [title, setTitle] = useState("Spider-man");

//   const changeTitle = () => {
//     setTitle("Thor");
//   };

//   return (
//     <div>
//       <h1>{title}</h1>
//       <button onClick={changeTitle}> Change title </button>
//     </div>
//     );
// };

// // Named Export
// export { App };



//---------------------------------------------------------------------------------------------------------


//Same as Above code as here we using ultiple useState.

// import { useState } from "react";

// const App = () => {
//   const [title, setTitle] = useState("Spider-man");

//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>{title}</h1>
//       <button onClick={() => {
//     setTitle("Thor");
//   }}> Change title </button>
//   <hr />
//   <h1>Count: {count}</h1>
//   <button onClick={() => {
//     setCount(count + 1);
//   }}>Increment</button>
//     </div>
//     );
// };

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


//Same as Above code as here we using ultiple useState and changing both the title and count by smae button.

// import { useState } from "react";

// /*
//  * Stateful components - Components that contain state
//  * Stateless/Dumb components - Components that don't have any state
//  */

// /**
//  *
//  * It's very common to have multiple states within one component
//  * Below is an example
//  */

// const App = () => {
//   const [title, setTitle] = useState("Spider-man");

//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>{title}</h1>
//       <button
//         onClick={() => {
//           setTitle("Thor");
//           setCount(count + 1);
//         }}
//       >
//         Change title & count
//       </button>
//       <h1>Count : {count}</h1>
//     </div>
//   );
// };

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


//Another example of using multiple useState  by Multiple State piece (multiple useStates) 

// import { useState } from "react";

// // name, age, city, country

// /** Solution 1 - Multiple State piece (multiple useStates) */

// const App = () => {
//   const [name, setName] = useState("Aditya Keri");
//   const [age, setAge] = useState(1000);
//   const [city, setCity] = useState("New York");
//   const [country, setCountry] = useState("USA");

//   return (
//     <div>
//       <p>Name : {name}</p>
//       <p>Age : {age}</p>
//       <p>City : {city}</p>
//       <p>Country : {country}</p>
//       <hr />
//       {/* Aditya Keri -> Abhishek Keri */}
//       <button
//         onClick={() => {
//           setName("Abhishek Keri"); // RE-RENDER!!
//         }}
//       >
//         Change Name
//       </button>

//       {/* 1000 -> 23 */}
//       <button
//         onClick={() => {
//           setAge(23);
//         }}
//       >
//         Change Age
//       </button>

//       {/* New York - Hyderabad */}
//       <button
//         onClick={() => {
//           setCity("Hyderabad");
//         }}
//       >
//         Change City
//       </button>

//       {/* USA -> India */}
//       <button
//         onClick={() => {
//           setCountry("India");
//         }}
//       >
//         Change Country
//       </button>
//     </div>
//   );
// };

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


//Another example of using multiple useState by Use one function for multiple state calls as whenever we have
// function in onClick (any event directly i.ecalled inline function bcz we have a function inline of the onClicks)

// import { useState } from "react";

// // name, age, city, country

// /** Solution 2 - Use one function for multiple state calls */
// const App = () => {
//   const [name, setName] = useState("Aditya Keri");
//   const [age, setAge] = useState(1000);
//   const [city, setCity] = useState("New York");
//   const [country, setCountry] = useState("USA");

//   const updateUserDetails = (field) => {
//     switch (field) {
//       case "name":
//         setName("Abhishek Keri");
//         return;
//       case "age":
//         setAge(23);
//         return;
//       case "city":
//         setCity("Hyderabad");
//         return;
//       case "country":
//         setCountry("India");
//         return;
//       default:
//         return;
//     }
//   };

//   return (
//     <div>
//       <p>Name : {name}</p>
//       <p>Age : {age}</p>
//       <p>City : {city}</p>
//       <p>Country : {country}</p>
//       <hr />
//       {/* Aditya Keri -> Abhishek Keri */}
//       <button
//         onClick={() => {
//           updateUserDetails("name");
//         }}
//       >
//         Change Name
//       </button>

//       {/* 1000 -> 23 */}
//       <button
//         onClick={() => {
//           updateUserDetails("age");
//         }}
//       >
//         Change Age
//       </button>

//       {/* New York - Hyderabad */}
//       <button
//         onClick={() => {
//           updateUserDetails("city");
//         }}
//       >
//         Change City
//       </button>

//       {/* USA -> India */}
//       <button
//         onClick={() => {
//           updateUserDetails("country");
//         }}
//       >
//         Change Country
//       </button>
//     </div>
//   );
// };

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


//Another example of using multiple useState by  Use a mapping object instead of switch case 

// import { useState } from "react";

// // name, age, city, country

// /** Solution 3 - Use a mapping object instead of switch case */
// const App = () => {
//   const [name, setName] = useState("Aditya Keri");
//   const [age, setAge] = useState(1000);
//   const [city, setCity] = useState("New York");
//   const [country, setCountry] = useState("USA");

//   const MAPPING = {
//     name() {
//       setName("Abhishek Keri");
//     },
//     age() {
//       setAge(23);
//     },
//     city() {
//       setCity("Hyderabad");
//     },
//     country() {
//       setCountry("India");
//     },
//   };

//   const updateUserDetails = (field) => {
//     // field -> name
//     // MAPPING[field] -> name function
//     MAPPING[field]();  //MAPPING.name() means we call this name() function and when we calling it we doing setName("Abhishek Keri")
//   };

//   return (
//     <div>
//       <p>Name : {name}</p>
//       <p>Age : {age}</p>
//       <p>City : {city}</p>
//       <p>Country : {country}</p>
//       <hr />
//       {/* Aditya Keri -> Abhishek Keri */}
//       <button
//         onClick={() => {
//           updateUserDetails("name");
//         }}
//       >
//         Change Name
//       </button>

//       {/* 1000 -> 23 */}
//       <button
//         onClick={() => {
//           updateUserDetails("age");
//         }}
//       >
//         Change Age
//       </button>

//       {/* New York - Hyderabad */}
//       <button
//         onClick={() => {
//           updateUserDetails("city");
//         }}
//       >
//         Change City
//       </button>

//       {/* USA -> India */}
//       <button
//         onClick={() => {
//           updateUserDetails("country");
//         }}
//       >
//         Change Country
//       </button>
//     </div>
//   );
// };

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


//Another example of using multiple useState by Remove inline functions. Add ids. as preferablly don't use 
// inlne funciton use them as less as uh can.

// import { useState } from "react";

// // name, age, city, country

// /** Solution 4 - Remove inline functions. Add ids. */
// const App = () => {
//   const [name, setName] = useState("Aditya Keri");
//   const [age, setAge] = useState(1000);
//   const [city, setCity] = useState("New York");
//   const [country, setCountry] = useState("USA");

//   const MAPPING = {
//     name() {
//       setName("Abhishek Keri");
//     },
//     age() {
//       setAge(23);
//     },
//     city() {
//       setCity("Hyderabad");
//     },
//     country() {
//       setCountry("India");
//     },
//   };

//   const updateUserDetails = (event) => {
//     const field = event.target.name;

//     // field -> name
//     // MAPPING[field] -> name function
//     MAPPING[field]();
//   };

//   return (
//     <div>
//       <p>Name : {name}</p>
//       <p>Age : {age}</p>
//       <p>City : {city}</p>
//       <p>Country : {country}</p>
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
//     </div>
//   );
// };

// // Named Export
// export { App };


//---------------------------------------------------------------------------------------------------------


//Another example of using multiple useState as here we adding one more useState i.e. designation as well as
//we took two objects here one SET_STATE_MAPPING which carries just the function and STATE_VALUE_MAPPING 
// carries value for that so we cna use it in this way also as its not preferred to use it in this way but 
// for knowledge we understood it. 
 
import { useState } from "react";

// name, age, city, country

/** Solution 4 - Remove inline functions. Add ids. */
const App = () => {
  const [name, setName] = useState("Aditya Keri");
  const [age, setAge] = useState(1000);
  const [city, setCity] = useState("New York");
  const [country, setCountry] = useState("USA");
  const [designation, setDesignation] = useState("Software Developer");

  const SET_STATE_MAPPING = {
    name: setName,
    age: setAge,
    city: setCity,
    country: setCountry,
    designation: setDesignation,
  };


  // SET_STATE_MAPPING // setName
  // SET_STATE_MAPPING() //  setName()
  // SET_STATE_MAPPING('Abhishek Keri') //  setName('Abhishek Keri')

  const STATE_VALUE_MAPPING = {
    name: "Abhishek Keri",
    age: 23,
    city: "Hyderabad",
    country: "India",
    designation: "Driver",
  };


  const updateUserDetails = (event) => {
    const field = event.target.name;

    SET_STATE_MAPPING[field]();
    // SET_STATE_MAPPING[field]   -> setName
    // SET_STATE_MAPPING[field]() -> setName()
    // STATE_VALUE_MAPPING[field] -> Abhishek Keri

    const newStateValue = STATE_VALUE_MAPPING[field];
    SET_STATE_MAPPING[field](newStateValue);
  };

  return (
    <div>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>City : {city}</p>
      <p>Country : {country}</p>
      <p>Designation : {designation}</p>
      <hr />
      {/* Aditya Keri -> Abhishek Keri */}
      <button name="name" onClick={updateUserDetails}>
        Change Name
      </button>

      {/* 1000 -> 23 */}
      <button name="age" onClick={updateUserDetails}>
        Change Age
      </button>

      {/* New York - Hyderabad */}
      <button name="city" onClick={updateUserDetails}>
        Change City
      </button>

      {/* USA -> India */}
      <button name="country" onClick={updateUserDetails}>
        Change Country
      </button>

      {/* Software Developer -> Driver */}
      <button name="designation" onClick={updateUserDetails}>
        Change Designation
      </button>
    </div>
  );
};

// Named Export
export { App };



//Another example of using multiple useState as here we adding one more useState i.e. designation as well as 
// as they all belong to one specific collection which is user details so we can use only one state value 
// that is an object.
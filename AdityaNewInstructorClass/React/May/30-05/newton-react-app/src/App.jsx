import "./App.css";

// In this code we learning abt api calls using async and await as in the code we showing the loader till the time api 
// fetch the data and once api fetch the data we will stop loading and will show the data on UI.

// we make api call in useEffect bcoz firstly, making an api call is a side-effect & side-effect must present in
// useEffect and secondly mostly we want to call the api only once within the entire Component render as we dont 
// want to call the api multiple times just bcoz the Component got re-render. 
// as we defining the function and calling it Immediately and not using this function anywhere else with in entire
//  file so we used IIFE and when the api call in progress(data going to be fetch) we show loading indicator. 

//we using setUsers(data) bcoz if we want to show the data on UI(BROWSER) then we need to re-render the entire 
// comp. with the data and also if in future we add some depedencies in array or we have a button and when button
// clicks we want to call the api then data might be change.

// and we should not depend on array length to show loader bcoz if we do if (users.length === 0) return <Loader />
// and it will show in the first render which is correct bocz initally array is empty but what if from backend we got 
// empty array [] then setUsers([]) will be this and loading will happen bcoz users.length is 0 as user will think 
// that api call is happeing but reality is api call finished long back and as backend odnt have any data to give 
// as it gave empty array and its happening  thats why depend on loading state.    

// as in the first render loading will be false and users will be an empty array and we will not execute useEffect
// bcoz the first render is still in progress (as useEffect applies after the first render, if we use [] in useEffect)
// then it will check if condtion of laoding as it is false so it won't show loading and then it will map the users array
// which is an empty array and when we map over an empty array we return an empty array. basically we dont show
// anything in the first render. but immdeialty after the first render we call the fucntion inside useEffect and 
// immediatley loading state sets to true it happens so fast that we dont see anything on UI. and once it comes to 
// setLoading(false); setUsers(data); it re-renders again and as now users array have data so t maps it and we see
// the data on UI.  


// import { useEffect, useState } from "react";
// import Loader from "./components/Loader/Loader";


// const App = () => {
//   const [loading, setLoading] = useState(false);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     (async () => {
//       setLoading(true);  // loading start
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         //we don't have the data yet
//         const data = await response.json();
//         //we have the data here!
//         setLoading(false); // loading end 
//         setUsers(data);
//     })();
//   }, []);

//   if (loading) {
//     return <Loader />;
//   }

//   /*some people show an emoty screen in case if no data s return from the backend (if in real there are no users in backend means setUsers([])) */
//   if(users.length === 0) {
//     return <h2>No users in the system!</h2>;
//   }

//   return (
//     <main>
//       {users.map((user) => (
//         <h3>{user.name}</h3>
//       ))}
//     </main>
//   );
// };

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// Sam as above code as here we also cathing error by using try and catch as fetch does throw the error by itself 
// as if there is an error in api url it wont throw the error as it wont run obviously so we have to manually check
// that in response object in try bcoz in response object there is ok key which is set to false so if response.ok 
// is false it means there is an error with the fetch call and we are throwing the error manually and status key is
// 404 which means the api is not found and also loading is depend on api call it doesn't care whther the 
// as response.ok is true or false bcoz if its true then we want setLoading(false) and if its false still it has to be
// setLoading(false) bcoz the api call is actually done as loading state only cares whether the api call is done or not.
// as the api call is colpleted we setLoading(false) whether it gets the data or not

// import { useEffect, useState } from "react";
// import Loader from "./components/Loader/Loader";


// const App = () => {
//   const [loading, setLoading] = useState(false);
//   z

//   useEffect(() => {
//     (async () => {
//       setLoading(true);  // loading start
//       try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
//         //Error making the API call
//         if(!response.ok) {
//           throw new Error(`API failed status : ${response.status}`);  //new Error created an error object
//           // { message : `API failed status : ${response.status}` }
//         }
       
//         /* if response.ok is false then it will not execute the below code*/

//         //we don't have the data yet
//         const data = await response.json();
//         //we have the data here!
//         setLoading(false); // loading end 
//         setUsers(data);
        
//       } catch (e) {
//           // { message : `API failed status : ${response.status}` }
//           console.log("Error is", e.message);
//           setLoading(false); 
//       }
//     })();

//   }, []);

//   if (loading) {
//     return <Loader />;
//   }

//   /*some people show an emoty screen in case if no data s return from the backend (if in real there are no users in backend means setUsers([])) */
//   if(users.length === 0) {
//     return <h2>No users in the system!</h2>;
//   }

//   return (
//     <main>
//       {users.map((user) => (
//         <h3>{user.name}</h3>
//       ))}
//     </main>
//   );
// };

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


//Same as above code as above we using setLoading in try and in catch individually but instead of that we can
//use finally which will run after try and catch also and use setLoading(false) inside it.

// import { useEffect, useState } from "react";
// import Loader from "./components/Loader/Loader";


// const App = () => {
//   const [loading, setLoading] = useState(false);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     (async () => {
//       setLoading(true);  // loading start
//       try {
//         const response = await fetch( "https://jsonplaceholder.typicode.com/users");
        
//         //Error making the API call
//         if(!response.ok) {
//           throw new Error(`API failed status : ${response.status}`);  //new Error created an error object
//           // { message : `API failed status : ${response.status}` }
//         }
        
//         const data = await response.json();
//         setUsers(data);
          
//       } catch (e) {
//           // { message : `API failed status : ${response.status}` }
//           console.log("Error is", e.message);
//       } finally {
//         setLoading(false);
//       }
//     })();

//   }, []);

//   if (loading) {
//     return <Loader />;
//   }

//   /*some people show an empty screen in case if no data is return from the backend (if in real there are no users in backend means setUsers([])) */
//   if(users.length === 0) {
//     return <h2>No users in the system!</h2>;
//   }

//   return (
//     <main>
//       {users.map((user) => (
//         <h3>{user.name}</h3>
//       ))}
//     </main>
//   );
// };

// // Named Export
// export { App };


// if fetch is correct then we will apply code but before we doing setUsers(data) we were doing setLoading(false) but now 
// we doing it in finally later on . how its correct?


//--------------------------------------------------------------------------------------------------------


// same as above code as here we create another state to show the error msg in UI and instead of using obejct
// instead of these 3 states we use useReducer hook 

// import { useEffect, useState } from "react";
// import Loader from "./components/Loader/Loader";


// const App = () => {
//   const [loading, setLoading] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState("");


//   useEffect(() => {
//     (async () => {
//       setLoading(true); // loading start
//       try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");

//         /** Error making the API call */
//         if (!response.ok) {
//           throw new Error(`API failed status : ${response.status}`);
//           // { message: `API failed status : ${response.status}` }
//         }

//         const data = await response.json();
//         setUsers(data);

//       } catch (e) {
//         // { message: `API failed status : ${response.status}` }
//         // console.log("Error is", e.message);
//         setError(e.message);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);

//   if (loading) {                                                        //useState loading
//     return <Loader />;
//   }

//   if (error) {                                                         //useState error
//     return (
//       <div>
//         <img src="https://cdn-icons-png.flaticon.com/512/5804/5804966.png" height={150}/>
//         <h2 className="error">{error}</h2>
//       </div>
//     );
//   }

//   if (users.length === 0) {
//     return <h2>No users in the system!</h2>;
//   }

//   return (
//     <main>
//       {users.map((user) => (
//         <h3>{user.name}</h3>
//       ))}
//     </main>
//   );
// };

// // Named Export
// export { App };


//--------------------------------------------------------------------------------------------------------


// Same as above code as here we tried to do it by object but it will not work as the setState will not be 
// applied properly here as if we have multiple set State calls and all of them changing the same state then
// whatever we have at the end will only apply once 

// This code won't work correctly

// import { useEffect, useState } from "react";
// import Loader from "./components/Loader/Loader";


// const App = () => {
//   // const [loading, setLoading] = useState(false);
//   // const [users, setUsers] = useState([]);
//   // const [error, setError] = useState("");

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
//         setState({ ...state, users: data });
//       } catch (e) {
//         // { message: `API failed status : ${response.status}` }
//         // setError(e.message);
//         setState({ ...state, error: e.message });
//       } finally {
//         // setLoading(false);
//         setState({ ...state, loading: false });
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


//--------------------------------------------------------------------------------------------------------


// In this code we learend abt that we are aware that every set State causes the re-render of comp. as there are a3 set states
// so we might think that it will do 3 re-render in comp but in real thats not happen as what react does is it batches
// all the updates as it will collect all the set states and it will cause the re-render only once and update all 
// the three at once.  


// import { useEffect, useState } from "react";
// import Loader from "./components/Loader/Loader";

// // useState

// // App()

// const App = () => {
//   const [name, setName] = useState("");
//   const [city, setCity] = useState("");
//   const [country, setCountry] = useState("");

//   const handleUpdateDetails = () => {
//     setName("John Cena");
//     setCity("Brooklyn");
//     setCountry("USA");
//   };

//   console.log("Re-render");

//   return (
//     <main>
//       <h3>Name : {name}</h3>
//       <h3>City : {city}</h3>
//       <h3>Country : {country}</h3>
//       <hr />
//       <section>
//         <button onClick={handleUpdateDetails}>Update Details</button>
//       </section>
//     </main>
//   );
// };

// // Named Export
// export { App };


// in handleUpdateDetails function render will be once so is it bcoz it is under same function and doing samw thing means changing same thing means if 
// we have two set states then noramlly it will render twice or it will schdule the render and both render at once? or it doesnt matter whtehre they are with in the same function or doing same thing it applies for all

//if 2 different set state doing same thing let say doing count + 1 then in this case they will batch and 
// take the last one and render once only and if set state is doing different thing let say updating name, city 
// and country in this case it will schdule the update and render only once  


//--------------------------------------------------------------------------------------------------------


// Same as above code but here both setLoading are working as react not batching them and running the last one as we
// saw above as bcoz of await keyword its happening bcoz when we come across to setLoading(true) after that as therw
// is await all of code (from const response to setLoading(false) is suspended/paused) and meanwhile react will run 
// setLoading(true) and below code is suspended and will be sent to some other queue and once the fetch call is done
// (const response line) the rest of the code will comeback (from const data to setLoading(false)) to the main call 
// stack and at that point of loading is set to true right thats when we get the data back and we set the
// setLoading(false) this is why loading is working in this case.

//rest of the code is taken off from the CS and react will re-reder then comp with loading state of true and 
// once the fetch call is done we get the all the code that taken off back on CS and we set the loading state to 
// false as setLoading(true) will trigger 1 re-render and setUsers, setLoading(false) both together will trigger 1 re-render again.


// Understanding how the setLoading state creates two renders here

// import { useEffect, useState } from "react";
// import Loader from "./components/Loader/Loader";


// const App = () => {
//   const [loading, setLoading] = useState(false);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     (async () => {
//       setLoading(true);
//       // true   
//       const response = await fetch(                               
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const data = await response.json();
//       setUsers(data);
//       setLoading(false);
//     })();
//   }, []);

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <main>
//       {users.map((user) => (
//         <h3>{user.name}</h3>
//       ))}
//     </main>
//   );
// };

// // Named Export
// export { App }; 


//--------------------------------------------------------------------------------------------------------


// Another example of above+1 code as here two things happening at the same time. firstly batching when we have
//  multiple set state calls which changing the same exact thing in that react will only consider the last one as 
//  react will not consider the first two and secondly, react will not trigger the re-render for every single thing
//  as it will schedule the updates and later react will bacth all these three together as they doing the same
// exact thing as opearting on the same exact value so it will only consider the last one(closure and batching concept)    

// import { useEffect, useState } from "react";
// import Loader from "./components/Loader/Loader";


// const App = () => {
// const [count, setCount] = useState(0);

// //count -> 0
// const increment = () => {
//   setCount(count + 1);  //setCount(1)
//   setCount(count + 1);  //setCount(1)
//   setCount(count + 1);  //setCount(1)
// };

// return (
//   <main>
//     <h3>Count : {count}</h3>
//     <button onClick={increment}>Increment</button>
//   </main>
// )
// }
// // Named Export
// export { App }



//--------------------------------------------------------------------------------------------------------


// Same as above code as here we want setCount to be 1,2 and then 3 as above it was 1 in all three setCounts
// for that in setCount instead passing the value we can pass the function which will pass most Up To Date 
// value of Count as react passes the latest state of the count but it will still trigger only 1 re-render 
// instead of 3 bcoz BTS it is setCount(1), setCount(2) and setCount(3) and here react will batch them together 
// and pick the last one and thats why we see count 3 here and thumb rule of when to use setCount(1); or 
// setCount((prevCount) => prevCount + 1); whenever ur new state depends on the previous state use this  
// setCount((prevCount) => prevCount + 1);  

import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";


const App = () => {
const [count, setCount] = useState(0);

//count -> 0
const increment = () => {
  setCount((mostUpToDateCount) => {
    // mostUpToDateCount -> 0
    return mostUpToDateCount + 1;  //1
  });

  setCount((mostUpToDateCount) => {
    // mostUpToDateCount -> 1
    return mostUpToDateCount + 1;  //2
  });

  setCount((mostUpToDateCount) => {
    // mostUpToDateCount -> 2
    return mostUpToDateCount + 1;  //3
  });

  
  //Refactor the code nad made it short same thing above as here removed return and {} 
  // setCount((prevCount) => prevCount + 1);
  // setCount((prevCount) => prevCount + 1);
  // setCount((prevCount) => prevCount + 1);
};

return (
  <main>
    <h3>Count : {count}</h3>
    <button onClick={increment}>Increment</button>
  </main>
)
}
// Named Export
export { App }


// if fetch is correct then we will apply code but before we do setUsers(data) we were doing setLoading(false) but now 
// we doing setLoading(false) in finally later on after setUsers(data) .. how its correct?


// sir need to know when react will bacth all set states together and pick the last one ? is this when all of them doing same task!!
//  and also when batch them together and do only one render and update all set states at once ? when doing different task  
// like that set stating name, country and city?
//  so we can say batching will be done in evry case as what ahppens after that depends? 



// sir in one of the code uh took 3 set states i.e. city, name and country within the handleUpdateDetails function
// and told that react will schdule the update for all the three set states and render only once
// so is it happening bcoz they are within the same function or doing same thing or it is applicable for every
// set states doesnt matter they are with in the smae funciton or different or doing same task or differnt task
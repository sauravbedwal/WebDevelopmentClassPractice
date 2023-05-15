// here we gonna learn abt Props
import "./App.css"                                     

// Props
// Big topic in react
// Very very commonly used (Almost every component)


// // Before moving on to Props, let's talk about functions

// // A non-dynamic function (Static Function)
// // function greet() {
// //   return `Hey, How are you, Aditya ?`;
// // }
// // greet();

// // A dynamic function as whatever we pass as arguments based on that the retrun value will changed. retrun value will be changed and it will be dynamic based on what we passing asan argument and this concept here is called Props. 
// function greet(userName) {
//   return `Hey, How are you, ${userName} ?`;
// }
// greet("Aditya");
// greet("Trinay");
// greet("Mohammad");

// // Props is an idea which is inspired from above
// // Props -> Properties
// // They are properties which you can pass into a Component
// // Just like how you pass an argument to a function,
// // you can pass a prop to component

// Biggest advantage of Props -> RE-USE COMPONENTS!


// ----------------------------------------------------------------------------------------------------


//in this code we making components like flpkart but it is not appropriate/ideal way bcz evreything 
//is ssame in both the copmponenets except the component of h2 and h3 tag. 

// const OneplusCard = () => (
//   <div className="card">
//     <h2 className="title">One Plus</h2>
//     <h3>Beam Blue, In the Ear</h3>
//   </div>
// );

// const BoatCard = () => (
//   <div className="card">
//     <h2 className="title">boAT Rockerz</h2>
//     <h3>White Purity, On the Ear</h3>
//   </div>
// );

// export const App = () => {
//   return (
//     <div>
//       <OneplusCard />
//       <BoatCard />
//     </div>
//   )
// }


// ---------------------------------------------------------------------------------------------------


// In This Code we using props(an object) just like in function we use arguments to get the differnet return
// value we wll do the same here as we can realte this code to the above code which is simple function

// const ProductCard = (props) => {                    //basically we created one component, and this component render whatevre it wants based on the porps it recieved               
//   console.log(props);
//   return (
//   <div className="card">                
//     <h2 className="title">{props.productName}</h2>
//     <h3>{props.description}</h3>
//   </div>
//   );
// };

// export const App = () => {
//   return (                                            //like while calling the fucnition we pass arguments same we doing here for ProductCard as we passing the arguments here which is same as attributes used in html and i.e. in Jsx are props ex-: productName= "boat Rockerz" it is smae thing as greet("Trinay"); and watever props we cereate bts it will be converted in an object and that object will be pass to an actual component as an argument and like we do in function if we want other value we call the function wth differnt argument same we will do here.
//     <div>
//       <ProductCard                              
//       productName= "boat Rockerz"
//       description="White Purity, on the Ear" />
//       <ProductCard                              
//       productName= "Oneplus earbuds"
//       description="Beam Blue, in the Ear" />
//     </div>
//   );
// };

// // Behind the scenes :
// /* 
// <ProductCard
//   productName="boAT Rockerz"
//   description="White Purity, On the Ear"
// />
// React creates a SINGLE object of properties :
// props -> {
//   productName: "boAT Rockerz",
//   description: "White Purity, On the Ear"
// }
// props will be passed as an argument to the ProductCard component
// */

// // Just like how you call the same function again
// // by passing in different arguments ->
// // You can use the same component again, by passing in
// // different props


// ----------------------------------------------------------------------------------------------------


// In This Code we doing destructuring as we can destructure an object with in the function so we r destructuring
// props object as its not rule but its a good practice if we destructure then there will be no need of using 
// props.productNae, props.description etc.

// // props parameter here can be named ANYTHING
// const ProductCard = (props) => {
//   // Good practice to use destructuring here
//   // Otherwise you'll keep doing props.this, props.that
//     const { productName, description } = props;
//   return (
//     <div className="card">
//       <h2 className="title">{productName}</h2>
//       <h3>{description}</h3>
//     </div>
//   );
// };

// export const App = () => {
//   return (
//     <div className="container">
//       <ProductCard
//         productName="boAT Rockerz"
//         description="White Purity, On the Ear"
//       />
//       <ProductCard
//         someotherName="Oneplus earbuds"           //as here key is someotherName but above destructured productName and now productName doesn't exist here in such a case where we try to destructure a prop which does not exist on the object(props) in this case it will be undefined
//         description="Beam Blue, In the Ear"
//       />
//     </div>
//   );
// };


// ----------------------------------------------------------------------------------------------------


/* ------------------- Creating a component for Accordion ------------------- */
// we can create differnet components which have similar functionality. we can either destructure with in the function body or within the function parameter.  
// like we did in above code destructured within the function body and here within the parameter. and to use in paramter or with in the body threre is 
//no rule as if we have lot of props then destructure within the function body else in paramter.

// // Destructure in function parameter.
// const Accordion = ({ title, label }) => {
//   return (
//     <div>
//       <h3>{title}</h3>
//       <form>
//         <div>
//           <input type="checkbox" />
//           <label>{label}</label>
//         </div>
//       </form>
//     </div>
//   );
// };

// export const App = () => {
//   return (
//     <div>
//       <Accordion title="DISCOUNT" label="50% or more" />
//       <Accordion title="MICROPHONE PRESENT" label="Yes" />
//     </div>
//   );
// };


// ----------------------------------------------------------------------------------------------------


/* ---------------------------------------------- Props - Types -------------------------------------- */

// In This Code we learned abt Types of Props

// const UserProfile = (props) => {
//     const { userName, age, isMarried } = props;

//     return (                                      //a boolean value of true/false redner nothing thats why  <p>Married: {isMarried}</p>  is empty      
//         <div>
//             <p>Name: {userName}</p>
//             <p>Age: {age}</p>
//             <p>Married: {isMarried}</p>
//         </div>
//     );
// };

// export const App = () => {
//     return (                                  //apart from string if we want to add any other prop then we have to use JSX{} 
//         <main>
//             <UserProfile userName="Eric" age={20} isMarried={false} />
//         </main>
//     );
// };


// ----------------------------------------------------------------------------------------------------


//Same As Above Code as here we learned how to use boolean value so it can give us some value.

// const UserProfile = (props) => {
//     const { userName, age, isMarried } = props;
    
//     const married = isMarried ? "Yes" : "No";    //we can do it like this we did here in this line or directly in return


//     return (                                
//         <div>
//             <p>Name: {userName}</p>
//             <p>Age: {age}</p>
//             {/* <p>Married: {isMarried ? "Yes" : "No"}</p> */}
//             <p>Married: {married}</p>
//         </div> 
//     );
// };

// export const App = () => {
//     return (                                  //apart from string if we want to add any other prop then we have to use JSX{} 
//         <main>
//             <UserProfile userName="Eric" age={20} isMarried={false} />
//         </main>
//     );
// };


// ----------------------------------------------------------------------------------------------------


// Same as above code as here we have a condition that want to see the Married label only if the person is married
// as it should say Married Yes only if he marries right now and got to know abt how to do comments in JSX file

// const UserProfile = (props) => {
//     const { userName, age, isMarried } = props;

//     //   // Comments OUTSIDE JSX
// //   // first way
// //   /* second way */

//     return (                                
//         <div>
//             <p>Name: {userName}</p>
//             <p>Age: {age}</p>
//             {/* Comments INSIDE JSX */}
//        {/* Conditionally rendering the paragraph tag based on isMarried prop */}
//             {isMarried && <p>Married : Yes</p>}
//         </div> 
//     );
// };

// export const App = () => {
//     return (                                   
//         <main>
//             <UserProfile userName="Eric" age={20} isMarried={true} />
//         </main>
//     );
// };


// ----------------------------------------------------------------------------------------------------


// In This Code we passed array and object along with other props as learned thats how we passed whatever type of 
// props we want and ultimately we want UserProfile component should recive all the data which we pass in App component
//in this code we sent the individual/seperate props for every single value but we cna also do that make one object out of all of these things and send that one object

// // If you want to send individual props :
// const UserProfile = (props) => {
//       const { userName, age, isMarried, hobbies, userLocation } = props;
    
//       return (
//         <div>
//           <p>Name : {userName}</p>
//           <p>Age : {age} </p>
//           {isMarried && <p>Married: Yes </p>}
//           <p>Hobby : {hobbies[0]}</p>
//           <p>City : {userLocation.city}</p>
//           <p>Country : {userLocation.country}</p>
//         </div>
//       );
//     };
    
//     export const App = () => {
//       return (
//         <main>
//           <UserProfile
//             userName="Eric"
//             age={20}
//             isMarried={true}
//             hobbies={["Singing", "Sleeping"]}                             //can pass an array
//             userLocation={{ city: "Paris", country: "France" }}           //can pass an object
    
//         //     // If you want to send all props as one object
//         //     user={{
//         //       name: "Eric",
//         //       age: 20,
//         //       isMarried: true,
//         //       hobbies: ["Singing", "Sleeping"],
//         //       location: { city: "Paris", country: "France" },
//         //     }}
//           />
//         </main>
//       );
//     };
    

// ----------------------------------------------------------------------------------------------------


//Same As Above Code as in above code we sent the individual/seperate props for every single value but
//we can also make one object out of all of these things and send that one object here in this code we sent all props as one object

// // If you want to send all props as one object
// const UserProfile = (props) => {
//     const { user } = props;
  
//     return (
//       <div>
//         <p>Name : {user.name}</p>
//         <p>Age : {user.age} </p>
//         {user.isMarried && <p>Married: Yes </p>}
//         <p>Hobby : {user.hobbies[0]}</p>
//         <p>City : {user.location.city}</p>
//         <p>Country : {user.location.country}</p>
//       </div>
//     );
//   };
  
//   export const App = () => {
//     return (
//       <main>
//         <UserProfile  
//           user={{
//             name: "Eric",
//             age: 20,
//             isMarried: true,
//             hobbies: ["Singing", "Sleeping"],
//             location: { city: "Paris", country: "France" },
//           }}
//         />
//       </main>
//     );
//   };


// ----------------------------------------------------------------------------------------------------


// In This Code we learning abt destructuring in differenrt ways

// const UserProfile = (props) => {
//   // Nested desctructuring
//   const {
//     user: { name, age, isMarried, hobbies, location },
//   } = props;

//   // One way of nested destructuring
//   // const { name, age, isMarried, hobbies, location } = user;

//   return (
//     <div>
//       <p>Name : {name}</p>
//       <p>Age : {age} </p>
//       {isMarried && <p>Married: Yes </p>}
//       <p>Hobby : {hobbies[0]}</p>
//       <p>City : {location.city}</p>
//       <p>Country : {location.country}</p>
//     </div>
//   );
// };

// export const App = () => {
//   return (
//     <main>
//       <UserProfile
//         user={{
//           name: "Eric",
//           age: 20,
//           isMarried: true,
//           hobbies: ["Singing", "Sleeping"],
//           location: { city: "Paris", country: "France" },
//         }}
//       />
//     </main>
//   );
// };


// ----------------------------------------------------------------------------------------------------


/* --------------------- Conditional rendering via props -------------------- */

//In this code, as Based on the requirement of the UI, you can choose the conditional rendering we choosed to
//show green dot when online otherwise not.

// const UserChatCard = ({ user, isOnline }) => {
//     return (
//     <div className="user-chat-card-container">
//       <h3>{user}</h3>

//       {/* Circle Online Indicator */}
//       {isOnline && <span className="green-dot" />}
//     </div>
//   );
// };

// export const App = () => {
//   return (
//     <main>
//       <UserChatCard user="Aditya" isOnline={true} />
//       <UserChatCard user="Abdur" isOnline={false} />
//       <UserChatCard user="Afroj" isOnline={false} />
//     </main>
//   );
// };


// ----------------------------------------------------------------------------------------------------


//Same AS above code, as Based on the requirement of the UI, you can choose the conditional rendering we choosed to
//show green dot when online otherwise show Not Online with name.

const UserChatCard = ({ user, isOnline }) => {
  if (!isOnline) {
    return <p>{user} Not online!</p>;
  }

  return (
    <div className="user-chat-card-container">
      <h3>{user}</h3>

      {/* Circle Online Indicator */}
      <span className="green-dot" />
    </div>
  );
};

export const App = () => {
  return (
    <main>
      <UserChatCard user="Aditya" isOnline={true} />
      <UserChatCard user="Abdur" isOnline={false} />
      <UserChatCard user="Afroj" isOnline={false} />
    </main>
  );
};
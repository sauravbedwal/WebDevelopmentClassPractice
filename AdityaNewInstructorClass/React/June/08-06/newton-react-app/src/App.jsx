import { Component } from "react";
import "./App.css";

/*********************************************** class component *********************************************/


// In this code we learning abt calss component basic 

// // Constructor method is the first method that will be envoked by this class itself means this class App will
// // envoked the constructor method even before it envokes any other methods including the render method emasn that 
// // before the App Component is actually rendered it will envoked the constructor method

// //refer to handleClick function by using this.handleClick


// import { Component, useState } from "react";


// class App extends Component {                             //we can aslo write like class App extends React.Component(component is a base class) but in code we already destructured the Component 
//   constructor(props) {
//     super(props);                                         //it calls the Component constructor function and pass the props
    
//     //Bind event listeners
//     this.userName = "Aditya Keri";                        //its like useRef()
    
//     //Initializing the state
//     this.state = {                                        //created the state as it will always be an object
//       count: 0, 
//       userId: 1,
//     };                                       
//   }


//   increment = () => {
//     //nomrally without callback
//     // this.setState({
//     //   count: this.setState.count + 1,
//     // });


//     //using callback as whenever we have a new state depends on previous state
//     // this.setState((prevState) => {
//     //   return { count: prevState.count + 1 };
//     // });
    

//     //if we want to run something immedialtely after this specific state has been set(change) so we can give a second argument which is also a function again
//     this.setState((prevState) => {
//       return { count: prevState.count + 1 };
//     }, () => {
//       console.log('State update happened!');
//     });

//   };


  
// // thats what happen in State in Class and function Component
// // Class Componenents 
// // newState -> { ...originalState, ...newState }

// // Function Componenents 
// // newState -> { ...newState }


//   //Don't use this pattern since you'll have to work with the 'this' keyword. 
//   // handkeClick() {}

//   render() {                                               //render method is equivallent of the function body that we have in a function Component as render is manadatory method and we return jsx from it.
//     return (
//       <main>
//         <h1>User Name : {this.userName}</h1>
//         <h1>User ID : {this.state.userId}</h1>
//         <hr />
//         <h1>Counter : {this.state.count}</h1>
//         <button onClick={this.increment}>Increment</button>        
//       </main>
//     );
//   }
// }


// // when we useState in function component and we doing setUser only with id then city will not be there as we overriding 
// // the previous state. but in Class component replacement does not happen as it merges the state. means after setState
// // in class Component state still contain the userId but the count will change/increase coz that we incrementing.
// //No need to worry abt the other state as we only have to change the state that we want to change and rest of it 
// // will remain as it is.

// // function Child(props) {
// //   const [user, setUser] = useState({ id: 1, city: "Hyderabad" });

// //   function handleUpdate() {
// //     setUser({ id:2 });
// //   }
// // }

// export { App };


//----------------------------------------------------------------------------------------------------------


//In this code we learning abt 3 differnt methods regarding three dferent phases i.e mounting, updatea and unmounting
// The first phase is the mounting phase and in the mounting phase the first method that gets called is the Constructor
// method and the Constructor method is only called once throughout the LifeCycle of the class component then next we call   
// is render method and render the code on screen/UI and once the render is complete and react will update the DOM
// it will then call componentDidMount after componentDidMount whenever we call the this.setState or whenver the component
// gets a new props we again first a fall call the render method and as we are in update phase right now we will call 
// componentDidUpdate and then componentDidUnmount. 

// import { Component, useState } from "react";


// class App extends Component {                             //we can aslo write like class App extends React.Component(component is a base class) but in code we already destructured the Component 
//   constructor(props) {
//     super(props);                                         //it calls the Component constructor function and pass the props
    
//     //Bind event listeners
//     this.userName = "Aditya Keri";                        //its like useRef()
    
//     //Initializing the state
//     this.state = {                                        //created the state as it will always be an object
//       count: 0, 
//       userId: 1,
//       title: null,
//     };                                       
//   }


//   componentDidMount() {
//     //make an API call

//     (async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//       const { title } = await response.json();
      
//       //set the data
//       this.setState({
//         title,
//       });
//     })();
//   };


//   componentDidUpdate(prevProps) {

//   }

//   componentWillUnmount() {}


//   increment = () => {
//      //nomrally without callback
// //     // this.setState({
// //     //   count: this.setState.count + 1,
// //     // });


// //     //using callback as whenever we have a new state depends on previous state
// //     // this.setState((prevState) => {
// //     //   return { count: prevState.count + 1 };
// //     // });
    

// //     //if we want to run something immedialtely after this specific state has been set(change) so we can give a second argument which is also a function again
//     this.setState((prevState) => {
//       return { count: prevState.count + 1 };
//     }, () => {
//       console.log('State update happened!');
//     });

//   };


//   render() {                                               //render method is equivallent of the function body that we have in a function Component as render is manadatory method and we return jsx from it.
//     return (
//       <main>
//         <h1>User Name : {this.userName}</h1>
//         <h1>User ID : {this.state.userId}</h1>
//         <hr />
//         <h1>Counter : {this.state.count}</h1>
//         <button onClick={this.increment}>Increment</button>   
//         <hr />
//         <h1>Title : {this.state.title}</h1>     
//       </main>
//     );
//   }
// }

// export { App };


//----------------------------------------------------------------------------------------------------------


// In this code child component re-rendering again and again as it doesn't need to do that here as child is 
// not receving any props, not even doing anything with props and it doesn't have state in it as here in this
// case its fine if it re-renders again as its very small component but if it is very big component with lot of 
// complexicities then there we will face very performance issues as we don't want to render the child component 
// unless the props actually change as we are not passing any props here so we want this child component to 
// render only once and never again as here we saw the problem and in below code we have the solution.

   
// import { useState, memo } from "react";

// //memo -> Higher Order Component

// //a function(withSuperPower()) which takes one component and returns another component which has some special 
// // abilites or special method in it we call that function a Higher Order Component/Function.

// // const ChildWithSuperPower = withSuperPower(Child);

// const Child = () => {
//   console.log("child re-render");
//   return <h1>Child</h1>;
// };

// export const App = () => {
//   const [count, setCount] = useState(0);
  
//   return (
//     <main>
//       <h1>Count : {count}</h1>
//       <button onClick={() => setCount((c) =>  c + 1 ) }>Increment</button>
//       <hr />
//       <Child />
//     </main>
//   );
// };


//----------------------------------------------------------------------------------------------------------


// Same as above code as here we don't want to render the child component unless the props actually change as
// we are not passing any props here so we want this child component to render only once and never again and
// this happened bcz of memo function as it will make sure tht only if the prop have changed then this memo will
// re-run this Component otherwise not and as memo returns the Optimized version so if we use optimized version
// and don't pass any props at all which means props never changed for this Component so during the first render 
// memo will run this Component and whatever jsx has been return in the component (Child) that passed in memo()
//  function that will be stored in cache now next time when the App comp. will re-render react see the in 
// retrun of App <OptimizedChild /> and tell memo and memo will check if props have changed not not and if props
// have not changed whatever it has saved in cache before that will be returned.  

//here we do two cases : not passing any prop and passing prop but prop not changing as before it was 0 and 
// when App comp re-renders then also it is 0 in <OptimizedChild />


// import { useState, memo } from "react";
// // memo -> Higher Order Component

// const Child = () => {
//   console.log("Child re-render");
//   return <h1>Child</h1>;
// };

// // Cache : <h1>Child</h1>

// //Higher Order Component/Function 
// const OptimizedChild = memo(Child);                //we gave the comp(Child) to this memo function and the memo function will return an Optimized version of this comp

// export const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <main>
//       <h1>Count : {count} </h1>
//       <button onClick={() => setCount((c) => c + 1)}>Increment</button>

//       <OptimizedChild />
//       {/* we pased the prop but its not changing  */}
//       <OptimizedChild count={0} />
//       {/* <OptimizedChild userName="Newton" /> */}
//     </main>
//   );
// }; 


//----------------------------------------------------------------------------------------------------------


//Same as above code as here the prop is changing so memo will check that prop is changing so it won't return
// the jsx stored in cache as now the Child component will also re-render and return the new prop value. 

import { useState, memo } from "react";

// memo -> Higher Order Component

const Child = ({ count }) => {
  console.log("Child re-render");
  return <h1>Count in child : {count}</h1>;
};

// Cache : <h1>Child</h1>

const OptimizedChild = memo(Child);

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Count : {count} </h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>

      <OptimizedChild count={count} />
    </main>
  );
}; 
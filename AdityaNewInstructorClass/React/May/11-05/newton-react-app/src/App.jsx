import { Component } from 'react';
import { useState } from 'react';
import './App.css';

// State - State is a value with in the component which can change over the time based on certain interactions/actions
//ex- like we agve two players and there score is 0 but over the time the score will cahnge bcoz of certain interaction/action 
// as let say now 1st player have 1 and 2nd player have 0 and this is called State value.


//render
 
//<App /> ->  we use in main.jsx file 
//React -> App() ->  means react will call the function 
 
// As react will call the function and all the code written in App() will run and whatever we return in App()
// will be send in main.jsx and replace <App /> in root.render(<App />). but as we clicked on increment 
// and value now is 1 but here react is not rerednering(calling the function again) bcoz we used simple vaiable as it will 
// work only when we use State varibale. As we want when we cilck on incremenet button the value will change
// and we expect that count will be 1 but react is not rerendering due to normal variable.    

// earlier if we want to use State as we want our component to have state we have to use class component only as function
// component wont work. but now we can use react hooks.

// react hooks - react hooks are simply functions which react only exposes which we can use with in a function 
// componenet to achieve the same funcitonality as that of the class componenets. which means whatecer the features 
// were not there in funciton componenet but exists in class component now are possible to use with in a function
// component with the help omf react hoo and now function components we use majorly using react hooks. 

// and now we learn abt first react hook i.e. useState and there are rule for react hooks:
// 1. every react hook must begin with the word called use and then entire thing in camelCase like useState, 
// useCallback, useEffect, useMemo etc. and later on we also create our own custom hooks and they will also 
// must begin with use word. 


// In this code we just used simple variable and want increment to be done means value to be changed with time
// but thats not possible.

// const App = () => {
//     let count = 0;

//     const increment = () => {
//       count = count + 1;
//       // count += 1;
//       // count ++;
//       // ++count;
//     };

//     return (
//       <main>
//         <h1>Count : {count} </h1>
//         <button onClick={increment}>Increment</button>
//       </main>
//     );
//   };

//   export { App };


//---------------------------------------------------------------------------------------------------------



//useState() returns one state value means used to handle or manage some State value within the comp. as here
//we want to manage the count whihc means the count here is the State value bcoz tht is the only thing that 
// keep changing over time means useState is a react hook which menas it is a function which when we call it,
//  it basically returns couple of things. we can relate this to the function taht we made in useState.html  

//useState is use to return one array with in which the count value will basically be the State value which will 
// keep changing over the time and setCount is a function with the help of which we can keep changing the 
// State value of actual count. 

// In this code we learning abt State as well as making a dynamic UI as till now whatever project we made there 
// no value was changing with the time due to any ineration/action but here we doing a code where value will change.
// as here we want the value of count keep changing as first when it render means react call App() 0 will be return
// as State value of count abd when we click on the increment button then handleClick function will call and 
// wahtevree there in the function will run i.e. setCount(99) whihc means previous value will be hcnge wiht this 
// new value  as whenever we change the State using the funciton i.e. setCount with in a comp. react will rerender 
// the entire comp and as App() run again so this time count value is 99.

// const App = () => {

//   // in useState function call, we passing initialValue i.e. 0 (bcoz count is 0 in beginnning) and once we pass it 
//   // useState will return us an array which will be destructure and with in the array the first value we get
//   // is the State value which will keep changing over time and we can call it count and second value is a
//   // function which we will use to change/update this State value over time.  
  
//   const [count, setCount] =  useState(0);   //we can use any other name also for the function but standard is if having State value named count then function can be setCount or if firstName then setFirstName.  
  
//   const handleIncrement = () => {
//     //Change the count state
//     setCount(99);   //we changing the value from 0 to 99 
//   };

//   return (
//       <main>
//         <h1>Count : {count} </h1>
//         <button onClick={handleIncrement}>Increment</button>
//       </main>
//     );
//   }; 

//   export { App };


//---------------------------------------------------------------------------------------------------------


// Same As Above code as here we want to change the State value incrmented by 1 each time when we click on 
// increment button now in first render it will show us the value of count is 0 and when we click on increment
// then handleIncrement comp. will be called in which we calling setCount(count + 1); so it will rerender again 
// (MEANS WHOLE CODE(each line) WILL RUN AGAIN) and show us the value of count 1 i.e. count + 1.

// whenever a state of a Component changes, React will re-render the Component 
//Re-render -> App(); 

// const App = () => {

//   const [count, setCount] =  useState(0);  
  
//   const handleIncrement = () => {
//     //Change the count state
//     setCount(count + 1);  //0 to 1 
//   };

//   return (
//       <main>
//         <h1>Count : {count} </h1>
//         <button onClick={handleIncrement}>Increment</button>
//       </main>
//     );
//   }; 

//   export { App };


//---------------------------------------------------------------------------------------------------------


// In this code we taking another example of useState here we have a switch whihc habve intinital value of off and 
// with time its state value will be change from off to on whenever we click on button.
// as in the first render the value of status will be off bcoz of the inintal value and the only way we can chnage 
// the state value of status is only using setStatus(function).   


// const App = () => {
//   const [status, setStatus] = useState("off");

//   const handleStatusChange = () => {
//     setStatus("on");
//   };

//   return (
//       <main>
//         <h1>Status : {status} </h1>
//         <button onClick={handleStatusChange}>Change Status</button>
//       </main>
//     );
//   }; 

//   export { App };


//---------------------------------------------------------------------------------------------------------


//Same as above code as here we just used boolean value to change the status from off to on.

// const App = () => {
//   const [isStatusOn, setIsStatusOn] = useState(false);

//   const handleStatusChange = () => {
//     setIsStatusOn(true);              //false -> true
//   };

//   return (
//       <main>
//         <h1>Status : {isStatusOn ? "on" : "off"} </h1>
//         <button onClick={handleStatusChange}>Change Status</button>
//       </main>
//     );
//   }; 

//   export { App };


//---------------------------------------------------------------------------------------------------------


//Same as above code as here we to change the status from off to on and on to off also. and for that we can use not operator
// i.e. !isStatusOn as it will do opposite of whatever the boolean value is avaiable there whether true or false.


const App = () => {
  const [isStatusOn, setIsStatusOn] = useState(false);

  const handleStatusChange = () => {
    setIsStatusOn(!isStatusOn);
  };

  return (
      <main>
        <h1>Status : {isStatusOn ? "on" : "off"} </h1>
        <button onClick={handleStatusChange}>Change Status</button>
      </main>
    );
  }; 

  export { App };

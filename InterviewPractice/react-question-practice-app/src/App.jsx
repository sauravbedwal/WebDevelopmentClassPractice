import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //stopwatch code

  // const [min, setMin] = useState(0);
  // const [sec, setSec] = useState(0);
  // const [button, setButton] = useState(false);
  // let id, id2;
  // useEffect(() => {
  //   if (button) {
  //     if (sec < 60) {
  //       id = setInterval(() => {
  //         setSec((prev) => prev + 1);
  //       }, 1000);
  //       id2 = setInterval(() => {
  //         setMin((prev) => prev + 1);
  //       }, 59000);
  //     }
  //   } else {
  //     clearInterval(id);
  //     setSec(0);
  //   }
  //   return () => {
  //     clearInterval(id);
  //   };
  // }, [button]);
  // const secHandler = () => {
  //   setButton(true);
  // };
  // const minHandler = () => {
  //   setButton(false);
  //   setSec(0);
  //   setMin(0);
  // };
  // return (
  //   <div>
  //     <h1>Stopwatch</h1>
  //     <h2>
  //       {min} : {sec}
  //     </h2>
  //     {button ? (
  //       <button onClick={minHandler}>stop</button>
  //     ) : (
  //       <button onClick={secHandler}>start</button>
  //     )}
  //   </div>
  // );


  /******************************************************************************************************/

  //Stopwatch different method

  // const [min, setMin] = useState(0);
  // const [sec, setSec] = useState(0);
  // const [button, setButton] = useState(false);
  // let id;
  // useEffect(() => {
  //   if (button) {
  //     id = setInterval(() => {
  //       setSec((prev) => {
  //         if (prev < 59) {
  //           return prev + 1;
  //         } else {
  //           setSec(0);
  //           setMin((prevMin) => prevMin + 1);
  //         }
  //       });
  //     }, 1000);
  //   } else {
  //     setSec(0);
  //     setMin(0);
  //     clearInterval(id);
  //   }
  //   return () => {
  //     clearInterval(id);
  //   };
  // }, [button]);
  // const secHandler = () => {
  //   setButton(true);
  // };
  // const minHandler = () => {
  //   setButton(false);
  // };
  // return (
  //   <div>
  //     <h1>Stopwatch</h1>
  //     <h2>
  //       {min} : {sec}
  //     </h2>
  //     {button ? (
  //       <button onClick={minHandler}>stop</button>
  //     ) : (
  //       <button onClick={secHandler}>start</button>
  //     )}
  //   </div>
  // );


  /******************************************************************************************************/
  
  //Countdown
  
  // const [count, setCount] = useState(10);
  // const [click, setClick] = useState(false);
  // let id;
  // useEffect(() => {
  //   if (click) {
  //     id = setInterval(() => {
  //       if (count > 0) {
  //         setCount(count - 1);
  //       }
  //     }, 1000);
  //     return () => {
  //       clearInterval(id);
  //     };
  //   }
  // }, [click, count]);
  // const startHandler = () => {
  //   setClick(true);
  // };
  // const stopHandler = () => {
  //   setClick(false);
  //   setCount(0);
  // };
  // return (
  //   <div>
  //     <h1>Countdown</h1>
  //     <h2>{count}</h2>
  //     {click && count != 0 ? (
  //       <button onClick={stopHandler}>Stop</button>
  //     ) : (
  //       <button onClick={startHandler}>Start</button>
  //     )}
  //   </div>
  // );
  
  
  /******************************************************************************************************/
  
  //output the no. of abcd
  
  // const [input, setInput] = useState("");
  // const inputHandler = (e) => {
  //   console.log(e.target.value);
  //   setInput(e.target.value);
  // };
  // console.log(input);
  //  input.reduce(function(acc, curr) => {
  //   if(acc){
  //   }
  //   else {
  //     acc[]
  //   }
  // }, {})
  // return (
  //   <div>
  //     <input type="text" value={input} onChange={inputHandler} />
  //     <button>Click</button>
  //     <div>{input}</div>
  //   </div>
  // );
}

export default App;

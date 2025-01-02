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
  /******************************************************************************************************/
  //Make a pagination of 5 pages and show 10 items in each page
  // const itemsPerPage = 10;
  // const itemArray = Array.from(
  //   { length: 50 },
  //   (_, index) => `Item${index + 1}`
  // );
  // const [currentPage, setCurrentPage] = useState(1);
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const currentItems = itemArray.slice(startIndex, endIndex);
  // const totalPages = Math.ceil(itemArray.length / itemsPerPage);
  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };
  // return (
  //   <div className="App">
  //     <div>
  //       {currentItems.map((item) => (
  //         <p key={item}>{item}</p>
  //       ))}
  //     </div>
  //     <div>
  //       {Array.from({ length: totalPages }).map((_, index) => (
  //         <button key={index} onClick={() => handlePageChange(index + 1)}>
  //           {index + 1}
  //         </button>
  //       ))}
  //     </div>
  //   </div>
  // );
  /******************************************************************************************************/
  //  Build a simple Todo App where users can: 1. Add a new todo. 2. Mark a todo as completed. 3. Delete a todo. 4. View a list of todos (both completed and pending).
  // 5. also saved the data in local Storage
  // const [todoText, setTodoText] = useState("");
  // let newTodoSavedData = JSON.parse(localStorage.getItem("newTodo"));
  // const [newTodo, setNewTodo] = useState(newTodoSavedData);
  // const handleAddMe = () => {
  //   if (todoText === "") {
  //     return;
  //   }
  //   setNewTodo([...newTodo, todoText]);
  //   setTodoText("");
  // };
  // // console.log("newTodo", newTodo);
  // const handleDelete = (index) => {
  //   // console.log("delete", index);
  //   const filterNewToDo = newTodo.filter((todo, indexes) => {
  //     // console.log("todo", index);
  //     return indexes != index;
  //   });
  //   // console.log("filterNewToDo", filterNewToDo);
  //   setNewTodo(filterNewToDo);
  // };
  // useEffect(() => {
  //   localStorage.setItem("newTodo", JSON.stringify(newTodo));
  // }, [newTodo]);
  // return (
  //   <div className="container">
  //     <h1>Todo App</h1>
  //     <div className="todo-inputButton">
  //       <input
  //         type="text"
  //         value={todoText}
  //         onChange={(e) => {
  //           setTodoText(e.target.value);
  //           // console.log("Todo", todoText);
  //         }}
  //       />
  //       <button onClick={handleAddMe}>Add Me</button>
  //     </div>
  //     {newTodo.length > 0 && (
  //       <div className="todo-deleteButton">
  //         <ul>
  //           {newTodo.map((todo, index) => {
  //             return (
  //               <div
  //                 style={{
  //                   display: "flex",
  //                   justifyContent: "space-between",
  //                   alignItems: "center",
  //                   padding: "10px",
  //                 }}
  //                 key={index}
  //               >
  //                 <li>{todo}</li>
  //                 <button
  //                   onClick={() => handleDelete(index)}
  //                   className="delete-btn"
  //                 >
  //                   Delete
  //                 </button>
  //               </div>
  //             );
  //           })}
  //         </ul>
  //       </div>
  //     )}
  //   </div>
  // );
  /******************************************************************************************************/
  // Implement a Search Filter
  // const [items, setItems] = useState([
  //   "Apple",
  //   "Banana",
  //   "Cherry",
  //   "Date",
  //   "Elderberry",
  //   "Fig",
  //   "Grape",
  // ]);
  // const [search, setSearch] = useState("");
  // const [filterItems, setFilterItems] = useState(items);
  // useEffect(() => {
  //   const filtered = items.filter((item) =>
  //     item.toLowerCase().includes(search.toLowerCase())
  //   );
  //   console.log("ffiltered", filtered);
  //   setFilterItems(filtered);
  // }, [search]);
  // return (
  //   <div className="App">
  //     <input
  //       type="text"
  //       value={search}
  //       onChange={(e) => {
  //         setSearch(e.target.value);
  //       }}
  //     />
  //     <div>
  //       <ul style={{ listStyle: "none" }}>
  //         {filterItems.map((item) => {
  //           return <li style={{ padding: "10px" }}>{item}</li>;
  //         })}
  //       </ul>
  //     </div>
  //     {/* <SearchFilter /> */}
  //   </div>
  // );
}

export default App;

//App.jsx file

// A Component
// - A JavaScript function
// - returns markup (HTML)

// helloWorld - Camel Case
// HelloWorld - Pascal Case
// hello_world - Snake Case

// Normal Functions ✅
function App() {
  return (
    <div>
      <header>Header is here</header>
      <main>Main content</main>
      <footer>Footer is here</footer>
    </div>
  );
}

// <App /> ->

export default App;

// Arrow Functions ✅
// const App = () => <h1>Hello World</h1>;

// <App /> -> <h1>Hello, mom!</h1>




// ============================================================

//main.jsx file

import React from "react";      
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<App />);x  



// --------------------------------My Notes-----------------------------------------------------------


//can use this just change name -  npm create vite@latest newton-react-app -- --template react-swc

//if we do it by other method then only - npm i library name or if want just the linraries on which react app depend npm i

// node modules carry libraries
//if we import something and dont use any ./ then it means we importing something from node modules folder.
//ex - import React from "react";  //default export as we can also name it ANgular or anythingWeWant but standard is React

// <!-- prettier so when we save it it will automatically will come in format --> 

// As if we do same thing by js then we need to access the element first then we create eac element by DOM and do append 

// now in react we use Components as React is a Componenet based framework. Component is a mix of  markup(html) + StyleSheet(css) + logic(js) inside one single file/function
// a component is a  js function whihc returns some markup(html)
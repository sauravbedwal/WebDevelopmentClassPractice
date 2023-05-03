function Button() {
  return <button>Click me!</button>;
}

export default Button;





// creating components folder and inside that differnet folders and files for differnet Components(functions)
// is not a rule as its a standrard that people follow othwrwise we can do that normall also thatwe learend in
//previous 2-3 classes

// and instead of Button.jsx if this file named index.jsx then in App.jsx while importing it we dont 
// need to write import Button from "./components/Button/index.jsx"; as we can just write
// import Button from "./components/Button"; and it will automatically select index.jsx file by default
// but in this we will get file by name of index.jsx when we search button as button kwyword will be at last and 
// not clear AND if we name it a Button.jsx then we need to write it as "./components/Button/Button"; 
// and if we want a middle way in which we have to use in App.jsx only  import Button from "./components/Button"; 
// and on search we get Button keyword first to identify then we need to create a file index.jsx in Button folder 
// with Button.jsx and in index.jsx need to import Button component and then export it from index.jsx as index.jsx 
//is just a mediator between Button.jsx and App.jsx
// as its not rulea standard but personally i feel no need of indexedDB.jsx as we can simply write "./components/Button/Button";
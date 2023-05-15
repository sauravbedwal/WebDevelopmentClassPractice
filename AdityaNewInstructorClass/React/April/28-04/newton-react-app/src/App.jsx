//as sir created only one App.jsx file in which first he told abt rules of jsx and then erase it all and 
// started making website using multiple Components in same App.jsx file as it is not written anywhere OR RESTRICTED
// that we can't have multiple files like App.jsx so for better understandng and clean code i have created one more file
// like App.jsx by the name of 2Apptwo.jsx in which we will are learning abt  Conditional Rendering and in App.jsx learning abt JSX expression


//We learning abt JSX Expressions

// in this code we made src attribute dynamic and learned abt it
// // export const App = () => {
// //   return <h1>Hello World</h1>;
// // };

// // as if we want to make src attribute inside img tag dynamic here then we can simply use {} with in jsx and add whatever expressions we want.
// // (expression - 3+2 bcoz it returns us value and below we have a variable which contains the source image which means if we use imageSource in src then imageSource is also a variable ad whenever we have a variable which contains any value that variable is itself an expression like a string "Aditya", number 10 all r expression same way if we have const sum = 50 then sum is also an expression)
// export const App = () => {
//   const imageSource = "https://avatarfiles.alphacoders.com/324/324411.jpg";
//   const description = "Miles Moracles";
//   return <img src={imageSource} alt={description} />;                    //earlier we were giving static url here in src return <img src="https://avatarfiles.alphacoders.com/324/324411.jpg" alt="Miles Moracles" />; as it is not dynamic
// };



// in this code we are taking same above code but instead of using two seperate variables like above we convert this into an object
// export const App = () => {
//   const object = {
//     source: "https://avatarfiles.alphacoders.com/324/324411.jpg",
//     description: "Miles Moracles",
//   };

//   return <img src={object.source} alt={object.description} />;
// };



// another example of above code as i we wnat to make disabled attribute dynamic
// export const App = () => {
//   const isDisabled = true;
//   return <button disabled={isDisabled}>Click Me</button>;
// };



// another example of above code as if we want to make disabled attribute dynamic by giving some conditon also
// export const App = () => {
//   const disable = "yes";
//   // return <button disabled={disable === "yes" ? true : false}>Click Me</button>;     //ternerary opreator is always an expression as it will produce us the value back here we producing either the value of true or false
//   return <button disabled={disable === "yes"}>Click Me</button>;                      //we can short the code as its an expression(boolean) it will return a boolean always so we will get autoatically true or false
// };



// another example of above code as if we want to make title attribute dynamic
// export const App = () => {
//   // return <h1 title="I am a tooltip!">Hello! Hover Over Me</h1>;           //static title attribute

//   //Hovered over by - Aditya   (want the name of person dynamic)

//   const userName = "Aditya";
//   return <h1 title={`Hovered over by - ${userName}`}>Hello! Hover Over Me</h1>;     //but if we use string "" then we can't add anything dynamic but if we want dynamic then we have to use JSX expression {}
// };



// in this code using jsx in actual content bcoz we want to make userName dynamic as above we using jsx in attributes
// as whenever we hear abt dynamic inside jsx then we have to use jsx exression i.e. {}
// export const App = () => {
//   const userName = "Miles Morales";
//   return <h1>Hello! I am {userName}</h1>;
// };



//another example of above code with condition also
// export const App = () => {
//   const userName = true ? "Abdur" : "Ganesh"; //instead of true if we have null  then we gonna get Ganesh as null is a falsy value but if we have "something" instead of true then we gonna get Abdur bcoz string "" is truthy value
//   return <h1>Hello! I am {userName}</h1>;
// };



// another example of above code
// export const App = () => {
//     // return <h1>Hello! I am {true ? "Aditya" : "Keri"}</h1>;
//     return <h1>Hello! I am {"Aditya" && "Keri"}</h1>;
//   };



// in this code we learning that in a vairbale we can pass the other JSX also
// export const App = () => {
//   const element = <h1>Hello there!</h1> ;                           //variables not only store string or number as ghey can also store some other JSX and simply retun the variable
//   return element;
// };



//another example of above code
// export const App = () => {
//   const element = (
//   <div>
//     <h1>GOOD MORNING</h1>
//     <p>Hello</p>
//     <p>World</p>
//   </div>
//   );
//     return element;
// };



// in this code we want to add some dynamic elements
// in return firstly we embedding the entire element itself then we embedding simply a string and then 
// we having an element outside (<p></p>) and inside that element we embedding the number
// and there is differnce between return element; (by this we only get <h1> element) and return <div>{element}</div>; (and as we leanred of we want somthing dynamic we have to use JSX{})
// export const App = () => {
//   const userName = "Aditya";
//   const score = 1000;
//   const element = <h1>Good Morning!</h1>; 
//   return (                           ////we can write score as {score} like this also as n<p> tag we used by ourself
//     <div>
//       {element}                                                
//       {userName}
//       <p>{score}</p>                                                                            
//     </div>
//   );                           
//   };



//another example of above code
export const App = () => {
    const userName = "Aditya";
    const score = 1000;
    const element = <h1>Good Morning!</h1>; 
    return (                           
      <div>                                                
        {userName}
        {true && element}
        {false && element}
        {true && element}
        {false && element}                                                                         
      </div>
    );                           
    }; 
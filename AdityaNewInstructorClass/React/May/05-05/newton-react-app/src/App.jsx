import { Component } from "react"
import "./App.css"


/* ---------------------------------------- Concept of Children Prop -------------------------------------- */


// (continuing from 04-05 class)

// In this code we passing a prop from APP() to <A /> and whatever Props we pass to <A /> component are immutable
// means we can't change the prop that we getting from a component mean if we passing some prop from parent to child 
// component the child can never change that prop as child can simply use it bcoz prop is coming from the parent as 
// the parent owns the prop. Like whatever prop we send frm App Comp. to A Comp. this prop can never be change 
// within the A Comp. as A comp. can access the prop but it cannot change the city prop in any way.
 
// const C = () => <h1>Hello C</h1>;
// const B = () => <C />;
// const A = ({ city }) => <B />;

// export const App = (props) => {
//   props.city = 'something';                //as we cant do this
//   return (             
//     <main className="container">
//       <A city="Hyderabad"/>
//     </main>
//   );
// };


// ------------------------------------------------------------------------------------------------------


// In this code we want to pass city prop from the App() Comp to the C() comp but if we observe A() and B() 
// comp have the access to city prop but they dont need the access as they acting like a middle-man as they 
// just forwarding the prop 

// const C = ({ city }) => <h1>Hello {city}</h1>;
// const B = ({ city }) => <C city={city} />;
// const A = ({ city }) => <B city={city} />;

// export const App = (props) => {
//   return (             
//     <main className="container">
//       <A city="Hyderabad"/>
//     </main>
//   );
// };


// ------------------------------------------------------------------------------------------------------


// In this code we want to pass city prop from the App() Comp to the C() comp but not passing it through A() & 
//B() comp but by composition and child we Can do that as composition is making small-small components like header,
//button and then used them together and merge them and make a bigger UI. 

// const C = ({ city }) => <h1>Hello {city}</h1>;
// const B = ({ children }) => children;                          //we writing children without any {} bcz as its only one statement so we can ignore the componenet {} and return keyword and also can ignore jsx {}.
// const A = ({ children }) => children;

// export const App = (props) => {
//   return (             
//     <main className="container">
//       <A>
//         <B>
//           <C city="Bangalore" />
//         </B>
//       </A>
//     </main>
//   );
// };


// ------------------------------------------------------------------------------------------------------


//Another exammple of above code as here we doing a code by prop drilling in which we sending the prop from 
//App() to A() then A() to B() such that A() don't need it as we are doing cox there's no such connection directly.


// // Prop drilling (issue):
// // You send props from a top level parent all the way down to a child
// // Even though the intermediate components don't need it

// // You "drill" down the props from the top to the bottom


// const ComponentB = ({ city }) => {
//   return <h1>Hello {city}</h1>;
// };

// const ComponentA = ({ city }) => {
//   return <ComponentB city={city} />;                   //city prop is not needed here but we r passing bcoz we can't pass city prop direct to B() as we dont have any connection
// };

// export const App = () => {
//   return (
//     <main className="container">
//       <ComponentA city="Hyderabad" />
//     </main>
//   );
// };


// ------------------------------------------------------------------------------------------------------


//Same as Above Code exammple of above as here we doing a code by composition and children.

// const ComponentB = ({ city }) => {
//   return <h1>Hello {city}</h1>;
// };

// // props -> { children:  <ComponentB city="Hyderabad" /> }
// const ComponentA = ({ children }) => {
//   return children;                                      //this is rendering <ComponentB city="Hyderabad" />
// };

// export const App = () => {
//   return (
//     <main className="container">
//       <ComponentA>
//         <ComponentB city="Hyderabad" />
//       </ComponentA>
//     </main>
//   );
// };


// ------------------------------------------------------------------------------------------------------


//In this code we compared the both the way os using tags i.e. <Heading /> and <Heading></Heading> and found 
// that by <Heading></Heading> we can also use children prop and normal props also unlike <Heading />

// // If children is not sent to the component, children is undefined
// const Heading = ({title, children}) => {
//   return (
//     <div>
//       <h1>{title}</h1>;
//       {children};
//     </div>
//   )
// };

// export const App = () => {
//   return (
//     <main className="container">
//       {/* This will be replaced by whatever the component returns */}
//       {/* <Heading title="Hello Newton" /> */}

//       {/* This ALSO will be replaced by whatever the component returns */}
//       <Heading title="Hello World">
//         {/* Whatever you add in BETWEEN the opening and closing tags is the children prop */}
//         <h2>Smaller heading</h2>
//       </Heading>
//     </main>
//   );
// };


// ------------------------------------------------------------------------------------------------------


// In this code we learning that if we dont want to return anything else apart from children as we just want to 
// return whatwver is passed in children as we dont want to add anything else then we can do it this directly.
//but if we have other thing also then we can't use children directly as then we need to use jsx{}.as use 
// children with in the {} if its happeing within the jsx but if we outside the jsx then direclty use children 

// const ComponentA = ({children}) => {
// // return children;                                  //used directly as there is no jsx/anything else

// return (
//   <div>
//     <h1> Hello Newton</h1>
//     {children}
//   </div>
// );
// };

// export const App = () => {
//   return (                                          //used in {} as its inside the jsx
//     <main className="container">
//       <ComponentA>
//         <h1>Hello world</h1>
//       </ComponentA>
//     </main>
//   );
// };

// ------------------------------------------------------------------------------------------------------


//Another example of above code in context of map function of when to use children in {} and when directly without {}

// export const App = () => {
// const scores = [1, 2, 3];
  
//   // return (                                             //used map inside {} as its inside the jsx
//   // <main className="container">
//   //   {scores.map((score) => {
//   //     return <h1>{score}</h1>
//   //   })}
//   // </main>


//   //// Directly used scores.map if there's no JSX involved
//   return scores.map((score) => <h1>{score}</h1>);           //used map directly wihtout {} and as in return there is single statement so ignored the {} and return keyword of map function.     
// };
  

// ------------------------------------------------------------------------------------------------------


//Another example of above code of when to use children in {} and when direcly without {} 

// const element = <h1>Hello Newton</h1>;

// // If you want to use it within JSX, use curly braces (JSX expression)
// // return <div>{element}</div>;

// //Directly use element if there's no JSX involved
// return element;


// ------------------------------------------------------------------------------------------------------  


//Another example of above code in contec of function as when to use children in {} and when direcly 
// without {} and function call is an expression bcoz it returns us somhthng.

// export const App = () => {
//   // whenever we call this fucntion getSomeJsx() it will return -> <h4>This is some nice JSX</h4>
//   const getSomeJsx = () => {
//     return <h4>This is some nice JSX</h4>;
//   };
  
//   //here getSomeJsx() will be replaced by whatever is returned by the function
//   // return <div>{getSomeJsx()}</div>;
  
//   //Directly use element if there's no JSX involved
//   return getSomeJsx();
// };


// ------------------------------------------------------------------------------------------------------  


//Another example of above code in context of condition as when to use children in {} and when direcly 
// without {} and function call is an expression bcoz it returns us somhthng.

// export const App = () => {
//   const isSafe = true;
  
//   // If you want to use it within JSX i.e. <section></section> here, then use curly braces (JSX expression)
//   // return <section>{isSafe && <h1>I'm feeling secure!</h1>}</section>;

//   //Directly use element if there's no JSX involved
//   return isSafe && <h1>I'm feeling secure!</h1>;
// };


// ------------------------------------------------------------------------------------------------------  


// In this code we learning that when to use children prop by that we can use the component multiple time and 
// no need to add className or any other attribute like title etc in the Button component <Button></Button> 
// inside App() as we can simply once add that in <button></button> tag and also get an option to change the 
// content if want to change of any other <Button></Button> 


// // When to use "children" prop
// // Use it when you want to create a generic BOX around some JSX

// const Button = ({ children }) => {
//   return (
//   <button title="This is a button" className="btn">
//     {children}
//   </button>
//   );
// };


// export const App = () => {
//   return (                                       
//     <main className="container">
//       <Button>Click Me</Button>
//       <Button>Click Me</Button>
//       <Button>Click Me</Button>
//       <Button>Changed the content</Button>
//     </main>
//   )
//   };


// ------------------------------------------------------------------------------------------------------  

// In this code We want to make <Input /> Component as the replacement of <input /> tag so we want that we can
//  pass any of the attributes in <Input /> component also as same as we can pass in <input /> tag/element.

// Like: // <input type="text" id="name" name="name" minlength="4" maxlength="8" size="10" />
        // <Input type="text" id="name" name="name" minlength="4" maxlength="8" size="10" />

// but by this way we dont know what attributes will be added for ex placeholder if we add placeholder <input />
//  tag & destructure it like type,id and other attributes but then if it doesnt use in <Input /> then it will
//  show it undefined or what if we missedout few porps in <input /> tag and user send it in <Input /> and 
// what if we added 5-6 other attributes in <Input /> comp that didnt used in <input /> tag which is not 
// right and approritate 
  

//// Bad way of accepting multiple props
// const Input = ({ type, id, name, minlength, maxlength, size }) => {
//   return (
//     <input 
//     className="input" 
//     type={type} 
//     id={id} 
//     name={name} 
//     minlength={minlength} 
//     maxlength={maxlength} 
//     size={size} 
//     />
//   );
// }

// export const App = () => {
//   return (
//     <Input
//   type="text" 
//   id="name" 
//   name="name" 
//   minlength="4" 
//   maxlength="8" 
//   size="10" 
//   />
//   );
// };


// ------------------------------------------------------------------------------------------------------  


// Same as above code as In this code We want to make <Input /> Component as the replacement of <input /> tag 
// so we want that we can pass any of the attributes in <Input /> component also as same as we can pass in
//  <input /> tag/element but here we used an object of all the properties that we want to add or input tag
//  contains and then spread the object in App() so we can get all the porperties

// const Input = ({ type, id, name, minlength, maxlength, size, placeholder }) => {
//   // Bad way of accepting multiple props
//   return (
//     <input 
//     className="input" 
//     type={type} 
//     id={id} 
//     name={name} 
//     minlength={minlength} 
//     maxlength={maxlength} 
//     size={size} 
//     placeholder={placeholder}
//     />
//   );
// }


// export const App = () => {

// // Passing an object as props to a HTML element
//   const inputProps = {
//     type: "text",
//     id: "name",
//     name: "name",
//     // value: "Abhi"
//   };

// // whatever attributes we pass to an html element will be called props in react world which means the attributes
// //  that we sent to html element they are also called props and we can create an object which contain all these props.
//   // return <input type="text" id= "name" name="name" />;
  
// // spreading all the porperties of inputProps object  i.e. return <input type="text" id= "name" name="name" />; 
// //as there is no diff. in this & above return <input/> tag
//   return <input {...inputProps}/>;
// };


// ------------------------------------------------------------------------------------------------------  


//Another example of above code 

// const Simple = (props) => {
// console.log(props);
// return <h1>I am a Simple component</h1>;
// };

// export const App = () => {

//   //one way of sending props to Simple comp.
//   // return <Simple movie="Spider-Man" actor="Miles Morales" rating={5} />;
  

//   //Another way of sending props to Simple comp. as it is the sme exact thing we doing above
  
//   const simpleProps = {
//     movie: "Spider-Man",
//     actor: "Miles Morales",
//     rating: 5,
//   };

//   return <Simple {...simpleProps} />;
// }


// ------------------------------------------------------------------------------------------------------


// In this code As we know that props is itself an object so we can spread it as we spreaded inputProps and 
//simpleProps object and now whatever the props we use in <Input /> comp and now don't have to worry what props
//  we r getting or which prop we need to add in Input() component like earlier in above examples we destructured
// many props and was not sure that whther will get them or not now no matter what props has been sent all of them
// will been sent inside <input /> for sure as nothing will be missed as we see in above code examples placeholder
// but it didn't used as now whatever props we get we are spreading it and will get only those neither extra nor 
// miss any prop.     

// const Input = ({props}) => {
//   // Good way of accepting multiple props
//   return <input {...props} />;
// };


// export const App = () => {

//   return <Input type= "text" id= "name" name= "name" minlength="4" />;
  
//   //as if someplace we use our input with ine prop then also there will be no issue as it will spread the one 
//   //prop or if we use 10 other prop then it willl simply spread them als inside the <input /> elemenet   
//   // return <Input type= "text"/>;

// };


// ------------------------------------------------------------------------------------------------------


//Same as above code as here we learened we can also add className in <input /> tag but if we add className 
// in <Input /> and in <input /> element sreading the props after className then className of <Input /> will override 
// the className of <input /> and if props spreaded first then vice-versa gonna happen with className. 
// so the order matters here  

// const Input = ({props}) => {
//   // Good way of accepting multiple props
//   return <input className="input" {...props} />;
// };


// export const App = () => {

//   return <Input className="another-input" type= "text" id= "name" name= "name" minlength="4" />;
// };



// ------------------------------------------------------------------------------------------------------


//Same as above code as here we learened we can also add className but one className overriding other as per the 
// order but HERE we learned thaat we can use both the className

// const Input = ({props}) => {
//   return <input {...props} className={`input ${props.className || ""}`}  />;
// };


// export const App = () => {

//   return <Input className="border-color" type= "text" id= "name" name= "name" minlength="4" />;
// };



// ------------------------------------------------------------------------------------------------------


//Another exmple of above code as here we learened we can also add className but one className overriding other as per the 
// order but HERE we learned thaat we can use both the className  as here we destructured the className first 
// and then whatever the other props we might get collecting in one object i.e ...restProps and same object we 
// spreading in <input /> element


// const Input = ({className, ...restProps}) => {
//   return <input {...restProps} className={`input ${className || ""}`}  />;
// };


// export const App = () => {

//   return <Input className="border-color" type= "text" id= "name" name= "name" minlength="4" />;
// };


// ------------------------------------------------------------------------------------------------------


//Another exmple of above code as  we can give default value in the parameter also as we destructuring 
// className but if className is not given then we have an empty string as the default value of the className
// and then whatever the other props we might get collecting in one object i.e ...restProps and same object we 
// spreading in <input /> element


const Input = ({className= "", ...restProps}) => {
  return <input {...restProps} className={`input ${className}`}  />;
};


export const App = () => {

  return <Input className="border-color" type= "text" id= "name" name= "name" minlength="4" />;
};
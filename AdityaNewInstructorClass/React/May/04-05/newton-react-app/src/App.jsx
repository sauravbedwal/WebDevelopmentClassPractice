import { Component } from "react";
import "./App.css";

// //In this code we have an array of objects in which we want to enclose the name and score in hr and h4 tag
// // resppectively so we can make it like a box same like flipkart amazon.

// export const App = () =>{
//   const students = [
//     {
//       id: 1,
//       name: "Jessica",
//       score: 50,
//     },
//     {
//       id: 2,
//       name: "Amrutha",
//       score: 70,
//     },
//     {
//       id: 3,
//       name: "Tasha",
//       score: 40,
//     },
//     {
//       id: 4,
//       name: "Kiran",
//       score: 100,
//     },
//   ];

//   return (
//     <main className="container">
//       {students.map((student) => (
//         <div className="card">
//           <h3>{student.name}</h3>
//           <h4>{student.score}</h4>
//         </div>
//       ))}
//     </main>
//   );
// };


// ------------------------------------------------------------------------------------------------------


// if we have an Array and we give it to map i.e. Array.map then map   will convert it to an Array of jsx elements as map is used to tranform something
// but if we have an Array and we give it to filter i.e. Array.filter then filter will give us Array of filtered elements (not JSX elements).

//In this code we have an array of objects in which we want to enclose the name and score in hr and h4 tag
// resppectively and want to filter out the data as pr the condtion like (score >= 70).

// export const App = () =>{
//   const students = [
//     {
//       id: 1,
//       name: "Jessica",
//       score: 50,
//     },
//     {
//       id: 2,
//       name: "Amrutha",
//       score: 70,
//     },
//     {
//       id: 3,
//       name: "Tasha",
//       score: 40,
//     },
//     {
//       id: 4,
//       name: "Kiran",
//       score: 100,
//     },
//   ];

//   return (
//     <main className="container">
//       {students.map((student) => (
//         <div className="card">
//           <h3>{student.name}</h3>
//           <h4>{student.score}</h4>
//         </div>
//       ))}
//     </main>
//   );
// };


// ------------------------------------------------------------------------------------------------------


// In this code we have an array of phones and we want to add this things one by one into our UI(App) and we can
// done this by using html tags i.e. <h1>iphone</h1> and once its ready we can simply render this in our UI

// export const App = () => {
//   const phones = ["iPhone", "Samsung", "Pixel"];

//   /*this is the poorest way to do this bcoz if no. of ekements are 100 then we cant do the smae thing as its not appropriate*/
//   return (
//     <main className="container">
//       <h1>{phones[0]}</h1>
//       <h1>{phones[1]}</h1>
//       <h1>{phones[2]}</h1>
//     </main>
//   );
// };


// ------------------------------------------------------------------------------------------------------


// In this code we have an array of phones and we want to add this things one by one into our UI(App) and we can
// done this by using html tags i.e. <h1>iphone</h1> and here we have done that by having an array of JSX elements manually for nderstanding as backend will
//always give us nomral array of elements like const phones = ["iPhone", "Samsung", "Pixel"]; and once its ready we can simply render this in our UI
//not approriate way as its for understadning that we took an array of js called phonesWithJsx

// export const App = () => {
//   const phones = ["iPhone", "Samsung", "Pixel"];

//   /*multiple jsx is present within an array*/
//   const phonesWithJsx = [<h1>iPhone</h1>, <h1>Samsung</h1>, <h1>Pixel</h1>];

//   return (
//     /*embedded an array which have jsx elements as normak array wont work it will be shows]n as a string*/
//     <main className="container">{phonesWithJsx}</main>
//   );
// };


// ---------------------------------------------------------------------------------------------------------


// In this code we have an array of phones and we want to add this things one by one into our UI(App) and we can
// done this by using html tags i.e. <h1>iphone</h1> and BACKEND will give us the data in array like ["iphone", "Samsung, "Pixel"]
//and we have to convert that into this <h1>iphone</h1> and once its ready we can simply render this in our UI
//as here we creating new variabe and using forOf loop but the better approach is using map method.

// export const App = () => {
//   const phones = ["iPhone", "Samsung", "Pixel"];

// //Using forOf loop
// const phonesWithJsx = [];
// for(const phone of phones) {
//   const jsxElement = <h1>{phone}</h1>;                          //here it will take all elements one by one<h1>iphone</h1>

//   phonesWithJsx.push(jsxElement);
// }

//   return (
//     <main className="container">{phonesWithJsx}</main>      //as its react so we can directly add here the array of jsx elements.
//   );
// };


// ------------------------------------------------------------------------------------------------------


// Same as above code but here we used mao function which is the correct and appropriate way as we are
// tranforming every single element of an array into jsx element and map is the best way to tranform the items

// export const App = () => {
//   const phones = ["iPhone", "Samsung", "Pixel"];

// //Using map function
// // const phonesWithJsx = phones.map((phone) => {
// //   const jsxElement = <h1>{phone}</h1>;

// //   return jsxElement;                                             // whatever we return in map function will store in a new array which means we created the elmenet one by one and pushed them into the array i.e. phonesWithJsx
// // })

// //   return (
// //     <main className="container">{phonesWithJsx}</main>
// //   );
// // };

// /*and for loop is not an expression but map mehtod is an expression bcoz it returns us the value and thats
// why we can also use this within the jsx directly instead of using new variable i.e. phonesWithJsx (done above)
// which we cannot do by using normal for loop bcoz jsx expression only can take ohter expressions*/

// return (                                                 //as this mao functoin convert elements in this <h1>{phone}</h1> and it will form an array and as we learned if we have an array of jsx elements thenr eact will simoly render them one by one (we did in upper code)
//   <main className="container">
//     {phones.map((phone) => {
//     const jsxElement = <h1>{phone}</h1>;

//     return jsxElement;
//   })}
//   </main>
// );
// };


// ------------------------------------------------------------------------------------------------------


// In this code we have an array and we want to render these elements enclosed in <h1> tag and we did this by map function

// export const App = () => {
// const scores = [10, 20, 30, 40, 50];

// // convert above array into this:
// //as we want to add same thing in jsx in return below but we cant simply write this array there as we have to do this by using map function
// //[<h1>10</h1>, <h1>20</h1>, <h1>30</h1>, <h1>40</h1>, <h1>50</h1>];

// return (
//   <main className="container">
//     {scores.map((score) => {
//     return <h1>Score is: {score}</h1>                                //as its an arrow function so if we want we cna remove return keyword of this line and {} also
// })}
//   </main>
// );
// };


// ------------------------------------------------------------------------------------------------------


// In this code we have an array and we want to render the elements which have score of 30 and above enclosed in <h1> tag
//and h=we did this here by using filter and then map fucntion.

// export const App = () => {
//   const scores = [10, 20, 30, 40, 50];

//   // convert above array first into this:
//   // [ 30, 40, 50];

//   const filteredScores = scores.filter((score) => {
//     return score >= 30;
//   });

//   // and once we got the above array then we can convert above array into this:
//   // [<h1>30</h1>, <h1>40</h1>, <h1>50</h1>];

//   return (
//     <main className="container">
//       {filteredScores.map((score) => {
//       return <h1>Score is: {score}</h1>
//   })}
//     </main>
//   );
//   };


// ------------------------------------------------------------------------------------------------------


// Same as above code as In this code we have an array and we want to render the elements which have score of
// 30 and above enclosed in <h1> tag and we did this here by using filter and then map fucntion but here we
// learned that if we dont want to use the extra variable filteredScores and directly want to use in return keyword

// export const App = () => {
//   const scores = [10, 20, 30, 40, 50];

//   // [ 30, 40, 50];

//   // [<h1>30</h1>, <h1>40</h1>, <h1>50</h1>];

//   return (
//     <main className="container">
//       { scores.filter((score) => {
//     return score >= 30;
//   })
//   .map((score) => {
//       return <h1>Score is: {score}</h1>
//   })}
//     </main>
//   );
//   };


// ------------------------------------------------------------------------------------------------------


// In This code we have an array and we want to render one card for every single item but within the card we
// want to render the score and the result as result will be fail if its less than 30 and it will be pass for
// equal and more than 30 and score and result will be enclosed in h4 and h3 tag respectively

// export const App = () => {
//   const scores = [10, 20, 30, 40, 50];

//   return (
//     <main className="container">
//       {scores.map((score) => (
//         <div className="card">
//           <h4>Score: {score}</h4>;
//           <h3>Result: {score >= 30 ? "Pass" : "Fail"}</h3>;
//         </div>
//   ))};
//     </main>
//   );
//   };


// ------------------------------------------------------------------------------------------------------


// In This code we have an array of objects and we want to render this anf want to create hr for name and h3 for rating

// export const App = () => {
//   const phones = [
//     {
//       id: 1,
//       name: "iPhone",
//       rating: 4,
//     },
//     {
//       id: 2,
//       name: "Vivo",
//       rating: 4.5,
//     },
//     {
//       id: 3,
//       name: "Pixel",
//       rating: 5,
//     },
//   ];

//   return (
// <main className="container">
//     {phones.map((phone) => {                                      //whenever there is no return then there must be () for formatting and we using div bcoz wihtout div(major tags) we cant use multiple lines it will throw error as we can use only one tag/line and if there is multiple tags/line then we have to enclosed them in major tags like div, main, header etc.
//     return <div className="card">
//         <h3>{phone.name}</h3>
//         <h4>{phone.rating}</h4>
//       </div>
//     })}
//   </main>
//   );
// };

// // doubt is here when return the code i used porper the way it used with {} and return keyword but sir used () for froamtiting then
// // he used div and inside that these two tags m doubt is right now m also doing same duv and tags inside it cox if we have more tags then one we have to c=encosed it in <div> or <></>
// // but whenever we neglect { } and return that only happens when there is one statement and here it is 2 statements then why the did that ?
// // and enclosed it in div .. did they make a single statment to it by doing this>?


// ------------------------------------------------------------------------------------------------------


// In This code we have an array of objects and we want to render it and want to create h4 for name and h3 for
// rating and we done this by if else conditon

// export const App = () => {
//   const phones = [
//     {
//       id: 1,
//       name: "iPhone",
//       rating: 4,
//     },
//     {
//       id: 2,
//       name: "Vivo",
//       rating: 4.5,
//     },
//     {
//       id: 3,
//       name: "Pixel",
//       rating: 5,
//     },
//   ];

//   return (
//     <main className="container">
//       {phones.map((phone) => {
//         if (phone.name === "Pixel") {
//           return (
//             <div>
//               <h3>Best Phone Ever - Pixel</h3>
//               <h4>It doesn't even need ratings!</h4>
//             </div>
//           );
//         }

//         if (phone.name === "iPhone") {
//           return <h5>iPhone is an iPhone. Enough Said</h5>;
//         }

//         if (phone.name === "Vivo") {
//           return (
//             <div>
//               <h6>Vivo is just okay</h6>
//             </div>
//           );
//         }
//       })}
//     </main>
//   );
// };


// ------------------------------------------------------------------------------------------------------


// In This code we have an array of objects and we want to render it and want to create h4 for name and h3 for
// rating and we done this by switch case

// export const App = () => {
//   const phones = [
//     {
//       id: 1,
//       name: "iPhone",
//       rating: 4,
//     },
//     {
//       id: 2,
//       name: "Vivo",
//       rating: 4.5,
//     },
//     {
//       id: 3,
//       name: "Pixel",
//       rating: 5,
//     },
//   ];

//   return (
//     <main className="container">
//       {phones.map((phone) => {
//         switch (phone.name) {
//           case "iPhone":
//             return <h5>iPhone is an iPhone. Enough Said</h5>;

//           case "Pixel":
//             return (
//               <div>
//                 <h3>Best Phone Ever - Pixel</h3>
//                 <h4>It doesn't even need ratings!</h4>
//               </div>
//             );

//           case "Vivo":
//             return (
//               <div>
//                 <h6>Vivo is just okay</h6>
//               </div>
//             );

//           default:
//             return <h1>Not found!!!</h1>;
//         }
//       })}
//     </main>
//   );
// };


// ------------------------------------------------------------------------------------------------------


// In This code we have an array of objects and we want to render it and want to create h4 for name and h3 for
// rating and we done this by creating an object i.e. MAPPING

// export const App = () => {
//   const phones = [
//     {
//       id: 1,
//       name: "iPhone",
//       rating: 4,
//     },
//     {
//       id: 2,
//       name: "Vivo",
//       rating: 4.5,
//     },
//     {
//       id: 3,
//       name: "Pixel",
//       rating: 5,
//     },
//   ];

//   const MAPPING = {
//     iPhone: <h5>iPhone is an iPhone. Enough Said</h5>,
//     Vivo: (
//       <div>
//         <h6>Vivo is just okay</h6>
//       </div>
//     ),
//     Pixel: (
//       <div>
//         <h3>Best Phone Ever - Pixel</h3>
//         <h4>It doesn't even need ratings!</h4>
//       </div>
//     ),
//   };

//   return (
//     <main className="container">
//       {phones.map((phone) => {                              //phone here is whole one object of the array
//           return MAPPING[phone.name];                       //this simply means MAPPING["iphone"] which is MAPPING.iphone ir will gives us teh value of iphone prperty of that object same as if we do object.name so it will give us name value.
//       })}
//     </main>
//   );
// };



/* ---------------------------------------- Concept of Children Prop -------------------------------------- */



//In this code we doing the same thing that we learned that we added an attribute in Button tag in return and
//  destructured it in Button component and used it 

// const Button = ({label}) => {
// return <button>{label}</button>
// }

// export const App = () => {
//   return (
//     <main>
//        <Button label="Click Me"/>                 
//     </main>
//   );
// };


// ------------------------------------------------------------------------------------------------------


// In this code instead of doing things like above code, we learning abt children prop as we learned we can
//  give attributes like <Button title="Click Me" /> like this but we cna do same thing by this method also 
// with the help of children attribute as her ewe wanted to make the text dynamic i.e. "Click Me" so we used it 
// in b/w <Button></Button> so now parent componenet i.e. App() here will tell this button what to render in 
// <button></button> tags which are inside the Button Component.

// const Button = (props) => {
// return <button>{props.children}</button>
// }

// //props => { children : "Click Me" }
// //as props is an object which have a special property i.e. children property which is whatever we adding 
// // in b/w the opening and closing bracket of the component will be consider as props.children or children.

// export const App = () => {
//   return (
//     <main>
//        <Button>Click Me</Button>                 
//     </main>
//   );
// };


// ------------------------------------------------------------------------------------------------------


//Same as above code as here we used children prop for the content b/w Layput tag and inside it we used 
// Button componenet and the content b/w button tag which is children prop we used in Button component also 
//props object of layout contain the children prop. whihc cnontain all the content b/w the <Layout></Layout> tag

// const Button = (props) => {
//   return <button>{props.children}</button>               //here children prop is taking the content of b/w Button tags in Layout component
//   }
  

//  const Layout = ({ children }) => {                     //here we destrutured the props.children that we learnt before
//   return (                                             //here children prop is taking the content of b/w Layout tags in return       
//     <main>
//       {children}                     
//       <Button>Click Me</Button>
//     </main>
//   );
//  };

//   export const App = () => {
//     return (                                    //here props .children is the entire thing b/w <Layout><Layout/> 
//          <main className="container">
//       <Layout>
//         <header>This is a header</header>
//         <nav>This is a nav</nav>
//         <h1>Heading here</h1>
//         <footer>Footer here</footer>
//       </Layout>
//     </main>                 
//     );
//   };


// ------------------------------------------------------------------------------------------------------


//Same as above code but here we also added the attributes inside layout tag in return that we destructured in 
// layout component and then we used it in Button tag which is there in Layout component and as now its same as 
// now Button tag have attrbute same as layout tag so what we did now for layout tag we gonna do for Button tag
// and in Button component we destructured the buttonName and used it in title attirubute. As here we took the prop.
// from Layout tag to Button tag and from Button tag to Button component  

const Button = ({buttonName, children}) => {
  return <button title={buttonName}>{children}</button>               //here children prop is taking the content of b/w Button tags in Layout component
  }
  

 const Layout = ({ children, buttonTitle }) => {                     //here we destrutured the props.children that we learnt before
  return (                                             //here children prop is taking the content of b/w Layout tags in return       
    <main>
      {children}                     
      <Button buttonName={buttonTitle}>Click Me</Button>
    </main>
  );
 };

  export const App = () => {
    return (                                    //here props .children is the entire thing b/w <Layout><Layout/> 
         <main className="container">
      <Layout buttonTitle="Some Title">
        <header>This is a header</header>
        <nav>This is a nav</nav>
        <h1>Heading here</h1>
        <footer>Footer here</footer>
      </Layout>
    </main>                 
    );
  };
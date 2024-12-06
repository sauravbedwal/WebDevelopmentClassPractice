// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

//// **** here we simply rendering react elements(siblings) in root2  ****

// 1st is the tag, 2nd is the attribute object, 3rd is what we put inside can use array for more elements
const heading2 = React.createElement(
  "h1",
  {
    id: "title", // tag attributes passed in object
  },
  "Hi Everyone by React"
);
console.log(heading); // shows object made by react

const heading3 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Hi, second example of creating element"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading2, heading3] //if we want to create a div contianer and inside that want heading2 and heading3 then we pass children in an array
);

//put the element we want as root/base element as root2 is the base element, so we use ReactDOM the api given to do this work
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(container); // passing the react element inside the DOM, render method takes element and modifies the DOM

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

//// **** here we simply creating the react element and rending it on browser through root ****

// //render method is responsible to take heading object & covert it into (HTML)heading tag & put it up on the DOM.
// // 1st is the tag, 2nd is the attribute object, 3rd is what we put inside can use array for more elements

// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
// console.log(heading); //object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(heading);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

//// **** here we creating nested html element thorugh React.createElement ****

// /**
//  *
//  Nested tags
//  *
// <div id="parent">
//     <div id="child">
//         <h1>I'm h1 tag</h1>
//     </div>
// </div>
//  */

// /* Nested HTML structure inside react */

// // const parent = React.createElement(
// //     "div",
// //     { id: "parent" },
// //     React.createElement(
// //         "div",
// //         { id: "child" },
// //         React.createElement("h1", {}, "I'm h1 tag")
// //     )
// // );
// // console.log(parent); //object

// // root.render(parent);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

//// **** here we creating nested html element with siblings thorugh React.createElement ****

// /**
//  *
//  Nested tags with siblings
//  *
// <div id="parent">
//     <div id="child">
//         <h1>I'm h1 tag</h1>
//         <h2>I'm h2 tag</h2>
//     </div>
// </div>
// *
// ReactElement(Object) => HTML(Browser Understands)
//  */

// /* Nested HTML structure inside react (have to give an array of children) */

// // const parent = React.createElement(
// //     "div",
// //     { id: "parent" },
// //     React.createElement(
// //         "div",
// //         { id: "child" },
// //         [React.createElement("h1", {}, "I'm h1 tag"),
// //         React.createElement("h2", {}, "I'm h2 tag")]
// //     )
// // );
// // console.log(parent); //object

// // root.render(parent);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

//// **** here we creating lot more nested html element thorugh React.createElement ****

// /**
//  *
//  lot more Nested tags with siblings
//  *
// <div id="parent">
//     <div id="child">
//         <h1>I'm h1 tag</h1>
//         <h2>I'm h2 tag</h2>
//     </div>
//     <div id="child2">
//         <h1>I'm h1 tag</h1>
//         <h2>I'm h2 tag</h2>
//     </div>
// </div>
//  */

// /* Nested HTML structure inside react (have to give an array of children) but now its becoming very ugly,
// untidy and complex thats why we use JSX */

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [React.createElement(
//         "div",
//         { id: "child" },
//         [React.createElement("h1", {}, "I'm h1 tag"),
//         React.createElement("h2", {}, "I'm h2 tag")]
//     ),
//     React.createElement(
//         "div",
//         { id: "child2" },
//         [React.createElement("h1", {}, "I'm h1 tag"),
//         React.createElement("h2", {}, "I'm h2 tag")]
//     )]
// );
// console.log(parent); //object

// root.render(parent);

// //this is to show those who think that react can only be written in jsx as in real the base of react or
// //core of react is this thats how it created as JSX makes it easy when we have to create tags.

// //JSX

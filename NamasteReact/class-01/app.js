const heading2 = React.createElement(
    'h1',
    {
        id: "title",
    },
    "Hi Everyone by React");
// need to specify that this root is the base element, so we use ReactDOM the api given to do this work
// tag attributes passed in object

// console.log(heading);
// shows object made by react

// 1st is the tag, 2nd is the attribute obect, 3rd is what we put inside can use array for more elements

const heading3 = React.createElement(
    'h2',
    {
        id: "title",
    },
    "Hi, second example of creating element");

const container = React.createElement(
    'h3',
    {
        id: "container",
    },
    [heading2, heading3]);
//if we want to create a div contianer and inside that want div heading2 and heading3 then we pass children 
//as an array

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// put the element we want as root/ base element

root2.render(container);
// passing the react element inside the DOM, render method takes element and modifies the DOM

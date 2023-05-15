//now we r learning abt Conditional Rendering 

// in this code we using multiple return statmetns in conditional
// export const Apptwo = () => {
//     const condition = true;

//     if(condition) {                              //as we can return multiple return statements in conditionally  
//         return <h1>I am lucky!</h1>;
//     }else{                                        //we can also remove the else keyword if we want bcoz in return keyword no need of else keyword
//         return <h1>I am unlucky!</h1>;                  
//     }
// };



//same code as above but here we did it by ternary operator
// export const Apptwo = () => {
//     const condition = true;

//     const element = condition ? <h1>I am lucky!</h1> : <h1>I am unlucky!</h1>; 
//     return element;

//     // return condition ? <h1>I am lucky!</h1> : <h1>I am unlucky!</h1>;       //we can also do the same thing directly wihtout the element variable
// };




//same code as above but we can make it more clean and short as in the content onl one word is changing i.e. lucky abd unlucky
// export const Apptwo = () => {
//     const condition = true;

//     // const value = condition ? "lucky" : "unlucky";
//     // return <h1>{`I am ${value}`}</h1>;

//     // return <h1>{`I am ${condition ? "lucky" : "unlucky"}`}</h1>;                //we can also do the smae thing like this

//     return <h1>I am {condition ? "lucky" : "unlucky"}</h1>;                //we can also do the smae thing like this
// };



// in this code we understood if we don't want to return anything we can use null and that is valid as now if we dont return null then it wont give any error like it sued to give but good practice is to use nul if uh dont want to return
// export const Apptwo = () => {
//     return null;
// };


// another example of above code
// export const Apptwo = () => {
//     const user  = "Aditya";

//     if(!user){
//         return null;
//     }
    
//     return <h1>Hello {user}</h1>;
// };



// in this code we understood that boolean value will not return anything 
// export const Apptwo = () => {
//     const user  = "";
//     // return true;
//     return <h1>Hello {true}</h1>;                                
// };



//another example of above code as here it works bcoz its an expression  
// export const Apptwo = () => {
//     const condition  = true;
//     return condition ? <h1>Hello World</h1> : <h1>Hello Newton</h1>;                                
// };



// in this code we learned as we have div outside which means an outer element outside qw hqve to use the {} here and if we dont have puter element then {} not mandatory
// export const Apptwo = () => {
//     const condition  = true;
//     return <div>{condition ? <h1>Hello World</h1> : <h1>Hello Newton</h1>}</div>;                                
// };



// in this code we learend what we can redner and return us some value
// export const Apptwo = () => {
//     // const value = true;               //here everything is return a value except const value = true bcoz it is boolean
//     // const value = "hello";
//     // const value = <h1>hello</h1>;
//     // const value = 10000;
//     return value;
// }



// in this code we want to build ul element in which there will be multiple li element so we embedded ana rray in JSX{} as normally we do
// //return <ul>
// //     <li>One</li>
// //     <li>Two</li>
// // </ul>
// export const Apptwo = () => {
// const value = [<li>One</li>, <li>Two</li>, <li>Three</li>];
// return <ul>{value}</ul>;
// };



// in this code we learned that we cant do the same thing with an object like we did with an array above bcox we cannot add an object within the jsx {}
// export const Apptwo = () => { 
//     const value = { id: 1 };
//     return <ul>{value}</ul>;
// };


//in this code we learned if we want to use an object with in the jsx {} then we can do that like we do normally in object  
export const Apptwo = () => { 
    const value = { element: <h1>Hello</h1> };
    return <ul>{value.element}</ul>;
};
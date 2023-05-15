// here we learning abt Styles
// two ways to add styes in react componenet
// 1. Inline Styles as they will have highest prirortiy and we have to create an object for it as style attribute will always take an object for multiple and even for single property also and everyhting has to be either in ' ' or  " " except only number and in style attribute give the object 
//as normally in css we do background-color but here it will be in camelCase like backgroundColor or font-size --> fontSize
// export const Appthree = () => {
//     const headingStyle = {
//         color: "red",
//         fontSize: "16px",
//         fontStyle: "italic",
//     };

//     const containerStyle = {
//         border: "2px solid green",
//         background: "#eeeeee",
//     };

//     return (
//         <div style={containerStyle}>
//             <h1 style={headingStyle}>Hello World</h1>
//         </div>
//     );
// };




// in this code we want to use two object in one tag
// export const Appthree = () => {
//     const headingStyle = {
//         color: "red",
//         fontSize: "16px",
//         fontStyle: "italic",
//     };


//     const anotherStyle = {                     //if we want to Combine two objects (headingStyle, anotherStyle) in single tag then ultimately we want one object so we will create one more object i.e. third object (finalStyles) and add those two objects in itn and then use this finalStyles object in style attribute   
//         fontFamily: "sans-serif",
//         background: "#A4D0A4",
//     };
    
//     const finalStyles = {
//         ...headingStyle,
//         ...anotherStyle,
//     };

    
//     const containerStyle = {
//         border: "2px solid green",
//         background: "#eeeeee",
//     };

//     return (
//         <div style={containerStyle}>
//             <h1 style={finalStyles}>Hello World</h1>
//         </div>
//     );
// };




// same code as above but here we want used few porperties of the object (headingStyles) not all of them
// export const Appthree = () => {
//     const headingStyle = {
//         color: "red",
//         fontSize: "16px",
//         fontStyle: "italic",
//     };


//     const anotherStyle = {                     //if we want to Combine two objects (headingStyle, anotherStyle) in single tag then ultimately we want one object so we will create one more object i.e. third object (finalStyles) and add those two objects in itn and then use this finalStyles object in style attribute   
//         fontFamily: "sans-serif",
//         background: "#A4D0A4",
//     };
  
    
//     const { color, fontSize } = headingStyle;

//     const partialStyles = {
//         color,
//         fontSize,
//     };


//     const finalStyles = {
//         ...headingStyle,
//         ...anotherStyle,
//     };

    
//     const containerStyle = {
//         border: "2px solid green",
//         background: "#eeeeee",
//     };

//     return (
//         <div style={containerStyle}>
//             <h1 style={finalStyles}>Hello World</h1>
//         </div>
//     );
// };


//2.way to add style is by adding classes as we cant use reserved keyword of js in jsx so will use className here and need to improt the css file    

// import "./App.css"
// export const Appthree = () => {
//     return (
//         <div className="container">               
//             <h1>Hello World</h1>
//         </div>
//     );
// };



//in this code we using both inline and class style
// import "./App.css"
// export const Appthree = () => {
// const  headingStyle = {
//     textAlign: "center",
//     color: "brown",
//     margin: 0,
// };

//     return (
//         <div className="container">               
//             <h1 style={headingStyle}>Hello World</h1>
//         </div>
//     );
// };


//same as above code as we using both inline and class style as use inline style when we want to add anything dynamic means dynamic styles and if any other style is not dynamic we can add them in css like textAlign and margin in h1 tag as can be use here also but better to use in css file that is good practice as both will be applied
import "./App.css"
export const Appthree = () => {
const addRed = true;     
    return (
        <div className="container">               
            <h1 style={{
                color: addRed ? "red" : "brown",
}
}>Hello World</h1>
        </div>
    );
};

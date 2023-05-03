export function sum(a, b){
    return a + b;
}

// export const identity = "Aditya";

// export const score = 100;

// export const city = "Hyderabad";

// export const isInstructor = true;

// export const hobbies = ["Dancing", "Gaming"];



const identity = "Aditya";

const score = 100;

const city = "Hyderabad";

const isInstructor = true;

const hobbies = ["Dancing", "Gaming"];

//default exports
export default hobbies;   //cant wrtite it like export default const hobbies eihter we can do export default hobbies or export const hobbies. 

//named exports
export { identity, score, city, isInstructor};



// we can also export classes 
// as we exporting alot of things doesnt mean thats it compoulsory to import all the things also as it can be done as per 
// requirement as pur modules will import only those things which are actually required. as Uint8ClampedArray.js exporting eveything 
// but app.js and script.js  they dont have to importevery singkw thing as thy need to import only those things which are
// are required.  

// default export -->

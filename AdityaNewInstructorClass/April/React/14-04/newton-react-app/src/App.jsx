//as sir created only one App.jsx file in which first he told abt rules of jsx and then erase it all and 
// started making website using multiple Components in same App.jsx file as it is not written anywhere OR RESTRICTED
// that we can't have multiple files like App.jsx so for better understandng and clean code i have created one more file
// like App.jsx by the name of 2App.jsx in which we will do website making code and in App.jsx rule of jsx code 
//will be there.


// Rule 1 ->  need to wrap seperate elements in a top/wrapper element like <div> or <main> as its a rule or 
//can use React Fragements <></> also. (not for single element/tag)

// function App() {
//     return (                                       
//         // <div>                                            
//         <>
//         <h1>Hello, Mom</h1>      
//         <h2>Hello, Dad</h2>
//         </>
//     //   </div>
//     );
//   }

//React Fragement -> <></> to solve the issue of top/wrapper element as it act as container/grouper instead of <div></div> bcoz as such 
//there is no use of <div> tag we doing coz of rule that can be solve by react fragment <></> which also doesnt create any extra elemnts also inside the root <div>.
//if have usage of <div> or any tag as top/wrapper element then use it otherwise always go for react fragements <></>.



// Rule 2 ->  for here is a js reserved keyword which means for loops so we cant use it as it will show a 
//warning in browser. most used kweywords are htmlFor and className

// function App() {
//         return (                                      
//             <>
//             <input type="text" id="age" />
//             <label htmlFor="age"></label>
//             </>
//         );
//       }

      
//in HTML file its okay to use for attribute 
/* <input type="text" id="age" />
<label for="age"></label> */



// Rule 3 ->  always use closing tag

// function App() {                             
//     return <h1>Hello World
//   }



// Rule 4 ->  always give self closing tag <input>(not correct) but <input />(correct).

// function App() {                                
//     return <input />;
//         }



// Rule 5 ->  in JSX all the tags must be in lower case <INPUT /> (not correct) but <input /> (correct).

// function App() {                                
//     return <input />;
//         }



// Rule 6 ->  in JSX if we using any attribute of two words then we hvae to use camelCase in that attribute.
// <video src="videos.mp4" autoplay />; (not correct as only in html) but <video src="videos.mp4" autoPlay />; (correct) 

function App() {                                
    return <video src="videos/justforidea/writing/thislink.mp4" autoPlay />;
        }

export default App;

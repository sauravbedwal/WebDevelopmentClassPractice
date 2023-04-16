import React from "react";                        //"react" is not file names it is node module library and we r importing from library
import { createRoot } from "react-dom/client";     //createRoot is a pre define function from react-dom/client linrary     
import App from "./App";

const container = document.querySelector("#root");
const root = createRoot(container);

// root.render(<h1>Hello World!</h1>)            //that simply saying root should render wahtever we passing in()

// root.render(<div>                        //another ex but also if we add evyerthing here it will become really big and consufe to underatand thats why we use Components
//     <header></header>
//     <main> 
//         <article></article>
//         <aside></aside>
//     </main>
//     <footer></footer>
// </div>)    

root.render(<App/>);                              //using component
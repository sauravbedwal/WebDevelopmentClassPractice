// A Component
// - A JavaScript function
// - returns markup (HTML)

//function must began with Capital letter and have to be in PascalCase and a function can be normal and arrow function also 
// by js we do same thing like Element.innerHtml = <h1>Hello World</h1>  

// Normal Functions ✅   
function App() {
    // return <h1>Hello World</h1>;

    return (                                             // () is for formatting in a nicer way as it doesnt add any value and we can do it wihtout them also
      <div>
        <header>Header is here</header>
        <main>Main content</main>
        <footer>Footer is here</footer>
      </div>
    );
  }

  // <App /> or <App/> (as space is not mandatory) -> <h1>Hello World</h1> 
  
  export default App;                                  //we can aslo export it on the function also( export default function App() {}  ) or we can also do the name export like export { App } or export function App() {} 
  
  // Arrow Functions ✅
  // const App = () => {                               //both r same its just below one dont have {} and return kywordbcoz its single statment so we can neglect it but i found more understanding with {} and retrun keyword
  //   return <h1>Hello World</h1>;
  // };

  // const App = () => <h1>Hello World</h1>;   
  
  // <App /> -> <h1>Hello, mom!</h1>
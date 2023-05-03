import Button from "./components/Button";                                        //here for Button also using index.jsx file to get the midway but not for header
import Header from "./components/Header/Header";                              //when we have the jsx file we can write it like this also "./components/Header/Header" instead of this "./components/Header/Header.jsx"

const Main = () => {
  return (
    <main>
      <section>Secton A</section>
      <Button />
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        harum est adipisci ad nam eum repellat natus nisi placeat ex obcaecati,
        minima ea consequuntur.
      </article>
    </main>
  );
};


export const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Button />
    </>
  );
};


//this is the seperate code for unsderstandig that whenever we use a component like <App /> which is a 
//function and react will call a fucntion then every single line can run everyhting will be created 
//(which is here in code) & finally return <h1>Hello World:</h1>; whoch will be replaced by <App /> in main.jsx   
// export const App = () => {
//   const userName = "Prasanna";
//   const sum = 1 + 1;
//   const scores = [1, 2, 3];
//   const object = {id:1};
  
//   const isSolid = true ? "yes" : "no";

//   if(true) {
//     console.log("Hey");
//   }

//   return <h1>Hello World:</h1>;
// };
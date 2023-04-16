// as in 2App.jsx file we using Header() component in App() for that understaing we wrote tis code as its simple js thing 
//thats lexical scoping as any function can access variables defined outside of it.

function Header() {
    return "This is the header";
}

const userName =  "Aditya";

function App() {
    console.log(userName);
    return Header(); 
}

App();
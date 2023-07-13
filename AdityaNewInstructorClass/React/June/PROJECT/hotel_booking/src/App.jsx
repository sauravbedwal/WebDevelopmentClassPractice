import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./containers/Home";

const App = () => {
  return (
    <div className="">
      {/* LAYOUT OF THE APP */}
      <NavBar />
      <Home />
    </div>
  );
};

export default App;

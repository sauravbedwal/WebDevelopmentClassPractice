import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";                      //if we using App and Apptwo but done have anything inside it will not show anything if we do anything in Appthree so either comment them from here too or keeo some code inside them
import { Apptwo } from "./2Apptwo";
import { Appthree } from "./3Appthree";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Apptwo />
    <Appthree />
  </React.StrictMode>
);

// smae thing above as below code as above code came by iteself
// const container = document.querySelector("#root");
// const root = createRoot(container);
// root.render(<App />);

// root.render(<Apptwo />);


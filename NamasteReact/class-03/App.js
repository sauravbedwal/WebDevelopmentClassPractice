import React, { Component } from "react";
import ReactDOM from "react-dom/client";

//React Element
const elem = <span>React Element</span>

const heading = (
    <h1 className="heading">
        {elem}
        Namaste React using JSX i.e React Element
    </h1>
)

// React Functional Component
const Title = () => {
    return <h1 className="heading">Namaste React using JSX</h1>
}

const HeadingComponent = () => <div className="container">
    {heading}
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Namaste React Functional Component</h1>
</div>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);   
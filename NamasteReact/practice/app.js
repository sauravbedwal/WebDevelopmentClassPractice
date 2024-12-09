import React from "react";
import ReactDOM from "react-dom/client";

const title = <h1 className="head">Namaste React using JSX</h1>;

const HeadingComponent = () => {
  return (
    <div className="container">
      {title}
      <h1 className="heading">Namaste React Function Component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

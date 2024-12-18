import React from "react";
import User from "./User";
import UseerClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component did mount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h3>This is Namaste React Series</h3>
        <User name={"Saurav Bedwal (functional)"} />
        {/* <UseerClass name={"First"} location={"Delhi"} /> */}
        {/* <UseerClass name={"Second"} location={"Delhi"} /> */}
      </div>
    );
  }
}

export default About;

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      // count: 0,
      // count2: 2,
      // count3: 0,

      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");
    // API CALL

    const data = await fetch("https://api.github.com/users/sauravbedwal");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  // Extra
  // componentDidMount() {
  //     this.timer = setInterval(() => {
  //         console.log("Namaste React OP")
  //     }, 1000);
  // }

  // componentDidUpdate(prevProps, prevState) {
  //     // in functional component if we want it to be render when count changes in array of depepndencies
  //     // same thing in class based component

  //     if (this.state.count != prevState.count) {
  //         //code
  //     }
  //     if (this.state.count2 != prevState.count2) {
  //         //code
  //     }
  //     console.log("Component Did Update");
  // }

  // componentWillUnmount() {
  //     clearInterval(this.timer);
  //     console.log("Component Will Unmount");
  // }

  render() {
    // const { name } = this.props; //destructuring (destrutured only name so can see both ways of writing it)
    // const { count } = this.state;

    console.log(this.props.name + "Child Render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* accessing the state variable */}
        {/* <h1>Count : {count}</h1>
                <h1>Count2 : {this.state.count2}</h1>
                <button onClick={() => {
                    //NEVER UPDATE STATE VARIABLES DIRECTLY like
                    //this.state.count = this.state.count + 1;

                    // * USE setState() method instead

                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,
                    });
                }}>
                    Count Increase
                </button>
                <h2>Name: {name}</h2>
                <h3>Location: {this.props.location}</h3> */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @sauravapril2</h4>
      </div>
    );
  }
}

export default UserClass;

/**
 * ------ MOUNTING ----------
 *
 *  Constructor (dummy data)
 *  Render (dummy data)
 *            <HTML Dummy>
 *  Component Did Mount
 *            <API Call>
 *            <this.setState> -> State variable is updated
 *
 * ------ UPDATE ----------
 *
 *            render(API data)
 *            <HTML (new API data)>
 *  Component Did Update
 *  Component Will Unmount
 *
 *
 */

import React from "react";

class UseerClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Default",
        contact: "dummy@example.com",
      },
    };

    console.log(this.props.name + "Children Constructor");
  }

  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/sauravbedwal");
    const data = await res.json();

    // console.log("data", data);
    this.setState({
      userInfo: data,
    });

    console.log(this.props.name + "Children Component did mount");
  }

  componentDidUpdate() {
    console.log("UserClass component updated!!");
  }

  componentWillUnmount() {
    console.log("UserClass component unmounted!!");
  }

  render() {
    console.log(this.props.name + "Children render");

    const { name, location, avatar_url } = this.state.userInfo;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Icreament
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UseerClass;

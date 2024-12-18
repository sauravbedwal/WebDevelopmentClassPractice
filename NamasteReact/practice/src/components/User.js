import React, { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("setInterval timer");
    }, 1000);

    console.log("useEffect");

    return () => {
      clearInterval(timer);
      console.log("useEffect Unmount");
    };
  }, []);

  console.log("render");
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Delhi</h3>
      <h4>Contact: sauravbedwak1234@gmail.com</h4>
    </div>
  );
};

export default User;

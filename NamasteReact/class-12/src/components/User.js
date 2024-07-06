import React, { useEffect, useState } from 'react'

const User = ({ name }) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    // cleanups in functional component
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Namaste React OP");
        }, 1000)

        console.log("useEffect");

        // cleanup method
        return () => {
            clearInterval(timer);
            console.log("useEffect Return");
        };
    }, []);

    console.log("render");

    //comparing re-rendering with class based
    useEffect(() => {
        //API CALL
    }, [count]);

    useEffect(() => {
        //API CALL
    }, [count2]);

    //comparing API call with class based
    async function getUserInfo() { }

    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count = {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Delhi</h3>
            <h4>Contact: @sauravapril2</h4>
        </div>
    )
}

export default User;
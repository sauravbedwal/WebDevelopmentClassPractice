import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
const Login = () => {
  const [emailId, setEmailId] = useState("honey@gmail.com");
  const [password, setPassword] = useState("Honey@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(emailId, password);

  const handleLogin = async (event) => {
    // event.preventDefault();
    try {
      const response = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );

      console.log(response.data);
      dispatch(addUser(response.data));
      navigate("/");
    } catch (err) {
      console.log("Error: " + err.message);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Email ID</span>
              </div>
              <input
                type="text"
                value={emailId}
                placeholder="xyz@gmail.com"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  setEmailId(e.target.value);
                }}
              />
            </label>{" "}
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                value={password}
                placeholder="xyz@gmail.com"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>{" "}
          </div>
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

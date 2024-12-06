import React from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";
const UserCard = ({ user }) => {
  console.log("users", user);
  const { _id, firstName, lastName, age, gender, photoUrl, about, skills } =
    user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, toUserId) => {
    try {
      const res = await axios.post(
        BASE_URL + `/request/send/${status}/${toUserId}`,
        {},
        { withCredentials: true }
      );

      console.log("handleSendReq", res?.data?.data);
      dispatch(removeFeed(toUserId));
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={photoUrl} alt="photoUrl" />
      </figure>
      <div className="card-body flex-grow-0">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <div>
          <span>{age && age + " "}</span>
          <span>{gender}</span>
        </div>
        <p>{skills}</p>
        <p>{about}</p>
        <div className="card-actions justify-center my-5">
          <button
            className="btn bg-red-600 hover:bg-primary text-white"
            onClick={() => {
              handleSendRequest("ignored", _id);
            }}
          >
            Ignored
          </button>
          <button
            className="btn bg-green-600 hover:bg-secondary text-white"
            onClick={() => {
              handleSendRequest("interested", _id);
            }}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

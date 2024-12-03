import React from "react";

const UserCard = ({ user }) => {
  //   console.log("users", user);
  const { firstName, lastName, age, gender, photoUrl, about, skills } = user;
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
          <button className="btn bg-red-600 text-white">Ignored</button>
          <button className="btn bg-green-600 text-white">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

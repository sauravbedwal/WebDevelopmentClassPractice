import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  //   console.log("userEdit", user);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [about, setAbout] = useState(user?.about);
  const [skills, setSkills] = useState(user?.skills || "");
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  // const [userData, setUserData] = useState({
  //   firstName: user.firstName,
  //   lastName: user.lastName,
  //   age: user.age,
  //   gender: user.gender,
  //   photoUrl: user.photoUrl,
  //   about: user.about,
  // })
  const saveProfile = async () => {
    try {
      setError("");
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          photoUrl,
          about,
          skills,
        },
        {
          withCredentials: true,
        }
      );

      //   console.log("res", res?.data?.data);
      dispatch(addUser(res?.data?.data));
      window.scrollTo(0, 0);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(
        err?.res?.data || "Failed to update profile. Please try again later."
      );
      console.log("Error: ", err.message);
    }
  };
  return (
    <>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
      <div className="flex justify-center my-10">
        <div className="flex justify-center mx-10">
          <div className="card bg-base-300 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title justify-center">Edit Profile</h2>
              <div>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    value={firstName}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </label>{" "}
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    type="text"
                    value={lastName}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Age</span>
                  </div>
                  <input
                    type="text"
                    value={age}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Gender</span>
                  </div>
                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn m-1 w-[100%] bg-base-100"
                    >
                      {gender}
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                    >
                      <li onClick={() => setGender("male")}>
                        <a>male</a>
                      </li>
                      <li onClick={() => setGender("female")}>
                        <a>female</a>
                      </li>
                      <li onClick={() => setGender("others")}>
                        <a>others</a>
                      </li>
                    </ul>
                  </div>
                </label>{" "}
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Photo Url</span>
                  </div>
                  <input
                    type="text"
                    value={photoUrl}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => {
                      setPhotoUrl(e.target.value);
                    }}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Skills</span>
                  </div>
                  <input
                    type="text"
                    value={skills}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => {
                      setSkills(e.target.value);
                    }}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">About</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="About yourself..."
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  ></textarea>
                </label>{" "}
              </div>
              {/* {error && <p className="text-red-500">Error: Invalid Credentials!</p>} */}
              <p className="text-red-500">{error}</p>
              <div className="card-actions justify-center m-2">
                <button className="btn btn-primary" onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, age, gender, photoUrl, about, skills }}
        />
      </div>
    </>
  );
};

export default EditProfile;

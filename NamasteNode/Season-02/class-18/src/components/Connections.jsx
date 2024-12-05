import React from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
const Connections = () => {
  const connections = useSelector((store) => store.connection);
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      // console.log(res.data.data);

      dispatch(addConnections(res?.data?.data));
    } catch (err) {
      console.log("Error fetching connections", err.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) {
    return (
      <h1 className="text-2xl font-semibold text-white">
        No Connections found!!
      </h1>
    );
  }
  console.log("connections", connections);

  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="text-2xl font-semibold text-white">Connections</h1>

      {connections.map((connection, key) => {
        const { firstName, lastName, photoUrl, age, gender, about } =
          connection;
        return (
          <div
            key={key}
            className="flex items-center p-5 my-4 bg-base-300 w-1/2 rounded-2xl"
          >
            <div>
              <img
                src={photoUrl}
                alt="photoUrl"
                className="rounded-full w-20 h-20"
              />
            </div>
            <div className="text-left mx-4">
              <h2>{firstName + " " + lastName}</h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;

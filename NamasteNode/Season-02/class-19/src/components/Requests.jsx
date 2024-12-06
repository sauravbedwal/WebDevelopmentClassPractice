import React from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";
const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      //   console.log("res", res?.data?.data);
      dispatch(addRequest(res?.data?.data));
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0)
    return (
      <h1 className="my-10 text-center text-2xl font-semibold text-white">
        No Requests found!!
      </h1>
    );

  console.log("requests", requests);

  const reviewRequest = async (status, requestId) => {
    // console.log("status", status, "requestId", requestId);
    try {
      const res = await axios.post(
        BASE_URL + `/request/review/${status}/${requestId}`,
        {},
        { withCredentials: true }
      );

      //   console.log("reviewRequest", res?.data?.data?._id);
      dispatch(removeRequest(requestId));
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mt-10 mb-28">
        <h1 className="text-2xl font-semibold text-white">Requests</h1>

        {requests.map((request, key) => {
          const { firstName, lastName, photoUrl, age, gender, about } =
            request.fromUserId;

          //   console.log(request._id);
          return (
            <div
              key={key}
              className="flex items-center justify-between p-5 my-4 bg-base-300 w-1/2 rounded-2xl"
            >
              <div className="flex items-center">
                <div>
                  <img
                    src={photoUrl}
                    alt="photoUrl"
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-left ml-4 w-[80%]">
                  <h2>{firstName + " " + lastName}</h2>
                  {age && gender && <p>{age + ", " + gender}</p>}
                  <p>{about}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => {
                    reviewRequest("rejected", request._id);
                  }}
                >
                  Reject
                </button>
                <button
                  className="btn btn-secondary ml-2"
                  onClick={() => {
                    reviewRequest("accepted", request._id);
                  }}
                >
                  Accept
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Requests;

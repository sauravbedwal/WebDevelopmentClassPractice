import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  // console.log("feed", feed);

  const getFeed = async () => {
    try {
      if (feed) return;
      const response = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      // console.log(response?.data?.data);
      dispatch(addFeed(response?.data?.data));
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="flex justify-center my-10">
      {feed && <UserCard user={feed[0]} />}
    </div>
  );
};

export default Feed;

// ok goted we have data so we have to do a get call to shoe thta to user but why we storing it in store?

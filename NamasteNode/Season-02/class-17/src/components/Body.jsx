import React from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
  //If not logged in then redirect to login page otherwise redirect to feed page

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    try {
      // ---- his thinking----
      // if (userData) return;
      const response = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      // console.log(response.data);
      dispatch(addUser(response.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
      console.log("Error: " + err.message);
    }
  };

  useEffect(() => {
    if (!userData) {
      fetchUser();
    }
    // ---- his thinking ----
    //  fetchUser();
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;

// why updating store as login k time toh bhej dia tha na ?? is it bcoz refersh krne p store empty ho jaa rha h?? so now when we logged in ew showed dtrails in navbar as
// useSelector can access the store with info but when we came to page feed then navbar is without details bcoz store is empty bcoz page got  refereshed so now we as we have
// token so we get the user details byh callig  get api and bcoz of that again store got user info and in navbar useSelector can access the info again.

//configure store with reducer => Provider store in app.jsx => createSlice with name, initialState and reducers as inisde reducer (state, action) => export reducers thorugh
// slicename.actions and sliceName.reducer => to send the data in store use usedispatch and in dipatch send reducer with data like dispatch(addUser(res.data)) =>
//  when want to fetch data use useSelector((state) => state.user)

// is this like agr succes hoga 200 OK tih response.status === 200 krke check krr skte h in if condition and agr error hoga then err.status m check hoga in if condition?
// in navbar we did response.status === 200 and in Login and body we did err.status === 400??

// console.error("Error: " + err.message); in catch

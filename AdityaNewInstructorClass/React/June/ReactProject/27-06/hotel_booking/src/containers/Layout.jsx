import NavBar from "../components/NavBar";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router";

const Layout = (props) => {
  console.log(props);
  const navigate = useNavigate();

  useEffect(() => {
    //check is the user is logged in, if not redirect them back to login screen
    auth.onAuthStateChanged((user) => {
      if (!user) {
        //Redirect back to login screen
        navigate("/");
      }
      console.log(user);
    });
  }, []);

  return (
    <>
      <NavBar />
      {props.children}
      <footer>Copyright</footer>
      {/* {DYNAMIC COMPONENT} */}
    </>
  );
};

export default Layout;

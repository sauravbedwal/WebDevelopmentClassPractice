import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <div>Home Page</div>
    <button onClick={() => {
      //Push a new route to the stack
      navigate("order-summary");
      
      //Replace a new route
      // navigate("order-summary", { replace: true });
    }}>
      Place Order
    </button>
    </>
  );
};


//navigate is the fucntion that returned by a useNavigate hook means navigate is that function which enables 
//us to navigates whatever page we want without the need of Link or navLink comp.
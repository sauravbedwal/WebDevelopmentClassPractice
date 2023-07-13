import { useState } from "react";
import ReactDOM from "react-dom";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  right: 0,
  left: 0,
  bottom: 0,
  top: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  zIndex: 1000,
};

const Modal = ({ children, open, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(                         //it has two arguments 1. what we want to render(jsx) and 2. at which element we want to render
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        style={BUTTON_WRAPPER_STYLES}
        onClick={() => {
          console.log("Modal mein kuch click hua!");
        }}
      >
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          Fancy Modal
        </Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Other content</div>
    </>
  );
};


//as second div tag in App with style={OTHER_CONTENT_STYLE} has 2 zIndex and Modal has 1000 zIndex do Modal has 
// to be above everything due to higher zIndex value but still its not above second div as second div overlaping 
// modal bcoz of bcoz zIndex of whole div will count as first div have zIndex 1 and second div have zIndex of 2
// and b/w these two siblings the seond div will win bcoz of large value bcoz zIndex will only work b/w sublings 
// not with children means when we compare second div we compare it with first div only not with any of the children
// below it and thats called stacking Context






















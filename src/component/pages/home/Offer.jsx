import React, { useState } from "react";
import "./style/Home/Offer.css";
import { useInView } from "react-intersection-observer";

const Offer = () => {
  const [bubble, setBubble] = useState({
    bubbleDir: "default-bubble",
    bubbleText: ""
  });
  const changeBubble = e => {
    switch (e.target.className) {
      case "offer1":
        setBubble({ bubbleDir: "left-bubble", bubbleText: "left one " });
        break;

      case "offer2":
        setBubble({ bubbleDir: "mid-bubble", bubbleText: "the center one " });
        break;
      case "offer3":
        setBubble({ bubbleDir: "right-bubble", bubbleText: "right one " });
        break;
      default:
        setBubble("default-bubble");
    }
  };

  const [ref, inView] = useInView({
    threshold: 0
  });

  return (
    <div
      className="offer-container"
     
      style={{ height: window.screen.height }}
    >
      <div className={inView ? "welcome-to-offers" : "out_of_view"}>
        <h3>Welcome to The Offers Page </h3> <br />
      </div>
      <div className={inView ? "offers" : "out_of_view"}ref={ref}>
        <div className="offer1" onClick={changeBubble}>
          <h4>Book 2 And get one for free</h4>
        </div>

        <div className="offer2" onClick={changeBubble}>
          <h4>Get Benifit of Our Tickets</h4>
        </div>
        <div className="offer3" onClick={changeBubble}>
          <h4 onClick={changeBubble}>Sign Up and get Special Discount </h4>
        </div>
      </div>
<div className={bubble.bubbleDir} >
      <h5>{bubble.bubbleText}</h5>

</div>
      <div />
    </div>
  );
};
export default Offer;

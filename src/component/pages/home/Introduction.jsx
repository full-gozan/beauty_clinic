import React from "react";
import "./style/Home/Introduction.css";
import introduction from "../../images/panel-slide4.jpg";

const Introduction = () => {
  return (

    <div className="intro" style={{height:window.screen.height}}>
      <div className="intro-img">
        <img src={introduction} alt="" />
      </div>
      <div className="contact">
        <div className="inner-header header-book-time">
          <a href="#">Book Date Online</a>
        </div>
        <div className="inner-header header-tel">
          <a href="#">Ring </a>
        </div>
        <div className="inner-header header-map">
          <a href="#">Find Us </a>
        </div>
      </div>

<div className="treatment-shortcut">

</div>
    </div>
  );
};

export default Introduction;

import React, { Component } from "react";
import "../../style/Home/Introduction.css";
import introduction from "../../images/panel-slide4.jpg";

const Introduction = () => {
  return (

    <div class="intro">
      <div className="intro-img">
        <img src={introduction} alt="" />
      </div>
      <div className="contact">
        <div className="inner-header">
          <a href="#">Book Date Online</a>
        </div>
        <div className="inner-header header-tel">
          <a href="#">Ring </a>
        </div>
      </div>

<div className="treatment-shortcut">

</div>
    </div>
  );
};

export default Introduction;

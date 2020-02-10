import React from "react";
import "../../style/Home.css";
import panel_slide1 from "../../images/panel-slide1.jpg";
import panel_slide2 from "../../images/panel-slide2.jpg";
import panel_slide3 from "../../images/panel-slide3.jpg";
import panel_slide4 from "../../images/panel-slide4.jpg";

const SlidePanel = () => {
  return (
    <div className="slider">
        <div className="slide-images">
            <img src={panel_slide1} alt="" />
            <img src={panel_slide2} alt="" />
            <img src={panel_slide3} alt="" />
            <img src={panel_slide4} alt="" />
        </div>
      </div>
  );
};

export default SlidePanel;

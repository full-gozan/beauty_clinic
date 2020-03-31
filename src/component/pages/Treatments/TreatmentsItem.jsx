import React from "react";
import "./Treatments.css";

const TreatmentsItem = props => {
  return (
    <div className="treatment">
      <div className="treatment-image">
        <img src={props.src} alt="not found" />
        <h3 className="treatment-title"> {props.title}</h3>
      </div>
      <div className="treatment-info">
        <p>{props.info}</p>
        <a href="#####">More Info</a>
      </div>
    </div>
  );
};
export default TreatmentsItem;

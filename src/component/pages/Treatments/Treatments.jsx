import React from "react";
import TreatmentsItem from "./TreatmentsItem";
import "../../style/Treatments.css";
import beauty from "../../images/beauty.jpg";
import treatment1 from "../../images/treatment1.jpg";
import treatment2 from "../../images/treatment2.jpeg";
import treatment3 from "../../images/treatment3.png";
import treatment4 from "../../images/treatment4.jpeg";
import treatment5 from "../../images/treatment5.jpg";
import treatment6 from "../../images/treatment6.jpg";
import treatment7 from "../../images/treatment7.jpg";
import treatment8 from "../../images/treatment8.jpeg";
import treatment10 from "../../images/treatment10.jpg";
import treatment11 from "../../images/treatment11.jpg";
import treatment12 from "../../images/treatment12.jpg";

const Treatments = props => (
  <div className="behandling-page">
    <div className="x">
      <div>
        <img src={beauty} style={{ width: "100%", height: "300px" }} />

        <div className="page-welcome">
          <h3>welcome to behandlinger department </h3>
        </div>
      </div>

      <div className="container">
        <TreatmentsItem src={treatment1} />
        <TreatmentsItem src={treatment2} />
        <TreatmentsItem src={treatment3} />
        <TreatmentsItem src={treatment4} />
        <TreatmentsItem src={treatment5} />
        <TreatmentsItem src={treatment6} />
        <TreatmentsItem src={treatment7} />
        <TreatmentsItem src={treatment8} />
        <TreatmentsItem src={treatment10} />
        <TreatmentsItem src={treatment11} />
        <TreatmentsItem src={treatment12} />
      </div>
    </div>
  </div>
);
export default Treatments;

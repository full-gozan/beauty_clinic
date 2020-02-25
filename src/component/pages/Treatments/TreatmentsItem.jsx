import React from "react";
import { Link } from "react-router-dom";
import "../../style/Treatments.css";

const TreatmentsItem = props => {
  return (
    <div className="behandling-container">
<Link><div className='behandling-image'>    

        <img src={props.src} /> 
        <h3 className="behandling-name">behandling name </h3>

        </div>
<div className='behandling-info'>
        <p className="behandling-text">here where should put your behandlinginformation</p>

</div>
</Link>
        

      
    </div>
  );
};
export default TreatmentsItem;

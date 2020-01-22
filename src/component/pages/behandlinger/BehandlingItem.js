import React from "react";
import { Link } from "react-router-dom";
import "../../style/Behandling.css";

const BehandlingItem = props => {
  return (
    <div className="behandling-container">
      <Link to="/be">
        <img src={props.src} className='behandling-image'/></Link>
<div className='behandling-info'>
        <p className="behandling-text">here where should put your behandlinginformation</p>

</div>

      
    </div>
  );
};
export default BehandlingItem;

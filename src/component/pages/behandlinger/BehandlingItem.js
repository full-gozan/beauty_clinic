import React from "react";
import { Link } from "react-router-dom";
import "../../style/Behandling.css";

const BehandlingItem = props => {
  return (
    <div>
      <Link to="/be">
        <img src={props.src} className='behandling-image'/>
        <p className='behandling-description'>here where should put your shithere where should put your shihere where should put your shihere where should put your shi</p>

      </Link>
    </div>
  );
};
export default BehandlingItem;

import React from "react";
import { Link } from "react-router-dom";
import "../../style/Behandling.css";

const BehandlingItem = props => {
  return (
      <div className="behandling">
        <img src={props.src} />
    {/*   <div className="behandlingInfo">
        <h3>Here where put the description of the treatment of {props.src} </h3>
        <Link to="google.com">Book Tid</Link>
      </div> */} 
    </div>
  );
};
export default BehandlingItem;

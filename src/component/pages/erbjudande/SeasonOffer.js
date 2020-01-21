import React from "react"
import "../../style/erbjudande.css";

const SeasonOffer=(props)=>{
  return (
<div className="offer-frame">
<h2 className="offer-title">{props.title}</h2>
<img src={props.src}className="offer-image"/>
<p className="offer-info"> {props.info}</p>
</div>
    );
}
export default SeasonOffer;
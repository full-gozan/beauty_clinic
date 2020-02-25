import React from "react";
import "../../style/Home/TreatmentInterface.css";
const TreatmentInterface = () => {
  const extendContent=()=>{
    
  }
  return (
    <div className="interface">
      <a className="interface-bit " href="###" onClick={extendContent}>
        <h3>Mizo</h3>
        <div className="onHoverd">
          this text will show up after making hover on this element
        </div>
      </a>
      <a className="interface-bit" href="###">
        <h3>PRP</h3>
        <div className="onHoverd">
          this text will show up after making hover on this element
        </div>
      </a>
      <a className="interface-bit" href="###">
        <h3>Microledning</h3>
        <div className="onHoverd">
          this text will show up after making hover on this element
        </div>
      </a>
      <a className="interface-bit " href="###">
        <h3>Laser</h3>
        <div className="onHoverd">
          this text will show up after making hover on this element
          <a href="####">the link</a>
        </div>
      </a>
    </div>
  );
};
export default TreatmentInterface;

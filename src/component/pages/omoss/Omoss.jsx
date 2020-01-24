import React from "react";
import "../../style/Home.css";
import img from "../../images/img.png";
import "../../style/omoss.css"
const OmOss = props => (
  <div className="omoss-container">

    <div className="omoss-info">
      <div className="brand-name">
        <h2>BRAND NAME</h2>
      </div>
      <div className="brand-info">
        <p>
          here should add some summary about the company, and when it
          istablished and publiced what is the plan for the futuure and and what
          kind of services can you offer it to the customers
        </p>
      </div>
    </div>
    <div className="omoss-personal">
      <img src={img} alt="the image is not found " />

      <div className="personal-background">
        <h3>
          this is where to put your background and the experiences that you get
          from both of study and work life, and why you chose this proffessional{" "}
        </h3>
      </div>
    </div>
  </div>
);
export default OmOss;

import React, { useState, useEffect } from "react";
import "../../style/About_us.css";
import brandImg from "../../images/introduction.jpg";
import personalImg from "../../images/personal.jpg";
const About_us = props => {
  return (
    <div className="about-container">
      <div className="about-brand">
        <div className="brand">
          <img src={brandImg} alt=" not found " />

        </div>
        <div className="brand-brief">
<h3>About the Brand </h3>
          <h6>
         Glow was one of the first
  hairdressers in Copenhagen, which was certified green
   hairdresser through the Copenhagen Environmental Network.
    We still only work with approved hairdressing products for yours,
     the environment and our own.

We are called Glow because we do everything to 
make you radiantly happy when you leave. Please call if you have any questions.

We look forward to becoming your new hairdresser.
          </h6>
        </div>
      </div>
      <div className="about-personal">
        <div className="personal">
          <img src={personalImg} alt=" not found " />
        </div>
        <div className="personal-brief">
        <h3>personal background </h3>
          <h6>
            Project's owner with 20 years of experience from Gun Brits, Zenz and
            Aqua. I do my utmost to find the right treatment for you. My success
            criterion is that you shine when you leave and maybe even book time
            for the next treatment right away. I always get praise for my dense
            and natural streaks, and I emphasize that your time in the salon is
            your time so you feel like you have my full attention.
          </h6>
        </div>
      </div>
    </div>
  );
};
export default About_us;

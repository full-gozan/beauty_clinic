import React from "react";
import "./style/Home/Home.css";
import TreatmentInterface from "./TreatmentInterface";
import Introduction from "./Introduction";
import Links from "./Links";
import Offer from "./Offer";
import ReactFullpage from "@fullpage/react-fullpage";



const Home=()=>{
    return (
      <div>
   <Introduction />
      <Links/>
      <TreatmentInterface />
      <Offer/>
      </div>
   
     /*  <ReactFullpage
        anchors={["welcome-panel", "work-links", "most-demand-treatments","current-offers"]}
        render={() => {
          return (
            <div id="fullpage-wrapper">
              <div className="section ">
                <Introduction />
              </div>
              <div className="section">
                <Links />
              </div>
              <div className="section">
                <TreatmentInterface />
              </div>
              <div className="section">
                <Offer />
              </div>
            </div>
          );
        }}
      /> */
    );
  }


export default Home;

/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
import "../../style/Home.css";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Introduction from "./Introduction";
import Map from "./Map";
class FullpageWrapper extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (
      <ReactFullpage
        sectionsColor={["green", "purple", "orange"]}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1" />
              <div className="section" />
              <div className="section">
                <Map />
                <button onClick={() => fullpageApi.moveTo(1, 1)}>
                  Move top
                </button>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default FullpageWrapper;

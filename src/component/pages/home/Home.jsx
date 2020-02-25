import React, { Component } from "react";
import "../../style/Home/Home.css";
import TreatmentInterface from "./TreatmentInterface";
import Introduction from "./Introduction";
import Links from "./Links";
import Map from "./Map";

class Home extends Component {
  render() {
    return (
      <div class="home">
        <Introduction />
        <Links />
        <TreatmentInterface />
        <Map />
      </div>
    );
  }
}
export default Home;

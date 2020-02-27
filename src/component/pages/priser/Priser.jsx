import React from "react";
import PriserItem from "./PriserItem";
import "../../style/Priser.css";

class Priser extends React.Component {
  state = {
    title: ["name", "price"],
    face: [
      { name: "face1", price: "220" },
      { name: "face2 ", price: "112" },
      { name: "face3", price: "310" },
      { name: "face4 ", price: "192" }
    ],
    hair: [
      { name: "hair1", price: "220" },
      { name: "hair2 ", price: "232" },
      { name: "hair3", price: "380" },
      { name: "hair4 ", price: "182" }
    ],
    body: [
      { name: "body1", price: "420" },
      { name: "body2 ", price: "652" },
      { name: "body3", price: "540" },
      { name: "body4 ", price: "830" }
    ]
  };

  renderTitle = () => {
    let header = Object.keys(this.state.face[0]);
    return header.map((key, index) => {
      return <h3 key={index}>{key.toUpperCase()}</h3>;
    });
  };

  render() {
    return (
      <div className="price-frame">
        <div className="price-container">
          <h3 class="table-title">Face</h3>
          <table className="price-table">
            <tr>{this.renderTableHeader}</tr>
            <PriserItem table={this.state.face} />
          </table>

          <h3 class="table-title">Hair</h3>
          <table className="price-table">
            <PriserItem table={this.state.hair} />
          </table>

          <h3 class="table-title">Body</h3>
          <table className="price-table">
            <PriserItem table={this.state.body} />
          </table>
        </div>
      </div>
    );
  }
}
export default Priser;

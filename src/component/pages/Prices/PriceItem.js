import React from "react";
import "./Prices.css";

const PriceItem = props => {
  return props.table.map((item, index) => {
    return (
      <tr id={index}>
        <td> {item.name} </td>
        <td> {item.price}</td>
        <tr>
          <button>Boka Tid</button>
        </tr>
      </tr>
    );
  });
};
export default PriceItem;

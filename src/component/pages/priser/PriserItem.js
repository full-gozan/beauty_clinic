import React from "react";
import { Link } from "react-router-dom";
import "../../style/Priser.css";

const PriserItem = props => {
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
export default PriserItem;

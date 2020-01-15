import React from "react";
import PriserList from "./PriserList";
import "../../style/Priser.css";

const Priser = () => {
  const Table = [
    { duration: "120min ", type: "microlidning", price: "220" },
    { duration: "100min", type: "baby glow ", price: "112" }
  ];

  return (
    <div className="price-frame">
      <h1>Hello this is my behandlingar page</h1>
      <div>
        <h3>
          bn
        </h3>
        <table>
          <tbody>
            <PriserList table={Table} />
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Priser;

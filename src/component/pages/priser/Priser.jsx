import React from "react";
import PriserItem from "./PriserItem";
import "../../style/Priser.css";

const Priser = () => {
  const Table = [
    { duration: "12555550min ", type: "microlidning", price: "220" },
    { duration: "100min", type: "baby glow ", price: "112" }
  ];

  return (
    <div className="price-frame">
      <h1>Hello this is my behandlingar page</h1>
      <div className='price-container'>
        <table className='price-table'>

            <PriserItem table={Table}/>
        </table>
      </div>
    </div>
  );
};
export default Priser;

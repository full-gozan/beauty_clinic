import React from "react";
import "../../style/Home.css";
import { FaBeer } from "react-icons/fa";
import "../../style/erbjudande.css";
import treatment1 from "../../images/treatment1.jpg";

import SeasonOffer from "./SeasonOffer";

const Erbjudande = props => (
  <div>
    <h1>
      Hello this is my erbjudande page
      <FaBeer />
    </h1>
    <div className="offer-container">
      <SeasonOffer
        src={treatment1}
        title="3 for 2"
        info="Book 2 treatment and get the third for free, Either for you Or for your friend 
      , you both are very welcome  "
      />
      <SeasonOffer
        src={treatment1}
        title="Get Benifit of Our Tickets"
        info="Make sure to get the best offer we have, by buying the tiket of your favourite treatement"
      />
      <SeasonOffer
        src={treatment1}
        title="Sign Up and get Special Discount"
        info="It takes 2 minutes to get your yourself in a massaive presents that we give it to our coustomers, Sign Up now and wait SMS notification "
      />
    </div>
  </div>
);
export default Erbjudande;

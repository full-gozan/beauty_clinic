import React from "react";
import TreatmentsItem from "./TreatmentsItem";
import "./Treatments.css";
import beauty from "../../images/beauty.jpg";
import treatment1 from "../../images/treatment1.jpg";
import treatment2 from "../../images/treatment2.jpeg";
import treatment3 from "../../images/treatment3.png";
import treatment4 from "../../images/treatment4.jpeg";
import treatment5 from "../../images/treatment5.jpg";
import treatment6 from "../../images/treatment6.jpg";
import treatment7 from "../../images/treatment7.jpg";
import treatment8 from "../../images/treatment8.jpeg";
import treatment10 from "../../images/treatment10.jpg";
import treatment11 from "../../images/treatment11.jpg";
import treatment12 from "../../images/treatment12.jpg";

const Treatments = props => (
  <div className="treatment-container">
    <div className="treatment-panel">
      <div className="panel-img">
        <div>
          <img
            src={beauty}
            style={{ width: "100%", height: "300px" }}
            alt="not fount"
          />

          <div className="panel-welcome">
            <h3>Welcome To Our Treatments </h3>
          </div>
        </div>
      </div>
    </div>
    <div className="treatments" />
    <TreatmentsItem
      src={treatment1}
      title="BB Glow"
      info="A skin glow treatment is the latest trend in skin care technology.
  This method of skin care is a popular treatment in Singapore and Korea, 
  producing amazing results, and is just now making its way across the ocean 
  to Toronto and beyond. The BB Glow treatment is an intensive skin treatment
  that uses state-of-the-art laser technology to penetrate the deepest layers of the skin.
  This laser penetration stimulates natural collagen production as well as
    offering a myriad of other benefits.

Collagen is a natural protein found throughout the body, and it helps to give structure,
 elasticity and vibrancy to your skin. Unfortunately, as you age, your body produces less
  collagen, which in turn leads to wrinkles, and a loss of skin elasticity and firmness."
    />

    <TreatmentsItem
      src={treatment2}
      title="Miso"
      info="Mesotherapy is a non surgical skin rejuvenation treatment aimed at diminishing 
      problem areas on the face and body. Mesotherapy treatment can be used for face, neck
       and under eye rejuvenation and also for common concerns such as hair thinning. 
       Mesotherapy treatments involve injecting Hyaluronic Acid directly into the mesoderm 
       (middle layer of the skin). This nourishes and rejuvenates the skin by promoting the 
       production of collagen and elastin and stimulates your skin’s metabolism. Using 
       Mesotherapy for over 10 years at our accredited award winning Laser and Skin Clinic 
       our clients have described their skin as looking ‘plumper, hydrated, radiant, glowing 
       and 
       firmer’ after a course of mesotherapy injections.."
    />
    <TreatmentsItem
      src={treatment6}
      title="Micro"
      info="A skin glow treatment is the latest trend in skin care technology.
  This method of skin care is a popular treatment in Singapore and Korea, 
  producing amazing results, and is just now making its way across the ocean 
  to Toronto and beyond. The BB Glow treatment is an intensive skin treatment
  that uses state-of-the-art laser technology to penetrate the deepest layers of the skin.
  This laser penetration stimulates natural collagen production as well as
    offering a myriad of other benefits.

Collagen is a natural protein found throughout the body, and it helps to give structure,
 elasticity and vibrancy to your skin. Unfortunately, as you age, your body produces less
  collagen, which in turn leads to wrinkles, and a loss of skin elasticity and firmness."
    />
    <TreatmentsItem
      src={treatment8}
      title="Peeling"
      info="Easy TCA is the most famous and internationally known Skin Tech brand of 
    medium depth chemical peeling for skin rejuvenation. Considered as the safest 
    and most effective chemical peel it can provide fantastic visible results in as
     little as one treatment. As The Laser and Skin Clinic is a medically led skin clinic 
     this allows us to offer our clients Advanced Medical Skin Tech Chemical Peels which
      can achieve superior results for clients with specific skin concerns."
    />
    <TreatmentsItem
      src={treatment10}
      title="Lashes"
      info="A skin glow treatment is the latest trend in skin care technology.
This method of skin care is a popular treatment in Singapore and Korea, 
producing amazing results, and is just now making its way across the ocean 
to Toronto and beyond. The BB Glow treatment is an intensive skin treatment
that uses state-of-the-art laser technology to penetrate the deepest layers of the skin.
This laser penetration stimulates natural collagen production as well as
offering a myriad of other benefits.

Collagen is a natural protein found throughout the body, and it helps to give structure,
elasticity and vibrancy to your skin. Unfortunately, as you age, your body produces less
collagen, which in turn leads to wrinkles, and a loss of skin elasticity and firmness."
    />
     <TreatmentsItem
      src={treatment7}
      title="Laser"
      info="At The Laser and Skin Clinic we use Cynosure Elite Medical Grade Laser Hair 
      Removal to solve the problem of ingrown and unwanted hair for both men and women.
       Cynosure Elite Laser is one of the most advanced and effective laser hair removal
        technologies, giving clients permanent laser hair removal solutions and treating
         all skin types safely. We also use the smart cool system for the ultimate patient comfort."
    />
  </div>
);
export default Treatments;

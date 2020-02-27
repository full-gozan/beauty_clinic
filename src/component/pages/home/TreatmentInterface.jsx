import React, { useState } from "react";
import "../../style/Home/TreatmentInterface.css";
const TreatmentInterface = () => {
  const [state, setState] = useState({
    hasExtended: false,
    mizoExtended: false,
    prpExtended: false,
    laserExtended: false,
    microExtended: false
  });
  const extendContent = event => {
    switch (event.target.className) {
      case "box1":
        setState({ mizoExtended: !state.mizoExtended });
        break;
      case "box2":
        return setState({ prpExtended: !state.prpExtended });

      case "box3":
        return setState({ microExtended: !state.microExtended });

      case "box4":
        return setState({ laserExtended: !state.laserExtended });

      default:
        return setState({
          hasExtended: false,
          mizoExtended: false,
          prpExtended: false,
          microExtended: false,
          laserExtended: false
        });
    }
  };

  return (
    <div className="interface">
      <div
        className={state.mizoExtended ? "hideContent" : "box1"}
        onClick={extendContent}
      >
        <h3 className="box-tittle">Mizo</h3>
        <div
          className={state.mizoExtended ? "showInfoOnclick" : "hideInfoOnclick"}
        >
          <h6>
            Mesotherapy is a technique that uses injections of vitamins,
            enzymes, hormones, and plant extracts to rejuvenate and tighten
            skin, as well as remove excess fat. Michel Pistor, a doctor in
            France, developed the technique in 1952. It was originally used to
            relieve pain. In the years since, it has gained popularity in the
            United States and other parts of the world.
          </h6>{" "}
          <br />
          <h4>Mizotherapy is used for:</h4>
          <ul>
            <li>
              remove fat in areas like the stomach, thighs, buttocks, hips,
              legs, arms, and face
            </li>
            <li>reduce cellulite</li>
            <li> fade wrinkles and lines.</li>
            <li>tighten loose skin</li>
            <li> recontour the body</li>

            <li>Increased production of collagen.</li>
          </ul>
          <a href="###"> Book Time </a>
        </div>
      </div>
      <div
        className={state.prpExtended ? "hideContent" : "box2"}
        onClick={extendContent}
      >
        <h3 className="box-tittle">PRP</h3>
        <div
          className={state.prpExtended ? "showInfoOnclick" : "hideInfoOnclick"}
        >
          <h6>
            The skin is affected to some extent by both genetic and
            environmental factors, but over time, its own collagen production
            and skin cell renewal decrease. This results in the skin becoming
            wrinkled and losing its luster. With a PRP treatment, also called
            vampire treatment, we can stimulate collagen production so that cell
            renewal occurs faster. PRP on the skin can be performed on the face,
            neck, decolletage or on the hands.
          </h6>{" "}
          <br />
          <h4>PRP for the skin contributes:</h4>
          <ul>
            <li>Smoother skin.</li>
            <li>Smoother pigments.</li>
            <li> More lusts.</li>
            <li>Reduction of scars from, for example, acne.</li>
            <li> Accelerated healing process.</li>

            <li>Increased production of collagen.</li>
          </ul>
          <a href="###"> Book Time </a>
        </div>
      </div>
      <div
        className={state.microExtended ? "hideContent" : "box3"}
        onClick={extendContent}
      >
        <h3 className="box-tittle centerized">Microledning</h3>
        <div
          className={
            state.microExtended ? "showInfoOnclick" : "hideInfoOnclick"
          }
        >
          <h6>
            Microneedling is a method that some dermatologists use to treat
            different skin conditions. The technique involves using multiple
            tiny, sterile needles to puncture the skin and cause physical
            trauma.
          </h6>{" "}
          <br />
          <h4>What Microledning Can Does:</h4>
         
          <ul>
            <li> acne scars</li>
            <li>age spots (also called “sun spots”)</li>
            <li> fine lines and wrinkles</li>
            <li>large pores</li>
            <li> other types of scarsTrusted Source</li>

            <li>uneven skin tone</li>
          </ul>
          <a href="###"> Book Time </a>
        </div>
      </div>
      <div
        className={state.laserExtended ? "hideContent" : "box4"}
        onClick={extendContent}
      >
        <h3 className="box-tittle">Laser</h3>
        <div
          className={
            state.laserExtended ? "showInfoOnclick" : "hideInfoOnclick"
          }
        >
          <h6>
          Usually, laser treatment for rosacea is a choice you make after trying other types of treatments.
           Laser and light therapy might not be right for every person.

“Normally, a person will try other treatments, such as a mix of topical medications to try to manage and treat rosacea,
” Jaliman said. “Usually,
 when a treatment or combination of these treatments does not manage this condition, a person might look into laser treatments.”
          </h6>{" "}
          <br />
          <h4>Laser usage types:</h4>
          <ul>
            <li>Erbium YAG laser
.</li>
            <li>Smoother pigments.</li>
            <li> Pulsed-dye lasers.</li>
            <li>CO2 lasers</li>
            <li> Rhynophomas .</li>

            <li>Hair removal laser.</li>
          </ul>
          <a href="###"> Book Time </a>
        </div>
      </div>
    </div>
  );
};
export default TreatmentInterface;

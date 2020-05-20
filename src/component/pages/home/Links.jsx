import React from "react";
import "./style/Home/Links.css";
import { Link } from "react-router-dom";
const Links = () => {
  return (
    <div className="links-container" >
      <div className="links-images">
        <Link to="/about_us">
          <div className="links-image">
            <img
              src="https://i.picsum.photos/id/1005/5760/3840.jpg"
              alt="not found"
            />

            <h3>About Us </h3>
          </div>
        </Link>
        <Link to="Priser">
          <div className="links-image">
            <img
              src="https://i.picsum.photos/id/64/4326/2884.jpg"
              alt="not found"
            />

            <h3> Our Work</h3>
          </div>
        </Link>
        <Link to="Treatments">
          <div className="links-image">
            <img
              src="https://i.picsum.photos/id/1011/5472/3648.jpg"
              alt="not found"
            />
            <h3>Products </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Links;

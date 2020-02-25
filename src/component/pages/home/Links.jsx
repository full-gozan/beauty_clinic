import React from "react";
import "../../style/Home/Links.css";
import products_image from "../../images/treatment8.jpeg";
import about_image from "../../images/treatment7.jpg";
import Prices_image from "../../images/treatment5.jpg";

const Links = () => {
  return (
    <div className="links-container">
      <div className="links-images">
        <a href="##">
          <div className="links-image">
            <img src="https://i.picsum.photos/id/1005/5760/3840.jpg" alt="" />

            <h3>About Us </h3>
          </div>{" "}
        </a>{" "}
        <a href="##">
          <div className="links-image">
            <img src="https://i.picsum.photos/id/64/4326/2884.jpg" alt="" />

            <h3> Our Work</h3>
          </div>{" "}
        </a>{" "}
        <a href="##">
          <div className="links-image">
            {" "}
            <img src="https://i.picsum.photos/id/1011/5472/3648.jpg" alt="" />
            <h3>Products </h3>
          </div>{" "}
        </a>
      </div>
    </div>
  );
};
export default Links;

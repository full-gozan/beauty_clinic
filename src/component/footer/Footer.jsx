import React from "react";
import "../style/footer.css";
import { Link } from "react-router-dom";
import { FaMobileAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

import FollowAt from "react-social-media-follow";

const links = [
  "https://twitter.com/",
  "https://www.facebook.com/",
  "https://www.instagram.com/"
];

class Footer extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <div className="footer-container ">
          <div className="footer-links">
            <h3>important links</h3>
            <ul>
              <li>
                <Link style={{ textDecoration: "none" }} to="/Home">
                  link 1{" "}
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="/Home">
                  link 2{" "}
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "inherit" }} to="/Home">
                  link 3{" "}
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "inherit" }} to="/Home">
                  link 4{" "}
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "inherit" }} to="/Home">
                  link 5{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-follow">
            <ul>
              <li>
                <FaMobileAlt /> 07000000000
              </li>
              <li>
                <h3>
                  <GoLocation />
                  Bokgaran 26, Malmö
                </h3>
              </li>

              <li>
                <FollowAt links={links} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;

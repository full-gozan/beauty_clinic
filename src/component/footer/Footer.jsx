import React from "react";
import "../style/footer.css";
import { Link } from "react-router-dom";
import { FaMobileAlt } from "react-icons/fa";

import FollowAt from "react-social-media-follow";

const links = [
  "https://twitter.com/",
  "https://www.facebook.com/",
  "https://www.instagram.com/"
];

class Footer extends React.Component {
  render() {
    return (
      
        <div className="footer-container ">
          

          <div className="footer-links">
            <h3>Important Links</h3>
            <ul>
              <li>
                <Link to="/Home">Offers </Link>
              </li>
              <li>
                <Link to="/Home">Book time </Link>
              </li>
              <li>
                <Link to="/Home">Who we are </Link>
              </li>
              <li>
                <Link to="/Home">Products </Link>
              </li>
            </ul>
          </div>

          <div className="footer-follow">
            <ul>
             
              <li>
                <h3>
                  Bokgatan 26, Malmö
                </h3>
              </li>

              <li>
                <FollowAt links={links} />
              </li>
            </ul>
          </div>
        </div>
    );
  }
}
export default Footer;

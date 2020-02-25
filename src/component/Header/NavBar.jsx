import React, { Component } from "react";
import "./navBar.css";
import MenuToggleButton from "./MenuToggleButton";
import { Link } from "react-router-dom";
import logo from '../images/logo.jpg'
import FollowAt from "react-social-media-follow";

const links = [
  "https://twitter.com/",
  "https://www.facebook.com/",
  "https://www.instagram.com/"
];

const NavBar = prop => (
  <header className="toolbar">
    <MenuToggleButton click={prop.slideClickHandler} />

    <nav className="toolbar__navigation">
      <div className="toolbar__navigation_contact">

        <h4>Bokgatan 26, Malmö</h4>
        <li>
          <FollowAt links={links} />
        </li>
      </div>
      <Link to="/">
        <div className="toolbar__navigation_logo">
          <img src={logo} />{" "}
        </div>
      </Link>

      <div className="toolbar__navigation_items">
        <ul> <li>
            <Link to="About_us"><h4  className="link">About Us</h4> </Link>
          </li>
          <li>
            <Link to="Treatments"><h4  className="link">Treatments</h4> </Link>
          </li>

          <li>
            <Link to="Priser"> <h4  className="link">Prices</h4> </Link>
          </li>

         
        </ul>
      </div>
    </nav>
    {/* <div className="ring-oss">
      <h3>ring oss</h3>
      <h3>
        <a href="tel:123-456-7890">0708080080</a>
      </h3>
    </div> */}
  </header>
);

export default NavBar;

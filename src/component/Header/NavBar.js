import React, { Component } from "react";
import "./navBar.css";
import MenuToggleButton from "./MenuToggleButton";
import { Link } from "react-router-dom";

const NavBar = prop => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <MenuToggleButton click={prop.slideClickHandler} />

      <div className="toolbar__logo">
        {" "}
        <img src={"https://s.cdpn.io/3/kiwi.svg"} />{" "}
      </div>
      <div className="spacer" />
      <div className="toolbar__navigation-items">
        <ul>
          <li>
            {" "}
            <Link to="Behandlinger">Behandlinger </Link>
          </li>
          <li>
            {" "}
            <Link to="Priser">PRISER </Link>
          </li>
          <li>
            {" "}
            <Link to="erbjudande">ERBJUDANDEN </Link>
          </li>

          <li>
            {" "}
            <Link to="omoss">OM OSS </Link>
          </li>
        </ul>
      </div>
      <div className="ring-oss">
        <h3>ring oss</h3>
        <h3>
          <a href="tel:123-456-7890">0708080080</a>
        </h3>
      </div>
    </nav>
  </header>
);

export default NavBar;

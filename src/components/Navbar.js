import React, { Component } from "react";

import logo from "../images/logo.svg";

import "./styles/Navbar.css";
import Reloj from "./Reloj";
import ToggleButton from "./ToggleButton";

const navbarColor = {
  background: "#1C3643"
};

const styleToggle = {
  fontWeight: "bold"
};

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar py-0 navbarColor" style={navbarColor}>
          <a href="./" className="navbar-brand navbar-brand-custom">
            <img src={logo} className="d-inline-block mr-2" alt="Logo" />
            <span className="navarTitle">Platzi</span>
            <span className="navarTitle">Conf</span>
          </a>
          <span>
            <span style={styleToggle}>
              <ToggleButton />{" "}
            </span>
            <span className="reloj mb-0 h5">
              <Reloj />
            </span>
          </span>
        </nav>
      </div>
    );
  }
}

export default Navbar;

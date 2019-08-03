import React, { Component } from "react";

import logo from "../images/logo.svg";

import "./styles/Navbar.css";
import Reloj from "./Reloj";
import ToggleButton from "./ToggleButton";
import { Link } from "react-router-dom";

const navbarColor = {
  background: "#1C3643"
};

const styleToggle = {
  fontWeight: "bold"
};

class Navbar extends Component {
  state = {
    watchButton: true
  };

  handleClick = e => {
    this.setState({
      ...this.state,
      [e.target.name]: !this.state.watchButton
    });
  };

  render() {
    return (
      <div>
        <nav className="navbar py-0 navbarColor" style={navbarColor}>
          <Link to="/" className="navbar-brand navbar-brand-custom">
            <img src={logo} className="d-inline-block mr-2" alt="Logo" />
            <span className="navarTitle">Platzi</span>
            <span className="navarTitle">Conf</span>
          </Link>
          <span>
            <span style={styleToggle}>
              <ToggleButton
                onClick={this.handleClick}
                buttonsValues={this.state.watchButton}
              />
            </span>
            <span className="reloj mb-0 h5">
              <Reloj power={this.state.watchButton} />
            </span>
          </span>
        </nav>
      </div>
    );
  }
}

export default Navbar;

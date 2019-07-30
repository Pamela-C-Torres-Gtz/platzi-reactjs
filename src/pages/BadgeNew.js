import React, { Component } from "react";

// Estilos:
import "./style/BadgeNew.css";

// Multimedia:
import header from "../images/platziconf-logo.svg";

// Componentes:
import Badge from "../components/Badge";
import Navbar from "../components/Navbar";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="BageNew_Hero">
          <div className="container">
            <div className="row">
              <div className="col-md-5 offset-md-1">
                <img className="img-fluid " src={header} alt="Logo" />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-5 offset-md-1 ">
              <Badge
                firstName="Richard"
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                lastName="Kaufman"
                jobTitle="Frontend Engineer"
                twitter="Sparragus"
              />
            </div>

            <div className="col-md-4 offset-md-1">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;

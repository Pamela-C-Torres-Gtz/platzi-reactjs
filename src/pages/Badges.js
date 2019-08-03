import React, { Component } from "react";
import BadgesList from "../components/BadgesList";
import header from "../images/badge-header.svg";
import "./style/Badges.css";
import { Link } from "react-router-dom";

class Badges extends Component {
  /*
  Es lo primero que se ejecuta. Recibe los props
  y se deben utilizar para inicializar la super
  clase
  */

  render() {
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={header} alt="Conf Logo" />
            </div>
          </div>
        </div>

        <div className="containerCards">
          <div className="Badges__buttons">
            {/* Se usa Link en lugar de a, y to en lugar de href  */}
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="containerCardsList">
            <BadgesList />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;

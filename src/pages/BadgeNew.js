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
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    },
    buttons: {
      watchButton: true
    },
    apps: {
      watch: true
    }
  };

  handleClick = e => {
    this.setState({
      buttons: {
        ...this.state.buttons,
        [e.target.name]: !this.state.buttons.watchButton
      }
    });
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <Navbar onClick={this.handleClick} buttonsValues={this.state.buttons} />

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
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>

            <div className="col-md-4 offset-md-1">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;

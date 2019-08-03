import React, { Component } from "react";

// Estilos:
import "./style/BadgeNew.css";

// Multimedia:
import header from "../images/platziconf-logo.svg";

// Componentes:
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };

  hundleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/badges");
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
      <React.Fragment>
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
                firstName={this.state.form.firstName || "Firs Name"}
                lastName={this.state.form.lastName || "Last Name"}
                twitter={this.state.form.twitter || "Twitter"}
                jobTitle={this.state.form.jobTitle || "Job Title"}
                email={this.state.form.email || "email"}
              />
            </div>

            <div className="col-md-4 offset-md-1">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.hundleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;

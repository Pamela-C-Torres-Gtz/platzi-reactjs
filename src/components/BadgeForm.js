import React, { Component } from "react";

// Estilos:
import "./styles/BadgeForm.css";

const colorTerms = {
  color: "#007bff",
  fontWeight: "bold"
};

class BadgeForm extends Component {
  // Escucha lo clicks del botón
  handleClick = e => console.log("Button was clicked");

  // Escucha el submit del formulario
  // handleSubmit = e => {
  //   /*
  //     Para no mandar el fomulario y por ende no se recargue
  //     la página, se debe realizar el preventDefault del evento.
  //     El defaultpor defecto envia el formulario.
  //   */

  //   e.preventDefault();
  //   console.log("Form was submitted");
  //   console.log(this.state);
  // };

  render() {
    return (
      <div className="newAttendant">
        <h1 className="titleForm">NEW ATTENDANT</h1>

        <div className="colorInput">
          {/* Evento del form: onSubmit */}
          <form onSubmit={this.props.onSubmit}>
            {/* Input del Firt Name */}
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="firstName"
                id="firstName"
                value={this.props.formValues.firstName}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="lastName"
                id="lastName"
                value={this.props.formValues.lastName}
              />
            </div>

            <hr />

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="email"
                name="email"
                id="email"
                value={this.props.formValues.email}
              />
            </div>

            {/* Input del jobTitle*/}
            <div className="form-group">
              <label htmlFor="jobTitle">Job title:</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="jobTitle"
                id="jobTitle"
                value={this.props.formValues.jobTitle}
              />
            </div>

            <div className="form-group">
              <label htmlFor="twitter">Twitter:</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="twitter"
                id="twitter"
                value={this.props.formValues.twitter}
              />
            </div>

            {/* onClick es el evento que acompaña al botón.
              
                Cuando hay un botón dentro de un form, automáticamente
                es de tipo submit (type="submit", valor por defecto),
                en consecuencia se reacarga la página siempre que le damos
                click, para solucionar este comportamiento solo cambiamos 
                el tipo

                type = "button"

                Sin embargo se va a manejar este comportamiento cuando 
                ocurra el evento onSubmit (en el form)
            */}

            <button
              // type="button"
              onClick={this.handleClick}
              className="btn btn-primary btn-lg btn-block"
            >
              Save
            </button>
          </form>

          <div className="form-check mt-4">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />

            <label
              className="form-check-label formTerms"
              htmlFor="defaultCheck1"
            >
              I accept the <span style={colorTerms}>terms of service</span> and
              the <span style={colorTerms}>privacy policy</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeForm;

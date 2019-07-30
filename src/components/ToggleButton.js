import React, { Component } from "react";

const styleButton = {
  // fontSize: "15px"
};

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    /*
      Los método de las clases no estan ligados por defecto.
      si no se liga, this será undefined cuando se llama la función.

      otra manera de resolverlo es con una arrow function:

        handleClick = () => {
          
        }
      
        De esta forma no haría falta ligar la función en el contructor.

    */

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //   }));
  // }

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  };

  render() {
    return (
      <button
        className="btn btn-primary"
        onClick={this.handleClick}
        style={styleButton}
      >
        {/* El sino ? es equivalente a hacer:
          if(this.state.isToggleOn === "ON"){
            OFF
          }else{
            ON
          }
        */}

        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export default ToggleButton;

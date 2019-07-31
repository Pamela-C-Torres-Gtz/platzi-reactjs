import React, { Component } from "react";

const styleButton = {
  // fontSize: "15px"
};

class ToggleButton extends Component {
  render() {
    return (
      <button
        className="btn btn-primary mr-2"
        onClick={this.props.onClick}
        style={styleButton}
        name="watchButton"
      >
        {/* El sino ? es equivalente a hacer:
          if(this.state.isToggleOn === "ON"){
            OFF
          }else{
            ON
          }
        */}

        {this.props.buttonsValues.watchButton ? "ON" : "OFF"}
      </button>
    );
  }
}

export default ToggleButton;

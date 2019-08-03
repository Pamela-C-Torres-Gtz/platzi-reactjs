import React, { Component } from "react";

class ToggleButton extends Component {
  render() {
    return (
      <button
        className="btn btn-primary mr-2"
        onClick={this.props.onClick}
        name="watchButton"
      >
        {this.props.buttonsValues ? "ON" : "OFF"}
      </button>
    );
  }
}

export default ToggleButton;

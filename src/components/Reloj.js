import React, { Component } from "react";

class Reloj extends Component {
  state = {
    power: true,
    date: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 100);
  }

  /*
    Si el componenete clock se elimina en algún momento del DOM, REact invoca
    al método de ciclo de vida componentWillUnmount(), por lo que el temporizador
    se detiene.
  */
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <span>{this.state.date.toLocaleTimeString()}</span>;
  }
}

export default Reloj;

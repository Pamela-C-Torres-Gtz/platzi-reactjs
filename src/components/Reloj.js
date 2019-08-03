import React, { Component } from "react";

class Reloj extends Component {
  state = {
    power: this.props.power,
    date: new Date()
  };

  powerWatch = () => {
    if (this.props.power) {
      return <span>{this.state.date.toLocaleTimeString()}</span>;
    } else {
      return <span>- - : - - : - -</span>;
    }
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
    return this.powerWatch();
  }
}

export default Reloj;

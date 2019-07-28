import React, { Component } from "react";

/*
  Trabajar con fechas y horas:

  new Date() ==> Si no se proporciona argumentos, el constructor
                 crea un objeto Date con la hora y fecha de hoy.

  toLocaleTimeString() ==> Devuelve una representación de la fecha 
                           (dia, mes y año).

*/

class Reloj extends Component {
  constructor(props) {
    /*
      Los componentes de clase siempre deben invocar al contructor
      base con con props.
    */
    super(props);

    // El único lugar donde se puede asignar this.state es en el constructor
    this.state = {
      date: new Date()
    };
  }

  /*
    En aplicaciones con muchos componentes, es muy importante
    liberar recursos tomados por los componenetes cuando se destruyen.

    Los métodos para realizar los dicho se llaman: métodos de ciclo de vida.
  */

  /*
    Metodo para montar de componente: componentDidMount()

    Se ejecuta después que la salida del componenete ha sido renderizada en el DOM.
  */

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
    /*
      Gracias a la invocación de setState(), React sabe que el etado 
      cambió e invoca de nuevo al método render() para saber que debe
      estar en pantalla. Esta vez, this.state.date en el método rander()
      será diferente, por lo que el resultado del renderizado incluirá 
      la hora actualizada. Con forme a eso React actualiza el DOM.
    */
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <span>{this.state.date.toLocaleTimeString()}</span>;
  }
}

export default Reloj;

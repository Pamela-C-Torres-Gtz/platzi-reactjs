# Creando Nuestra Primera Página

Se establece un directorio para almacenar las páginas con sus repectivos estilos:

```
src/pages
```

```
src/pages/style
```

## Creando Componente Navbar

Navbar va a ser un componente de nuestra página. 

```javascript
import React, { Component } from "react";

import logo from "../images/logo.svg";

import "./styles/Navbar.css";
import Reloj from "./Reloj";

const navbarColor = {
  background: "#1C3643"
};

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar py-0 navbarColor" style={navbarColor}>
          <a href="./" className="navbar-brand navbar-brand-custom">
            <img src={logo} className="d-inline-block mr-2" alt="Logo" />
            <span className="navarTitle">Platzi</span>
            <span className="navarTitle">Conf</span>
          </a>
          <span>
            <span className="relojTag mr-2">Hora: </span>
            <span className="reloj">
              <Reloj />
            </span>
          </span>
        </nav>
      </div>
    );
  }
}

export default Navbar;
```
# Crando componente reloj

```javascript
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
```

## Creando nuestra página

```javascript
import React, { Component } from "react";

// Estilos:
import "./style/BadgeNew.css";

// Multimedia:
import header from "../images/platziconf-logo.svg";

// Componentes:
import Badge from "../components/Badge";
import Navbar from "../components/Navbar";

class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="BageNew_Hero">
          <img className="img-fluid " src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Richard"
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                lastName="Kaufman"
                jobTitle="Frontend Engineer"
                twitter="Sparragus"
              />
            </div>
            <div className="col-6">
              <Badge
                firstName="Richard"
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                lastName="Kaufman"
                jobTitle="Frontend Engineer"
                twitter="Sparragus"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
```

## Inyectando la página en el index.js

```javascript
// Se deben importar las librerías React y ReactDOM
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// Se importa el componente
import BadgeNew from "./pages/BadgeNew";

// Importando Bootstrap
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";

// Se renderiza el componente.

ReactDOM.render(
  // Props del componente Bagde.js
  <BadgeNew />,

  document.getElementById("root")
);

serviceWorker.register();
```
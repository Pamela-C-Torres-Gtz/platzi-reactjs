# Nuestro Primer Componente

En React las interfaces de usuario se estructuran en componentes, por medio de los cuales le decimos a React lo que queremos que se vea en la pantalla. 

Los componentes son como las funciopnes de Javascript. Aceptan en tradas arbitratrias (llamadas "props").

## 1. Creando nuestro primer componente

Es una buena práctica separar los componentes de los demás archivos, por ello se crea una carpeta llamada ***components** en nuestra capeta src, donde se van almacenar todos nuestros componentes. El primer componente que se va a crear se titula: ```Badge.js``` y su contenido va ser el siguiente:

```javascript
import React, { Component } from "react";

// Se referencia la imagen
import confLogo from "../images/badge-header.svg";

// Se importan los estilos
import "./styles/Badge.css";

class Badge extends Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={this.props.avatarUrl}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <p>Frontend Engineer</p>
          <p>@sparragus</p>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
```

## 2. Insertando nuestro componente en el Index.js

En este proyecto se usa bootstrap para establecer los diseños de algunos componentes, por ello se debe instalar:

```
npm install bootstrap
```

Ahora insertamos nuestro compinente en el index.js, además importamos los estilos y enviamos atributos (props) a badge:

```javascript
// Se deben importar las librerías React y ReactDOM
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// Se importa el componente
import Badge from "./components/Badge.js";

// Importando Bootstrap
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";

const avatar =
  "https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon";

// Se renderiza el componente.

ReactDOM.render(
  // Props del componente Bagde.js
  <Badge
    firstName="Richard"
    avatarUrl={avatar}
    lastName="Kaufman"
    jobTitle="Frontend Engineer"
    twitter="Sparragus"
  />,
  document.getElementById("root")
);

serviceWorker.register();
```
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

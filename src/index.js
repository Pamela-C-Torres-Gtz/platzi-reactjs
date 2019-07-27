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

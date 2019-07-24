// Se deben importar las librerías React y ReactDOM
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

/*
  React y ReactDOM trabajan en conjunto:

  + React es análogo a createElement.
  + ReactDOM es análogo a appendChild
*/

const name = "Daniel";

const jsxElement = (
  <div>
    <h1>Hello, I am {name}</h1>
    <p>I'm Mechanical Engineer</p>
  </div>
);

/*
  document.getElementById("root") busca en el index.html que se encuentra en
  la carpeta public.
*/

ReactDOM.render(jsxElement, document.getElementById('root'));

/*
  Para cargar nuestra aplicación más rapido cuando estamos sin conexión, se usa
  el método register().

  De lo contrario se usa unregister().
*/

serviceWorker.register();

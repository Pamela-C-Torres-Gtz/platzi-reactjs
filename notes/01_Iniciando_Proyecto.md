# INICIANDO PROYECTO

## Herramientas

### **1. Atom:**

#### **1.1 Temas y Fuentes**

- **UI Theme:** Nucleus Dark
- **Sintax Theme:** Northem Dark
- **Font:** [Fira Code](https://github.com/tonsky/FiraCode)

  ```
  sudo apt install fonts-firacode
  ```

#### **1.2 Plugins:**

- **[emmet](https://github.com/emmetio/emmet-atom)**
- **[color-picker](https://github.com/thomaslindstrom/color-picker)**
- **[pigments](https://github.com/abe33/atom-pigments)**
- **[file-icons](https://github.com/file-icons/atom)**

### **2. React Developer Tools**

React Developer Tools te permite inspeccionar la jerarquía de componentes del DOM Virtual de React, incluyendo componentes sencillos y sus propiedades. Existe como una extensión de exploradores (para Chrome y Firefox).

#### **2.1 Instalar en Chrome:**

Para su instalación se escribe **_chrome://extensions/_** en la barra de direcciones, y despúes se realiza la busqueda con el nombre: React Developer Tools.

## **Creando Aplicación**

### **1. Instalando `create-react-app`:**

**_Create react app_** nos ofrece una forma simple y rápida para crear aplicaciones con React, facilitando la configuración inicial en el package.json:

```
npm install -g create-react-app
```

### **2. Crear aplicación:**

Simplemente se ejecuta:

```
create-react-app <mi-Aplicación>
```

nuestra aplicación se llama:

```
create-react-app platzi-reactjs
```

### **3. Iniciar aplicación:**

Simplemente se ejecuta:

```
npm start
```

### **_3. Nuestra Primera página_**

Este script crea un **h1** con contenido y lo inyecta en el index.html:

```javascript
// Se deben importar las librerías React y ReactDOM
import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

/*
  React y ReactDOM trabajan en conjunto:

  + React es análogo a createElement.
  + ReactDOM es análogo a appendChild
*/

const element = <h1>Hello, Platzi Badge from react</h1>;

/*
  document.getElementById("root") busca en el index.html que se encuentra en
  la carpeta public.
*/

ReactDOM.render(element, document.getElementById("root"));

/*
  Para cargar nuestra aplicación más rapido cuando estamos sin conexión, se usa
  el método register().

  De lo contrario se usa unregister().
*/

serviceWorker.register();
```

#### **3.1 Otro Ejemplo**

Se pueden insertar variables dentro de jsx con las llaves {<varibles>} (En general cualquier expreción como 2+2)

```javascript
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const name = "Daniel";

const jsxElement = (
  <div>
    <h1>Hello, I am {name}</h1>
    <p>I am Mechanical Engineer</p>
  </div>
);

ReactDOM.render(jsxElement, document.getElementById("root"));

/*
  Para cargar nuestra aplicación más rapido cuando estamos sin conexión, se usa
  el método register().

  De lo contrario se usa unregister().
*/

serviceWorker.register();
```

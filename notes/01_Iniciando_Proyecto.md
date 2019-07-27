# INICIANDO PROYECTO

## Herramientas

### **1. Visual Studio Code:**

#### **1.1 Temas y Fuentes**

- **UI Theme:** Monokai

- **Font:** [Fira Code](https://github.com/tonsky/FiraCode)

  Primero se debe instalar la fuente en el sistema operativo. Para el caso de linux se ejecuta la siguiente línea en la terminal.
  
  ```
  sudo apt install fonts-firacode
  ```

  Se debe incluir nuestra nueva fuente en el ```setting.json``` de vscode la siguiente línea:

  ```json
  "editor.fontFamily": "Fira Code"
  ```

  > Nota: Para abrir ```setting.json```  se oprime F1 estando en vscode y despúes se escribe Open Settings (JSON).

#### **1.2 Plugins:**

- **Mitheil Emmet:** 

  Es posible habilitar las funcionalidades de Emmet en ReactJS incluyendo las siguientes líneas en nuestro setting (JSON):

  ```json
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
  ```

- **React-Native/React/Redux snippets for es6/es7** 

- **Prettier - Code formatter:**

Para hacer efectivo Prettier siempre que se guardan cambios en nuestros archivos js, se debe incluir en ```setting.json``` las siguientes líneas:

```javascript
"[javascript]": {
   "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
},
```

- **React-Native/React/Redux snippets for es6/es7** 

- **vscode-icons**

- **Import Cost**


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

### **4. Nuestra Primera página**

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

#### **4.1 Otro Ejemplo**

Se puede piner cualquier expresión de JavaScript dentro de llaves en JSX, por ejemplo: ```2 + 2```, ```funcuionX()```, cualquier expresión que devuelva un valor:

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

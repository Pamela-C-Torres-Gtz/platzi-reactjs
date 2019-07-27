## **1. Actualizando El Elemento Renderizado.**

Los elementos de React son inmutables. Una vez creas un elemento, no puedes cambiar sus hijos o atributos. La única manera de actualizar la interfaz de usuario es creando un nuevo elemento, y pasarlo a ```ReactDOM.render()```. 

+ **Ejemplo:**

  ```javascript
  function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }

  setInterval(tick, 1000);
  ```

  El callback ```setInterval()``` llama a ```ReactDOM.render()``` cada segundo.

### **1.1 React solo actualiza lo que es necesario:**

React DOM compara el elemento y su hijos con el elemento anterior, y solo aplica las actualizaciones del DOM que son necesarias para que el DOM esté en el estado deseado.

## **2. Componentes y Propiedades**

Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.

Conceptualmente, los componentes son como las funciones de JavaScript. Aceptan entradas arbitrarias (llamadas “props”) y devuelven a React elementos que describen lo que debe aparecer en la pantalla.

### **2.1 Componentes funcionales:**

Literamente son funciones de JavaScript:

```javascript
//Componente funcional
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Esta función acepta un solo argumento de objeto "props" con datos y devuelve un elemento de react. Lo que secede en el anterior código es:

1. Llamamos a ```ReactDOM.render()``` con el elemento ```<Welcome name="Sara" />```.

2. React llama al componente Welcome con ```{name: 'Sara'}``` como “props”.

3. Nuestro componente Welcome devuelve un elemento ```<h1>Hello, Sara</h1>``` como resultado.

4. React DOM actualiza eficientemente el DOM para que coincida con ```<h1>Hello, Sara</h1>```.

### **2.1 Componentes como clases**

Este tipo de componen se implementa en un fichero diferente del fichero donde se llama al metodo render.

***Implementación del componente:***

```javascript
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

export default Welcome;
```
***Renderizado del componente:***

```javascript
ReactDOM.render(
  <Welcome name="Daniel"/>,
  document.getElementById('root')
);
```

## ***3. Estado y Ciclo de Vida***



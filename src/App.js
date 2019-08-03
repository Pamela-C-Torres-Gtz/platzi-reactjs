import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
// Se importala primera página
import BadgeNew from "./pages/BadgeNew";
// Se impotar la segunda página
import Badges from "./pages/Badges";
// Home
import Home from "./pages/Home";
// Esta página se renderiza siempre que no se encuentre una ruta
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/" component={Home} />
          {/* Ruta que se renderiza cuando la busqueda no coincida con ninguna */}
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

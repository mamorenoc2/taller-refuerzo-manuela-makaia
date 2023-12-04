/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MiComponente from './components/MiComponente';
import MiContador from './components/MiContador';

function App() {
  return (
    <Router>
      <div>
      <h1>Aquí están las rutas</h1> {/* Añade el encabezado h1 */}
        <ul>
          <li>
            <Link to="/micomponente">MiComponente</Link>
          </li>
          <li>
            <Link to="/micontador">MiContador</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route path="/micomponente">
            <MiComponente />
          </Route>
          <Route path="/micontador">
            <MiContador />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

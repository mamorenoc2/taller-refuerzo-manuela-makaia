// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MiComponente from './components/MiComponente';
import MiContador from './components/MiContador';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<div>¡Bienvenido a la página de inicio!</div>} />
        <Route path="/micomponente" element={<MiComponente />} />
        <Route path="/micontador" element={<MiContador />} />
      </Routes>
    </Router>
  );
}

export default App;

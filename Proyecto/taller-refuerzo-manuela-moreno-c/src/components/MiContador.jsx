/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function MiContador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>+</button>
      <button onClick={() => setContador(contador - 1)}>-</button>
    </div>
  );
}

export default MiContador;

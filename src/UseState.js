import React from "react";

function UseState({ name }) {
  const [error, setError] = React.useState(true);
  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Escribe el código de seguridad</p>

      {error && <p>Hubo un error, papalindo</p>}
      <input placeholder="Código de seguridad" />
      <button onClick={() => setError(!error)}>Comprobar</button>
    </div>
  );
}

export { UseState };

import React from "react";

function UseState({ name }) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log("empezando el efecto!");

    if (loading) {
      setTimeout(() => {
        console.log("Haciendo validación!");

        setLoading(false);

        console.log("Terminando la  validación!");
      }, 2000);
    }

    console.log("terminando el efecto!");
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Escribe el código de seguridad</p>

      {error && <p>Hubo un error, papalindo</p>}
      {loading && <p>Cargando, papalindo</p>}
      <input placeholder="Código de seguridad" />
      <button onClick={() => setLoading(true)}>Comprobar</button>
    </div>
  );
}

export { UseState };

import React from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  console.log(value);

  React.useEffect(() => {
    console.log("empezando el efecto!");

    if (loading) {
      setTimeout(() => {
        console.log("Haciendo validación!");
        if (value === SECURITY_CODE) {
          // setError(true);
        } else {
          setError(true);
        }
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

      {/* {(error && !loading) && <p>Hubo un error, papalindo</p>} */}
      {error && <p>Hubo un error, papalindo</p>}
      {loading && <p>Cargando, papalindo</p>}
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          // setError(false) se llama muchas veces al cambio de estado!
        }}
        placeholder="Código de seguridad"
      />
      <button
        onClick={() => {
          setError(false); // Es correcto
          setLoading(true);
        }}
      >
        Comprobar
      </button>
    </div>
  );
}

export { UseState };

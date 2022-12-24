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
      setError(false);
      setTimeout(() => {
        console.log("Haciendo validación!");
        if (value !== SECURITY_CODE) {
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

      {error && <p>Hubo un error, papalindo</p>}
      {loading && <p>Cargando, papalindo</p>}
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        placeholder="Código de seguridad"
      />
      <button onClick={() => setLoading(true)}>Comprobar</button>
    </div>
  );
}

export { UseState };

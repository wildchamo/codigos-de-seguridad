import React from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
  });

  console.log(state);

  React.useEffect(() => {
    console.log("empezando el efecto!");

    if (state.loading) {
      setTimeout(() => {
        console.log("Haciendo validación!");
        if (state.value === SECURITY_CODE) {
          setState({
            ...state,
            error: false,
            loading: false,
          });
        } else {
          setState({
            ...state,
            error: true,
            loading: false,
          });
        }

        console.log("Terminando la  validación!");
      }, 2000);
    }

    console.log("terminando el efecto!");
  }, [state.loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Escribe el código de seguridad</p>

      {state.error && !state.loading && <p>Hubo un error, papalindo</p>}
      {/* {state.error && <p>Hubo un error, papalindo</p>} */}
      {state.loading && <p>Cargando, papalindo</p>}
      <input
        value={state.value}
        onChange={(event) => {
          setState({
            ...state,

            value: event.target.value,
          });
          // setError(false) se llama muchas veces al cambio de estado!
        }}
        placeholder="Código de seguridad"
      />
      <button
        onClick={() => {
          setState({
            ...state,

            error: false,
          });
          //  setError(false); // Es correcto
          setState({
            ...state,

            loading: true,
          });
        }}
      >
        Comprobar
      </button>
    </div>
  );
}

export { UseState };

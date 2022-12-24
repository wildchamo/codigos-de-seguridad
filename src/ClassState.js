import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = "paradigma";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      error: false,
      loading: false,
    };
  }

  // UNSAFEcomponentWillMount() {
  //   console.log("componentWillMount");
  // }

  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("actualización papá");

    if (this.state.loading) {
      setTimeout(() => {
        console.log("Haciendo validación!");

        if (SECURITY_CODE === this.state.value) {
          this.setState({ error: false, loading: false });
        } else {
          this.setState({ error: true, loading: false });
        }
        console.log("Terminando la  validación!");
      }, 2000);
    }
  }

  render() {
    const { error, loading, value } = this.state;

    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Escribe el código de seguridad</p>
        {(this.state.error && !this.state.loading) && <p>Hubo un error, papalindo</p>}
        {this.state.loading && <Loading />}
        <input
          value={value}
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
          placeholder="Código de seguridad"
        />
        {/* <button onClick={() => this.setState({ error: !this.state.error })}> */}
        <button onClick={() => this.setState({ loading: true })}>
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };

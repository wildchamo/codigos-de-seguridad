import React from "react";
import { Loading } from "./Loading";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  componentDidUpdate(){
    console.log("actualización papá")

    if (this.state.loading) {
      setTimeout(() => {
        console.log("Haciendo validación!");

        this.setState({loading:false});

        console.log("Terminando la  validación!");
      }, 2000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Escribe el código de seguridad</p>
        {this.state.error && <p>Hubo un error, papalindo</p>}
        {this.state.loading && <Loading/>}
        <input placeholder="Código de seguridad" />
        {/* <button onClick={() => this.setState({ error: !this.state.error })}> */}
        <button onClick={() => this.setState({ loading:true })}>
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };

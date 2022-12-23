import React from "react";

class Loading extends React.Component {

  componentWillUnmount() {
    console.log("Chao miloco :cry");
  }


  render() {
    return <p>Cargando</p>;
  }
}

export { Loading };

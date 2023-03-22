import React, { Component } from "react";

class Button extends Component {
  render() {
    return <button>Enviar!</button>;
  }
}

function formatName(name, lastName) {
  return name + lastName;
}

class Teste extends Component {
  render() {
    return (
      <>
        <h1>Hello World {formatName("Gil ", "Carvalhal")} </h1>
        <Button />
      </>
    );
  }
}

export default Teste;

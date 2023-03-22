import React, { Component } from "react";

class Button extends Component {
  render() {
    return <button>Enviar!</button>;
  }
}

class Teste extends Component {
  render() {
    return (
      <>
        <h1>Hello World</h1>
        <Button />
      </>
    );
  }
}

export default Teste;

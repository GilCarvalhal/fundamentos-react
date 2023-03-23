import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      signed: false,
    };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState({ signed: !this.state.signed });
  }

  render() {
    return (
      <>
        {this.state.signed ? (
          <>
            <button onClick={this.toggleState}>Sair</button>
            <h1>Logado</h1>
          </>
        ) : (
          <>
            <button onClick={this.toggleState}>Entrar</button>
            <h1>Deslogado</h1>
          </>
        )}
      </>
    );
  }
}

export default App;

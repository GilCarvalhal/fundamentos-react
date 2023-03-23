import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  render() {
    return (
      <main>
        <h1>{this.state.name}</h1>

        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />

        <button onClick={() => console.log("Estado atual: ", this.state.name)}>
          Mostrar estado
        </button>
      </main>
    );
  }
}

export default App;

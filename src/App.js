import React, { Component } from "react";
import Timer from "./Timer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTimer: true,
    };
  }

  render() {
    return (
      <main>
        {this.state.showTimer && <Timer />}

        <button onClick={() => this.setState({ showTimer: false })}>
          Remover Timer
        </button>
      </main>
    );
  }
}

export default App;

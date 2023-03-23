import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: "",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({timer: new Date().toLocaleTimeString()})
    }, 1000);
  }

  componentDidUpdate(){
    console.log("Componente atualizou")
  }

  componentWillUnmount(){
    console.log("Componente desmontou")
  }

  render() {
    return <main>
        <h1>Hora: {this.state.timer}</h1>
    </main>;
  }
}

export default Timer;

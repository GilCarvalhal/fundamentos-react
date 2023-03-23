import React, { Component } from "react";

// const names = ["Gil", "Camila", "Maria", "João"]

const names = [
  {
    name: "Gil",
    age: 22,
  },
  {
    name: "Camila",
    age: 20,
  },
  {
    name: "Maria",
    age: 21,
  },
];

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <ul>
        {names.map((person, index) => (
          <li key={index}>
            <span>Nome: {person.name}</span> - Idade: <span>{person.age}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default App;

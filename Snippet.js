import styled, { injectGlobal } from "styled-components";
import React, { Component } from "react";

import Highlight from "react-highlight";



const code = `
import React, { Component } from "react";
import Todo from "./components/todo"

class App extends Component {
  state = {
    todos: ["Walk to kft", "See megha at kft", "Get boba"]
  };

  addParameter = () => {
    this.setState({
      todos: [...this.state.todos, "Get more boba"]
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {this.state.todos.map(todo => (
          <Todo name={todo}> </Todo>
        ))}
        <button onClick={this.addParameter}> Add todo</button>
      </div>
    );
  }
}

export default App;

`.trim();

const Test = styled.button`
  background-color: black;
  color: white;
  text-align: left;
  font-size:24pt;
`;

class Box extends Component {
  render() {
    return (
      <div>
        <Test>
          <Highlight className="javascript">{code}</Highlight>
        </Test>
      </div>
    );
  }
}

export default Box;

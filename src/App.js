import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <p>2 items</p>
        <button>All</button>
        <button>Active</button>
        <button>Complete</button>
        <button>Clear Completed</button>
      </div>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul>
        <li>
          <input type="checkbox" id="work" />
          <label htmlFor="work">Work</label>
          <button>Delete</button>
        </li>
        <li>
          <input type="checkbox" id="eat" />
          <label htmlFor="eat">Eat</label>
          <button>Delete</button>
        </li>
      </ul>
    );
  }
}

class UserInput extends Component {
  render() {
    return <input type="text" placeholder="What needs to be done?" />;
  }
}

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: "work",
          complete: false
        },
        {
          task: "eat",
          complete: false
        }
      ],
      filter: "none",
      userInput: ""
    };
  }
  render() {
    return (
      <div>
        <UserInput />
        <TodoList />
        <Footer />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return <TodoContainer />;
  }
}

export default App;

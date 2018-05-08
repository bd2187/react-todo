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
        <li>Work</li>
        <li>Eat</li>
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
// TodoContainer
// input
// todolist
// footer
// filters
// clear todo

class App extends Component {
  render() {
    return <TodoContainer />;
  }
}

export default App;

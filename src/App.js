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

class TodoItem extends Component {
  render() {
    var todo = this.props.todo.task;
    var id = this.props.id;
    return (
      <li>
        <input type="checkbox" id={id} />
        <label htmlFor={id}>{todo}</label>
        <button>Edit</button>
        <button>Delete</button>
      </li>
    );
  }
}

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.renderTodoItems = this.renderTodoItems.bind(this);
  }

  renderTodoItems(todos = []) {
    return todos.map(function(todo, index) {
      let key = `${todo.task}_${index}`;
      return <TodoItem key={key} todo={todo} id={key} />;
    });
  }

  render() {
    var todos = this.renderTodoItems(this.props.todos);
    return <ul>{todos}</ul>;
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
        <TodoList todos={this.state.todos} />
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

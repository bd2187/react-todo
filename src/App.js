import React, { Component } from "react";

class Footer extends Component {
  changeFilter(filter) {
    this.props.changeFilter(filter);
  }

  render() {
    var numberOfTodos = this.props.numberOfTodos;
    return (
      <div>
        {numberOfTodos === 0 ? null : <p>{numberOfTodos} items</p>}

        <button
          id="all_todos_btn"
          onClick={this.changeFilter.bind(this, "all")}
        >
          All
        </button>
        <button
          id="active_todos_btn"
          onClick={this.changeFilter.bind(this, "none")}
        >
          Active
        </button>
        <button
          id="complete_todos_btn"
          onClick={this.changeFilter.bind(this, "complete")}
        >
          Complete
        </button>
        <button id="clear_completed_btn">Clear Completed</button>
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

    this.changeFilter = this.changeFilter.bind(this);
  }

  changeFilter(filter) {
    this.setState({ filter: filter });
  }

  render() {
    return (
      <div>
        <UserInput />
        <TodoList todos={this.state.todos} />
        <Footer
          numberOfTodos={this.state.todos.length}
          changeFilter={this.changeFilter}
        />
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

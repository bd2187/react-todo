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
  handleChange(todo, e) {
    this.props.toggleTodo(todo);
  }

  render() {
    var todo = this.props.todo.task;
    var id = this.props.todo.id;

    return (
      <li>
        <input
          type="checkbox"
          id={id}
          onChange={e => this.handleChange(this.props.todo, e)}
        />
        <label htmlFor={id}>{todo}</label>
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
    return todos.map((todo, index) => {
      let key = `${todo.id}`;
      return (
        <TodoItem key={key} todo={todo} toggleTodo={this.props.toggleTodo} />
      );
    });
  }

  render() {
    var todos = this.renderTodoItems(this.props.todos);
    return <ul>{todos}</ul>;
  }
}

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleInputChange(e) {
    this.setState({ value: e.target.value });
  }

  handleKeyUp(e) {
    if (e.keyCode === 13 && this.state.value.trim() !== "") {
      this.props.addTodo(this.state.value);
      this.setState({ value: "" });
    }
  }

  render() {
    return (
      <input
        value={this.state.value}
        type="text"
        placeholder="What needs to be done?"
        onChange={this.handleInputChange}
        onKeyUp={this.handleKeyUp}
      />
    );
  }
}

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: "work",
          complete: false,
          id: "work_1"
        },
        {
          task: "eat",
          complete: false,
          id: "eat_2"
        }
      ],
      filter: "none",
      userInput: ""
    };

    this.changeFilter = this.changeFilter.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  changeFilter(filter) {
    this.setState({ filter: filter });
  }

  toggleTodo(usersTodo) {
    var updatedTodos = this.state.todos.map(function(todo) {
      if (todo.id === usersTodo.id) {
        usersTodo.complete = !usersTodo.complete;
        return usersTodo;
      } else {
        return todo;
      }
    });

    this.setState({ todos: updatedTodos });
  }

  addTodo(usersTodo) {
    var todoObj = {
      task: usersTodo,
      completed: false,
      id: `${usersTodo}_${this.state.todos.length + 1}`
    };

    this.setState({ todos: [...this.state.todos, todoObj] });
  }

  render() {
    return (
      <div>
        <UserInput addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
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

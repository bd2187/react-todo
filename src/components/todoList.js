import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleChange(todo, e) {
    this.props.toggleTodo(todo);
  }

  deleteTodo(e) {
    var todoId = e.target.getAttribute("data-id");
    this.props.deleteTodo(todoId);
  }

  render() {
    var todo = this.props.todo.task;
    var id = this.props.todo.id;
    var complete = this.props.todo.complete;
    var filter = this.props.filter;

    if (filter === "active" && complete) {
      return null;
    }

    if (filter === "completed" && !complete) {
      return null;
    }

    return (
      <li>
        <input
          type="checkbox"
          id={id}
          onChange={e => this.handleChange(this.props.todo, e)}
          checked={complete}
        />
        <label htmlFor={id}>{todo}</label>
        <button data-id={id} onClick={this.deleteTodo}>
          Delete
        </button>
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
        <TodoItem
          key={key}
          todo={todo}
          toggleTodo={this.props.toggleTodo}
          deleteTodo={this.props.deleteTodo}
          filter={this.props.filter}
        />
      );
    });
  }

  render() {
    var todos = this.renderTodoItems(this.props.todos);
    return <ul>{todos}</ul>;
  }
}

export default TodoList;

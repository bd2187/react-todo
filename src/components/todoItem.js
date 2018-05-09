import React, { Component } from "react";

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

export default TodoItem;

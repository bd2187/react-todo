import React, { Component } from "react";
import TodoItem from "./todoItem";

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

export default TodoList;

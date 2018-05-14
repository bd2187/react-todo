import React, { Component } from "react";
import Footer from "./footer";
import TodoList from "./todoList";
import UserInput from "./userInput";

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
    this.deleteTodo = this.deleteTodo.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.calculateNumberOfTodos = this.calculateNumberOfTodos.bind(this);
  }

  changeFilter(filter) {
    this.setState({ filter });
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

  deleteTodo(todoId) {
    // Iterate through todos array
    var duplicateTodosArr = [...this.state.todos];

    // find todo with matching id
    var updatedTodosArr = duplicateTodosArr.filter(function(todo) {
      return todo.id !== todoId ? todo : null;
    });

    this.setState({ todos: updatedTodosArr });
  }

  clearCompleted() {
    var incompleteTodos = [...this.state.todos].filter(function(todo) {
      return !todo.complete ? todo : null;
    });

    this.setState({ todos: incompleteTodos });
  }

  calculateNumberOfTodos() {
    switch (this.state.filter) {
      case "none":
        return this.state.todos.length;

      case "active":
        return this.state.todos.reduce(function(acc, currentItem) {
          return !currentItem.complete ? acc + 1 : acc + 0;
        }, 0);

      case "completed":
        return this.state.todos.reduce(function(acc, currentItem) {
          return currentItem.complete ? acc + 1 : acc + 0;
        }, 0);

      default:
        return 0;
    }
  }

  render() {
    return (
      <div>
        <UserInput addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
          filter={this.state.filter}
        />
        <Footer
          numberOfTodos={this.calculateNumberOfTodos()}
          changeFilter={this.changeFilter}
          filter={this.state.filter}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default TodoContainer;

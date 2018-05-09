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

  deleteTodo(todoId) {
    // Iterate through todos array
    var duplicateTodosArr = [...this.state.todos];

    // find todo with matching id
    var updatedTodosArr = duplicateTodosArr.filter(function(todo) {
      if (todo.id !== todoId) {
        return todo;
      }
    });

    this.setState({ todos: updatedTodosArr });
  }

  render() {
    return (
      <div>
        <UserInput addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
        />
        <Footer
          numberOfTodos={this.state.todos.length}
          changeFilter={this.changeFilter}
        />
      </div>
    );
  }
}

export default TodoContainer;

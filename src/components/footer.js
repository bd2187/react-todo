import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  changeFilter(filter) {
    this.props.changeFilter(filter);
  }

  clearCompleted() {
    this.props.clearCompleted();
  }

  render() {
    var numberOfTodos = this.props.numberOfTodos;
    var filter = this.props.filter;

    return (
      <div>
        {numberOfTodos === 0 ? null : <p>{numberOfTodos} items</p>}

        <button
          id="all_todos_btn"
          onClick={this.changeFilter.bind(this, "none")}
          style={{ backgroundColor: filter === "none" ? "red" : null }}
        >
          All
        </button>
        <button
          id="active_todos_btn"
          onClick={this.changeFilter.bind(this, "active")}
          style={{ backgroundColor: filter === "active" ? "red" : null }}
        >
          Active
        </button>
        <button
          id="complete_todos_btn"
          onClick={this.changeFilter.bind(this, "completed")}
          style={{ backgroundColor: filter === "completed" ? "red" : null }}
        >
          Complete
        </button>
        <button id="clear_completed_btn" onClick={this.clearCompleted}>
          Clear Completed
        </button>
      </div>
    );
  }
}

export default Footer;

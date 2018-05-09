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

export default Footer;

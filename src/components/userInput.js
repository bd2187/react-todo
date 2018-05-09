import React, { Component } from "react";

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

export default UserInput;

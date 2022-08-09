import React, { Component } from "react";

class Ingredient extends Component {
  state = {
    key: this.props.key,
    name: this.props.name,
    color: this.props.color
  };

  render() {
    return (
      <li key={ this.state.key }>
        <span
          style={{backgroundColor: this.state.color}}
          onClick={ this.props.clickHandler }
        >
          { this.state.name }
        </span>
      </li>
    )
  }
}

export default Ingredient;
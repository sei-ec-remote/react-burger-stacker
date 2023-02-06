// displays individual ingredients
import React, { Component } from "react";

// recieves one ingredient as a prop, displays said ing
export default class Ingredient extends Component {
  render () {
    const { name, color } = this.props.ingredient

    return (
      <p  style={{backgroundColor: color}}
          id={this.props.itemKey}
          onClick={this.props.clickFunc}
      >
        {name}
      </p>
    )
  }
}
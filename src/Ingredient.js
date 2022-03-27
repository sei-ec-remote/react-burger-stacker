// Ingredient is a child of Ingredient list
// receives the props of an individual ingredient

// bring in React and Component instances from React
import React, { Component } from "react"

export default class Ingredient extends Component {
  render() {
    return (
      <p>{this.props.ingredient.name}</p>
    )
  }
}

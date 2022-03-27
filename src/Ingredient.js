// Ingredient is a child of Ingredient list
// receives the props of an individual ingredient

// bring in React and Component instances from React
import React, { Component } from "react"

export default class Ingredient extends Component {
  render() {
    const { name, color } = this.props.ingredient
    return <p style={{ backgroundColor: color }}>{name}</p>
  }
}

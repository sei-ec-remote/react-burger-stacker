// bring in React and Component instances from React
import React, { Component } from "react"

export default class IngredientList extends Component {
  render() {
    console.log("props in ingredient list", this.props.ingredients)
    return <h3>Ingredients List</h3>
  }
}

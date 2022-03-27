// bring in React and Component instances from React
import React, { Component } from "react"
import Ingredient from "./Ingredient"

export default class IngredientList extends Component {
  render() {
    let allIngredients = this.props.ingredients.map((ing, i) => (
      <li key={i} onClick={this.props.add}>
        <Ingredient itemKey={i} ingredient={ing} />
      </li>
    ))
    // console.log("ingreidenits in ingredient list", this.props.ingredients)
    return (
      <section className="pane">
        <h3>Ingredients List</h3>
        <ul>{allIngredients}</ul>
      </section>
    )
  }
}

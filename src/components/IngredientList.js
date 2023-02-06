import React, { Component } from "react"
import Ingredient from "./ingredient"

export default class IngredientList extends Component {
  render() {
    let allIngredients = this.props.allIngredients.map((ing, i) => (
      <li key={i}>
        <Ingredient
          ingredient={ing}
          itemKey={i}
          clickFunc={this.props.add}
        />
      </li>
    ))
    return (
      <section className="pane">

        <h3> Ingredient List</h3>
        <ul>
          {allIngredients}
        </ul>
      </section>
    )

  }
}
import React, { Component } from "react"
import Ingredient from "./Inrgedient"

class IngredientList extends Component {
  render() {
    let allIngredients = this.props.ingredients.map((ing, i) => (
      <li key={i}>
        <Ingredient 
            clickFunc={this.props.add} 
            ingredient={ing} 
            itemKey={i} 
        />
      </li>
    ))
    return (
      <>
        <section>
          <h3>Ingredients List</h3>
          <ul>{allIngredients}</ul>
        </section>
      </>
    )
  }
}

export default IngredientList

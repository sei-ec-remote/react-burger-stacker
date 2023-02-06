import React, { Component } from "react"

class IngredientList extends Component {
  render() {
    let Ingredients = this.props.Ingredients.map(ing => (
      <li >
        <p className="ingredient" style={{backgroundColor: ing.color}} onClick={this.props.add}> 
            {ing.name} 
            </p>
      </li>
    ))
    return (
      <section className="column">

        <h3> Ingredient List</h3>
        <ul>
          {Ingredients}
        </ul>
      </section>
    )

  }
}
export default IngredientList
import React, { Component } from "react"
import Ingredient from "./Ingredient"
// Eventually import ingredient components

// Ingredient List will loop over props (ingredients) and produce one ingredient componet for each item in the array

export default class IngredientList extends Component {

    render () {
        // console.log("props in ingr list:", this.props.ingredients)
        // ingr = ingredients, i = the index of the array
        let allIngredients = this.props.ingredients.map((ingr, i) => (
            // <li key={i}  onClick={this.props.add}>  was the original below code, but now we're making the function either add or remove the ignredient.
            <li key={i}>
                < Ingredient itemKey={i} ingredient={ingr} clickFunc={this.props.add} />
            </li>
        ))
        return (
            <section className="pane">
                <h3>Ingredients List</h3>
                <ul>
                    {allIngredients}
                </ul>
            </section>
        )
    }
}
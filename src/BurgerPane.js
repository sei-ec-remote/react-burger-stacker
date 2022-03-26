// This is where the burger happens

import React, { Component } from "react"
// BurgerPane needs to display ingredeint components, similar to how IngredientsList does.
import Ingredient from "./Ingredient"


export default class BurgerPane extends Component {
    // BurgerPane will eventually get props (ingredients0 and should loop and display those props similar to the IngredientList.
    // The difference will be the clear button (to be added)
    
    render() {
        // console.log("ingr in burgerPane:", this.props.ingredients)
        let burgerBits = this.props.ingredients.map((ingr, i) => (
            <li key={i}>
                < Ingredient
                    itemKey={i}
                    ingredient={ingr}
                    clickFunc={this.props.remove}
                />
            </li>
        ))

        return (
            <section className="pane">
                <h3>Burger Pane</h3>
                <ul>
                    {burgerBits}
                </ul>
                <button onClick={this.props.clear}>Clear Burger</button>
            </section>
        )
    }
}

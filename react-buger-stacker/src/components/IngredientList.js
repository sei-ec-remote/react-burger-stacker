// loops over ingredients from props and displays one ingredient component per item

import React from "react"
import Ingredient from "./Ingredient"

const IngredientList = (props) => {
        let allIngredients = this.props.ingredients.map((ing, i) => (
            <li key={i}>
                <Ingredient
                itemKey={i}
                ingredient={ing}
                clickFunc={this.props.add}
                />
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

export default IngredientList
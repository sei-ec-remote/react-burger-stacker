import React, { useState } from "react"
import Ingredient from "./Ingredient"

const IngredientList = (props) => {
    let allIngredients = props.ingredients.map((ingr, i) => (
        <li key={i}>
            < Ingredient itemKey={i} ingredient={ingr} clickFunc={props.add} />
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

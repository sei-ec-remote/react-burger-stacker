import React from 'react'
import Ingredient from './Ingredient'

const IngredientList = (props) => {
    let ingredientItems = props.ingredients.map((ingredient, idx) => (
        // 
            <li key={idx}>
            <Ingredient 
                ingredient={ingredient}
                clickFunc={props.add}
                itemKey={idx}
            />
        </li>
    ))
    return(
        <section>
            <h3>Ingredient List</h3>
            <ul>
                {ingredientItems}
            </ul>
        </section>
    )
}

export default IngredientList
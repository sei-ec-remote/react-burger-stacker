import React from 'react'
import Ingredients from './Ingredients'

const IngredientList = (props) => {
    // map over the ing
    // mapped over and created form Ingredient Comp
    let allIngredients = props.ingredients.map((ing, idx) => (
        <li key={idx}>
            <Ingredients 
                ingredient={ing} 
                clickFunc={props.add} 
                ingredientKey={idx} 
            />
        </li>
    ))
    return (
        <div>
            <section>
                <h3>Ingredient List</h3>
                <ul>
                    {allIngredients}
                </ul>
            </section>
        </div>
    )
}

export default IngredientList
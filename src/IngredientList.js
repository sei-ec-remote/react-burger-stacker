import React from "react"
import Ingredient from './Ingredient'
const IngredientList = (props) => {
    
        let allIngredients = props.ingredients.map((ing, i) =>(
            <li key={i}>
                <Ingredient
                    itemKey={i}
                    ingredient={ing}
                    clickFunc={props.add}
                />

            </li>
        ))
        return (
            <section>
                <h3>Ingredients List</h3>
                <ul>
                    {allIngredients}
                </ul>
            </section>
        )
    }

export default IngredientList
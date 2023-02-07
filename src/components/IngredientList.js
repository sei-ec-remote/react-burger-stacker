import React from 'react'
import Ingredient from './Ingredient'

function IngredientList (props) {
    return (
        <div>
            <h2>Ingredients:</h2>
            <Ingredient ingredients={props.ingredients} onClick={props.onClick}/>
        </div>
    )
}

export default IngredientList
import React from 'react'
import Ingredient from './Ingredient'


const IngredientList = (props) => {
    const { ingredients, addHandler} = props
    const ingredientJSX = ingredients.map((ingredient) => (
        <Ingredient name={ingredient.name} key={ingredient.name} addHandler={addHandler}/>
    ))
    return (
        <ul>
        {ingredientJSX}
        </ul>
    )   
}

export default IngredientList
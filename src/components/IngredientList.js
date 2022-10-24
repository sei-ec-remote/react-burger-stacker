import React from 'react'
import Ingredient from './Ingredient'

const IngredientList = ({ ingredients, handleClickedIngredient }) => {
    const allIngredients = ingredients.map((ingredient, index) => {
        return (
            <Ingredient ingredient={ingredient} key={index} clickFunc={handleClickedIngredient} />
        )
    })
    return (
        <div className='ingredients-list'>
            <h1>Ingredients List: </h1>
            <div>{allIngredients}</div>
        </div>
    )
}


export default IngredientList
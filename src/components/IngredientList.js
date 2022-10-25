import React from 'react'

const IngredientList = (props) => {


    const allIngredients = props.ingredients.map((ingredient, ind) => (
        <li key={ind} ><button onClick={() => props.addIngredient(ingredient)}>{ingredient.name}</button></li>
    ))
    return (
        <div className="container">
            <ul>Click to Add
                {allIngredients}
            </ul>
        </div>
    )
    
}

export default IngredientList
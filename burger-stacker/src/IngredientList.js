import React, { useState } from 'react'
import Ingredient from './Ingredient'

const IngredientList = (props) => {
    let ingredientItems = props.ingredients.map((ing, i) => {
        return (
            <li key={i}>
                <Ingredient itemKey={i} ingredient={ing} clickFunc={props.add}/>
            </li>
    )})
    return(
        <>
            <section className='pane'>
                <h3>Ingredients List</h3>
                <ul>
                    {ingredientItems}
                </ul>
            </section>
        </>
    ) 
    
}
export default IngredientList
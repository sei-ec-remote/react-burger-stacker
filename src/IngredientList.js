import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default function IngredientList (props) {
  
    // ing= ingredient, i = index from array
    let allIngredients = props.ingredients.map((ing, i) => (
        <li key={i} >
            <Ingredient itemKey={i} ingredient={ing} clickFunc={props.add}/>
        </li>
    ))
    return (
        <section className='pane'>
            <h3>Ingredients List</h3>
            <ul>
                {allIngredients}
            </ul>
        </section>
    )
}

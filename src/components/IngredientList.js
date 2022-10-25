// loops over ingredients from props and displays one Ingredient component per item
import React, { useState } from 'react'
import Ingredient from './Ingredient'


const IngredientList = (props) => {
    let burgerStuff = props.ingredients
    console.log(burgerStuff)
    let allIngredients = burgerStuff.map((ing, i) => (
        <li key={i}>
            <Ingredient
                itemKey={i}
                ingredient={ing}
                clickItem={props.add}
            />
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

export default IngredientList
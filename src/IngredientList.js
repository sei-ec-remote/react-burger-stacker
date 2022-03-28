import React, { useState } from 'react'
import Ingredient from './Ingredient'

const IngredientList = (props) => {
        let allIngredients = props.ingredients.map((ing,index)=> (
             <li key={index}>
                <Ingredient itemKey={index} ingredient={ing} clickFunc={props.add}/>
            </li>
        ))
        return (
            <section className='pane'>  
                <h1>Ingredients:</h1>
                <ul>
                    {allIngredients}
                </ul>
            </section>
        )  
    }   

export default IngredientList
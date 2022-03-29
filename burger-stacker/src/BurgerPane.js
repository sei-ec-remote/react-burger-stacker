import React, { useState } from 'react'
import Ingredient from './Ingredient'

const BurgerPane = (props) => {
    // console.log("this is the ing",props.ingredients)
    let burgerBits = props.ingredients.map((ing, i) => {
        console.log("this is ing",ing)
        return (
            <li key={i}>
                <Ingredient itemKey={i} ingredient={ing}/>
            </li>
        )
    })
    return(
        <section className='pane'>
            <h3>Burger Pane</h3>
            <ul>
                {burgerBits}
            </ul>
            <button onClick={props.clear}>Clear Burger</button>
        </section>
    )  
}
export default BurgerPane
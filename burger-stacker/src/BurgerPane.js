// this will loop over an array of ingredients, that were added by clicking each ingredient in the ingredientList

// import React, { Component } from "react"
// since Ingredient is a reusable component, we can import that too
import Ingredient from "./Ingredient"

const BurgerPane = (props) => {
    let burgerBits = props.ingredients.map((ing, i) => (
        <li key={i}>
            <Ingredient 
                itemKey={i}
                ingredient={ing}
                clickFunc={props.remove}
            />
        </li>
    ))

    return (
        <section className='pane'>
            <h3>Burger Pane</h3>
            <ul>
                { burgerBits }
            </ul>
            <button onClick={props.clear}>Clear Burger</button>
        </section>
    )

}

export default BurgerPane
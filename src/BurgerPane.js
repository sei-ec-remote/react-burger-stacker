import React from 'react'
import Ingredient from './Ingredient'

const BurgerPane = (props) => {
    let burgerBits = props.ingredients.map((ingredient, idx) => (
        <li key={idx}>
            <Ingredient 
            itemKey={idx}
            ingredient={ingredient}
            clickFunc={props.remove}
            />
        </li>  
    ))
    return (
        <section>
            <h3>Burger Pane</h3>
            <ul>
                {burgerBits}
            </ul>
            <button onClick={props.clear}>Clear Burger</button>
        </section>
    )
}


export default BurgerPane
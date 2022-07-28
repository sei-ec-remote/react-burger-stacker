import React, { Component } from 'react'
import Ingredient from './Ingredient'

const BurgerPane = (props) => {
    let burgerBits = props.ingredients.map((ing, index) => (
        <li key={index}>
            <Ingredient itemKey={index} ingredient={ing} clickFunc={props.remove}/>
        </li>
    ))
    
    return (
        <section className="pane">
            <h3>Burger Pane</h3>
            <ul>
                {burgerBits}
            </ul>
            <button onClick={props.clear}>Clear Burger</button>
        </section>
    )
}

  
  export default BurgerPane
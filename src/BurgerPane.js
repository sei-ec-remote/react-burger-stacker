import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default function BurgerPane (props) {
    
    let burgerBits = props.ingredients.map((ing, i) => (
        <Ingredient 
            itemKey={i} 
            ingredient={ing} 
            clickFunc={props.remove} 
        />
    ))
    return (
        <section className='pane'>

            <h3>Burger Pane</h3>
            <ul>
                {burgerBits}
            </ul>
            <button onClick={props.clear}>Clear Burger</button>
        </section>
    )
    
}
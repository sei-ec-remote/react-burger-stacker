import React, { Component } from 'react'
import Ingredient from './Ingredient'

// This is where the burger happens
// Burger pane needs to display ingredient components, similarly to how IngredientList does

export default class BurgerPane extends Component
{
    // Burger pane will eventually get props(ingredients), and should loop and display those
    // similar to the IngredientList
    // The difference will be the clear button
    render()
    {
        // console.log('ingredients in burger pane', this.props.ingredients)
        let burgerBits = this.props.ingredients.map( (ing, i) => (
            <li key={i}>
                <Ingredient itemKey={i} ingredient={ing} clickFunc={this.props.remove} />
            </li>
        ))
        return(
            <section className='pane'>
                <h3>Burger Stack</h3>
                <ul>
                    {burgerBits}
                </ul>
                <button onClick={this.props.clear}>Clear Burger</button>
            </section>
        )
    }
}
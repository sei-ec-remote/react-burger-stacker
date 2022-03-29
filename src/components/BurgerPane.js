//this is where burger happens

import React, { Component } from 'react'
//burger pane needs to display ingredient components
//similarly to how ingredientsList does
import Ingredient from './Ingredient'

export default class BurgerPane extends Component {
    //burger pane will eventually get props and should
    //loop and display those similar to the ingredientList
    //the difference will be the clear button

    render() {
        let burgerBits = this.props.ingredients.map((ing, i) => (
            <Ingredient itemKey={i} ingredient={ing}/>
        ))
        return(
            <section className='pane'>
                 <h3>Burger Pane</h3>
                 {burgerBits}
                 <button onClick={this.props.clear}>Clear</button>
            </section>
        )
    }
}
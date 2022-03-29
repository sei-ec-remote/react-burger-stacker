import React, { Component } from 'react'
// burger pane needs to display ingredient compnents, similiarly to how ingredientList does
import Ingredient from './Ingredient'

export default class BurgerPane extends Component {
    // burgerPane will eventually get props(ingredients), and should loop and display those similar to the ingredientList
    // the difference will be the clear button
    render(){                                                         
        let burgerBits = this.props.ingredients.map((ing, i) => {
            return (
                <li>
                    <Ingredient itemKey={i} ingredient={ing} clickFunc={this.props.remove}/>
                </li>
            )
        })
        return(
            <section className='pane'>
                <h3>Burger Pane</h3>
                <ul>
                    {burgerBits}
                </ul>
                <button onClick={this.props.clear}>Clear Burger</button>
            </section>
        )
    }
} 
import React, { Component } from 'react'
import './App.css';
import Ingredient from './Ingredient';

export default class BurgerPane extends Component {
    // burger pane will eventually get props(ingredients), and should loop and display those similar to the ingredientList
    constructor() {
        super()
    }
    render () {
        let burgerBits = this.props.ingredients.map((ing, i) => (
            <li>
                <Ingredient itemKey={i} ingredients={ing} />
            </li>
        ))
        return (
            <section className='pane'>
                <h2>BurgerPane</h2>
                <ul>
                    {burgerBits}
                </ul>
                <button
                onClick={this.props.clear}
                >New Hamburger</button>
            </section>
        )
    }
}
import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class BurgerPane extends Component {
    render () {
        let burgerBits = this.props.ingredients.map((ing, i) => (
            <Ingredient itemKey={i} ingredient={ing} />
        ))
        return (
            <section className='pane'>

                <h3>Burger Pane</h3>
                <ul>
                    {burgerBits}
                </ul>
                <button>Clear Burger</button>
            </section>
        )
    }
}
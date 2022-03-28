// import react component
import React, { Component } from 'react'
import Ingredient from './Ingredients'

export default class BurgerPane extends Component {
    // burger pane will get props and loop through them to display

    render() {
        let burgerBits = this.props.ingredients.map((ing, i) => (
            <li key={i}>
            <Ingredient itemKey={i} ingredient={ing} />
            </li>
        ))
        return(
            <section className="pane">
                <h3>BurgerPane</h3>
                <ul>
                    {burgerBits}
                </ul>
                <button onClick={this.props.clear}>Clear Burger</button>
            </section>
        )
    }
}
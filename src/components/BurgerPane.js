import React, { Component } from 'react'
import Ingredients from './Ingredients'

class BurgerPane extends Component {
    render () {
        // map over all the added burger bits
        // still going to use the Ingredient Comp
        let burgerBits = this.props.ingredients.map((ing, idx) => ( 
            <li key={idx}>
                <Ingredients 
                    itemKey={idx}
                    ingredient={ing}
                    clickFunc={this.props.remove}
                />
            </li>
        ))
        return (
            <section>
                <h3>Have it your way</h3>
                <ul>
                    {burgerBits}
                </ul>
                <button onClick={this.props.clear}>Clear Burger</button>
            </section>
        )
    }
}

export default BurgerPane
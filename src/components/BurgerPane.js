import React, { Component } from 'react'
import Ingredients from './Ingredients'

class BurgerPane extends Component {
    render () {
        let burgerParts = this.props.ingredients.map((ingredient, idx) => {
            return (
                <li key={idx}>
                    < Ingredients 
                        ingredientKey={idx}
                        ingredient={ingredient}
                        click={this.props.remove}
                    />
                </li>
            )
        })
        return (
            <div>
                <h3>Have it your way</h3>
                <ul>
                    {burgerParts}
                </ul>
                <h3>Click on ingredient to remove</h3>
                <p>or</p>
                <button onClick={this.props.clear}>Start Over</button>
            </div>
        )
    }
}

export default BurgerPane
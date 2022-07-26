import React, { Component } from 'react'
import Ingredients from './Ingredients'

class IngredientList extends Component {
    render () {
        const ingredientItems = this.props.ingredients.map((ingredient, idx) => {
            return (
                <li key={idx}>
                    <Ingredients ingredientKey={idx} ingredient={ingredient} click={this.props.add} />
                </li>
            )
        })
        return (
            <div>
                <h2>Ingredients</h2>
                <ul>
                    {ingredientItems}
                </ul>
                <h3>Click on Ingredient to Add</h3>
            </div>
        )
    }
}

export default IngredientList
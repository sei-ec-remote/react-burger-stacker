import React, { Component } from 'react'
import Ingredient from './Ingredient'

class IngredientList extends Component {

    render () {
        let ingredientItems = this.props.ingredients.map((ingredient, idx) => (
            // 
             <li key={idx}>
                <Ingredient 
                    ingredient={ingredient}
                    clickFunc={this.props.add}
                    itemKey={idx}
                />
            </li>
        ))
        return(
            <section>
                <h3>Ingredient List</h3>
                <ul>
                    {ingredientItems}
                </ul>
            </section>
        )
    }
}

export default IngredientList
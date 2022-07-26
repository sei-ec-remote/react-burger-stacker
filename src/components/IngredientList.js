import React, { Component } from 'react'
import Ingredients from './Ingredients'

class IngredientList extends Component {
    render () {
        // map over the ing
        // mapped over and created form Ingredient Comp
        let allIngredients = this.props.ingredients.map((ing, idx) => (
            <li key={idx}>
                <Ingredients 
                    ingredient={ing} 
                    clickFunc={this.props.add} 
                    ingredientKey={idx} 
                />
            </li>
        ))
        return (
            <div>
                <section>
                    <h3>Ingredient List</h3>
                    <ul>
                        {allIngredients}
                    </ul>
                </section>
            </div>
        )
    }
}

export default IngredientList
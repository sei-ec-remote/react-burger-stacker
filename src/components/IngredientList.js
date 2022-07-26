import React, { Component } from 'react'
import Ingredient from './Ingredients'

class IngredientList extends Component {
	render() {
		// map over the ing
		// mapped over and created from Ingredient Comp
        let allIngredients = this.props.ingredients.map((ing, idx) => (
            <li key={idx}>
                <Ingredient 
                    ingredient={ing}
                    add={this.props.clickFunc}
                    id={this.props.itemkey}
                />
            </li>
        ))
		return (
            <>
            <section>
                <h3>Ingredients list</h3>
                <ul>
                    {allIngredients}
                </ul>
            </section>
            </>
        )
	}
}

export default IngredientList
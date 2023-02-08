//loops over the ingredients derived from props.
//produces a clickable ingredient for each of them

import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    render () {
        let allIngredients = this.props.ingredients.map((ing, i) => (
            // this produces list items
            <li key={i}>
                <Ingredient
                    ingredient={ing}
                    itemKey={i}
                    clickFunc={this.props.add}
                />
            </li>
        ))

        return (
            <section className='pane'>
                <h3>Ingredients List</h3>
                <ul>
                    { allIngredients }
                </ul>
            </section>
        )
    }
}
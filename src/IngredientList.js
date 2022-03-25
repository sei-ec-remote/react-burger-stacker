import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    render () {
        // map over the ingredients from props
        // display a list item for each of them 
        // i = ingredient, i = index
        let ingredientItems = this.props.ingredients.map((item, i) => (
            <li onClick={(e) => this.props.addToBurger(e)} key={i}>
                <Ingredient ingredient={item.name} color={item.color} />
            </li>
        ))
        return (
            <ul>
                {ingredientItems}
            </ul>
        )
    }
}
import React, { Component } from 'react'
import Ingredients from './Ingredients'

export default class IngredientList extends Component {
    render () {
        // map over the ingredients from props
        // display a list item for each of them 
        // i = ingredient, i = index
        let ingredientItems = this.props.ingredients.map((item, i) => {
            return <li key={i}>{item}</li>
        })
        return (
            <ul>
                {ingredientItems}
            </ul>
        )
    }
}
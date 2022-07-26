import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import IngredientList from './IngredientList'

class Ingredient extends Component {


    render() {
        const { name, color } = this.props.ingredient
        return (
            // <li>
            // <button onClick={this.props.add} style={{backgroundColor: this.props.ingredients.color}}>{this.props.ingredients.name}</button>
            // </li>
            <p style={{backgroundColor: color}}
            onClick={this.props.clickFunc}
            id={this.props.itemKey}
            >
                {name}
            </p>
        )
    }
}

export default Ingredient
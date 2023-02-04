import React, { Component } from 'react'
import Ingredients from './Ingredients'

class IngredientList extends Component {

    render() {
        return (
            <div>
                <h1>Ingredient List:</h1>
                <Ingredients ingredients={this.props.ingredients} onClick={this.props.onClick} />
            </div>
        )
    }
}

export default IngredientList
import React, { Component } from 'react'
import Ingredient from './Ingredient'


class IngredientList extends Component {
    render () {
        return (
            <div>
                <h2>Ingredients:</h2>
                <Ingredient ingredients={this.props.ingredients} onClick={this.props.onClick}/>
            </div>
        )
    }
}


export default IngredientList
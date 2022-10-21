import React, { Component } from 'react'
import Ingredient from './Ingredient'

class IngredientList extends Component {
    render() {
        const allIngredients = this.props.ingredients.map(ingredient => {
            return (
                <Ingredient ingredient={ingredient.name} key={ingredient.name} handleClickedIngredient={this.props.handleClickedIngredient} />
            )
        })
        return(
            <div className='ingredients-list'>
                <h1>Ingredients List: </h1>
                <ul>{allIngredients}</ul>
            </div>
        )
    }
}


export default IngredientList
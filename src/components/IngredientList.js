import React, { Component } from 'react'
import Ingredient from './Ingredient'

class IngredientList extends Component {
    render() {
        const allIngredients = this.props.ingredients.map((ingredient, index) => {
            return (
                <Ingredient ingredient={ingredient} key={index} clickFunc={this.props.handleClickedIngredient} />
            )
        })
        return(
            <div className='ingredients-list'>
                <h1>Ingredients List: </h1>
                <div>{allIngredients}</div>
            </div>
        )
    }
}


export default IngredientList
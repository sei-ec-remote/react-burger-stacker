import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component
{
    render()
    {
        const ingredients = this.props.ingredients.map( (ingredient, index) => {
            return <Ingredient ingredient={ingredient} key={index} onClick={this.props.addIngredient} />
        })
        return(
            <div className='ingredients-div'>
                <h3>Ingredients</h3>
                <ul>
                    {ingredients}
                </ul>
            </div>
        )
    }
}
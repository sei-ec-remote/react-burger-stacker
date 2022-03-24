import React, { Component } from 'react'

export default class IngredientList extends Component{
    render() {
        let allIngredients = this.props.ingredientList.map((ingredient,index)=> {
            return <li key={index}>{ingredient.name} {ingredient.color}  </li>
        })
        return (
            <div>
                <h1>Ingredients:</h1>
                <ul>
                    {allIngredients}
                </ul>
            </div>
        )
    }
}
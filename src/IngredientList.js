import React, { Component } from 'react'

export default class IngredientList extends Component{
    render() {
        let allIngredients = this.props.ingredientList.map((ingredient,index)=> {
            return <div key={index}> {ingredient.name},{ingredient.color}  </div>
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
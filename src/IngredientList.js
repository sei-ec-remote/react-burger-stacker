import React, { Component } from 'react'

export default class IngredientList extends Component{
    render() {
        return (
            <div>
                <h1>Ingredients</h1>
                <p>{this.props.ingredientList[0].name} </p>
            </div>
        )
    }
}
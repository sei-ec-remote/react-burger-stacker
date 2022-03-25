import React, { Component } from 'react'

export default class Ingredient extends Component
{
    render()
    {   
        const ingredientStyle = {backgroundColor: this.props.ingredient.color, margin: '10px'}
        return(
            <li style={ingredientStyle} onClick={this.props.onClick}>{this.props.ingredient.name}</li>
        )
    }
}
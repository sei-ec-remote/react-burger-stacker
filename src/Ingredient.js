import React, { Component } from 'react'

// Ingredient is a hild of Ingredient List
// It recieves props of an individual ingredient --> color and name

export default class Ingredient extends Component
{
    render()
    {   
        // destructuring is how we pull items from an object
        // this looks for properties within the ingredient object
        const {name, color} = this.props.ingredient
        // console.log('this is an ingredient', this.props.ingredient.name)
        // console.log('name in each ingredient', name)
        // console.log('color in each ingredient', color)
        return(
            <p 
                style={{backgroundColor: color}}
                id={this.props.itemKey}
                onClick={this.props.clickFunc}
            >
                {name}
            </p>
        )
    }
}
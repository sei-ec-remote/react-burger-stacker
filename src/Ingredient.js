import React, { Component } from 'react'

// Ingredient creates each ingredient for the display and sets up a
//  click event to addIngredientToBurger - an array.   It will also
//  display the ingredient.name.  Each ingredient is also given the
//  style color that was part of the ingredients array.
export default class Ingredient extends Component {
    
    render () {

        return (
            <div className='ingredient' 
                 style={{'background-color': this.props.ingredient.color}}
                 onClick={()=>{
                    this.props.addIngredientToBurger(this.props.ingredient)
                }} 
            >
                <p>{this.props.ingredient.name}</p>
            </div>
        )
    }
}
import React, { Component } from 'react'
import Ingredient from './Ingredient'


// IngredientList creates all the Ingredients.  For each ingredient in the
//   array that comes in thru props it will create an Ingredient for the display
//   It must make sure the function to addIngredientToBurger to pass to an 
//   Ingredient
export default class IngredientList extends Component {

    render () {

        const ingredients = this.props.ingredients.map((ingredient, index) => {
            return ( 
                <li key={index}>
                < Ingredient 
                    ingredient={ingredient}
                    addIngredientToBurger={this.props.addIngredientToBurger}
                    /> 
                </li>
            );
        });

        return (
            <div className="container">
            <h2>Hamburger Ingredient List</h2>
            <ul>
            { ingredients }
            </ul>
            </div>
        );
    }
}
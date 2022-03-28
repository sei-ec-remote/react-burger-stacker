// import React, { Component } from 'react'
import Ingredient from './Ingredient'


// IngredientList creates all the Ingredients.  For each ingredient in the
//   array that comes in thru props it will create an Ingredient for the display
//   It must make sure the function to addIngredientToBurger to pass to an 
//   Ingredient
export default function IngredientList ({ingredients, addIngredientToBurger}) {

    const ingredientsList = ingredients.map((ingredient, index) => {
        return ( 
            <li key={index}>
            < Ingredient 
                ingredient={ingredient}
                addIngredientToBurger={addIngredientToBurger}
                /> 
            </li>
        );
    });

    return (
        <div className="container">
        <h2>Hamburger Ingredient List</h2>
        <ul>
        { ingredientsList }
        </ul>
        </div>
    );
}
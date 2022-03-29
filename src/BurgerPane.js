import React from 'react'
import Ingredient from './Ingredient'
import ClearBurger from './ClearBurger'


// This is the main container for your Hamburger
//   It will get all the hamburger ingredients in the burgerIngredients
//   array and for each it will create an Indegredient.  
//   It will also display the button to clear by using ClearBurger
//   and passing in the name of the function to clearBurgerIngredients.
//   via props.
export default function BurgerPane (props) {

    const burger = props.burgerIngredients.map((ingredient, id) => {
        return (
            <li key={id}>
            < Ingredient ingredient={ingredient}/> 
            </li>
        )
    });

    return (
    <div className="container">
        <h2>Your Hamburger</h2>
        <ul>
            { burger }  
        </ul>
        < ClearBurger clearBurgerIngredients={props.clearBurgerIngredients}/>
    </div>
    )
}
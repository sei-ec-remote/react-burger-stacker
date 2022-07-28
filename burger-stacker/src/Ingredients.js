import React from 'react'
// not using state

import Ingredient from './Ingredient.js'

// buttons here

const Ingredients = ({ingredients, add}) => {

        // add is sibling to ingredients in props


        // implicit return. We are returning JSX, so we need () not {}
        let allIngredients = ingredients.map((ing, idx)=>(

            // need an unique id for each so app AND us can grab it
            // need parentheses for JSX
            < li key={idx}>
                <Ingredient
                    ingredient={ing}
                    clickFunc={add} // getting even from clickfunc  add is just a name for the function
                    itemKey={idx}
                />

            </li>

        ))
        return (
            <>
            <section>
                <h3>Ingredients List</h3>
                <ul>
                    {allIngredients}
                </ul>
            </section>
            
            </>
        )

}







export default Ingredients
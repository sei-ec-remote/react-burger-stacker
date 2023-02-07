// loops over the ingredients derived from props
// produces a clickable ingredient for each of them

import React from 'react'
import Ingredient from './Ingredient'

const IngredientList = ({ ingredients,add }) => {

    // ing = ingredient, i = the index of the array
    let allIngredients = ingredients.map((ing, i) => (
            <li key={i}>
                <Ingredient
                    ingredient={ing}
                    itemKey={i}
                    clickFunc={add}
                />
            </li>
        ))

        return (
            <section className='pane'>
                <h3>Ingredients List</h3>
                <div>
                    <ul>
                        { allIngredients }
                    </ul>
                </div>
            </section>
        )
}

export default IngredientList

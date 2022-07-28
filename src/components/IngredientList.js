import React from 'react'
import Ingredient from './Ingredient'

const IngredientList = ({ingredients, add, idx}) => {
		// map over the ing
		// mapped over and created from Ingredient Comp
        let allIngredients = ingredients.map((ing, idx) => (
            <li key={idx}>
                <Ingredient 
                    ingredient={ing}
                    clickFunc={add}
                    itemKey={idx}
                />
            </li>
        ))
		return (
            <>
            <section>
                <h3>Ingredients list</h3>
                <ul>
                    {allIngredients}
                </ul>
            </section>
            </>
        )
	
}

export default IngredientList
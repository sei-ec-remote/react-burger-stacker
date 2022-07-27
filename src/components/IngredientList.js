import React from 'react'
import Ingredient from './Ingredient'

const IngredientList = (props) => {
        const allIngredients = props.ingredients.map((ingredient, index) => {
            return(
                <p key={index}><button style={{backgroundColor: ingredient.color}} value={ingredient.name} onClick={props.addIngredient}>
                    <Ingredient name={ingredient.name} color={ingredient.color}/>
                </button>
                </p>
            )
        })

        return(
            <>
            <h1>Build Your Own Burg</h1>
            <h3>Select an Ingredient to get Started</h3>
            {allIngredients}
            </>
        )
}

export default IngredientList
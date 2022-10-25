// this displays an individual ingredient
import React from 'react'


// this component recieves ONE ingredient as a prop and displays said ingredient
const Ingredient = ({ingredient, clickFunc, itemKey}) => {
    const name = ingredient.name
    const color = ingredient.color
    console.log('foods', ingredient)
    // render () {
    //     

        return (
            <p
                style={{backgroundColor: color}}
                id={itemKey}
                onClick={(e) => {clickFunc(ingredient)}}
                value= {ingredient}
            >
                {name}

            </p>
        )
    }

export default Ingredient
import React, { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

const IngredientContainer = () => {
    // state = {
    //     ingredients: [
    //         {name: 'Kaiser Bun', color: 'saddlebrown'},
    //         {name: 'Sesame Bun', color: 'sandybrown'},
    //         {name: 'Gluten Free Bun', color: 'peru'},
    //         {name: 'Lettuce Wrap', color: 'olivedrab'},
    //         {name: 'Beef Patty', color: '#3F250B'},
    //         {name: 'Soy Patty', color: '#3F250B'},
    //         {name: 'Black Bean Patty', color: '#3F250B'},
    //         {name: 'Chicken Patty', color: 'burlywood'},
    //         {name: 'Lettuce', color: 'lawngreen'},
    //         {name: 'Tomato', color: 'tomato'},
    //         {name: 'Bacon', color: 'maroon'},
    //         {name: 'Onion', color: 'lightyellow'}
    //     ],
    //     filteredIngredients: []
    // }

    const [ingredients, setIngredients] = useState(
        [
            {name: 'Kaiser Bun', color: 'saddlebrown'},
            {name: 'Sesame Bun', color: 'sandybrown'},
            {name: 'Gluten Free Bun', color: 'peru'},
            {name: 'Lettuce Wrap', color: 'olivedrab'},
            {name: 'Beef Patty', color: '#3F250B'},
            {name: 'Soy Patty', color: '#3F250B'},
            {name: 'Black Bean Patty', color: '#3F250B'},
            {name: 'Chicken Patty', color: 'burlywood'},
            {name: 'Lettuce', color: 'lawngreen'},
            {name: 'Tomato', color: 'tomato'},
            {name: 'Bacon', color: 'maroon'},
            {name: 'Onion', color: 'lightyellow'}
        ]
    )
    const [filteredIngredients, setFilteredIngredients] = useState(null)

    const addIngredient = (event) => {
        const ingredientToAdd = event.target.value
        
        setFilteredIngredients(() => {
            return {
                filteredIngredients: ingredientToAdd
            }
        })
    }

    // render function
        return(
            <>
                <IngredientList ingredients={ingredients} addIngredient={addIngredient}/>
                <BurgerPane ingredients={filteredIngredients}/>
            </>
        )
}

export default IngredientContainer
import React, { useState } from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'


const BurgerStack = () => {
    const [ingredients, stackIngredients] = useState([
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
          ])
    const burgerIngredients = []


    const addtoStack = (e) => {
        const ingColor = e.target.style.backgroundColor
        const ingName = e.target.innerText

        stackIngredients({
            burgerIngredients: [
                { name: ingName, color: ingColor }, 
                ...stackIngredients.burgerIngredients,
            ]
        })
    }

    const removeFromStack = (e) => {
        const clickIndex = e.target.id

        const currBurger = stackIngredients.burgerIngredients.slice()

        currBurger.splice(clickIndex, 1)

        stackIngredients({ burgerIngredients: currBurger })
    }

    const clearBurger = () => {
        stackIngredients(() => {
            return {
                burgerIngredients: []
            }
        })
    }
    return (
        <>
        <IngredientList ingredients={ingredients} add={addtoStack}
        />
        
        <BurgerPane 
        ingredients={burgerIngredients} 
        remove={removeFromStack}
        clear={clearBurger}
        />
        </>
    )

}
export default BurgerStack 
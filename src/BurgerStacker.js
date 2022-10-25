import React, { useState, useEffect } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

const BurgerStacker = () => {

    // state = {
        // ingredients: [
        // {name: 'Kaiser Bun', color: 'saddlebrown'},
        // {name: 'Sesame Bun', color: 'sandybrown'},
        // {name: 'Gluten Free Bun', color: 'peru'},
        // {name: 'Lettuce Wrap', color: 'olivedrab'},
        // {name: 'Beef Patty', color: '#3F250B'},
        // {name: 'Soy Patty', color: '#3F250B'},
        // {name: 'Black Bean Patty', color: '#3F250B'},
        // {name: 'Chicken Patty', color: 'burlywood'},
        // {name: 'Lettuce', color: 'lawngreen'},
        // {name: 'Tomato', color: 'tomato'},
        // {name: 'Bacon', color: 'maroon'},
        // {name: 'Onion', color: 'lightyellow'}
        // ],
    //     burgerIngredients: []
    // }

    const defaultIngredients = [
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

    const [ingredients, setIngredients] = useState(defaultIngredients)
    const [burgerIngredients, setBurgerIngredients] = useState([])

    // this function adds items to the burgerIngredients array
    const addToStack = (e) => {
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor

        setBurgerIngredients([{ name: ingName, color: ingColor }, ...burgerIngredients])
    }

    // this function clears the burger pane
    const clearBurger = () => {
        setBurgerIngredients([])
    }

    // this function will remove one ingredient from the burger
    const removeFromStack = (e) => {
        console.log('the old stack', burgerIngredients)
        console.log('this is the clicked item \n', e.target)
        // we need to find the ingredient's location within the array, then it's helpful to have a copy of the original array.
        const clickIndex = e.target.id
        const currBurger = burgerIngredients.slice()
        console.log(currBurger)
        // then we need to remove an item from the copy of the array, then we can set state with that copy.
        currBurger.splice(clickIndex, 1)
        console.log('this is the current burger after splice', currBurger)
        setBurgerIngredients(currBurger)
    }

    return (
        <div>
            <h1>Burger Stacker</h1>
            <div className="panes">
                <IngredientList 
                ingredients={ingredients}
                add={addToStack}
                />
                <BurgerPane 
                ingredients={burgerIngredients}
                remove={removeFromStack}
                clear={clearBurger}
                />
            </div>
        </div>
    )
}

export default BurgerStacker
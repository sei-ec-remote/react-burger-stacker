import React, { useState } from "react"
import IngredientList from "./IngredientList"
import BurgerPane from "./BurgerPane"

const BurgerStacker = () => {
    
     const ingredients = [
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
    
    const [burgerIngredients, setBurgerIngredients] = useState([])

    // add to the burger
    // click on an ing and use the `event` to target it
    const addToStack = (e) => {
        // grab the color
        const ingColor = e.target.style.backgroundColor
        // grab the name
        const ingName = e.target.innerText
        // add to state
        setBurgerIngredients((previousBurgerIngredients) => {

            return [{ 
                
                name: ingName, 
                color: ingColor }, 
                ...previousBurgerIngredients
            ]
            
        })
            
    }

    // remove from burger
    const removeFromStack = (e) => {
        // select an ing by id
        const clickIndex = e.target.id
        // copy the whole burger
        const currBurger = burgerIngredients.slice()
        // remove that ing
        currBurger.splice(clickIndex, 1)

        // set that state
        setBurgerIngredients(currBurger)
    }

    // clear said burger
    const clearBurger = () => {
        // set state back to an empty array
        setBurgerIngredients([])
    }


    return (
        <div class="container">
            <h1><h1>NEW AND IMPROVED</h1>Burger Stacker</h1>
            <div class="ingredients">
                <IngredientList 
                    ingredients={ingredients}
                    add={addToStack}
                />
            </div>
            <div class="burger">
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
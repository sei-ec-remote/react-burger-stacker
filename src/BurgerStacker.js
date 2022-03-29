import React, { useState } from "react"
import IngredientList from "./IngredientList"
import BurgerPane from "./BurgerPane"


const BurgerStacker = () => {
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
            {name: "Cheese", color: "gold"},
            {name: 'Lettuce', color: 'lawngreen'},
            {name: 'Tomato', color: 'tomato'},
            {name: 'Bacon', color: 'maroon'},
            {name: 'Onion', color: 'lightyellow'}
        ]
    )

    const [burgerIngredients, setBurgerIngredients] = useState([])

    const addToStack = (e) => {
        const ingrColor = e.target.style.backgroundColor
        const ingrName = e.target.innerText
        setBurgerIngredients([{name: ingrName, color: ingrColor},...burgerIngredients])
    }

    const removeFromStack = (e) => {
        const clickIndex = e.target.id
        const currBurger = burgerIngredients.slice()
        currBurger.splice(clickIndex, 1)
        setBurgerIngredients(currBurger)
    }

    // Might want my clear function here, to pass down as a prop.
    const clearBurger = () => {
        setBurgerIngredients([])
    }

    return (
        <div>
            <h1>Burger Stacker</h1>
            <div className="panes">
                < IngredientList
                    ingredients={ingredients}
                    add={addToStack}
                />
                < BurgerPane
                    ingredients={burgerIngredients}
                    remove={removeFromStack}
                    clear={clearBurger}
                />
            </div>
        </div>
    )
}

export default BurgerStacker

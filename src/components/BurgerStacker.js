import React, { useState } from "react"
import IngredientList from "./IngredientList"
import BurgerPane from "./BurgerPane"

const BurgerStacker = (props) => {

    const [ingredients, setIngredients] = useState(
        [
            { name: 'Kaiser Bun', color: 'saddlebrown' },
            { name: 'Sesame Bun', color: 'sandybrown' },
            { name: 'Gluten Free Bun', color: 'peru' },
            { name: 'Lettuce Wrap', color: 'olivedrab' },
            { name: 'Beef Patty', color: '#3F250B' },
            { name: 'Soy Patty', color: '#3F250B' },
            { name: 'Black Bean Patty', color: '#3F250B' },
            { name: 'Chicken Patty', color: 'burlywood' },
            { name: 'Lettuce', color: 'lawngreen' },
            { name: 'Tomato', color: 'tomato' },
            { name: 'Bacon', color: 'maroon' },
            { name: 'Onion', color: 'lightyellow' },
            { name: 'Cheese', color: 'gold' }
        ]
    )

    const [burgerIngredients, setBurgerIngredients] = useState([])

    const addToBurger = (e) => {
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor
        setBurgerIngredients(prevBurgIngs =>
            [{ name: ingName, color: ingColor }, ...prevBurgIngs]
        )
    }

    const clearBurger = () => {
        setBurgerIngredients([])
    }

    const removeFromBurger = (e) => {
        const clickedIndex = e.target.id
        const currentIngs = burgerIngredients.slice()
        currentIngs.splice(clickedIndex, 1)
        setBurgerIngredients(currentIngs)
    }


    return (
        <>
            <h1>Burger Stacker</h1>
            <div className="panes">
                <IngredientList
                    ingredients={ingredients}
                    add={addToBurger}
                />
                <BurgerPane
                    ingredients={burgerIngredients}
                    remove={removeFromBurger}
                    clear={clearBurger}
                />
            </div>
        </>

    )
}

export default BurgerStacker
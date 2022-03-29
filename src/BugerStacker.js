// import react component
import React, { useState } from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'
const BurgerStacker = () => {

    const [ingredients, setIngredients] = useState([
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
                {name: 'Onion', color: 'lightyellow'},
                {name: 'Cheese', color: 'gold'}
            ])
        const [burgerIngredients, setBurgerIngredients] = useState([])


        const addToStack = (e) => {
            const ingColor = e.target.style.backgroundColor
            const ingName =  e.target.innerText
    
            setBurgerIngredients( () => {
                return (
                    [
                        {name: ingName, color: ingColor},
                        ...burgerIngredients
                    ]
            )
            })
        }

    const clearBurger = () => {
        setBurgerIngredients([])
    }

console.log('what is ingredients', ingredients)
 
    return(
        <>
            <h1>Burger Stacker</h1>
            <div className="panes">
                <IngredientList 
                    ingredients={ingredients}
                    addIng={addToStack}   
                />
                <BurgerPane 
                    ingredients={burgerIngredients}
                    clear={clearBurger}
                />
            </div>
        </>
    )
   
}

export default BurgerStacker
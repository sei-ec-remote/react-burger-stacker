import React, { useState } from "react";
import IngredientList from "./Components/IngredientList";
import MyBurger from "./Components/MyBurger";

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
    
    const [theStack, setTheStack]=useState([])

    const addToStack = (e) => {
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor
        
        console.log(`clicked on ${ingName} and it is ${ingColor}`)
        setTheStack(
                [{ name: ingName, color: ingColor }, ...theStack]
    )}
    

    const removeFromStack = (e) => {
        const clickIndex = e.target.id
        const currBurger = theStack.slice()
        console.log('the current burger(copy)', currBurger)
        currBurger.splice(clickIndex, 1)
        setTheStack(currBurger)
    }

    const tossBurger = () => {
        console.log('tossed')
        setTheStack([])
    }

    return (
        <div>
            <h1>Burger Stacker</h1>
            <div className="dash"> 
                <IngredientList 
                    ingredients={ingredients}
                    add={addToStack}/>
                <MyBurger 
                    ing={theStack} 
                    remove={removeFromStack}
                    reset={tossBurger}/>
            </div>
        </div>
    )

}
export default BurgerStacker
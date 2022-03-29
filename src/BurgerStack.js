import React, { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

const BurgerStack = () => {
    //state will hold ingredients 

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

        const [burgerIngredients, setBurgerIngredients] = useState([])

    const addToStack = (e) => {
        const ingColor =  e.target.style.backgroundColor
        const ingName = e.target.innerText
        // this.setState({
        //     burgerIngredients: [
        //         {name: ingName, color:ingColor},
        //         ...this.state.burgerIngredients
        //     ]
        // })
        setBurgerIngredients([{name: ingName, color:ingColor},...burgerIngredients])
    }

    const removeFromStack = (e) => {
        console.log('click')
        const clickIndex = e.target.id
        const currentBurger = burgerIngredients.slice()
        currentBurger.splice(clickIndex,1)
        // this.setState({
        //     burgerIngredients:currentBurger
        // })
        setBurgerIngredients(currentBurger)
    }

    const clearBurger = () => {
            setBurgerIngredients([])
    }

        // console.log(this.state.ingredients)
        return (
            <>
                <h1> Burger Stacker</h1>   
                <div class ='panes'>  
                <IngredientList 
                    ingredients={ingredients} 
                    add={addToStack}
                />
                <BurgerPane ingredients={burgerIngredients}
                    remove={removeFromStack}
                    clear ={clearBurger}
                />
                </div>
            </>
        )
    }

    export default BurgerStack
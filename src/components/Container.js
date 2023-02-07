import { isClickableInput } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'

import BurgerContainer from './BurgerContainer'
import IngrediantContainer from './IngrediantContainer'


const Container = () => {
    
    const [ingrediants, setIngrediants] = useState([

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
        
    ]);

    // burgerIngrediants: []

    const [burgerIngrediants, setBurgerIngrediants] = useState([])

    const addToStack = (e) => {

        console.log('adding to stack...')

        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor

        console.log(`clicked on ${ingName} and it is ${ingColor}`)

        setBurgerIngrediants((prevBurgerIngrediants) => ({
            ...prevBurgerIngrediants, 
                name: ingName, 
                color: ingColor              
        }))

    }
    
    const clearBurger = () => {
        console.log('clearing burger...')

        this.setState({
            burgerIngrediants: []
        })
    }

    const removeFromStack = (e) => {
        console.log('the original stack', this.state.burgerIngrediants)

        const clickIndex = e.target.ingrediants

        console.log('the index of the item clicked', clickIndex)

        // get a copy of the current burger array
        const currBurger = this.state.burgerIngrediants.slice() //makes shallow copy of our array

        console.log('the current burger copy', currBurger)

        // splice out the ingrediant we click on from that copy

        currBurger.splice(clickIndex, 1)

        console.log('this is the array after the splice', currBurger)

        // set the state to update the UI
        setBurgerIngrediants({
            burgerIngrediants: currBurger
        })

    }

    return (
        <> 
            <IngrediantContainer 
                ingrediants={ingrediants} 
                add={addToStack}
            />
            <BurgerContainer 
                ingrediants={burgerIngrediants}
                clear={clearBurger}
                remove={removeFromStack}
            /> 
        </>
    )
}

export default Container;
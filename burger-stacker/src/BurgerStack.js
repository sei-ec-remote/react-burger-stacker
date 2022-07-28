import React, { useState } from 'react'
import BurgerContainer from './BurgerContainer.js'

import Ingredients from './Ingredients.js'



const BurgerStack = () => {

    //react 16 way:

    // this is NOT state
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

    

    // add to the burger
    // click on an ing and use the 'event' to target it
    // burgerStack = []  -its just declaring an array as empty

const [burgerStack, setBurgerStack] = useState([]) 
// burgerstack is used for calling, but setBurgerStack is used to change it


    // don't have to change this inside
const addToStack = (e) => {
		// grab the color
		const ingColor = e.target.style.backgroundColor
		// grab the name
		const ingName = e.target.innerText
		// add to state

        // its like running a function
        // setting burgerStack, its clearer
    setBurgerStack(

				[{ name: ingName, color: ingColor },  // spread helps to stack it and not just change it in place - YES

                // spread op takes what was in the array and copies it over here
				...burgerStack] // grabs everything in the array. It has to be iterable usually on array Can map to obj using index as key

		) 
	}

    const array = [1, 2, 3];
    const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }


    // remove from burger

    // remove is not being used here, its passing down the function and using it down there
    const removeFromStack = (e) => {
        // select an ing by id
        const clickIndex = e.target.id
        // copy the whole burger
        const currBurger = burgerStack.slice()
        // remove that ing
        currBurger.splice(clickIndex, 1)
        // set that state
        setBurgerStack(currBurger)
    }

    // clear said burger
    const clearBurger = () => { 
        setBurgerStack([])
    }


		return (
			<>
				<Ingredients ingredients={ingredients}
					add={addToStack}
				/>
				<BurgerContainer ingredients={burgerStack} remove={removeFromStack} clear={clearBurger}/> 
			</>
		)


}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export default BurgerStack
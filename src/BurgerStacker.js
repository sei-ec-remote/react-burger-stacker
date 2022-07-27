import React, { useState } from "react";
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

const BurgerStacker = (props) => {
		const ingredients = [
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
			{ name: 'Onion', color: 'lightyellow' }]
			
	const [stack, setStack] = useState([{name: '', color: ''}])

	// add to the burger
	// click on an ing and use the `event` to target it
	const addToStack = (e) => {
		// grab the color
		const ingColor = e.target.style.backgroundColor
		// grab the name
		const ingName = e.target.innerText
		// add to state
		setStack([
				{ name: ingName, color: ingColor },
                // spread op takes what was in the array and copies it over here
				...stack
			])
	}
		
	// remove from burger
    const removeFromStack = (e) => {
        // select an ing by id
        const clickIndex = e.target.id
        // copy the whole burger
        const currBurger = stack.slice()
        // remove that ing
        currBurger.splice(clickIndex, 1)
        // set that state
        setStack( currBurger )
    }

	// clear said burger
    const clearBurger = () => {
        // set state back to an empty array
        // this.setState(() => {
        //     return {
        //         burgerIngredients: []
        //     }
        // })
        setStack([])
}
		return (
			<>
				<IngredientList
					ingredients={ingredients}
					add={addToStack}
				/>
				<BurgerPane stack={stack} remove={removeFromStack} clear={clearBurger}/>
			</>
		)}

export default BurgerStacker
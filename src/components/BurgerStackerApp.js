import React, { useState } from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

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
		{name: 'Lettuce', color: 'lawngreen'},
		{name: 'Tomato', color: 'tomato'},
		{name: 'Bacon', color: 'maroon'},
		{name: 'Onion', color: 'purple'}
	]
)

const [burgerIngredients, setBurgerIngredients]= useState([])


// this function adds items to the burgerIngredients array, which allow burgerPane to render them

const addToStack=(e)=>{
	const ingName = e.target.innerText
	const ingColor = e.target.style.color

	// console.log("this is the name", ingName)
	// console.log("this is the color", ingColor)
	setBurgerIngredients(
		[{name:ingName, color: ingColor},
		...burgerIngredients]
	)
}
const clearBurger = ()=>{
	setBurgerIngredients([])
}

const removeFromStack = (e)=>{
	//first we need to find ingredients location in the array,
	const clickIndex = e.target.id
	//then its helpful to have a copy of the original arry
	const currBurger = burgerIngredients.slice()
	//then when need to remove an item from the copy of the array
	currBurger.splice(clickIndex, 1)
	//then we can set state with the copy
	setBurgerIngredients( currBurger )

}




	return (
		<main>
			<h1>BurgerStacker</h1>
			<div className="container">
				<IngredientList 
					ingredients={ingredients}
					add={addToStack} 
				/>
				<BurgerPane
					ingredients={burgerIngredients}
					clear={clearBurger}
					remove={removeFromStack}	
				/>
			
			</div>
		</main>
	)   

}

export default BurgerStacker
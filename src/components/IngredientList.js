import React from 'react'
import Ingredient from './Ingredient'



const IngredientList= (props) => {
	
	let allIngredients = props.ingredients.map((ing, i) =>(
		<p key = {i}>
			<Ingredient
				itemKey={i}
				ingredient={ing}
				clickFunc = {props.add}
			/>
		</p>
	))

	return(
	<section className="ingredient-container">
		<h3>Ingredients List</h3>
		<section>
			{allIngredients}
		</section>
	</section>
	)
}


export default IngredientList
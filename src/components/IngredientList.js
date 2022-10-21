import React, {Component} from 'react'
import Ingredient from './Ingredient'



class IngredientList extends Component{
	render(){
		let allIngredients = this.props.ingredients.map((ing, i) =>(
			<p key = {i}>
				<Ingredient
					itemKey={i}
					ingredient={ing}
					clickFunc = {this.props.add}
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
}

export default IngredientList
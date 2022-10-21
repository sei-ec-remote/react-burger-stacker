import React, {Component} from 'react'
import Ingredient from './Ingredient(s)'



class IngredientList extends Component{
	render(){
		//let because it needs to change
		let list = this.props.ingredients.map(ingredient =>(
			<li onClick = {this.props.add}> 
				<Ingredient ingredient={ingredient}/>
			</li>
		))

		return(
			<div>
				 <section className='ingredient-container'>
                <h1>INGREDIENT LIST</h1>
                <ul className="ingredient-list">
                    {list}
                </ul>
            </section>
			</div>
		)
	}
}

export default IngredientList
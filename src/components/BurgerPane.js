import React, { Component } from 'react'

import ClearBurger from './ClearBurger'
import Ingredient from './Ingredient(s)'

class BurgerPane extends Component {
	render() {

		let burger = this.props.ingredients.map(ingredient =>(
			<li> 
				<Ingredient ingredient={ingredient} key ={ingredient.name}/>
			</li>
		))
		return (

			<section className='burger-container'>
				<h1>BURGER PANE</h1>
				<ul>{burger}</ul>
				<ClearBurger clear={this.props.clear} />
			</section>
		)
	}
}

export default BurgerPane
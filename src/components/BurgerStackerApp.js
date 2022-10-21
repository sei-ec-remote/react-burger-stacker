import React, {Component} from 'react'
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';
import "../App.css"


class BurgerStackerApp extends Component{
	
state ={
// need ingredients to pull from 	
	ingredients: [
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
	  ],
// ingredients to go on burger 
	  burgerIngredients:[]

}
	
	render(){
		return(
			<div>
				<header> Burger Stacker </header>
				<div className = 'container'>
					<IngredientList ingredients ={this.state.ingredients}/>
					<BurgerPane ingredients ={this.state.burgerIngredients}/>
				</div>

			</div>
		)
	}
}

export default BurgerStackerApp
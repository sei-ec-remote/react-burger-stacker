import React, { Component } from 'react'
import BurgerContainer from './BurgerContainer.js'
import App from './App.js'
import Ingredients from './Ingredients.js'
import ClearBurger from './ClearBurger.js'
import Ingredient from './Ingredient.js'



class BurgerStack extends Component{

    //react 16 way:

    state = {
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
          burgerIngredients : []
    }

    // add to the burger
    // click on an ing and use the 'event' to target it

	addToStack = (e) => {
		// grab the color
		const ingColor = e.target.style.backgroundColor
		// grab the name
		const ingName = e.target.innerText
		// add to state
		this.setState({
			burgerIngredients: [
				{ name: ingName, color: ingColor },
                // spread op takes what was in the array and copies it over here
				...this.state.burgerIngredients,
			],
		})
	}

    // remove from burger
    removeFromStack = (e) => {
        // select an ing by id
        const clickIndex = e.target.id
        // copy the whole burger
        const currBurger = this.state.burgerIngredients.slice()
        // remove that ing
        currBurger.splice(clickIndex, 1)
        // set that state
        this.setState({burgerIngredients: currBurger})
    }

    // clear said burger
    clearBurger = () => {

        this.setState({burgerIngredients: []})

    }


    render() {
		return (
			<>
				<Ingredients ingredients={this.state.ingredients}
					add={this.addToStack}
				/>
				<BurgerContainer ingredients={this.state.burgerIngredients} remove={this.removeFromStack} clear={this.clearBurger}/>
			</>
		)
	}

}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export default BurgerStack
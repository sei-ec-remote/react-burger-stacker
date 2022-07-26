import React, {Component} from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

class IngredientContainer extends Component {
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
        filteredIngredients: []
    }

    addIngredient = (event) => {
        const ingredientToAdd = event.target.value
        
        this.setState(() => {
            return {
                filteredIngredients: ingredientToAdd
            }
        })
    }

    // render function
    render () {
        return(
            <>
                <IngredientList ingredients={this.state.ingredients} addIngredient={this.addIngredient}/>
                <BurgerPane ingredients={this.state.filteredIngredients}/>
            </>
        )
    }
}

export default IngredientContainer
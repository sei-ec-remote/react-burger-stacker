import React, { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

class BurgerStacker extends Component {
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
          burgerIngredients: []
    }

    // add to burger
    handleIngredientAdd = (e) => {
        const ingColor = e.target.style.backgroundColor
        const ingName = e.target.innerText
        this.setState({
            burgerIngredients: [
                {name: ingName, color: ingColor},
                // spread operator (...) takes what was in the array and copies it over here
                ...this.state.burgerIngredients,
            ]
        })
    }
    // remove from burger
    handleIngredientDelete = (e) => {
        const clickIndex = e.target.id
        const currentBurger = this.state.burgerIngredients.slice()
        currentBurger.splice(clickIndex, 1)
        this.setState({
            burgerIngredients: currentBurger
        })
    }
    // clear burger
    handleBurgerClear = () => {
        this.setState({
            burgerIngredients: []
        })
    }

    render () {
        return (
            <>
                <IngredientList 
                    ingredients={this.state.ingredients}
                    add={this.handleIngredientAdd}
                    />  
                <BurgerPane
                    ingredients={this.state.burgerIngredients}
                    remove={this.handleIngredientDelete}
                    clear={this.handleBurgerClear}
                />
            </>
        )
    }
}

export default BurgerStacker
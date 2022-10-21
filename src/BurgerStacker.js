import React, { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

export default class BurgerStacker extends Component {

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

    // this function adds items to the burgerIngredients array
    addToStack = (e) => {
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor

        this.setState({
            burgerIngredients: [
                { name: ingName, color: ingColor },
                ...this.state.burgerIngredients
            ]
        })
    }

    // this function clears the burger pane
    clearBurger = () => {
        this.setState({
            burgerIngredients: []
        })
    }

    // this function will remove one ingredient from the burger
    removeFromStack = (e) => {
        console.log('the old stack', this.state.burgerIngredients)
        console.log('this is the clicked item \n', e.target)
        // we need to find the ingredient's location within the array, then it's helpful to have a copy of the original array.
        const clickIndex = e.target.id
        const currBurger = this.state.burgerIngredients.slice()
        console.log(currBurger)
        // then we need to remove an item from the copy of the array, then we can set state with that copy.
        currBurger.splice(clickIndex, 1)
        console.log('this is the current burger after splice', currBurger)
        this.setState({
            burgerIngredients: currBurger
        })
    }

    render () {
        return (
            <div>
                <h1>Burger Stacker</h1>
                <div className="panes">
                    <IngredientList 
                    ingredients={this.state.ingredients}
                    add={this.addToStack}
                    />
                    <BurgerPane 
                    ingredients={this.state.burgerIngredients}
                    remove={this.removeFromStack}
                    clear={this.clearBurger}
                    />
                </div>
            </div>
        )
    }
}
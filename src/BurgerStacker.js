import React, { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'


// burger stacker component is the parent of BurgerPane and IngredientList
// holds ingredients in state, so we can pass them as props

export default class BurgerStacker extends Component {
    // state will hold ingredients
    constructor () {
        super ()
        this.state = {
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
                {name: 'Onion', color: 'lightyellow'},
                {name: 'Cheese', color: 'yellow'}
            ],
            burgerIngredients: []
        }
    }

    addToStack = (e) => {
        const ingColor = e.target.style.backgroundColor
        const ingName = e.target.innerText
        this.setState({
            burgerIngredients: [
                { name: ingName, color: ingColor },
                ...this.state.burgerIngredients
            ]
        })
    }

    removeFromStack = (e) => {
        console.log('the old stack', this.state.burgerIngredients)
        console.log('the clicked item', e.target)
        const clickIndex = e.target.id
        const currBurger = this.state.burgerIngredients.slice()
        console.log('the current burger', currBurger)
        currBurger.splice(clickIndex, 1)
        console.log('the current burger after splice', currBurger)
        this.setState({
            burgerIngredients: currBurger
        })
    }

    clearBurger = () => {
        this.setState({
            burgerIngredients: []
        })
    }


    render() {
        console.log('ingrdients list', this.state.ingredients)
        return (
            <>
                <h1>BURGER STACKER</h1>
                <div className='panes'>
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
            </>

        )


    }
}

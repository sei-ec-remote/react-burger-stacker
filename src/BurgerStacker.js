import React, { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

// burger stacker component is parent of BurgerPane and IngredientList
// holds ingredients in state so we can pass them as props

export default class BurgerStacker extends Component{
    // state will hold ingredients
    constructor(){
        super()
        this.state={
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
            burgerIngredients: [

            ]
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
        // location in the array
        const clickIndex = e.target.id
        // copy of the burger
        const currBurger = this.state.burgerIngredients.slice()
        // removing current burger
        currBurger.splice(clickIndex, 1)
        this.setState({
            burgerIngredients: currBurger
        })
    }

    clearBurger = () => {
        this.setState({
            burgerIngredients: []
        })
    }

    render(){
        return(
            <>
                <h1>Burger Stacker</h1>
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
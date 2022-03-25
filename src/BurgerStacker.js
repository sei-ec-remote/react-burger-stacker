import React, { Component } from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

export default class BurgerStacker extends Component {

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
                {name: 'Onion', color: 'lightyellow'}
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

    render () {
        console.log('checking ingredients', this.state.ingredients)
        return (
            <>
                <h1>Burger Stacker</h1>
                <div className='panes'>
                    <IngredientList 
                        ingredients={this.state.ingredients}
                        add={this.addToStack}
                    
                    />
                    <BurgerPane 
                        ingredients={this.state.burgerIngredients}
                    />
                </div>
            </>
        )
    }
}
import { isClickableInput } from '@testing-library/user-event/dist/utils'
import React, { Component, useState } from 'react'

import BurgerContainer from './BurgerContainer'
import IngrediantContainer from './IngrediantContainer'


class Container extends Component {
    
    state = {

        ingrediants: [

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

        burgerIngrediants: []
    } 

    addToStack = (e) => {

        console.log('adding to stack...', this.props)

        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor

        console.log(`clicked on ${ingName} and it is ${ingColor}`)

        this.setState({
            burgerIngrediants: [
                { name: ingName, color: ingColor },
                ...this.state.burgerIngrediants
            ]
        })

    }
    
    clearBurger = () => {
        this.setState({
            burgerIngrediants: []
        })
    }

    removeFromStack = (e) => {
        console.log('the original stack', this.state.burgerIngrediants)

        const clickIndex = e.target.ingrediants

        console.log('the index of the item clicked', clickIndex)

        // get a copy of the current burger array
        const currBurger = this.state.burgerIngrediants.slice() //makes shallow copy of our array

        console.log('the current burger copy', currBurger)

        // splice out the ingrediant we click on from that copy

        currBurger.splice(clickIndex, 1)

        console.log('this is the array after the splice', currBurger)

        // set the state to update the UI
        this.setState({
            burgerIngrediants: currBurger
        })


    }

    render () {

        return (
            <> 
                <IngrediantContainer 
                    ingrediants={this.state.ingrediants} 
                    add={this.addToStack}

                />
                <BurgerContainer 
                    ingrediants={this.state.burgerIngrediants}
                    clear={this.clearBurger}
                    remove={this.removeFromStack}
                /> 
            </>
        )
    }
}

export default Container
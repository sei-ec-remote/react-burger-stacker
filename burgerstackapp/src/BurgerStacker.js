import React, { Component } from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngriedientList'

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
            {name: 'Onion', color: 'lightyellow'},
            {name: 'Cheese', color: 'gold'}
          ],
          burgerIngredients: []
    }

    // this function adds items to the burgerIngredients array in state
    addToStack = (e) => {
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor
        
        console.log (`clicked on ${ingName} and it is ${ingColor}`)

        this.setState({
            burgerIngredients: [
                {name: ingName, color: ingColor},
                ...this.state.burgerIngredients
            ]
        })
    }

    // this function will remove individual items from the burger
    removeFromStack = (e) => {
        console.log('the original stack'. this.state.burgerIngredients)
        const clickIndex = e.target.id
        console.log('the index of the item clicked', clickIndex)
        // get a copy of the current burger array
        const currBurger = this.state.burgerIngredients.slice()
        console.log('the current burger (copy)', clickIndex)
        // splice out the ingredient we click on from that copy
        currBurger.splice(clickIndex, 1)
        console.log('the the copy after click', clickIndex)
        // then we'll set state with the freshly updated copy
        this.setState({
            burgerIngredients: currBurger
        })
    } 

    // this empties the burger ingredients array, allowing user to start over
    clearBurger = () => {
        this.setState({
            burgerIngredients: []
        })
    }

    // this function adds items to the burgerIngredients array in state
    addToStack = (e) => {
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor

        console.log (`clicked on ${ingName} and it is ${ingColor}`)
        this.setState({
            burgerIngredients: [
                {name: ingName, color: ingColor},
                ...this.state.burgerIngredients
            ]
        })
    }

    render () {
        return (
            <div>
                <h1>Burger Stacker</h1>
                <div className='panes'>
                    <IngredientList 
                        ingredients={this.state.ingredients}
                        add={this.addToStack}
                        clickFunc={this.props.add}
                    />
                    <BurgerPane 
                        ingredients={this.state.burgerIngredients}
                        clear={this.clearBurger}
                    />
                </div>

            </div>
        )
    }
}
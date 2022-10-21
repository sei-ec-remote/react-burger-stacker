import React, { Component } from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

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

    addToStack = (name, color) => {
        this.setState({
            burgerIngredients:
             [{name: name, color: color}, this.state.burgerIngredients]
        })
    }

    clearBurger = () => {
        this.setState({
            burgerIngredients:[]
        })
    }

    render() {
        return (
            <main>
                <h1>BurgerStacker</h1>
                <div className='panes'>
                    <IngredientList ingredients={this.state.ingredients} add={this.addtoStack} />
                    <BurgerPane ingredients={this.state.burgerIngredients} clear={this.clearBurger} />
                </div>
            </main>
        )
    }
}

export default BurgerStacker
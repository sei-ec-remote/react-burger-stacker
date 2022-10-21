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
            {name: 'Onion', color: 'lightyellow'},
            {name: 'Cheese', color: 'gold'}
          ],
          burgerIngredients: []
    }

    // this function adds items to the burgerIngredients array, which allows burgerPane to render them
    addToStack = (e) => {
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor
        console.log(ingName)

        this.setState({
            burgerIngredients:[
                {name: ingName, color: ingColor},
                ...this.state.burgerIngredients
            ]
        })
    }

    // this function will clear the burger pane, passed as a prop to that comp. but lives her to set state
    clearBurger = () => {
        this.setState({
            burgerIngredients:[]
        })
    }

    //this function will remove one ingredient from the burger
    removeFromStack = (e) => {
        // we need to find the ingredeient in the array
        const clickIndex = e.target.id
        // helpful to have copy of the og array
        const currBurger = this.state.burgerIngredients.slice()
        // then we remove item from copy of array
        currBurger.splice(clickIndex, 1)
        // then set state with copy of array
        this.setState({
            burgerIngredients: currBurger
        })

    }

    render() {
        return (
            <main>
                <h1>Burger Stacker</h1>
                <div className='panes'>
                    <IngredientList 
                        ingredients={this.state.ingredients} 
                        add={this.addtoStack} 
                    />
                    <BurgerPane 
                        ingredients={this.state.burgerIngredients} 
                        remove={this.removeFromStack}
                        clear={this.clearBurger} 
                    />
                </div>
            </main>
        )
    }
}

export default BurgerStacker
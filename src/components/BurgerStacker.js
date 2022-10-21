import React, { Component } from "react"
import IngredientList from "./IngredientList"
import BurgerPane from "./BurgerPane"

export default class BurgerStacker extends Component {
    state = {
        ingredients: [
            { name: 'Kaiser Bun', color: 'saddlebrown' },
            { name: 'Sesame Bun', color: 'sandybrown' },
            { name: 'Gluten Free Bun', color: 'peru' },
            { name: 'Lettuce Wrap', color: 'olivedrab' },
            { name: 'Beef Patty', color: '#3F250B' },
            { name: 'Soy Patty', color: '#3F250B' },
            { name: 'Black Bean Patty', color: '#3F250B' },
            { name: 'Chicken Patty', color: 'burlywood' },
            { name: 'Lettuce', color: 'lawngreen' },
            { name: 'Tomato', color: 'tomato' },
            { name: 'Bacon', color: 'maroon' },
            { name: 'Onion', color: 'lightyellow' },
            { name: 'Cheese', color: 'gold' }
        ],
        burgerIngredients: []
    }

    addToBurger = (e) => {
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor
        this.setState({
            burgerIngredients: [
                { name: ingName, color: ingColor },
                ...this.state.burgerIngredients
            ]
        })
    }

    clearBurger = () => {
        this.setState({
            burgerIngredients: []
        })
    }

    removeFromBurger = (e) => {
        console.log('the old stack', this.state.burgerIngredients)
        console.log('clicked item', e.target)
        const clickedIndex = e.target.id
        const currentIngs = this.state.burgerIngredients.slice()
        currentIngs.splice(clickedIndex, 1)
        this.setState({
            burgerIngredients: currentIngs
        })
    }

    render() {
        return (
            <>
                <h1>Burger Stacker</h1>
                <div className="panes">
                    <IngredientList
                        ingredients={this.state.ingredients}
                        add={this.addToBurger}
                    />
                    <BurgerPane
                        ingredients={this.state.burgerIngredients}
                        remove={this.removeFromBurger}
                        clear={this.clearBurger}
                    />
                </div>
            </>

        )
    }
}
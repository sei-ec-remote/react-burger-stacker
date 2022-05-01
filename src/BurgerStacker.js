import React, { Component } from "react"
import IngredientList from "./IngredientList"
import BurgerPane from "./BurgerPane"


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
                {name: "Cheese", color: "gold"},
                {name: 'Lettuce', color: 'lawngreen'},
                {name: 'Tomato', color: 'tomato'},
                {name: 'Bacon', color: 'maroon'},
                {name: 'Onion', color: 'lightyellow'}
            ],
            burgerIngredients: []
        }
    }

    addToStack = (e) => {
        const ingrColor = e.target.style.backgroundColor
        const ingrName = e.target.innerText
        this.setState({
            burgerIngredients: [
                { name: ingrName, color: ingrColor },
            ]
        })
    }

    removeFromStack = (e) => {
        console.log("the old stack", this.state.burgerIngredients)
        console.log("the clicked item:", e.target)
        const clickIndex = e.target.id
        const currBurger = this.state.burgerIngredients.slice()
        console.log("currBur before splice:", currBurger)
        currBurger.splice(clickIndex, 1)
        console.log("currBur after splice:", currBurger)
        this.setState({
            burgerIngredients: currBurger
        })
    }

    clearBurger = () => {
        this.setState({
            burgerIngredients: []
        })
    }

    render () {
        return (
            <div>
                <h1>Burger Stacker</h1>
                <div className="panes">
                    < IngredientList
                        ingredients={this.state.ingredients}
                        add={this.addToStack}
                    />
                    < BurgerPane
                        ingredients={this.state.burgerIngredients}
                        remove={this.removeFromStack}
                        clear={this.clearBurger}
                    />
                </div>

            </div>
        )
    }
}
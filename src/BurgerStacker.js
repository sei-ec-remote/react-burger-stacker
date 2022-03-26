import React, { Component } from "react"
import IngredientList from "./IngredientList"
import BurgerPane from "./BurgerPane"

// Burger Stacker component is the parent of BurgerPane and Ingredient List.
// It holds ingredients in state, so we can pass them as props.

export default class BurgerStacker extends Component {
    // State will hold ingredients
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

    // might want methods here to add ingredients that will be passed to a child component
    // If we declare a function here, that'll allow us to pass it down as a prop which will allow us to change state in one place.
    addToStack = (e) => {
        // console.log("Clicked (style):", e.target.style.backgroundColor)
        // console.log("Clicked (name):", e.target.innerText)
        const ingrColor = e.target.style.backgroundColor
        const ingrName = e.target.innerText
        this.setState({
            // Will set the state of burgerIngredients...
            burgerIngredients: [
                // ...to include the new information...
                { name: ingrName, color: ingrColor },
                // ...while also keeping the old information.
                ...this.state.burgerIngredients
                // This will add the new item to the front of the array. If you wanted it added to the back, reverse the instruction order:
                // 1. ...this.state.burgerIngredients,
                // 2. { name: ingrName, color: ingrColor }
            ]
        })
    }

    // Remove from stack will find an ingredient and remove it
    removeFromStack = (e) => {
        // console.log("REMOVE WORKS")
        console.log("the old stack", this.state.burgerIngredients)
        console.log("the clicked item:", e.target)
        // console.log("the clicked id:", e.target.id)
        // This is the location in the array
        const clickIndex = e.target.id
        // This is a copy of the burger
        const currBurger = this.state.burgerIngredients.slice()
        console.log("currBur before splice:", currBurger)
        // This is removing one item from the copy of the burger
        currBurger.splice(clickIndex, 1)
        console.log("currBur after splice:", currBurger)
        this.setState({
            burgerIngredients: currBurger
        })
    }

    // Might want my clear function here, to pass down as a prop.
    clearBurger = () => {
        this.setState({
            burgerIngredients: []
        })
    }

    render () {
        console.log("ingredients list:", this.state.ingredients)
        console.log("burger ingredients", this.state.burgerIngredients)
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
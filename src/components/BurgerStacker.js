import React, { Component } from "react"
import IngredientList from "./IngredientList"
import BurgerPane from "./BurgerPane"

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

    addIngredient = (e) => {
        const ingredientColor = e.target.style.backgroundColor
        const ingredientName = e.target.innerText
        this.setState({
            
            burgerIngredients: [
                { name: ingredientName, color: ingredientColor },
                // instead of creating a new obj, pass the object itself
                ...this.state.burgerIngredients
            ]
        })
    }

    removeIngredient = (e) => {
        const clickIndex = e.target.id
        const currentStack = this.state.burgerIngredients.slice()
        currentStack.splice(clickIndex, 1)

        this.setState({
            burgerIngredients: currentStack
        })
    }

    clearIngredient = () => {
        this.setState({
            burgerIngredients: []
        })
    }

    render () {
        return (
            <div class="container">
                <h1>Burger Stacker</h1>
                <div class="ingredients">
                    <IngredientList 
                        ingredients={this.state.ingredients}
                        add={this.addIngredient}
                    />
                </div>
                <div class="burger">
                    < BurgerPane 
                        ingredients={this.state.burgerIngredients}
                        remove={this.removeIngredient}
                        clear={this.clearIngredient}
                    />
                </div>
            </div>
        )
    }
}

export default BurgerStacker
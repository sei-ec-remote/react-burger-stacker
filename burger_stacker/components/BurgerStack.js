import React, { useState} from "react";
import IngredientList from "./IngredientList";
import BurgerPane from "./BurgerPane"

const Burgerstack = () => {

        const ingredients= [
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
        ]
        const [IngredientList, setIngredientList] = useState([])
    }

    const addToStack = (e) => {
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor

        // console.log(`clicked on ${ingName} and it is ${ingColor}`)

    

    setIngredients (
        [{name: ingName, color: ingColor}, ...IngredientList]
    )
    }

    const removeFromStack= (e) => {
        // console.log(`the original stack`, this.state.burgerIngredients)
        const clickIndex = e.target.id
        // console.log('the index of the clicked item\n', clickIndex)
        const currBurger = this.state.burgerIngredients
        currBurger.splice(clickIndex, 1)
        // console.log('the copy of the burger\n', currBurger)
        setIngredients(currBurger)

    const clearBurger = () => {
        setIngredients([])
    }



    return (
        <>
            <h1>Burger Stack</h1>
            <div className="panes">
                <IngredientList
                    allIngredients={this.state.ingredients}
                    add={this.addToStack}
                />
                <BurgerPane
                    ingredients={this.state.burgerIngredients}
                    clear={this.clearBurger}
                    remove={this.removeFromStack}
                />
            </div>
        </>
    )
}
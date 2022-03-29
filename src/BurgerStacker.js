import React, { useState } from 'react'
import Ingredient from './Ingredient'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

// BurgerStacker component is the parent of BurgerPane and IngredientList
// Holds the ingredients in state, so we can pass them as props to the child components

const BurgerStacker = () =>
{
    // state will hold ingredients
    // constructor() 
    // {
    //     super()
    //     this.state = {
    //         ingredients: [
    //             {name: 'Kaiser Bun', color: 'saddlebrown'},
    //             {name: 'Sesame Bun', color: 'sandybrown'},
    //             {name: 'Gluten Free Bun', color: 'peru'},
    //             {name: 'Lettuce Wrap', color: 'olivedrab'},
    //             {name: 'Beef Patty', color: '#3F250B'},
    //             {name: 'Soy Patty', color: '#3F250B'},
    //             {name: 'Black Bean Patty', color: '#3F250B'},
    //             {name: 'Chicken Patty', color: 'burlywood'},
    //             {name: 'Lettuce', color: 'lawngreen'},
    //             {name: 'Tomato', color: 'tomato'},
    //             {name: 'Bacon', color: 'maroon'},
    //             {name: 'Onion', color: 'lightyellow'},
    //             {name: 'Cheese', color: 'orange'}
    //         ],
    //         burgerIngredients: []
    //     }
    // }
    const [ingredients, setIngredients] = useState([
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
                {name: 'Cheese', color: 'orange'}
            ])
    const [burgerIngredients, setBurgerIngredients] = useState([])

    // might want methods here to add ingredients, that will be passed to a child component
    const addToStack = (e) => {
        const ingColor = e.target.style.backgroundColor
        const ingName =  e.target.innerText

        setBurgerIngredients( () => {
            return (
                [
                    {name: ingName, color: ingColor},
                    ...burgerIngredients
                ]
        )
        })
    }

    // might want my clear function here, to pass down as a prop
    const clearBurger = () => {
        setBurgerIngredients( [] )
    }

    // remove from stack will find an ingredient and get it on out of there from burgerIngredients
    const removeFromStack = (e) => {
        console.log('the old stack', burgerIngredients)
        console.log('REMOVE WORKS !')
        console.log('The clicked item', e.target)
        console.log('The clicked id', e.target.id)
        // this is the location in the array
        const clickIndex = e.target.id
        // this is a copy of the burger
        const currBurger = burgerIngredients.slice()
        console.log('the current burger', currBurger)
        // this is removing one item from the copy of the burger
        currBurger.splice(clickIndex, 1)
        console.log('the current burger after splice', currBurger)

        setBurgerIngredients(currBurger)
    }

        console.log('ingredients list', ingredients)
        console.log('burger ingredients', burgerIngredients)
        return(
            <>
                <h1>Burger Stacker</h1>
                <div className='panes'>
                    <IngredientList 
                        ingredients={ingredients} 
                        add={addToStack}    
                    />
                    <BurgerPane 
                        ingredients={burgerIngredients}
                        remove={removeFromStack}
                        clear={clearBurger}
                    />
                </div>
            </>
        )
}

export default BurgerStacker
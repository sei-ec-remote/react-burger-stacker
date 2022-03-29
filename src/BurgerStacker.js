import React, { useState } from "react";

import BurgerPane from "./BurgerPane";
import IngredientList from "./IngredientList";

//burgerstacker component is the parent of BurgerPane and Ingredient list
// export default class BurgerStacker extends Component {
    //state will hold ingredients 
    // constructor () {
    //     super()
    //     this.state={
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
    //             {name: 'Onion', color: 'lightyellow'}
    //         ],
    //         burgerIngredients: [
    //         ]
    //     }
    

const BurgerStacker = (props) => {

    const [ ingredients, setIngredients ] = useState([
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
                ])
    const [ burgerIngredients, setBurgerIngredients ] = useState([])


    //might want methods here to add ingredients that will be passed to a child component 

    const addToStack = (e) => {
        // console.log('this is what was clicked', e.target.innerText)
        // console.log('this is what was clicked', e.target.style.backgroundColor)
        const ingColor = e.target.style.backgroundColor
        const ingName = e.target.innerText
        console.log('hti add to stack', addToStack)
        // for state, be sure YOUR DATA TYPE MATCHES SO IF THIS IS AN ARRAY
        //  THAT WE ARE MAPPING THROUGH, BE SURE THE SYNTAX IS
        // FOR AN ARRAY
        setBurgerIngredients( 
            [
                { name: ingName, color: ingColor },
                ...burgerIngredients
            ]
        )}
        // first item and then second is being pushed into the array
        // ... will set state to add new while including old information
        // determines order
        // Called a spread operator!!
    // might want my clear function here to pass down as prop
    const clearBurger = () => {
        setBurgerIngredients([])}

// remove from stack will find an ingredient and get it on out of there
    const removeFromStack = (e) => {
        console.log('the old stack', burgerIngredients)

        console.log('clicked item', e.target)
        console.log('clicked id', e.target.id)
        // this is the location in the array
        const clickIndex = e.target.id
        // this is a copy of the burger
        const currBurger = burgerIngredients.slice()
        console.log('current burg', currBurger)
        // this is removing one item from the copy of the burger 
        currBurger.splice(clickIndex, 1)
        console.log('the current burger after splice', currBurger)
        setBurgerIngredients(
            currBurger
        )}
        // console.log('ingredient list', this.state.ingredients)
        // console.log('burger ingredients', this.state.burgerIngredients)
        return (
            <>
                <h1>Burger Stacker</h1>
                <div className="panes">
                    <IngredientList 
                        ingredients ={ingredients}
                        add = {addToStack}
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
import React, {useState, useEffect} from "react";
import IngredientsList from "./IngredientsList";
import BurgerPane from "./BurgerPane";

//burger stacker component is the parent of BurgerPane and IngredientList
//holds ingredients in state, so we can pass them as props
const BurgerStack = (props) => {
    //state will hold ingredients
    // constructor () {
    //     super () 
    //     this.state = {
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
                {name: 'Onion', color: 'lightyellow'}
            ] 
            //burgerIngredients: []
            )

    //need to have the empty array set for burgerIngredients using refractor way
    const [burgerIngredients, setBurgerIngredients] = useState([])
    //might want methods here to add ingredients, that will be passed
    //to a child component
   const addToStack = (e) => {
        //console.log('this is what was clicked', e.target.style.backgroundColor)
        //name was accessed by innerText
        //console.log('this is what was clicked', e.target.innerText)
        //now that we can get the name and color
        //we can now set the state of the burger ingredients!
        const ingColor = e.target.style.backgroundColor
        const ingName = e.target.innerText
            setBurgerIngredients([
                { name: ingName, color: ingColor },
                ...burgerIngredients
            ])
    }
    // remove from stack will find an ingredient and get it out of there
    //pass the removeFromStack into the BurgerPane
    const removeFromStack = (e) => {
        const clickIndex = e.target.id
        //then we make a copy of the original array with .slice()
        const currentBurger = burgerIngredients.slice()
        //console.log('the current burger array:', currentBurger)
        //clickIndex finds the ingredient within the array
        //and then .splice 1 tells it to remove 1 item in the array!
        //removes 1 item from the COPY of the burger
        currentBurger.splice(clickIndex, 1)
        //console.log('the current burger array AFTER .splice:', currentBurger)
        //call this.setState and set burgerIngredients to the copy of the burger, currentBurger
        { setBurgerIngredients(currentBurger) }
    }
    //might want my clear function here, to pass down as a prop
    const clearBurger = () => {
        { setBurgerIngredients([]) }
    }
        //console.log('ingredients list moved from app.js:', this.state.ingredients)
        //console.log('burger ingredients', this.state.burgerIngredients)
        return (
            <>
                <h1>Burger Stacker</h1> 
                <div className="burger">
                <IngredientsList 
                    ingredients={ingredients}
                    addIngs={addToStack}
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
export default BurgerStack
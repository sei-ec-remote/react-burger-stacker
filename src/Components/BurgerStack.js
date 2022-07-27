import React, {useState} from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

const BurgerStack =()=>{
   // state = {
   //     ingredients: [
   //     {name: 'Kaiser Bun', color: 'saddlebrown'},
   //     {name: 'Sesame Bun', color: 'sandybrown'},
   //     {name: 'Gluten Free Bun', color: 'peru'},
   //     {name: 'Lettuce Wrap', color: 'olivedrab'},
   //     {name: 'Beef Patty', color: '#3F250B'},
   //     {name: 'Soy Patty', color: '#3F250B'},
   //     {name: 'Black Bean Patty', color: '#3F250B'},
   //     {name: 'Chicken Patty', color: 'burlywood'},
   //     {name: 'Lettuce', color: 'lawngreen'},
   //     {name: 'Tomato', color: 'tomato'},
   //     {name: 'Bacon', color: 'maroon'},
   //     {name: 'Onion', color: 'lightyellow'}
   //   ],
   //   burgerIngredients: []
   // }
const ingredients= [
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
    {name: 'Onion', color: 'lightyellow'}]

const [burgerIngredients, setBurgerIngredients] = useState([])

   // add to the burger
   // click on an ing and use the 'event' to target it
const addToStack = (e) => {
    // grab the color
    const ingColor = e.target.style.backgroundColor
    // grab the name
    const ingName = e.target.innerText
    // add to state
    setBurgerIngredients([
            {name: ingName, color: ingColor},
            // spread operator takes what was in the array and copies it over here. Ex: spread operator is taking burgerIngredients above in empty array and put it down here.
            ...burgerIngredients
        
    ])
}
// remove from burger
const removeFromStack = (e) => {
    // select an ingredient by id
    const clickIndex = e.target.id
    // copy the whole burger
    const currentBurger = burgerIngredients.slice()
    // remove that ingredient
    currentBurger.splice(clickIndex, 1)
    // set that state
    setBurgerIngredients({
        burgerIngredients: currentBurger
    })
}

// clear said burger
const clearBurger = () => {
    // can do either or methods down below to remove the burger
    // this.setState(()=>{
    //     return{
    //         burgerIngredients: []
    //     }
    // })
    // this.setState({ burgerIngredients: [] })
    setBurgerIngredients([])
}
 
    return(
        <>
            <IngredientList ingredients={ingredients} add={addToStack}/>
            <BurgerPane ingredients={burgerIngredients} remove={removeFromStack} clear={clearBurger}/>
        </>
    )
}

export default BurgerStack
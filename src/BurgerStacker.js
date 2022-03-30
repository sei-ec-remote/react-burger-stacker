import React, { useState } from "react";
import IngredientList from "./IngredientList";
import BurgerPane from "./BurgerPane";
 // burger stacker component is the parent component to BurgerPane and IngredientsList
 // holds ingredients in state, and we can pass them as props 
 const BurgerStacker = () => {
     // state will hold ingredients meaning a constructor will be added
     // one is the state the other is teh function that sets the burger ingredients
     const [burgerIngredient, setBurgerIngredient] = useState([])
     const [ingredient] = useState([

         { name: 'Kaiser Bun', color: 'saddlebrown' },
         { name: 'Sesame Bun', color: 'sandybrown' },
         { name: 'Gluten Free Bun', color: 'peru' },
         { name: 'Lettuce Wrap', color: 'olivedrab' },
         { name: 'Beef Patty', color: '#7d4501' },
         { name: 'Soy Patty', color: '#3F250B' },
         { name: 'Black Bean Patty', color: '#3f2901' },
         { name: 'Chicken Patty', color: 'burlywood' },
         { name: 'Lettuce', color: 'lawngreen' },
         { name: 'Tomato', color: 'tomato' },
         { name: 'Bacon', color: 'maroon' },
         { name: 'Onion', color: 'lightyellow' },
         { name: 'Cheese', color: 'yellow' },
         { name: 'Ketchup', color: 'red' },
         { name: 'Mustard', color: '#e1ad01' },
         { name: 'Pickles', color: '#66a501' },
         { name: 'Mayonnaise', color: 'beige' },
     ])



     // methods to add ingredients that will be passed to a child component
     // in this case ingredients will be pass down as a prop
     // add a function that can pass it down
     const addToStack = (e) => {
         // this function can set the state and send it to the burger stack
         e.persist()
         // setting the state of the burgerIngredients
         // we're adding ingredients to the burger ingredients and second item 
         // int he array will be the rest of the ingredients ...this.state.burgerIngredients 
         setBurgerIngredient(prevBurger => {
             const ingColor = e.target.style.backgroundColor
             const ingName = e.target.innerText

             setBurgerIngredient([
                 { name: ingName, color: ingColor },
                 ...burgerIngredient])

         })
         // console.log('this is what was clicked', e.target.style.backgroundColor)
         // console.log('this is what was clicked', e.target.innerText)
     }
     // remove from the burger pane stack and take it out
     // const removeFromStack = (e) => {
     //     console.log('the old stack', burgerIngredients)
     //     console.log('clicked target', e.target)
     //     // this is teh location in the array
     //     const clickIndex = e.target.id
     //     // a copy of the burger
     //     const currentBurger = burgerIngredients.slice()
     //     console.log('the current burger', currentBurger)
     //     // this is removing oen item from the copy of the burger
     //     currentBurger.splice(clickIndex, 1)
     //     console.log('the current burger after splice', currentBurger)
     //     setBurgerIngredients({
     //         burgerIngredients: currentBurger
     //     })
     // }

     // want to have a clear function to pass down as a prop
     const clearBurger = () => {
         setBurgerIngredient([])
     }


     // console.log('the ingredients list', this.state.ingredients)
     // console.log('burger ingredients', this.state.burgerIngredients)
     return (
         <>
             <h1>Burger Stacker</h1>
             <h2>Create Your Own Burger!</h2>
             <h4>Click on each ingredient in Ingredients List to add to your burger<br />
                 If you want to remove a specific ingredient click within The Burger Pane<br />
                 Click 'Clear Burger' to remove all ingredients</h4>
             <div className="panes">
                 <IngredientList ingredient={ingredient}
                     // this is passing the handler function/props to the Ingredientslist
                     add={addToStack}
                 />
                 <BurgerPane
                     // when you're passing down burgerIngredients to bugerpane it'll be called props.ingredients
                     ingredient={burgerIngredient}
                     // remove={removeFromStack}
                     clear={clearBurger}
                 />
             </div>
         </>
     )
 }
 export default BurgerStacker 
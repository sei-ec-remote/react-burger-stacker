import React,{ Component } from "react"
import './App.css'
import IngredientList from "./components/IngredientList"
import BurgerPane from "./components/BurgerPane"
import Ingredient from "./components/Ingredient"

const IngredientArr =
  [
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

function App() {
  return (
    <>
   <h1>Burger Stacker</h1> 
   <div>
      <BurgerPane className='burgerMaker'ingredients ={IngredientArr}/>
   </div> 
  
   {/* <div>
      <BurgerPane allburgerItems={burgerItems}/>
   </div>  */}
   </>
  )
}

export default App;

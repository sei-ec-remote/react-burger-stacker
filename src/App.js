import React, { useState } from 'react';
import IngredientList from './Components/IngredientList';
import BurgerPane from './Components/BurgerPane'
//import Pokedex from './Components/Pokedex';
import './App.css';

const App = () => {
  
  const ingredients = [ 
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

  const [burgerItems, setBurgerItems] = useState([{name: '', color: ''}])

  const addToBurger = (e) => {
    e.preventDefault()
    const ingName = e.target.innerText
    const ingColor = e.target.style.backgroundColor
    setBurgerItems([{ name: ingName, color: ingColor}, ...burgerItems])
  }  
  
  console.log('burger items \n', burgerItems)
  // setBook(prevValue => {
      
  //   const name = event.target.name
  //   const value = event.target.value
   
  //   const updatedValue = { [name]: value }
    
  //   return { ...prevValue, ...updatedValue  }
  // })


  // remove from burger
  const removeFromStack = (e) => {
    // select an ing by id
    const clickIndex = e.target.id
    // copy the whole burger
    const currBurger = burgerItems.slice()
    // remove that ing
    currBurger.splice(clickIndex, 1)
    // set that state
    setBurgerItems(currBurger)
}

  const clearBurger = () => {
    console.log('im clearing')
    setBurgerItems([])
  }
 
  return (
    <div className="App" >
      {/* <Pokedex/> */}
      <div className="pane">
      <ul>
        <IngredientList ingredients={ingredients} add={addToBurger} id="ingredients"/>
      </ul>

      </div>
      <div className="pane">
        <BurgerPane burgerItems={burgerItems} clear={clearBurger} remove={removeFromStack}/>
      </div>
    </div>
  )
}

export default App

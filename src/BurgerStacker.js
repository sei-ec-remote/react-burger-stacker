import './App.css'
import React, {useState} from 'react'
import IngredientsList from './Components/IngredientsList'
import BurgerPane from './Components/BurgerPane'

const ingredientsArray = [
  {name: 'Kaiser Bun', color: '#B76E26', textColor: "white"},
  {name: 'Sesame Bun', color: 'sandybrown', textColor: "black"},
  {name: 'Gluten Free Bun', color: 'peru', textColor: "black"},
  {name: 'Lettuce Wrap', color: 'olivedrab', textColor: "white"},
  {name: 'Beef Patty', color: '#673D13', textColor: "white"},
  {name: 'Soy Patty', color: '#8A5347', textColor: "white"},
  {name: 'Black Bean Patty', color: '#3F250B', textColor: "white"},
  {name: 'Chicken Patty', color: 'burlywood', textColor: "black"},
  {name: 'Lettuce', color: 'lawngreen', textColor: "black"},
  {name: 'Tomato', color: 'tomato', textColor: "black"},
  {name: 'Bacon', color: 'maroon', textColor: "white"},
  {name: 'Onion', color: 'lightyellow', textColor: "black"}
]

const BurgerStacker = () => {

  const [allIngredients, setAllIngredients] = useState(ingredientsArray)
  const [stackIngredients, setStack] = useState([])

  const addToStack = (name, color, textColor) => {
    const ingredient = {
      name: name,
      color: color,
      textColor: textColor
    }
    setStack(prevStack => {return [ingredient, ...prevStack]})
  }

  const removeFromStack = (a,b,c,index) => {
    let currentStack = stackIngredients
    let newStack = currentStack.splice(index, 1)
    setStack(newStack)
  }

  const clearStack = () => {
    setStack([])
  }

  const newIngredient = (object) => {
    if (object.name === ""){
      return
    } else {
      setAllIngredients(prevIngredients => {return [object, ...prevIngredients]})
    }
  }

  return (
    <div id="App">
      <IngredientsList ingredients={allIngredients} stack={stackIngredients} addToStack={addToStack} newIngredient={newIngredient}/>
      <BurgerPane stack={stackIngredients} clearStack={clearStack} removeItem={removeFromStack}/>
    </div>
  )  
}

export default BurgerStacker;

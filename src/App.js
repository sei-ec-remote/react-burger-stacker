import './App.css';
import React, { useState } from 'react'
import IngredientList from './components/IngredientList'
import BurgerPane from './components/BurgerPane'

const App = () => { 
  const [IngredientsStack, setIngredientsStack] = useState([])
  const [availableIngredients, setAvailableIngredients] = useState(
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
  )

  const add = (e) => {
    const name = e.target.innerText
    const color = e.target.style.backgroundColor
    // console.log(this.state.IngredientsStack)
    setIngredientsStack([{name: name, color: color}, ...IngredientsStack])
    // this.setState({IngredientsStack: })
  }
  const remove = (e) => {
    let copy = [...IngredientsStack]
    copy.splice(e.target.key, 1) // kow why now.
    setIngredientsStack(copy)
  }
  const nukeAll = () => {
    setIngredientsStack([])
  }
  return (
    <div className="App">
      <IngredientList availableIngredients={availableIngredients} add={add} />
      <BurgerPane ingredients={IngredientsStack} remove={remove} removeAll={nukeAll} />
    </div>
  )
}

export default App;


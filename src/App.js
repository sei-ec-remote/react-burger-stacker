import React, { Component } from 'react'
import './App.css'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

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

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      burgerIngredients: []
    }

  }
  render () {
    return (
      <div className="App">
        <h1>BURGER STACKER</h1>
        <IngredientList ingredients={ingredients} />
        <BurgerPane burgerIngredients={burgerIngredients} />
      </div>
    )
  }
}

export default App

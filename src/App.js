import React, { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

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

  // add ingredients to BurgerPane
  addToBurger = (e) => {
    let newIngredient = {
      name: e.target.innertext, 
      color: e.target.style.backgroundColor
    }
    let newBurger = this.state.burgerIngredients.concat(newIngredient)
    this.setState({
      burgerIngredients: newBurger
    })
  } 

  // clear the burger
  clearBurger = (e) => {
    this.setState({
      burgerIngredients: []
    })
  }

  render () {
    return (
      <div>
        <h1>BURGER STACKER</h1>
        <IngredientList 
          ingredients={ingredients} 
          addToBurger={this.addToBurger}
        />

        <BurgerPane 
          burgerIngredients={this.state.burgerIngredients} 
          clearBurger={this.clearBurger}  
        />
      </div>
    )
  }
}

export default App

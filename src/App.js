import './App.css'
import React from 'react'
import IngredientsList from './Components/IngredientsList'
import BurgerPane from './Components/BurgerPane'

const ingredientsArray = [
  {name: 'Kaiser Bun', color: 'saddlebrown', textColor: "white"},
  {name: 'Sesame Bun', color: 'sandybrown', textColor: "black"},
  {name: 'Gluten Free Bun', color: 'peru', textColor: "black"},
  {name: 'Lettuce Wrap', color: 'olivedrab', textColor: "white"},
  {name: 'Beef Patty', color: '#3F250B', textColor: "white"},
  {name: 'Soy Patty', color: '#3F250B', textColor: "white"},
  {name: 'Black Bean Patty', color: '#3F250B', textColor: "white"},
  {name: 'Chicken Patty', color: 'burlywood', textColor: "black"},
  {name: 'Lettuce', color: 'lawngreen', textColor: "black"},
  {name: 'Tomato', color: 'tomato', textColor: "black"},
  {name: 'Bacon', color: 'maroon', textColor: "white"},
  {name: 'Onion', color: 'lightyellow', textColor: "black"}
]

class App extends React.Component {
  state = {
    allIngredients: ingredientsArray,
    stackIngredients: []
  }

  addToStack = (name, color, textColor) => {
    const ingredient = {
      name: name,
      color: color,
      textColor: textColor
    }
    const currentStack = this.state.stackIngredients
    currentStack.push(ingredient)
    this.setState({
      stackIngredients: currentStack
    })
  }

  clearStack = () => {
    this.setState({
      stackIngredients: []
    })
  }

  newIngredient = (object) => {
    if (object.name === ""){
      return
    } else {
      const currentIngredients = this.state.allIngredients
      this.setState({
        allIngredients: [object, ...currentIngredients]
      })
    }
  }

  render () { 
    return (
      <div id="App">
        <IngredientsList ingredients={this.state.allIngredients} stack={this.state.stackIngredients} addToStack={this.addToStack} newIngredient={this.newIngredient}/>
        <BurgerPane stack={this.state.stackIngredients} clearStack={this.clearStack}/>
      </div>
    )
  }
  
}

export default App;

import './App.css';
import BurgerPane from './components/BurgerPane';
import IngredientList from './components/IngredientList';
import React, { Component } from 'react'

class App extends Component {
  state = {
    ingredientArray: [
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
    ],
    burger: []
  }

  handleClick = (e) => {
    // prevent page from reloading
    e.preventDefault()
    // grab value of the ingredient clicked on
    const chosenIngredient = JSON.parse(e.target.value)
    console.log(this.state.burger)
    // find index of the chosen ingredient
    // remove that value from the array of ingredients using splice
    this.setState({
      burger: [...this.state.burger, chosenIngredient]
    })
    // add the removed ingredient to the burger array
  }
  
  handleClear = (e) => {
    e.preventDefault()
    this.setState({
      burger: []
    })
  }

  render() {
    return (
        <div className='container'>
          <BurgerPane burger={this.state.burger} onClick={this.handleClear} />
          <IngredientList ingredients={this.state.ingredientArray} onClick={this.handleClick} />
        </div>
    )
  }
}

// function App() {
//   return (
//     <>
//       <IngredientList />
//       <BurgerPane />
//     </>
//   )
// }

export default App

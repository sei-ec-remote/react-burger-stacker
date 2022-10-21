import React, { Component } from 'react'
import './App.css';
import BurgerPane from './components/BurgerPane';
import IngredientList from './components/IngredientList';


const ingredientsArr = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' }
]

class App extends Component {
  state = {
    ingredients: ingredientsArr,
    stackedIngredients: []
  }

  clearStack = () => {
    this.setState(() => {
      return {
        stackedIngredients: []
      }
    })
  }

  handleClickedIngredient = (event) => {
    const clickedIngredient = event.target.textContent
    const color = event.target.style.backgroundColor
    const eachIngredient = {}
    eachIngredient.name = clickedIngredient
    eachIngredient.color = color
    // console.log(color)
    // console.log(clickedIngredient)
    // console.log(eachIngredient)
    this.setState(() => {
      return {
        stackedIngredients: [eachIngredient, ...this.state.stackedIngredients]
      }
    })
  }

  // removeFromStack = (event) => {
  //   const removeIngredient = event.target.id
  //   console.log(removeIngredient)
  //   const currBurger = this.state.stackedIngredients.slice()
  //   currBurger.splice(removeIngredient, 1)
  //   this.setState({
  //     stackedIngredients: currBurger
  //   })
  // }

  render() {
    return (
      <div className='burger-plate'>
        <IngredientList ingredients={ingredientsArr} handleClickedIngredient={this.handleClickedIngredient} />
        <BurgerPane ingredients={this.state.stackedIngredients} clearStack={this.clearStack} removeFromStack={this.removeFromStack} />
      </div>
    )
  }
}



export default App;

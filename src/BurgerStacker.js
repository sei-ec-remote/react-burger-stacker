import React, { Component } from 'react'
import Burger from './components/Burger'
import IngredientList from './components/IngredientList'
import './App.css'

const ingredientArray = [
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


export default class BurgerStacker extends Component {

  state = {
    addedIngredients: []
  }

  addToStack = (event) => {
    const ingredientToAdd = ingredientArray.find(ingredient => ingredient.name === event.target.dataset.target)
    console.log(ingredientToAdd)
    this.setState((state) => {
      return {
      addedIngredients: [...state.addedIngredients, ingredientToAdd]
      }
    })
  }

  clear = () => {
    this.setState({
      addedIngredients:[]
    })
  }

  render () {
    return (
      <>
        <div className="burger-area">
          <IngredientList ingredients={ingredientArray} addHandler={this.addToStack} />
          <Burger ingredients={this.state.addedIngredients} clearHandler={this.clear}/>
        </div>
      </>

    );
  }
}



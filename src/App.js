
import React, { Component } from 'react';
import './App.css';
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

export default class App extends Component {

  // Track the burgerIngredients added with an array
  constructor(props) {
    super(props)
    this.state = {
      burgerIngredients: []
    } 
  } 

  // Empty and reset the burgerIngredients array to empty
  clearBurgerIngredients = () => {
    this.setState({burgerIngredients:[]})
  }

  // AddIngredientToBurger is called from the click on an Ingredient
  //   It takes in an ingredient and needs to track a Burgers ingredients.
  //   Unshift adds a value to the beginning of an array.
  //   We have a list of burger ingredients and we add another to the
  //     beginning of the array.
  addIngredientToBurger = (ingredient) => {
    let newIngredientArray = this.state.burgerIngredients

    newIngredientArray.unshift(ingredient)

    this.setState({
      burgerIngredients: newIngredientArray
    })
  }

  // Display the list of ingredients by passing the list of ingredients via props
  //   and passing in the function to addIngredientToBurger
  // Display the BurgerPane by passing the burgerIngredients in 
  //   state and also the function for clearBurgerIngredients.
  render() {
    return (
        <div className="App">
          <h1>Burger Stacker</h1>
          <h6>Click on an ingredient and add it to your hamburger</h6>
          <div className='burger_container'>
          < IngredientList 
            ingredients={this.props.ingredients} 
            addIngredientToBurger={this.addIngredientToBurger}/>
          < BurgerPane 
            burgerIngredients={this.state.burgerIngredients}
            clearBurgerIngredients={this.clearBurgerIngredients}
            />
          </div>
        </div>
    );
    }
}

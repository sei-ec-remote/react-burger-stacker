import './App.css';
import React, { Component } from 'react';
import BurgerPane from './components/BurgerPane';
import IngredientList from './components/IngredientList';
import Ingredients from './Ingredients';


class App extends Component {
  state = {
    onBurger: []
  }

  addIngredient = (ingredient) => {
    // console.log(e.target.innerText)
    
    this.setState((state, props) => {
      return this.onBurger = state.onBurger.unshift(ingredient)
    })
  }

  clearIngredient = () => {
    this.setState({ onBurger : []})
    
  }

  removeLastIngredient = () => {
    this.setState((state, props) => {
      return this.onBurger = state.onBurger.shift()
    })
  }

  render() {
    return (
      <main>
        <IngredientList ingredients={Ingredients} addIngredient={this.addIngredient} />
        <BurgerPane ingredients={this.state.onBurger} clearIngredient = {this.clearIngredient} removeLastIngredient = {this.removeLastIngredient}/>

      </main>
    )
  }
}


export default App;

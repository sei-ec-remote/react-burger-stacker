import './App.css';
import React, { Component } from 'react';
import ingredientArray from './IngredientList';
import IngredientContainer from './IngredientContainer';
import StackingArea from './StackingArea';
class App extends Component  {
  constructor () {
    super ()
    this.state = {
      ingredientsToDisplay: ingredientArray,
      stackIngredients: []
    }
  }
  addIngredient = (e) =>{
    console.log("this is the target", e.target.style)
    this.setState(()=>{
      let object = {name: e.target.innerText, color: e.target.style.backgroundColor}
        return {
            stackIngredients: [{object}, ...this.state.stackIngredients]
        }
    })
  }
  clearBurger = () =>{
    this.setState(()=>{
      return {
        stackIngredients: []
      }
    })
  }
  render() {
    console.log('this is the state: ', this.state)
  return (
    <div className="App">
      <IngredientContainer ingredients={ingredientArray} addIngredient={this.addIngredient}/>
      <StackingArea stackIngredients={this.state.stackIngredients} clearBurger={this.clearBurger}/>

    </div>
  );
  }
}

export default App;

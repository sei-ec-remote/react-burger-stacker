import React, { Component } from 'react'
import './App.css'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

export default class App extends Component {
  constructor()
  {
    super()
    this.state = {
      ingredients: [
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
        {name: 'Onion', color: 'lightyellow'},
        {name: 'Cheese', color: 'orange'}
    ],
      stack: []
    }
  }

  addToStack = (e) => {
      console.log(e.target)

      this.setState( prevState => {
          return {
            stack: [e.target,...prevState.stack]
          }
      })
  }

  removeStack = () => {
    this.setState( () => 
    {
      return {stack: []}
    })
  }

render()
{
    console.log('this is from inside render', this.state.stack)

    return (
      <div className="App">
        <div id='panes'>
          <IngredientList ingredients={this.state.ingredients} addIngredient={this.addToStack}/>
          <BurgerPane stackIngredients={this.state.stack} emptyStack={this.state.removeStack}/>
        </div>
      </div>
    );
  }
}


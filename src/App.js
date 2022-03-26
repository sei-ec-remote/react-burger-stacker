import React, { Component } from 'react'
import './App.css'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'
import BurgerStacker from './BurgerStacker'

export default class App extends Component {

  render()
  {
      return (
        <div className="App">
            <BurgerStacker />
        </div>
      );
    }
}


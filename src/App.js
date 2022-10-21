import './App.css'
import React, {Component} from 'react'
import BurgerStacker from './BurgerStacker'
import BurgerPane from './BurgerPane';
import Ingredient from './Ingredient'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="assembled">
          <BurgerStacker />
          <BurgerPane />
          {/* <IngredientList /> */}
          <Ingredient />
        </div>
      </div>

      );
  }
}


import React, {Component} from 'react'
import './App.css';
import BurgerPane from './components/BurgerPane';
import BurgerStack from './components/BurgerStack';
import IngredientList from './components/IngredientList';
import Ingredients from './components/Ingredients';

class AssembledApp extends Component {
  render() {
    return (
      <div>
        <h1>This is a Burger?</h1>
        <ul>
          {foods}
        </ul>
        <div className="assembled">
          <BurgerPane />
          <BurgerStack />
          <IngredientList />
          <Ingredients />
        </div>
      </div>

      );
  }
}

export default AssembledApp;

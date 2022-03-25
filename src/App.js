import './App.css';
import React, { Component } from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane'
import ingredients from './Ingredients'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 1. store burger ingredient list *hint this needs to be an array
      burgerIngList: []
    }
  }
  // 3. pass burger ingredient list down through props to BurgerPane

  handleClick = (ingred) => {
    this.setState(state => {
      console.log('State', state)
      const updatedList = [...state.burgerIngList, ingred]

      return {
        burgerIngList: updatedList
      }
    });
    // 2. add the ingredient object to state above
  }


  // handleClear

  clearBurg = () => {
    console.log("HIT");
    this.setState({
      burgerIngList: []

    })
  }


  render() {
    console.log('burgerIngList', this.state.burgerIngList)
    return (
      <div>
        <h1>Burger Stacker</h1>
        <div className="burgContainer">
          <IngredientList ingredients={ingredients} handleClick={this.handleClick} />
          <BurgerPane burgIngredients={this.state.burgerIngList} clearBurg={this.clearBurg} />
        </div>
      </div>
    );
  }

}

export default App;

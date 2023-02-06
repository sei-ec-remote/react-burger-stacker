import React, { Component } from "react";
import IngredientList from "./components/IngredientList";
import BurgerPane from "./components/BurgerPane"
import './App.css';

class App extends Component {
  state = {
    ingredients: [
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
    ],
    burgerIngredients: []
  }

  addIngredient = (e) => {
    const ingName = e.target.innerText
    const ingColor = e.target.style.backgroundColor
    this.setState({
      burgerIngredients: [
        { name: ingName, color: ingColor },
        ...this.state.burgerIngredients
      ]
    })

  }

  clear = () => {
    this.setState({
      burgerIngredients: []
    })
  }

  render() {
    return (
      <div className="container">
        <IngredientList
          Ingredients={this.state.ingredients}
          add={this.addIngredient}
        />
        <BurgerPane
          ingredients={this.state.burgerIngredients}
          clear={this.clear}
        />
      </div>
    )
  }
}

export default App;

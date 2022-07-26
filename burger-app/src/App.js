import "./App.css";
import BurgerPane from "./BurgerPane";
import BurgerStack from "./BurgerStack";
import Ingredient from "./Ingredient";
import IngredientList from "./IngredientList";
import ClearBurger from "./ClearBurger";
import React, { Component } from "react";

class App extends Component {
  state = {
    ingredients: [
      { name: "Kaiser Bun", color: "saddlebrown" },
      { name: "Sesame Bun", color: "sandybrown" },
      { name: "Gluten Free Bun", color: "peru" },
      { name: "Lettuce Wrap", color: "olivedrab" },
      { name: "Beef Patty", color: "#3F250B" },
      { name: "Soy Patty", color: "#3F250B" },
      { name: "Black Bean Patty", color: "#3F250B" },
      { name: "Chicken Patty", color: "burlywood" },
      { name: "Lettuce", color: "lawngreen" },
      { name: "Tomato", color: "tomato" },
      { name: "Bacon", color: "maroon" },
      { name: "Onion", color: "lightyellow" },
    ],
    burgIng: [],
  };
  runIt = () => {
    this.setState((prevState, preProps) => {
      return {
        burgIng: prevState.burgIng
      }
    })
  };
  // let burgIng = []
  render() {
    return (
      <main>
        <h1>Stack them burgs</h1>
        <div className="App">
          <IngredientList
            ingredients={this.state.ingredients}
            burgIng={this.state.burgIng}
          />
          <BurgerStack burgIng={this.state.burgIng} />
        </div>
      </main>
    );
  }
}

export default App;

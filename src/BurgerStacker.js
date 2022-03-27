import React, { Component } from "react"
import IngredientList from "./IngredientList"

// burger stacker component is the parent of BurgerPane and IngredientList

//  hold ingredients in state, so we can pass them as props

export default class BurgerStacker extends Component {
  constructor() {
    super()
    this.state = {
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
    }
  }
  // state will hold ingredients
  // might want methods here to add ingredients, that will be passed to a child component
  // might want my clear function here, to pass down as a prop
  render() {
    console.log("ingredients list", this.state.ingredients)
    return (
      <>
          <h1>Burger Stacker</h1> 
            <IngredientList ingredients={this.state.ingredients} /> 
      </>
    )
  }
}

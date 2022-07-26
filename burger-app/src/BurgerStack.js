import React, { Component } from 'react'
import App from './App'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

class BurgerStack extends Component {
    state = {
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
            {name: 'Onion', color: 'lightyellow'}
          ], 
          burgIngredients: []
    }

    //add to the burger
    //click on ingredient and use event to target
    addToStack = (e) => {
        //grab the color
        const ingColor = e.target.style.backgroundColor
        //grab the name
        const ingName = e.target.innerText
        //add to state
        //if you dont need prevstate then u dont need callback
        this.setState({
            burgIngredients: [{
                name: ingName, color: ingColor
            }, 
            ...this.state.burgIngredients
            ]
        })
    }
    //remove from burder
    removeFromStack = (e) => {
        //select an ingredient by id
        const clickIndex = e.target.id
        //copy whole burger
        const currBurger = this.state.burgIngredients.slice()
        //remove that ingredient
        currBurger.splice(clickIndex, 1)
        //set state
        this.setState({burgIngredients: currBurger})
    }
    //clear burger
    clearBurger = (e) => {
        this.setState({burgIngredients: []})
    }
  render() {
    return (
      <>
    <IngredientList ingredients={this.state.ingredients}
    add={this.addToStack}/>
    <BurgerPane ingredients={this.state.burgIngredients}
    remove={this.removeFromStack}
    clear={this.clearBurger}/>
      </>
    )
  }
}

export default BurgerStack
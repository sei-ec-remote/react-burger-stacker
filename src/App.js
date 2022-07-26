import React, {Component} from 'react';
import IngredientList from './Components/IngredientList';
import BurgerPane from './Components/BurgerPane'
import Pokedex from './Components/Pokedex';
import './App.css';

class App extends Component {
  state = {
    burgerItems: [],
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
    ]
}

  addToBurger = (e) => {
    const ingName = e.target.innerText
    const ingColor = e.target.style.backgroundColor
    e.preventDefault()
    this.setState(() => {
        return {
            burgerItems: [
              {name: ingName, color: ingColor},
              // spread operator takes what was in the array and copies it over here
              ...this.state.burgerItems
            ]
        }
    })

  }  
  // remove from burger
  removeFromStack = (e) => {
    // select an ing by id
    const clickIndex = e.target.id
    // copy the whole burger
    const currBurger = this.state.burgerItems.slice()
    // remove that ing
    currBurger.splice(clickIndex, 1)
    // set that state
    this.setState({burgerItems: currBurger})
}

  clearBurger = () => {
    this.setState({burgerItems: []})
  }
  render(){
  
  return (
    <div className="App" >
     <div className="pane">
      <ul>
        <IngredientList ingredients={this.state.ingredients} add={this.addToBurger} id="ingredients"/>
      </ul>

     </div>
     <div className="pane">
      <BurgerPane burgerItems={this.state.burgerItems} clear={this.clearBurger} remove={this.removeFromStack}/>
     </div>
    </div>
  )
}
}

export default App

import './App.css';
import React, { Component } from 'react'
import IngredientList from './components/IngredientList'
import BurgerPane from './components/BurgerPane'

class App extends Component { 
  state = {
    IngredientsStack: [],
    availableIngredients: [
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

  add = (e) => {
    const name = e.target.innerText
    const color = e.target.style.backgroundColor
    // console.log(this.state.IngredientsStack)
    this.setState({IngredientsStack: [{name: name, color: color}, ...this.state.IngredientsStack]})
  }
  remove = (e) => {
    console.log('REMOVE')
    let copy = [...this.state.IngredientsStack]
    copy.splice(e.target.key, 1) //Why?
    this.setState({IngredientsStack: copy})
  }
  nukeAll = () => {
    this.setState({IngredientsStack: []})
  }
  render() {
    return (
      <div className="App">
        <IngredientList availableIngredients={this.state.availableIngredients} add={this.add} />
        <BurgerPane ingredients={this.state.IngredientsStack} remove={this.remove} removeAll={this.nukeAll} />
      </div>
    )
  }
}

export default App;


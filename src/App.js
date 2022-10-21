import React, { Component } from 'react'
import './App.css';
import BurgerPane from './components/BurgerPane';
import IngredientList from './components/IngredientList';


const ingredientsArr = [
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
]

class App extends Component {
  state = {
    stackedIngredients: []
  }

  clearStack = () => {
    this.setState(() => {
      return {
        stackedIngredients: []
      }
    })
  }

  handleClickedIngredient = (event) => {
    const clickedIngredient = event.target.innerText
    console.log('app.js', clickedIngredient)
    this.setState(() => {
      return {
        stackedIngredients: [clickedIngredient, ...this.state.stackedIngredients]
      }
    })
  }

  render() {
    return (
      <div className='burger-plate'>
        <IngredientList ingredients={ingredientsArr} handleClickedIngredient={this.handleClickedIngredient} />
        <BurgerPane ingredients={this.state.stackedIngredients} clearStack={this.clearStack}/>
      </div>
    )
  }
}



export default App;

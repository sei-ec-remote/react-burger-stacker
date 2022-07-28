import React, { useState } from 'react'
import './App.css';

import BurgerStack from './components/BurgerStack';
import Ingredients from './components/Ingredients';

// SWITCHED ALL COMPONENTS FROM CLASS TO FUNCTIONAL COMPONENTS

const ingredients = [
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

const App = () => {

  // state={
  //   ingredientsToDisplay: []
  // }

  const [ ingredientsToDisplay, setIngredientsToDisplay ] = useState([])

  const handleStateChange = e => {
    e.preventDefault()
    const selectedIngredientName = e.target.name.toLowerCase()
    console.log(selectedIngredientName)
    const findIngredientName = ingredients.filter(ingredient => ingredient.name.toLowerCase() === selectedIngredientName)
    // this.setState((prevState) => {
    //   return {
    //     ingredientsToDisplay: [ findIngredientName, ...prevState.ingredientsToDisplay ]
    //   }
    // })
    setIngredientsToDisplay ((prevIngredientsToDisplay) => {
      return [ findIngredientName, ...prevIngredientsToDisplay ]
    })
  }

  const handleStateReset = e => {
    e.preventDefault()
    console.log('clear added ingredients hit')
    // this.setState(() => {
    //   return {
    //     ingredientsToDisplay: []
    //   }
    // })
    setIngredientsToDisplay([])
  }

  // render() {

  const allIngredients = ingredients.map((thisIngredient,i) => {
    return (
      <Ingredients
        ingredient={thisIngredient.name}
        color={thisIngredient.color}
        key={i}
        handleStateChange={handleStateChange}
      />
    )
  })

  const burgerStack = ingredientsToDisplay.map((addedIngredient,i) => {
    return (
      <BurgerStack 
        addedIngredientName={addedIngredient[0].name}
        addedIngredientColor={addedIngredient[0].color}
        key={i}
      />
    )
  })

  return (
    <div className="App">
        <div className='ingredient-list'>
          <h1 className="section-title">Ingredients</h1>
          <div className='ingredients'>
            {allIngredients}
          </div>
        </div>

        <div className='burger-stack'>
          <div className='burger-ingredients'>
              <div className='burger-box'>
                {burgerStack}
              </div>
          </div>
          <div className='align-bottom'>
            <h1 className='section-title'>Burger Stacking Area</h1>
            <button onClick={handleStateReset}>Clear</button>
          </div>
        </div>
    </div>
  );
  // }
}

export default App;

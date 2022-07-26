import './App.css';
import React, { Component } from 'react'
import ClearBurger from './ClearBurger.js'
import BurgerContainer from './BurgerContainer.js'
import Ingredients from './Ingredients.js'
import BurgerStack from './BurgerStack.js'
import Display from './Display.js'


function App() {

  const burgerData = 
    [
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
  



  return (

    <>

      <Display burgerData={burgerData}/>

    </>


  );
}

export default App;

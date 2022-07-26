import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import IngredientList from './Components/IngredientList'
import BurgerPane from './Components/BurgerPane';


  const ingredients= [
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

function App() {
    
    return (
      <div>
      <BurgerPane ingredients={ingredients}/>
    </div>
  );
}


export default App;

// <IngredientList ingredients={ingredients}/>
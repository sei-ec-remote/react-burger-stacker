import React, { useState } from 'react'
import BurgerPane from './components/BurgerPane'
import IngredientList from './components/IngredientList'
import './App.css';

const ingredientsArray = [
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

function App () {

    const [possibleIngredients, setIngredients] = useState(ingredientsArray)
    const [burger, setBurger] = useState([])

    const handleClick = (e) => {
        e.preventDefault()
        const clickedIngredient = JSON.parse(e.target.value)
        setBurger(prevBurger => [clickedIngredient, ...prevBurger])
    }

    const clearBurger = () => {
        setBurger(burger => [])
    }
    return (
        <div className="container">
            <div className="ing">
                <IngredientList ingredients={possibleIngredients} onClick={handleClick}/>
            </div>
            <div className='bur'>
                <BurgerPane burger={burger} clear={clearBurger} />
            </div>
        </div>
    )
}

export default App

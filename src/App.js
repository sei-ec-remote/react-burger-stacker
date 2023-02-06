import React, { useState } from 'react'
import './App.css'
import IngredientList from './components/IngredientList'
import BurgerPane from './components/BurgerPane'

const ingredientsArray = [
    {name: 'Top Bun', color: 'burlywood', image: 'https://cdn-icons-png.flaticon.com/512/4312/4312522.png'},
    {name: 'Lettuce', color: 'lawngreen', image: 'https://cdn-icons-png.flaticon.com/512/1155/1155257.png'},
    {name: 'Tomato', color: 'tomato', image: 'https://cdn-icons-png.flaticon.com/512/7627/7627872.png'},
    {name: 'Onion', color: 'purple', image: 'https://cdn-icons-png.flaticon.com/512/9455/9455124.png'}, 
    {name: 'Bacon', color: 'red', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Made20bacon.png/640px-Made20bacon.png'},
    {name: 'Cheese Slice', color: '#f1dd00', image: 'https://cdn-icons-png.flaticon.com/512/7219/7219954.png'},
    {name: 'Black Bean Patty', color: '#3F250B', image: 'https://cdn-icons-png.flaticon.com/512/9293/9293812.png'},
    {name: 'Fried Chicken', color: '#c57e04', image: 'https://cdn-icons-png.flaticon.com/512/837/837606.png'},
    {name: 'Chicken Breast', color: '#f4db9a', image: 'https://cdn-icons-png.flaticon.com/512/5572/5572000.png'},
    {name: 'Bottom Bun', color: 'burlywood', image: 'https://cdn-icons-png.flaticon.com/512/4312/4312427.png'}
]

function App () {
    const [ingredients, setIngredients] = useState(ingredientsArray)
    const [burgerIngredients, setBurgerIngredients] = useState([])
    const [smash, setSmash] = useState(0)

    const handleClick = (e) => {
        e.preventDefault()
        // Reformat to JSON
        const selectedIngredient = JSON.parse(e.target.value)
        setBurgerIngredients(prevBurgerIngredients => [selectedIngredient, ...prevBurgerIngredients]
        )
    }
    const handleClear = (e) => {
        // add ingredient to the burger ingredients array
        e.preventDefault()
        setBurgerIngredients(prevBurger => [])
        setSmash(prevSmash => -10)
    }
    const handleSmash = (e) => {
        e.preventDefault()
        if (e.target.id === 'up') {
            if (smash > -45) {
                setSmash(prevSmash => prevSmash - 5)
            }
        } else {
            if (smash < 20){
                setSmash(prevSmash => prevSmash + 5)
            }
        }
    }
    return (
        <>
            <span className='main'>
                <IngredientList ingredients={ingredients} onClick={handleClick} 
                onClear={handleClear} onSmash={handleSmash} />
                <BurgerPane burgerIngredients={burgerIngredients} smash={smash} />
            </span>
        </>
    )
}


export default App
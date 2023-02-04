import React, { Component } from 'react'
import './App.css'
import IngredientList from './components/IngredientList'
import BurgerPane from './components/BurgerPane'
// import { state, setState } from 'react'

class App extends Component {
    state = {
        ingredients: [
            {name: 'Top Bun', color: 'saddlebrown', image: 'https://cdn-icons-png.flaticon.com/512/4312/4312522.png'},
            {name: 'Bottom Bun', color: 'saddlebrown', image: 'https://cdn-icons-png.flaticon.com/512/4312/4312427.png'},
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
        burgerIngredients: []
    }
    onClick = (e) => {
        e.preventDefault()
        const selectedIngredient = e.target.value
        console.log(e.target.value)
        this.setState({
            burgerIngredients: [...this.state.burgerIngredients, selectedIngredient]
        })
    }
    render() {
    return (
        <>
            <span className='main'>
                <IngredientList ingredients={this.state.ingredients} onClick={this.onClick} />
                <BurgerPane burgerIngredients={this.state.burgerIngredients} />
            </span>
        </>
    )
    }
}

export default App
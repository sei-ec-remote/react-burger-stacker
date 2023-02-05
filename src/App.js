import React, { Component } from 'react'
import BurgerPane from './components/BurgerPane'
import IngredientList from './components/IngredientList'
import './App.css';

class App extends Component {
    state = {
        possibleIngredients : [
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
        burger: []  
    }

    render() {
        return (
            <div className="burgerStack">
                <IngredientList ingredients={this.state.possibleIngredients} />
                <BurgerPane burger={this.state.burger}/>
            </div>
        )
    }
}

export default App

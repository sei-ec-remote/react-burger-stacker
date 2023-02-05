import React, { Component } from 'react'
import BurgerPane from './components/BurgerPane'
import IngredientList from './components/IngredientList'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="burgerStack">
                <IngredientList />
                <BurgerPane />
            </div>
        )
    }
}

export default App

import React, { Component } from 'react'
import './App.css'
import IngredientList from './components/IngredientList'
import BurgerPane from './components/BurgerPane'

class App extends Component {
    render() {
    return (
        <>
        <IngredientList />
        <BurgerPane />
        </>
    )
    }
}

export default App
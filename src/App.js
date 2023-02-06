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

    handleClick = (e) => {
        e.preventDefault()
        const clickedIngredient = JSON.parse(e.target.value)
        this.setState({
            burger: [clickedIngredient, ...this.state.burger]
    })
}

    clearBurger = () => {
        this.setState({
            burger: []
        })
    }

    // removeFromStack = (e) => {
    //     console.log('the original stack', this.state.burger)
    //     const clickIndex = JSON.parse(e.target.value)
    //     console.log('the item clicked', clickIndex)
    //     const currBurger = this.state.burger.slice()
    //     currBurger.splice(clickIndex, 1)
    // }

    render() {
        return (
            <div className="container">
                <div className="ing">
                    <IngredientList ingredients={this.state.possibleIngredients} onClick={this.handleClick}/>
                </div>
                <div className='bur'>
                    <BurgerPane burger={this.state.burger} clear={this.clearBurger} />
                </div>
            </div>
        )
    }
}

export default App

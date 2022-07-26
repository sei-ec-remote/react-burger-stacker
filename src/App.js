import React, {Component} from 'react'
import './App.css';
import IngredientList from './components/IngredientList';
import BurgerPane from './components/BurgerPane';


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

class App extends Component {
    state = {
        chosenIngredients: []
    }

    addIngredient = (event) => {
        const newIngredient = event.target.value
        const newColor = event.target.style.backgroundColor
        // console.log(`I heard something, it was ${newIngredient}`)
        // console.log(`this is the event target: ${event.target.value}`)
        // console.log(`this is the color: ${event.target.style.backgroundColor}`)
        const newStack = [{name: newIngredient, color: newColor}].concat(this.state.chosenIngredients)
        // console.log(newStack)
        this.setState(() => {
            return {
                chosenIngredients: newStack
            }
        })
    }

    clearBurger = () => {
        this.setState(() => {
            return {
                chosenIngredients: []
            }
        })
    }

    render() {
        return (
            <div className='App'>
                <div className='Ingredients'>
                    <IngredientList ingredients={ingredients} addIngredient={this.addIngredient}/>
                </div>
                <div className='Stack'>
                    <BurgerPane chosenIngredients={this.state.chosenIngredients} clearBurger={this.clearBurger}/>
                </div>
            </div>
        );
    }
}

export default App;

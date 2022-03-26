import React, {Component} from "react";
import IngredientsList from "./IngredientsList";
import BurgerPane from "./BurgerPane";

//burger stacker component is the parent of BurgerPane and IngredientList
//holds ingredients in state, so we can pass them as props
export default class BurgerStack extends Component {
    //state will hold ingredients
    constructor () {
        super () 
        this.state = {
            ingredients: [
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
            ] ,
            burgerIngredients: []
        }
    }
    //might want methods here to add ingredients, that will be passed
    //to a child component
    addToStack = (e) => {
        //console.log('this is what was clicked', e.target.style.backgroundColor)
        //name was accessed by innerText
        //console.log('this is what was clicked', e.target.innerText)
        //now that we can get the name and color
        //we can now set the state of the burger ingredients!
        const ingColor = e.target.style.backgroundColor
        const ingName = e.target.innerText
        this.setState({
            burgerIngredients: [
                { name: ingName, color: ingColor },
                //spread operator ... adding an ingredient to burger ingredients
                //second item in the array will be the rest of ingredients
                //essentially pushes it to the front of the array
                ...this.state.burgerIngredients
            ]
        })
    }
    //might want my clear function here, to pass down as a prop
    clearBurger = () => {
        this.setState({
            burgerIngredients: []
        })
    }
    render () {
        //console.log('ingredients list moved from app.js:', this.state.ingredients)
        console.log('burger ingredients', this.state.burgerIngredients)
        return (
            <>
                <h1>Burger Stacker</h1> 
                <div className="burger">
                <IngredientsList 
                    ingredients={this.state.ingredients}
                    addIngs={this.addToStack}
                    /> 
                <BurgerPane
                    ingredients={this.state.burgerIngredients}
                    clear={this.clearBurger}
                />
                </div>
            </> 
        )
    }
}
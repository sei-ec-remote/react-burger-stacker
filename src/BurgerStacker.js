import React, { Component } from "react";
import IngredientList from "./Components/IngredientList";
import MyBurger from "./Components/MyBurger";

export default class BurgerStacker extends Component{
    state = {
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
        ],
        theStack: []
    }

    addToStack = (e) => {
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor
        
        console.log(`clicked on ${ingName} and it is ${ingColor}`)
        this.setState({
            theStack: [
                { name: ingName, color: ingColor },
                ...this.state.theStack
            ]
        })
    }

    removeFromStack = (e) => {
        const clickIndex = e.target.id
        const currBurger = this.state.theStack.slice()
        console.log('the current burger(copy)', currBurger)
        currBurger.splice(clickIndex, 1)
        this.setState({
            theStack: currBurger
        })
    }

    tossBurger = () => {
        console.log('tossed')
        this.setState({
            theStack: []
        })
    }

    render(){
        return (
            <div>
                <h1>Burger Stacker</h1>
                <div className="dash"> 
                    <IngredientList 
                        ingredients={this.state.ingredients}
                        add={this.addToStack}/>
                    <MyBurger 
                        ing={this.state.theStack} 
                        remove={this.removeFromStack}
                        reset={this.tossBurger}/>
                </div>
            </div>
    )
    }

}

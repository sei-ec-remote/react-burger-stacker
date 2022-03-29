//import React, { Component } from 'react'
//not calling API so we don't need useEffect
import React, { useState } from 'react'

import IngredientList from '../components/IngredientList'
import BurgerPane from '../components/BurgerPane'


const BurgerStacker = (props) => {
    const [ingredients, setIngredients] = useState([

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
    ])
    const [burgerIngredients, setBurgerIngredients] = useState([])

//burger stacker component is the parent of BurgerPane
//and ingredientList
//holds ingredients in state, so we can pass them as props

//export default class BurgerStacker extends Component {
    //state will hold ingredients
    // constructor () {
    //     super()
    //     this.state = {
    //         ingredients: [

    //             {name: 'Kaiser Bun', color: 'saddlebrown'},
    //             {name: 'Sesame Bun', color: 'sandybrown'},
    //             {name: 'Gluten Free Bun', color: 'peru'},
    //             {name: 'Lettuce Wrap', color: 'olivedrab'},
    //             {name: 'Beef Patty', color: '#3F250B'},
    //             {name: 'Soy Patty', color: '#3F250B'},
    //             {name: 'Black Bean Patty', color: '#3F250B'},
    //             {name: 'Chicken Patty', color: 'burlywood'},
    //             {name: 'Lettuce', color: 'lawngreen'},
    //             {name: 'Tomato', color: 'tomato'},
    //             {name: 'Bacon', color: 'maroon'},
    //             {name: 'Onion', color: 'lightyellow'}
    //         ],
    //         burgerIngredients: []
    //     }
    // }

    //might want methods here to add ingredients, that willl be 
    //passed to a child component
    // const addToStack = (e) => {
    //     const ingColor = e.target.style.backgroundColor
    //     const ingName = e.target.innerText
    //     this.setState({
    //         burgerIngredients: [
    //             {name: ingName, color: ingColor},
    //             ...this.state.burgerIngredients
    //         ]
    //     })
    // }
    const addToStack = (e) => {
        const ingColor = e.target.style.backgroundColor
        const ingName = e.target.innerText
        setBurgerIngredients([{name: ingName, color:ingColor}, ...burgerIngredients])

        // this.setState({
        //     burgerIngredients: [
        //         {name: ingName, color: ingColor},
        //         ...this.state.burgerIngredients
        //     ]
        // })
        
    }
    // clearBurger = () => {
    //     this.setState({ 
    //         burgerIngredients: []
    //     })
    // }
    const clearBurger = () => {
       setBurgerIngredients([])
    }

    //might want my clear function here, to pass down as a 
    //prop
    // render () {
         //console.log('ingredients list', this.state.ingredients)
         //console.log('burger ingredients ', this.state.burgerIngredients)
         return (
            <>
            <h1>Burger Stacker</h1>
            <div className="panes">
                <IngredientList 
                    ingredients={ingredients}
                    //ingredients={this.state.ingredients}
                    add={addToStack}
                    //add={this.addToStack}
                />
                <BurgerPane
                    ingredients={burgerIngredients}
                    //ingredients={this.state.burgerIngredients}
                    clear={clearBurger}
                    //clear={this.clearBurger}
                />

             </div>
            </>
        )
    //}    
//}
}
export default BurgerStacker
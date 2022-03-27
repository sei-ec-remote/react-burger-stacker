import React, {Component} from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

export default class Burger extends Component {
    constructor() {
        super()
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
              ],
              burgerIngredients: []
        }
    }

    addToStack = (e) => {
        console.log("this is what was clicked", e.target)
        const ingColor = e.target.style.backgroundColor
        const ingName = e.target.innerText
        this.setState({
            burgerIngredients:[
                { name: ingName, color: ingColor },
                ...this.state.burgerIngredients
            ]
        })

    }


    clearBurger = () =>  {
        this.setState({
            burgerIngredients: []
        })

    }

    render() {
    console.log('these are the ingredients', this.state.ingredients)
    return (
    <> 
        <h1>burger stacker</h1>
        <div className='panes'>
        <IngredientList ingredients={this.state.ingredients}
                        addIngs={this.addToStack}
        />

        <BurgerPane ingredients={this.state.burgerIngredients }
                    clear={this.clearBurger}
                        
        />
        </div>
    </>
        )
    }
}
 

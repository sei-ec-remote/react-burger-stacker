import React, { Component } from 'react' 

import BurgerStack from './BurgerStack'
import IngredientList from './IngredientsList'
import ClearBurger from './ClearBurger'

class BurgerPane extends Component {

    state = ({
        burgerIngredients: []
    })

    addItem = (e) => {
        let value = e.target.value
        // Push ingredient into burger ingredients array
        this.setState(prevState => ({
            burgerIngredients: [...prevState.burgerIngredients, {name: {value}}]
        }))
    }

    render () {
        return (
            <div>
                <IngredientList ingredients={this.props.ingredients} addItem={this.addItem}/>
                <BurgerStack ingredients={this.state.burgerIngredients}/>
            </div>
        )
    }
}

export default BurgerPane
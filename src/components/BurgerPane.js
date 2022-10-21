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
            burgerIngredients: [...prevState.burgerIngredients, {value}]
        }))
    }

    clear = () => {
        this.state.burgerIngredients = []
    }

    render () {
        return (
            <>
                <IngredientList ingredients={this.props.ingredients} addItem={this.addItem}/>
                <BurgerStack ingredients={this.state.burgerIngredients}/>
                <button
                    onClick = {(e) => this.clear()}
                >Clear Burger</button>
            </>
        )
    }
}

export default BurgerPane
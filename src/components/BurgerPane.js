import React, { Component } from 'react' 

import BurgerStack from './BurgerStack'
import IngredientList from './IngredientsList'

class BurgerPane extends Component {

    state = ({
        burgerIngredients: []
    })

    addItem = (item) => {
        let newItems = [...this.state.burgerIngredients,item]
        this.setState(
            {burgerIngredients: newItems}
        )
    }

    clear = () => {
        this.setState(
            {burgerIngredients: []}
        )
    }

    render () {
        return (
            <>
                <div className="burger-screen">
                    <IngredientList ingredients={this.props.ingredients} addItem={this.addItem}/>
                    <BurgerStack ingredients={this.state.burgerIngredients}/>
                </div>

                <button
                    className = 'clear'
                    onClick = {this.clear}
                >Clear Burger</button>
            </>
        )
    }
}

export default BurgerPane
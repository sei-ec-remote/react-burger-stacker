import React, {Component} from 'react'
import IngredientList from './IngredientList'
import BurgerIngredients from './BurgerIngredients'

class BurgerStack extends Component {
    // state = {
    //     stack: []
    // }

    // addIngredient = (ingredient) => {
    //     this.setState((state, props) => {
    //         stack: state.unshift(ingredient)
    //     })        
    // }

    render() {

        return (
            <BurgerIngredients ingredients={this.props.ingredients}/>
            
        )
    }
}

export default BurgerStack
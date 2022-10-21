import React, {Component} from 'react'
import BurgerIngredients from './BurgerIngredients'

class BurgerStack extends Component {

    render() {

        return (
            <BurgerIngredients ingredients={this.props.ingredients}/>
            
        )
    }
}

export default BurgerStack
import React, {Component} from 'react'
import Ingredient from './Ingredient'

class BurgerPane extends Component {
    render() {
        const chosenIngredients = this.props.chosenIngredients.map((ingredient, index) => {
            return(
                <p style={{backgroundColor: ingredient.color}} key={index}>
                     <Ingredient name={ingredient.name} color={ingredient.color}/>
                </p>
            )
        })
        return(
            <>
                <h1>Here's your burger</h1>
                {chosenIngredients}
                <button onClick={this.props.clearBurger}>Clear Burger</button>
            </>
        )
    }
}

export default BurgerPane
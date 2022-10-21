import React, {Component} from 'react'

class BurgerIngredients extends Component {


    render() {
        const burger = this.props.ingredients.map((ingredient, ind) => (
            <div className='burger' key={ind} style={{backgroundColor: ingredient.color}}>{ingredient.name}</div>
        ))
        return (
            <>
            {burger}
            </>
        )
    }
}

export default BurgerIngredients
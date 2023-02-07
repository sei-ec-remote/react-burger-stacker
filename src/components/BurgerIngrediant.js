import React, { Component } from 'react'
import IngrediantContainer from './IngrediantContainer'

class BurgerIngrediant extends Component {
    render() {

        return (
            <>
                <div className="burgerIngrediant">
                    <li 
                        className="ingredientItem" 
                        key={this.props.index} 
                        onClick={this.props.remove}
                    >
                        <span className="ingrediantName">{this.props.ingrediant.name}</span>
                    </li>
                </div>
            </>
        )
    }
}

export default BurgerIngrediant
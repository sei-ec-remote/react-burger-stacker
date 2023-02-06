import React, { Component } from 'react'

class BurgerIngrediant extends Component {
    render() {

        return (
            <>
                <div className="burgerIngrediant">
                    <li className="ingredientItem" key={this.props.index}>
                        <span className="ingrediantName">{this.props.item}</span>
                    </li>
                </div>
            </>
        )
    }
}

export default BurgerIngrediant
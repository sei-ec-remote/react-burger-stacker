import React, { Component } from 'react'

class BurgerIngrediant extends Component {
    render() {

        return (
            <>
                <div className="burgerIngrediant">
                    <li className="ingredientItem" key={this.props.index}>
                        <span className="ingrediantName">{this.props.item}</span>
                        {/* <span className="ingrediantName">{this.props}</span> */}
                        {/* <span className="ingrediantName">{this.props.color}</span> */}
                        {/* <button className="button" id={this.props.index} onClick={this.addToStack}>Add</button> */}
                    </li>
                </div>
            </>
        )
    }
}

export default BurgerIngrediant
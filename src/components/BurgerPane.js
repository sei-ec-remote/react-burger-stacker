import React, {Component} from 'react'
import BurgerStack from './BurgerStack'

class BurgerPane extends Component {
    render() {
        return (
            <div className = "container">
                <BurgerStack ingredients={this.props.ingredients} />
                <button onClick={this.props.clearIngredient}>Clear Burger</button>
                <button onClick={this.props.removeLastIngredient}>Undo</button>
            </div>
        )
    }
}

export default BurgerPane
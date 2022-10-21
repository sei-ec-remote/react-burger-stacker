import React, {Component} from 'react'
import BurgerStack from './BurgerStack'

class BurgerPane extends Component {
    render() {
        return (
            <div>
                <BurgerStack ingredients={this.props.ingredients} />
                <button onClick={this.props.clearIngredient}>Clear Burger</button>
            </div>
        )
    }
}

export default BurgerPane
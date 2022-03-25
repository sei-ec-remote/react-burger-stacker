import React, {Component} from "react";
import BurgerStack from './BurgerStack'

export default class BurgerPane extends Component {
    render () {
        return (
            <div className="burger">
                <h1>Burger Stacking Area</h1>
                <BurgerStack/>
            </div>
        )
    }
}
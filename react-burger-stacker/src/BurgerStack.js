import React, {Component} from "react";


export default class BurgerStack extends Component {
    render () {
        return (
            <div className="burger-stack">
                <h1>Burger Stacker</h1>
                <button onClick="clear-burger">
                     Clear Burger
                    </button>        
            </div>
        )
    }
}
import React from "react"
import BurgerStack from "./BurgerStack"
import ClearBurger from "./ClearBurger"

class BurgerPane extends React.Component {


    render () {
        return (
            <div className="Card">
                <BurgerStack stack={this.props.stack}/>
                <h3>Burger Stacking Area</h3>
                <ClearBurger clearStack={this.props.clearStack}/>
            </div>
        )
    }
}

export default BurgerPane
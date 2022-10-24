import React from "react"
import BurgerStack from "./BurgerStack"
import ClearBurger from "./ClearBurger"

const BurgerPane = (props) => {

    return (
        <div className="Card">
            <BurgerStack stack={props.stack} removeItem={props.removeItem}/>
            <h3>Burger Stacking Area</h3>
            <ClearBurger clearStack={props.clearStack}/>
        </div>
    )

}

export default BurgerPane
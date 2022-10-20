import React from "react"
import Ingredient from "./Ingredient"

class BurgerStack extends React.Component {
    render () {
        const stack = this.props.stack
        let stackItems = stack.map((item, index) => (
            <Ingredient key={index} name={item.name} color={item.color} textColor={item.textColor} clickItem={() => {;}} />
        ))
        stackItems.reverse()
        
        return (
                <div id="Stack">
                    {stackItems}
                </div>
        )
    }
}

export default BurgerStack
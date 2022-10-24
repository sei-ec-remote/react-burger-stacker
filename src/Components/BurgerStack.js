import React from "react"
import Ingredient from "./Ingredient"

class BurgerStack extends React.Component {
    render () {
        const stack = this.props.stack
        let stackItems = stack.map((item, index) => {
            return <Ingredient key={index} index={index} name={item.name} color={item.color} textColor={item.textColor} clickItem={this.props.removeItem} /> 
        })
        
        return (
                <div id="Stack">
                    {stackItems}
                </div>
        )
    }
}

export default BurgerStack
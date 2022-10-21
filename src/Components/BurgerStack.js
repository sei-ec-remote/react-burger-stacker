import React from "react"
import Ingredient from "./Ingredient"

class BurgerStack extends React.Component {
    render () {
        const stack = this.props.stack
        let stackItems = stack.map((item, index) => {
            let clickFunc
            if (index === stack.length - 1) {
                clickFunc = this.props.removeItem
            } else {
                clickFunc = () => {;}
            }
            return <Ingredient key={index} name={item.name} color={item.color} textColor={item.textColor} clickItem={clickFunc} /> 
        })
        stackItems.reverse()
        
        return (
                <div id="Stack">
                    {stackItems}
                </div>
        )
    }
}

export default BurgerStack
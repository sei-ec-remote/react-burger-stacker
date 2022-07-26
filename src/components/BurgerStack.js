import React , { Component } from 'react'
import './BurgerStack.css'

class BurgerStack extends Component {
    
    render() {
        const white = 'white'
        const textShadow = '1px 1px 3px black'
        return (
            <div className="burger">
                <div className="one-ingredient" style={{backgroundColor: this.props.addedIngredient.color, color: white, textShadow: textShadow}}> 
                    {this.props.addedIngredient.name}
                </div>
            </div>
        );
    }
}
  
  export default BurgerStack;
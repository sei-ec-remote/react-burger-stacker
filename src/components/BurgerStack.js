import React , { Component } from 'react'
import './BurgerStack.css'

class BurgerStack extends Component {
    
    render() {
      return (
        <div className="burger">
            <div className="one-ingredient"> 
                {this.props.addedIngredient.name}
            </div>
        </div>
      );
    }
}
  
  export default BurgerStack;
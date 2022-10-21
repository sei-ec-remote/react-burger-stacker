import React, { Component } from 'react'
import BurgerStack from './BurgerStack'

class BurgerPane extends Component {
    
    render() { 
        return(
            <>
                <BurgerStack ingredients={this.props.ingredients} clearStack={this.props.clearStack} removeFromStack={this.props.removeFromStack}/>
            </>
        )
    }
}

export default BurgerPane
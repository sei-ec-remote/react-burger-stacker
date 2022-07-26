import React, { Component } from 'react'
import App from './App.js'
import BurgerContainer from './BurgerContainer.js'
import BurgerStack from './BurgerStack.js'

class Ingredients extends Component{
    state = {
        hello: ' world'
    }

    
    render () {

        return (
            <>
            {this.state.hello}
            </>
        )
    }
}







export default Ingredients
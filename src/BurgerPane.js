// I want to import React and Component
import React, { Component } from 'react' 
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

class BurgerPane extends Component {
    render () {
        return (
            <>
                <BurgerStack />
                <ClearBurger />
            </>
        )
    }
}

export default BurgerPane
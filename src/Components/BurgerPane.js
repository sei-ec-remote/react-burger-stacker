import React, {Component} from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

// As a user, I want to see all available burger ingredients listed on the left side.
// I want the ability to add any ingredient onto the burger stack using a button.
// I want to see each ingredient I select added to the top of the burger stack on the right side.


class BurgerPane extends Component{
   
    render(){
        return(
            <>
            <BurgerStack />
            <ClearBurger />
            </>
        )
    }
}

export default BurgerPane
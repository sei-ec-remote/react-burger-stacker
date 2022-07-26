import React, { Component } from 'react'
import Ingredient from './Inrgedient'
import ClearBurger from './ClearBurger';

class BurgerPane extends Component {
    
    render() {
        // map over all the added burger bits
        // still going to use the ingredient comp
        
        let allBurgerItems = this.props.burgerItems.map((ing, i) => (
             <li key={i}>
                <Ingredient 
                    itemKey={i}
                    ingredient={ing}
                    clickFunc={this.props.remove}
                />
            </li>
        )
        )
        
        return (
            <section>
               <h3>Burger Pane</h3>
               <ul>
                    {allBurgerItems}
               </ul>
               <ClearBurger clear={this.props.clear}/>  
            </section>
        )
    }
}

export default BurgerPane
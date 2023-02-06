import React, { Component } from 'react'

import BurgerContainer from './BurgerContainer'
import IngrediantContainer from './IngrediantContainer'


class Container extends Component {
    
    state = {
        myState: 'This is my current state',

        burgerStack: ['item', 'item2']
    } 

    render () {

        const list = [

            {name: 'Kaiser Bun', color: 'saddlebrown'},
            {name: 'Sesame Bun', color: 'sandybrown'},
            {name: 'Gluten Free Bun', color: 'peru'},
            {name: 'Lettuce Wrap', color: 'olivedrab'},
            {name: 'Beef Patty', color: '#3F250B'},
            {name: 'Soy Patty', color: '#3F250B'},
            {name: 'Black Bean Patty', color: '#3F250B'},
            {name: 'Chicken Patty', color: 'burlywood'},
            {name: 'Lettuce', color: 'lawngreen'},
            {name: 'Tomato', color: 'tomato'},
            {name: 'Bacon', color: 'maroon'},
            {name: 'Onion', color: 'lightyellow'}
        
        ]

        return (
            <> 
                <IngrediantContainer data={this.state} list={list}/>
                <BurgerContainer data={this.state} /> 
            </>
        )
    }
}

export default Container
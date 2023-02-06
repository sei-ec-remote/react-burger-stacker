import React, { Component } from 'react';

import IngrediantItem from './IngrediantItem'

class IngrediantContainer extends Component {

    render() {

        // return every item in the given list, map it into its own list item
        let myList = this.props.list.map((item, index) => {
            
            return <IngrediantItem 
                data={this.state} 
                name={item.name} 
                color={item.color} 
                onClick={this.addToStack} 
                key={index} 
                index={index}
            />
        })

        return(
            <>
                <div className="container burgerContainer">
                    <h2>Ingrediants</h2>
                    <ul>
                        { myList }
                    </ul>
                </div>
            </>
        )
    }
}

export default IngrediantContainer
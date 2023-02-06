import React, { Component } from 'react';

import IngrediantItem from './IngrediantItem'

class IngrediantContainer extends Component {

    render() {
        // return every item in the given list, map it into its own list item
        let allIngrediants = this.props.ingrediants.map((ing, i) => (
            
            <IngrediantItem 
                        // data={this.state} 
                        name={ing.name} 
                        color={ing.color} 
                        onClick={this.props.addToStack} 
                        key={i} 
                        index={i}
                        ingrediant={ing}
                        clickFunc={this.props.add}
                    />
        ))

        return(
            <>
                <div className="container burgerContainer">
                    <h2>Ingrediants</h2>
                    <ul>
                        { allIngrediants }
                    </ul>
                </div>
            </>
        )
    }
}

export default IngrediantContainer
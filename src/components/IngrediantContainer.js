import React, { Component } from 'react';

import IngrediantItem from './IngrediantItem'

class IngrediantContainer extends Component {
    render() {
        let myList = this.props.list.map((item, index) => {
            
            // console.log(item.name)
            // console.log(item.color)
            // console.log(index)

            return <IngrediantItem name={item.name} color={item.color} key={index} index={index}/>
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
import React, { Component } from 'react';

import IngrediantItem from './IngrediantItem'

class IngrediantContainer extends Component {

    render() {
        let myList = this.props.list.map((item, index) => {
            
            return <IngrediantItem data={this.state} name={item.name} color={item.color} onClick={this.handleClick} key={index} index={index}/>
        })
        return(
            <>
            <div className="container burgerContainer">
                <h2>Ingrediants</h2>
                {/* <button className="button" onClick={this.handleClick}>Add</button> */}
                <span>{this.props.data.myState}</span>
                <span>Burger Stack: {this.props.data.burgerStack}</span>
                {/* <span>{this.state.myState}</span> */}
                <ul>
                    { myList }
                </ul>
            </div>
            </>
        )
    }
}

export default IngrediantContainer
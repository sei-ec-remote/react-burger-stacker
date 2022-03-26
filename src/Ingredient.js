    import React, { Component } from 'react'


export default class Ingredient extends Component {
    render() {
        const {name,color} = this.props.ingredient
        // console.log('name of ingred' ,name)
        // console.log('color of ingred' ,color)
        return(
            <p 
                style={{backgroundColor:color}}
                id={this.props.itemKey}
                onClick={this.props.clickFunc}
                >
                {name}
            </p>
        )
    }
}
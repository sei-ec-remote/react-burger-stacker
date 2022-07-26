import React, { Component } from 'react'

class Ingredients extends Component {
    render () {
        const { name, color } = this.props.ingredient
        
        return (
            <>
                <h3
                    style={{backgroundColor: color}}
                    id={this.props.ingredientKey}
                    onClick={this.props.click}
                    >
                        {name}
                </h3>        
            </>
        )
    }
}

export default Ingredients
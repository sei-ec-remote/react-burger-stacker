import React, {Component} from 'react'


class Ingredients extends Component {
    render () {
        // I want to render a background color
        // I want to render a name of a ingredient
        // if there is a key with this 'name' extract it
        const { name, color } = this.props.ingredient
        return (
            <p 
            style={{backgroundColor: color}}
            onClick={this.props.clickFunction}
            id={this.props.itemKey}
            >
                {name}
            </p>
        )
    }
}

export default Ingredients
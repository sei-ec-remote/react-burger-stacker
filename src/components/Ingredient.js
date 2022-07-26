import React, {Component} from 'react'

class Ingredient extends Component {
    render() {
        return(
            <>
                {this.props.name}
            </>
        )
    }
}

export default Ingredient
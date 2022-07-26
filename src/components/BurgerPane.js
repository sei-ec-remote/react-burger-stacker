import React, { Component } from "react"


class BurgerPane extends Component {
    state = {
        ingredientsToDisplay: this.props.ingredients
    }

    render() {

        return(
            <>
                <h1>Ingredients List:</h1>
                {this.state.ingredientsToDisplay[0].name}
            </>
        )
    }
}


export default BurgerPane
import React from "react"

class ClearBurger extends React.Component {
    render () {
        return (
          <>
            <button onClick={this.props.clearStack}>Clear</button>
          </>  
        )
    }
}

export default ClearBurger
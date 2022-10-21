import React from "react"

class Ingredient extends React.Component {
    render () {
        const Style = {
           background: this.props.color,
           color: this.props.textColor
        }
        return (
            <div className="Ingredient" style={Style} onClick={() => this.props.clickItem(this.props.name, this.props.color, this.props.textColor, this.props.index)}>
                <h5>{this.props.name}</h5>
            </div>
        )
    }
}

export default Ingredient
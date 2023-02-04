import React, { Component } from 'react'

class Ingredients extends Component {
    render() {
        const ingredients = this.props.ingredients.map((item, index) => {
            return (
                <form key={index}>
                    <button type="submit" value={JSON.stringify(item)} onClick={this.props.onClick} style={{backgroundColor: `${item.color}`}}>{item.name}</button>
                </form>
            )
        })

        return (
            <div>
                {ingredients}
            </div>
        )
    }
}

export default Ingredients
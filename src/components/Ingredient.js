import React, { Component } from 'react'


class Ingredient extends Component {
    render () {
        const ingredients = this.props.ingredients.map((item, index) => {
            return (
                <form key={index}>
                    <button type="submit" value={JSON.stringify(item)}>{item.name}</button>
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


export default Ingredient
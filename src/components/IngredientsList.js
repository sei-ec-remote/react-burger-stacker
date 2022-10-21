import React, { Component } from 'react' 

class IngredientList extends Component {
    render () {
        const allIngs = this.props.ingredients.map(item => {
            return(
                <button 
                    value = {item}
                    onClick = {this.props.addItem}
                >{item.name}</button>

                // <h1>{items.name}</h1>
                )

        })
        return (
            <div className = "ingredients"> 
                {allIngs} 
                {/* {this.props.ingredients[0].name} */}
            </div>
        )
    }
}

export default IngredientList
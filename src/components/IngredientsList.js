import React, { Component } from 'react' 

class IngredientList extends Component {
    render () {
        const allIngs = this.props.ingredients.map(item => {
            return(
                <button 
                    key={item.name}
                    onClick={(e) => this.props.addItem(e.target.textContent)}
                >{item.name}</button>

                )

        })
        return (
            <div className = "ingredients"> 
                {allIngs} 
            </div>
        )
    }
}

export default IngredientList
import React, { Component } from 'react' 

class IngredientList extends Component {
    render () {
        const allIngs = this.props.ingredients.map(items => {
            // <button 
            //     onClick = {this.props.addItem}
            // >{items.name}</button>

            <h1>{items.name}</h1>
            console.log(items.name)
        })
        return (
            <> 
                {allIngs} 
                {/* {this.props.ingredients[0].name} */}
            
            
            </>
        )
    }
}

export default IngredientList
import React, { Component } from 'react';


class Ingredients extends Component {

    render() {
       const ingredientItems = this.props.Ingredients.map(ingredient => 
            
             <ul><button onClick={(e)=> this.props.addItem(e)} key={ingredient}>{ingredient.name}</button></ul>)
                
                
        // console.log(this.props.ingredients)
        return (
            <>
            <div className="pane">
                <h1 className="section-title">Ingredients</h1>
                <ul>{ingredientItems}</ul>
             </div>
             </> 
        )
    }
}

export default Ingredients




import React, { Component } from 'react';


class Ingredients extends Component {

    render() {
       const ingredientItems = this.props.ingredients.map(ingredient => 
            
             <ul><button onClick={(event)=> this.props.addItem(event)} key={ingredient}>{ingredient.name}</button></ul>)
                
                
        // console.log(this.props.ingredients)
        return (
            <>
            <div className="Ingredients">
                <h1 className="section-title">Ingredients</h1>
                <ul>{ingredientItems}</ul>
             </div>
             </> 
        )
    }
}

export default Ingredients




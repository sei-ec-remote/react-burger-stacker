import React, {Component} from 'react';
//ingredient is a child of Ingredient List
//receives the props of an individual ingredient -> color and name

export default class Ingredients extends Component {
    render () {
        //use destructuring on props...
        //console log them to see them seperated!
        const { name, color} = this.props.ingredients
        //console.log('these are my this.props names', name)
        //console.log('these are my props colors', color)
        return (
            //<p>{this.props.ingredients.name}</p> original way before we destructured them!
            //we are calling the itemKey={i} from IngredientsList here in the Ingredients now
            <p 
                style={{backgroundColor: color}}
                id={this.props.itemKey}
                onClick={this.props.clickFunc}
            >
                {name}
            </p>
            
        )
    }
  
}
import React from "react";

const Ingredients = (props) => {
    
        const {name, color} = this.props.ingredient
        
        return (
            <p 
            style={{backgroundColor: color }} 
            id={this.props.itemKey}
            onClick={this.props.clickFunc}
            > 
            {name} 
            </p>
        )
    
}

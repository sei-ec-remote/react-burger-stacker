import React, {Component} from 'react'

//list of ingredients

class Ingredients extends Component{

    render(){
        const ingredients = this.props.ingredients.map((ingredient, index)=>{
            return <li key={index}>{ingredient}</li>
        })
        return(
            <>
            <ul>
                {ingredients}
            </ul>
            </>
        )
    }
}

export default Ingredients
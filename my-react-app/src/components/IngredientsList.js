import React, {Component} from 'react'
import Ingredients from './Ingredients';

class IngredientsList extends Component {
    // state = {
    //     items: this.props.ingredients
    // }

    render() {

        console.log(this.props.ingredients)
        return(
            <div>
                {/* Transforming the ingredients into components */}
                {this.props.ingredients.map((ingredient) => {
                    
                    //passed ingredient into the ingredient component
                    return <Ingredients ingredient = {ingredient}/>
                })}

            </div>
        ) 
    }

}

   















export default IngredientsList
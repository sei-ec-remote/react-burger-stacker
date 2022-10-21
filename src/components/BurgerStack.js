import React, {Component} from 'react'
// import IngredientList from './IngredientList'
// import Ingredient from  './Ingredient'

class BurgerStack extends Component {
    render(){
        const allBurgerItems = this.props.burgerItems.map((item, index) => <div key= {index}>{item}</div>)
        return(
            <>
            <div flexDirection='row'>
                {allBurgerItems}
            </div>
            </>
        )
    }
}

export default BurgerStack
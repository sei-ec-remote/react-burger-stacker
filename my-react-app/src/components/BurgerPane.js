import React, {Component} from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';
import IngredientsList from './IngredientsList';


class BurgerPane extends Component {
    state = {
    platedItems: []
}

// addItem = (item) => {
//     let newItems = [...this.state.platedItems, item]
//     console.log("new items here", newItems)
//     this.setState(
//         {plateItems: newItems}

//     )
// }
render(){
    console.log(this.props.ingredients)
     return(
            <>
                <IngredientsList ingredients={this.props.ingredients} />
                    <div className= 'burger-pane'>
                         Ready for ingredients
                    <div className='plate'> {this.state.platedItems}</div>
                </div>
             </>
        )
    }

}

export default BurgerPane









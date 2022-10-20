import React, {Component} from "react";
import BurgerStacker from "./BurgerStacker";
import IngredientsList from "./IngredientsList";

class BurgerPane extends Component {

    state = {
        platedItems: []
    }


    addItem = (item) => {
   
        let newItems = [...this.state.platedItems,item]

        this.setState(
            {platedItems: newItems}
            
        )
    }

    render(){
        return(
            <>
            <IngredientsList ingredients={this.props.ingredients} addItem={this.addItem}/>
                <div className='burger-pane'>
                    Ready for ingredients
                    <div className="plate"> {this.state.platedItems}</div>
                </div>

            </>
        )
    }
}

export default BurgerPane
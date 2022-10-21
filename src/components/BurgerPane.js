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
    removeItems = () => {
        this.setState(
            {platedItems: []}
        )
    }
    render(){
        return(
            <>
                <h1>BYOBurger</h1>
                <div className="burgerbuilder">

                    <IngredientsList className="ingredients-list" ingredients={this.props.ingredients} addItem={this.addItem}/>
                        
                    <BurgerStacker platedItems={this.state.platedItems}/>
                    <button onClick={this.removeItems}>Clear the plate</button>
                </div>
            </>
        )
    }
}

export default BurgerPane
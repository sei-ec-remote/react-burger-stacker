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
                <IngredientsList ingredients={this.props.ingredients} addItem={this.addItem}/>
                    <button onClick={this.removeItems}>Clear the plate</button>
                <BurgerStacker platedItems={this.state.platedItems}/>

            </>
        )
    }
}

export default BurgerPane
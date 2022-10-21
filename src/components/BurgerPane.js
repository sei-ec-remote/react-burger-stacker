import React,{ Component } from "react"
import IngredientList from './IngredientList'
import BurgerStacker from "./BurgerStacker"

class BurgerPane extends Component {
    state = {
        burgerItems: []
    }
    
    addItem =(item) => {
        let newItems = [...this.state.platedItems,newItems]
        this.setState(
            {platedItems: newItems}
        )
    }
    removeItems =() => {
        this.setState(
            {platedItems: []}
        )
    }  
    render(){
        return(
            <>
            <IngredientList ingredients={this.props.ingredients}
            addItem={this.additem}/>
                <button onClick={this.removeItems}>Clear the Plate</button>
                <BurgerStacker platedItems={this.state.platedItems}/>
            </>
        )
    }
}

export default BurgerPane


import React,{ Component } from "react"
import IngredientList from './IngredientList'
import BurgerStack from "./BurgerStack"
import Ingredient from "./Ingredient"

class BurgerPane extends Component {
    state = {
        burgerItems: []
    }
    
    addItem =(item) => {
        let newItems = [...this.state.burgerItems,item]
        this.setState(
            {burgerItems: newItems}
        )
    }
    removeItems =() => {
        this.setState(
            {burgerItems: []}
        )
    }  
    render(){
        return(
            <>
            <div className = 'builder'>
                <IngredientList ingredients={this.props.ingredients}
                addItem={this.additem}/>
                <h3 className='stackArea'>Burger Stacking Area</h3>
                <button className = 'clearButton'onClick={this.removeItems}>Clear </button>
                <BurgerStack burgerItems={this.state.burgerItems}/>
            </div>
            </>
        )
    }
}

export default BurgerPane


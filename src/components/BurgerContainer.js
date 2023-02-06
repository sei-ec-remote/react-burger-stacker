import { Component } from "react";
import BurgerIngrediant from './BurgerIngrediant' 

import IngrediantItem from "./IngrediantItem";

class BurgerContainer extends Component {

    // needs to be at the parent level

    // clearStack = () => {
    //     this.setState({
    //         burgerStack: []
    //     }, () => console.log('inside setState', this.state))
    // }
    
    render() {
        let myStackList = this.props.ingrediants.map((ing, i) => {
            
            return <BurgerIngrediant 
                        ingrediant={ing} 
                        onClick={this.props.removeFromStack} 
                        key={i} />
        })
        return(
            <div className="container">
                <h2>Burger Stack</h2>
                <div className="burgerStackArea">
                    { myStackList }
                </div>
                <div className="button clear" onClick={this.clearStack}>Clear Stack</div>
                <button onClick={this.clearBurger}></button>
            </div>
        )
    }
}

export default BurgerContainer
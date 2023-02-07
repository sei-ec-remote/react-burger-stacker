import { Component } from "react";
import BurgerIngrediant from './BurgerIngrediant' 

import IngrediantItem from "./IngrediantItem";

class BurgerContainer extends Component {

    // for our app, functions changing state needs to be at the parent level
    
    render() {
        let myStackList = this.props.ingrediants.map((ing, i) => {
            
            return <BurgerIngrediant 
                        ingrediant={ing}
                        clear={this.props.clear}
                        remove={this.props.remove} 
                        // onClick={this.props.removeFromStack} 
                        key={i} />
        })
        return(
            <div className="container">
                <h2>Burger Stack</h2>
                <div className="burgerStackArea">
                    { myStackList }
                </div>
                <button className="button clear" onClick={this.props.clear}>Clear Burger</button>
            </div>
        )
    }
}

export default BurgerContainer
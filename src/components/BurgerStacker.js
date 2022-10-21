import React, {Component} from "react";
import IngredientsList from "./IngredientsList"

class BurgerStacker extends Component{
    
    render(){
        const itemDivs = this.props.platedItems.map((item, index) => <div key={index}>{item}</div>)
        return(
            <>
              <div className="plate">
                {itemDivs}
              </div>
            </>
        )
    }


}

export default BurgerStacker
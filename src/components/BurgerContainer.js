import { Component } from "react";
import BurgerIngrediant from './BurgerIngrediant'

class BurgerContainer extends Component {
    render() {
        

        return(
            <div className="container">
                <h2>Burger Stack</h2>
                <div className="burgerStackArea">
                {/* <BurgerIngrediant /> */}
                </div>
                <div className="button clear">Clear Stack</div>
            </div>
        )
    }
}

export default BurgerContainer
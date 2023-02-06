import { Component } from "react";
import BurgerIngrediant from './BurgerIngrediant'

class BurgerContainer extends Component {
    
    render() {
        let myStackList = this.props.data.burgerStack.map((item, index) => {
            
            return <BurgerIngrediant item={item} onClick={this.handleClick} key={index} />
        })
        return(
            <div className="container">
                <h2>Burger Stack</h2>
                <div className="burgerStackArea">
                    <span>{this.props.data.myState}</span>
                    <span>Burger Stack: {this.props.data.burgerStack}</span>
                    { myStackList }
                </div>
                <div className="button clear">Clear Stack</div>
            </div>
        )
    }
}

export default BurgerContainer
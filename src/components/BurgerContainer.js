import { Component } from "react";
import BurgerIngrediant from './BurgerIngrediant'

class BurgerContainer extends Component {

    clearStack = () => {
        this.setState({
            burgerStack: []
        }, () => console.log('inside setState', this.state))
    }
    
    render() {
        let myStackList = this.props.data.burgerStack.map((item, index) => {
            
            return <BurgerIngrediant item={item} onClick={this.handleClick} key={index} />
        })
        return(
            <div className="container">
                <h2>Burger Stack</h2>
                <div className="burgerStackArea">
                    { myStackList }
                </div>
                <div className="button clear" onClick={this.clearStack}>Clear Stack</div>
            </div>
        )
    }
}

export default BurgerContainer
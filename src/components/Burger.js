import React, {Component} from 'react';
import Ingredients from './Ingredients';
// import ClearBurger from './ClearBurger';
import BurgerPane from './BurgerPane';
class Burger extends Component {

    state = {
        burgerItems:[]
    }

    addItem = (item) => {
        console.log(item)
        this.setState(
            (prevState => ({
            burgerItems: [...prevState.burgerItems, item.target.textContent]
         }))
        )
        
       
        
    }
clearBurger = () => {
    this.setState({burgerItems: []
    })
}
    render() {
        
        const allBurgerItems = this.state.burgerItems.map((item) => {
             return <div><h1>{item}</h1></div>
        })
            return (
                <>
                <h1>Burger Stacker</h1>
                {/* <BurgerPane /> */}
            <div className= 'panes'>
                <Ingredients Ingredients={this.props.ingredients} addItem={this.addItem}/>
                {allBurgerItems}
             </div>
             <button className="burger-btn" onClick={this.clearBurger}>Clear<br></br>Burger</button>
             </>
        )  
         
    }
}

export default Burger
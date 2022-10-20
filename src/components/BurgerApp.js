import React, { Component } from 'react'
import IngredientList from './IngredientList'

class BurgerApp extends Component {
    state = {
        platedItems: []
    }

    addItem = (e) => {
        console.log('click', e.target)
        this.setState(
           (prevState => ({
            platedItems: [...prevState.platedItems, e.target.textContent]
           })) 
        )
    }

    clearBurger = () => {
        console.log('click')
        this.setState({
            platedItems: []
        })
    }

    render(){


        const burgerItems = this.state.platedItems.map((item) => {
            console.log(item, 'this is burger item')
            return <div>{item}</div>
        })
        return(
            <>
            <h1>Build a Burger</h1>
            <div className="burger-container">
                <div className="ingredients">
                    <IngredientList ingredients={this.props.ingredients} addItem={this.addItem}/>
                </div>
                <div className="plate">
                    {burgerItems}
                </div>
                <button className="burger-btn" onClick={this.clearBurger}>Clear<br></br>Burger</button>
            </div>
            
            </>
        )
    }
}

export default BurgerApp

// onClick={(e) => this.props.addItem(e.target.value)}
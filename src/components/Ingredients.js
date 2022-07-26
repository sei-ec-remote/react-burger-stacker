import React, { Component} from "react";

const newArray = []

class Ingredients extends Component {

    state = {

        burgerArray: newArray,
        moodPoints: 1
    }
    addBurger = (e) => {
        this.setState((prevState) => {
            console.log(prevState)
            console.log('target', e.target.parentElement.id)
            console.log('burgerArray', newArray)
            return {
                moodPoints: prevState.moodPoints + 1,
                burgerArray: prevState.burgerArray = newArray.push(e.target.parentElement.id)
            }
        })
    }
    render () {
        // .map will always pass our callback function the item ('fruit') then the index ('idx')
        const ingredientItems = this.props.ingredients.map((ingredient, idx) => {
            return <li id={ingredient.color} key={idx}>{ingredient.name}<button data={this.props.burgerArray} onClick={this.addBurger}>></button></li>
        })
        // const burgerItems = this.state.burgerArray.map((burger, idx) => {
        //     return <li  key={idx}>{burger}</li>
        // })
        // const arrayData = this.props.burgerArray
        // {arrayData}
        return (
            <><div id="boxOne">
                <ul>{ingredientItems}</ul>
            </div>
            {/* <div id="boxTwo">
                    <ul>{burgerItems}</ul>
                </div> */}
                </>
        )
    }
}

export default Ingredients